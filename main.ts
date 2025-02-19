import {
  App,
  Editor,
  MarkdownView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TFile,
} from "obsidian";
import {
  createWorker,
  createScheduler,
  Scheduler,
  Worker,
  PSM,
} from "tesseract.js";

interface NotecapSettings {
  minimumTagConfidence: number;
  enableAutoBacklinks: boolean;
  language: string;
  llmProvider: "openai" | "anthropic" | "none";
  openaiApiKey: string;
  anthropicApiKey: string;
  useVisionForOcr: boolean;
  enhanceWithLlm: boolean;
  tagSuggestions: boolean;
  summarizeContent: boolean;
  maxTokens: number;
}

const DEFAULT_SETTINGS: NotecapSettings = {
  minimumTagConfidence: 0.7,
  enableAutoBacklinks: true,
  language: "eng",
  llmProvider: "none",
  openaiApiKey: "",
  anthropicApiKey: "",
  useVisionForOcr: false,
  enhanceWithLlm: false,
  tagSuggestions: true,
  summarizeContent: false,
  maxTokens: 1000,
};

interface LLMResponse {
  text: string;
  tags?: string[];
  summary?: string;
  confidence: number;
}

export default class NoteCap extends Plugin {
  settings: NotecapSettings;
  scheduler: Scheduler | null = null;
  worker: Worker | null = null;
  isInitialized = false;

  async onload() {
    console.log("Loading NoteCap plugin");

    try {
      await this.loadSettings();

      // Only initialize Tesseract if we're not using vision-only mode
      if (!this.settings.useVisionForOcr) {
        await this.setupOCR();
      }

      // Add ribbon icon for taking/uploading photo
      this.addRibbonIcon(
        "camera",
        "NoteCap: Capture Notes",
        (evt: MouseEvent) => {
          if (!this.settings.useVisionForOcr && !this.isInitialized) {
            new Notice("OCR engine is still initializing. Please wait.");
            return;
          }
          new ImageUploadModal(this.app, this).open();
        }
      );

      // Add settings tab
      this.addSettingTab(new NoteCapSettingTab(this.app, this));

      // Register handler for processing images
      this.registerEvent(
        this.app.vault.on("create", async (file: TFile) => {
          if (
            file.extension === "png" ||
            file.extension === "jpg" ||
            file.extension === "jpeg" ||
            file.extension === "heic"
          ) {
            await this.processImage(file);
          }
        })
      );

      console.log("NoteCap plugin loaded successfully");
    } catch (error) {
      console.error("Error loading NoteCap plugin:", error);
      new Notice(`Failed to load plugin: ${error.message || "Unknown error"}`);
    }
  }

  async onunload() {
    console.log("Unloading NoteCap plugin");
    if (this.worker) {
      await this.worker.terminate();
    }
    if (this.scheduler) {
      await this.scheduler.terminate();
    }
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async setupOCR() {
    try {
      console.log("Setting up OCR...");
      new Notice("Initializing OCR engine...");

      // Create a scheduler and worker with specific configuration
      this.scheduler = createScheduler();
      this.worker = await createWorker({
        logger: (m) => console.log("Tesseract:", m),
        errorHandler: (err) => console.error("Tesseract error:", err),
      });

      // Initialize with specific configuration for handwriting
      await this.worker.loadLanguage(this.settings.language);
      await this.worker.initialize(this.settings.language);

      // Set parameters specifically for handwriting
      await this.worker.setParameters({
        tessedit_char_whitelist:
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,'\"-;:!? ",
        tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
        preserve_interword_spaces: "1",
      });

      this.scheduler.addWorker(this.worker);

      this.isInitialized = true;
      console.log("OCR setup complete with handwriting optimization");
      new Notice("OCR engine ready!");
    } catch (error) {
      console.error("OCR setup error:", error);
      this.isInitialized = false;
      throw new Error(`OCR initialization failed: ${error.message}`);
    }
  }

  async processImage(file: TFile) {
    try {
      new Notice("Starting image processing...");

      // 1. Add debug logging
      console.log("Processing image:", file.path);

      let extractedText = "";
      let tags: string[] = [];
      let summary = "";

      // 2. Read image file with proper error handling
      const imageData = await this.app.vault.readBinary(file);
      if (!imageData || imageData.byteLength === 0) {
        throw new Error("Image file is empty or couldn't be read");
      }
      console.log("Image data loaded, size:", imageData.byteLength);

      // 3. Convert to base64 with verification
      const base64Image = await this.convertToBase64(imageData);
      if (!base64Image || !base64Image.startsWith("data:image")) {
        throw new Error("Invalid base64 image conversion");
      }
      console.log("Image converted to base64");

      // 4. Process with selected method
      if (
        this.settings.useVisionForOcr &&
        (!this.settings.llmProvider || this.settings.llmProvider === "none")
      ) {
        new Notice(
          "Vision OCR requires an LLM provider. Please configure one in settings."
        );
        return false;
      }
      if (this.settings.useVisionForOcr) {
        if (
          !this.settings.llmProvider ||
          this.settings.llmProvider === "none"
        ) {
          throw new Error("Vision OCR selected but no LLM provider configured");
        }
        console.log(
          "Using Vision API with provider:",
          this.settings.llmProvider
        );
        const visionResult = await this.processWithVisionAPI(base64Image);
        extractedText = visionResult.text;
        tags = visionResult.tags || [];
        summary = visionResult.summary || "";
      } else {
        if (!this.isInitialized || !this.scheduler) {
          throw new Error("Tesseract OCR not initialized");
        }
        console.log("Using Tesseract OCR");
        extractedText = await this.processWithTesseract(base64Image);

        if (
          this.settings.enhanceWithLlm &&
          this.settings.llmProvider !== "none"
        ) {
          const enhanced = await this.enhanceWithLLM(extractedText);
          extractedText = enhanced.text;
          tags = enhanced.tags || [];
          summary = enhanced.summary || "";
        } else {
          tags = await this.generateTags(extractedText);
        }
      }

      // 5. Verify extracted content
      if (!extractedText.trim()) {
        throw new Error("No text was extracted from the image");
      }
      console.log("Extracted text length:", extractedText.length);

      // 6. Create note content with proper formatting
      let noteContent = `# ${file.basename}\n\n`;
      noteContent += extractedText.trim();

      if (this.settings.summarizeContent && summary) {
        noteContent += `\n\n## Summary\n${summary.trim()}`;
      }

      if (tags.length > 0) {
        noteContent += `\n\n## Tags\n${tags.map((tag) => `#${tag}`).join(" ")}`;
      }

      if (this.settings.enableAutoBacklinks) {
        const backlinks = await this.findRelatedNotes(extractedText);
        if (backlinks.length > 0) {
          noteContent += `\n\n## Related Notes\n${backlinks
            .map((note) => `[[${note}]]`)
            .join("\n")}`;
        }
      }

      // 7. Create note with proper path and error handling
      const notePath = `${file.parent ? file.parent.path + "/" : ""}${
        file.basename
      }.md`;
      console.log("Creating note at path:", notePath);

      const existingFile = this.app.vault.getAbstractFileByPath(notePath);
      if (existingFile) {
        await this.app.vault.delete(existingFile);
      }

      await this.app.vault.create(notePath, noteContent);
      new Notice("Successfully processed handwritten note!");

      // Optional: Open the new note
      const newFile = this.app.vault.getAbstractFileByPath(notePath);
      if (newFile instanceof TFile) {
        await this.app.workspace.getLeaf().openFile(newFile);
      }
    } catch (error) {
      console.error("Image processing error:", error);
      new Notice(
        `Failed to process image: ${error.message || "Unknown error"}`
      );
      throw error; // Re-throw to ensure calling code knows about the failure
    }
  }

  private async processWithTesseract(base64Image: string): Promise<string> {
    if (!this.scheduler) {
      throw new Error("OCR engine not initialized");
    }

    // Try different PSM modes
    const psmModes = [PSM.SINGLE_BLOCK, PSM.SINGLE_LINE, PSM.SPARSE_TEXT];
    let bestResult = "";
    let maxWordCount = 0;

    for (const mode of psmModes) {
      try {
        await this.worker?.setParameters({
          tessedit_char_whitelist:
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,'\"-;:!? ",
          tessedit_pageseg_mode: mode,
          preserve_interword_spaces: "1",
        });

        const { data } = await this.scheduler.addJob("recognize", base64Image);
        const text = data.text.trim();
        const wordCount = text.split(/\s+/).length;

        if (wordCount > maxWordCount) {
          maxWordCount = wordCount;
          bestResult = text;
        }
      } catch (error) {
        console.error(`OCR attempt with PSM ${mode} failed:`, error);
      }
    }

    return this.cleanupText(bestResult);
  }

  private async processWithVisionAPI(
    base64Image: string
  ): Promise<LLMResponse> {
    if (this.settings.llmProvider === "openai") {
      return this.processWithGPT4Vision(base64Image);
    } else if (this.settings.llmProvider === "anthropic") {
      return this.processWithClaude3(base64Image);
    }
    throw new Error("No vision API provider configured");
  }

  private async processWithGPT4Vision(
    base64Image: string
  ): Promise<LLMResponse> {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.settings.openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text: this.constructVisionPrompt(),
                  },
                  {
                    type: "image_url",
                    image_url: {
                      url: base64Image,
                    },
                  },
                ],
              },
            ],
            max_tokens: this.settings.maxTokens,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`GPT-4V API error: ${response.statusText}`);
      }

      const result = await response.json();
      return this.parseLLMResponse(result.choices[0].message.content);
    } catch (error) {
      console.error("GPT-4V processing error:", error);
      throw error;
    }
  }

  private async processWithClaude3(base64Image: string): Promise<LLMResponse> {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": this.settings.anthropicApiKey,
          "anthropic-version": "2024-01-01",
        },
        body: JSON.stringify({
          model: "claude-3-opus-20240229",
          max_tokens: this.settings.maxTokens,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: this.constructVisionPrompt(),
                },
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: "image/jpeg",
                    data: base64Image,
                  },
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Claude API error: ${response.statusText}`);
      }

      const result = await response.json();
      return this.parseLLMResponse(result.content[0].text);
    } catch (error) {
      console.error("Claude processing error:", error);
      throw error;
    }
  }

  private constructVisionPrompt(): string {
    let prompt =
      "Please accurately transcribe the handwritten text in this image.";

    if (this.settings.tagSuggestions) {
      prompt += " Also suggest relevant tags for categorizing this content.";
    }

    if (this.settings.summarizeContent) {
      prompt += " Additionally, provide a brief summary of the content.";
    }

    prompt +=
      " Format your response as follows:\n\nTEXT:\n[transcribed text]\n";

    if (this.settings.tagSuggestions) {
      prompt += "\nTAGS:\n[comma-separated list of relevant tags]\n";
    }

    if (this.settings.summarizeContent) {
      prompt += "\nSUMMARY:\n[brief summary of the content]\n";
    }

    return prompt;
  }

  private parseLLMResponse(response: string): LLMResponse {
    const sections = response.split("\n\n");
    const result: LLMResponse = {
      text: "",
      confidence: 0.9,
    };

    for (const section of sections) {
      if (section.startsWith("TEXT:")) {
        result.text = section.replace("TEXT:", "").trim();
      } else if (section.startsWith("TAGS:")) {
        result.tags = section
          .replace("TAGS:", "")
          .trim()
          .split(",")
          .map((tag) => tag.trim().toLowerCase())
          .filter((tag) => tag.length > 0);
      } else if (section.startsWith("SUMMARY:")) {
        result.summary = section.replace("SUMMARY:", "").trim();
      }
    }

    return result;
  }

  private async enhanceWithLLM(text: string): Promise<LLMResponse> {
    // Implement LLM enhancement of Tesseract results
    return {
      text,
      confidence: 0.9,
    };
  }

  private cleanupText(text: string): string {
    return (
      text
        // Remove repeated punctuation
        .replace(/([.,!?;:])+/g, "$1")
        // Fix common OCR mistakes
        .replace(/[|]/g, "I")
        .replace(/[1Il]/g, "l")
        .replace(/[0O]/g, "o")
        // Remove non-printable characters
        .replace(/[^\x20-\x7E\n]/g, "")
        // Fix spacing
        .replace(/\s+/g, " ")
        .trim()
    );
  }

  private async convertToBase64(arrayBuffer: ArrayBuffer): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const blob = new Blob([arrayBuffer], { type: "image/jpeg" });
        const reader = new FileReader();

        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            resolve(reader.result);
          } else {
            reject(new Error("Invalid result type from FileReader"));
          }
        };

        reader.onerror = () => {
          reject(
            new Error(
              `FileReader error: ${reader.error?.message || "Unknown error"}`
            )
          );
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        reject(
          new Error(
            `Base64 conversion error: ${error.message || "Unknown error"}`
          )
        );
      }
    });
  }

  async generateTags(text: string): Promise<string[]> {
    const tags = new Set<string>();

    const words = text
      .toLowerCase()
      .split(/\s+/)
      .map((word) => word.replace(/[^a-z0-9]/g, ""))
      .filter((word) => word.length > 3);

    const commonWords = new Set([
      "the",
      "and",
      "that",
      "have",
      "for",
      "not",
      "with",
      "you",
      "this",
      "but",
      "his",
      "from",
      "they",
      "say",
      "her",
      "she",
      "will",
      "one",
      "all",
      "would",
      "there",
      "their",
      "what",
      "out",
      "about",
      "who",
      "get",
      "which",
      "when",
      "make",
      "can",
      "like",
      "time",
      "just",
      "him",
      "know",
      "take",
    ]);

    for (const word of words) {
      if (!commonWords.has(word)) {
        tags.add(word);
      }
    }

    return Array.from(tags);
  }

  async findRelatedNotes(text: string): Promise<string[]> {
    const relatedNotes: string[] = [];

    if (!this.settings.enableAutoBacklinks) {
      return relatedNotes;
    }

    const files = this.app.vault.getMarkdownFiles();

    for (const file of files) {
      const content = await this.app.vault.read(file);

      if (this.calculateSimilarity(text, content) > 0.3) {
        relatedNotes.push(file.basename);
      }
    }

    return relatedNotes;
  }

  calculateSimilarity(text1: string, text2: string): number {
    const words1 = new Set(text1.toLowerCase().split(/\s+/));
    const words2 = new Set(text2.toLowerCase().split(/\s+/));

    const intersection = new Set([...words1].filter((x) => words2.has(x)));
    const union = new Set([...words1, ...words2]);

    return intersection.size / union.size;
  }
}

class ImageUploadModal extends Modal {
  plugin: NoteCap;

  constructor(app: App, plugin: NoteCap) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h2", { text: "NoteCap: Upload Note" });

    const inputEl = contentEl.createEl("input", {
      type: "file",
      attr: {
        accept: "image/*",
        capture: "environment",
      },
    });

    inputEl.addEventListener("change", async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        try {
          const buffer = await file.arrayBuffer();
          const path = `${file.name}`;
          await this.app.vault.createBinary(path, buffer);
          this.close();
        } catch (error) {
          console.error("Error uploading file:", error);
          new Notice("Error uploading file: " + error.message);
        }
      }
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}

class NoteCapSettingTab extends PluginSettingTab {
  plugin: NoteCap;

  constructor(app: App, plugin: NoteCap) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h2", { text: "NoteCap Settings" });

    new Setting(containerEl)
      .setName("LLM Provider")
      .setDesc("Choose which LLM provider to use for vision capabilities")
      .addDropdown((dropdown) =>
        dropdown
          .addOption("none", "None (Use Tesseract Only)")
          .addOption("openai", "OpenAI GPT-4V")
          .addOption("anthropic", "Anthropic Claude 3")
          .setValue(this.plugin.settings.llmProvider)
          .onChange(async (value: "none" | "openai" | "anthropic") => {
            this.plugin.settings.llmProvider = value;
            await this.plugin.saveSettings();
            this.display(); // Refresh to show/hide relevant settings
          })
      );

    if (this.plugin.settings.llmProvider === "openai") {
      new Setting(containerEl)
        .setName("OpenAI API Key")
        .setDesc("Enter your OpenAI API key")
        .addText((text) =>
          text
            .setPlaceholder("sk-...")
            .setValue(this.plugin.settings.openaiApiKey)
            .onChange(async (value) => {
              this.plugin.settings.openaiApiKey = value;
              await this.plugin.saveSettings();
            })
        );
    }

    if (this.plugin.settings.llmProvider === "anthropic") {
      new Setting(containerEl)
        .setName("Anthropic API Key")
        .setDesc("Enter your Anthropic API key")
        .addText((text) =>
          text
            .setPlaceholder("sk-ant-...")
            .setValue(this.plugin.settings.anthropicApiKey)
            .onChange(async (value) => {
              this.plugin.settings.anthropicApiKey = value;
              await this.plugin.saveSettings();
            })
        );
    }

    if (this.plugin.settings.llmProvider !== "none") {
      new Setting(containerEl)
        .setName("Use Vision for OCR")
        .setDesc(
          "Use LLM vision capabilities for text recognition instead of Tesseract"
        )
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings.useVisionForOcr)
            .onChange(async (value) => {
              this.plugin.settings.useVisionForOcr = value;
              await this.plugin.saveSettings();
            })
        );

      new Setting(containerEl)
        .setName("Tag Suggestions")
        .setDesc("Use LLM to suggest relevant tags")
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings.tagSuggestions)
            .onChange(async (value) => {
              this.plugin.settings.tagSuggestions = value;
              await this.plugin.saveSettings();
            })
        );

      new Setting(containerEl)
        .setName("Content Summary")
        .setDesc("Generate a brief summary of the content")
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings.summarizeContent)
            .onChange(async (value) => {
              this.plugin.settings.summarizeContent = value;
              await this.plugin.saveSettings();
            })
        );

      new Setting(containerEl)
        .setName("Max Tokens")
        .setDesc("Maximum number of tokens for LLM responses")
        .addSlider((slider) =>
          slider
            .setLimits(100, 4000, 100)
            .setValue(this.plugin.settings.maxTokens)
            .onChange(async (value) => {
              this.plugin.settings.maxTokens = value;
              await this.plugin.saveSettings();
            })
        );
    }

    if (this.plugin.settings.llmProvider === "none") {
      new Setting(containerEl)
        .setName("OCR Language")
        .setDesc("Language for text recognition (e.g., eng, fra, deu)")
        .addText((text) =>
          text
            .setPlaceholder("eng")
            .setValue(this.plugin.settings.language)
            .onChange(async (value) => {
              this.plugin.settings.language = value;
              await this.plugin.saveSettings();
              await this.plugin.setupOCR();
            })
        );
    }

    new Setting(containerEl)
      .setName("Enable Auto Backlinks")
      .setDesc("Automatically create backlinks to related notes")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableAutoBacklinks)
          .onChange(async (value) => {
            this.plugin.settings.enableAutoBacklinks = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Minimum Tag Confidence")
      .setDesc("Minimum confidence level for auto-generated tags (0-1)")
      .addSlider((slider) =>
        slider
          .setLimits(0, 1, 0.1)
          .setValue(this.plugin.settings.minimumTagConfidence)
          .onChange(async (value) => {
            this.plugin.settings.minimumTagConfidence = value;
            await this.plugin.saveSettings();
          })
      );
  }
}
