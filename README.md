# NoteCap

NoteCap is an Obsidian plugin that transforms your handwritten notes into searchable digital text, complete with automatic tagging and backlinks. Simply take a photo of your handwritten notes, and NoteCap will handle the rest.

## Features

- 📸 Capture or upload images of handwritten notes
- 🔍 Convert handwriting to searchable text using OCR
- 🏷️ Automatic tag generation based on content
- 🔗 Smart backlink creation to related notes
- 📱 Works on both desktop and mobile

## Requirements

- Obsidian v0.15.0 or higher
- [Text Extractor](https://github.com/scambier/obsidian-text-extractor) plugin installed

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "NoteCap"
4. Click Install
5. Enable the plugin

### Manual Installation

1. Download the latest release from the releases page
2. Extract the files to your vault's `.obsidian/plugins/notecap` folder
3. Enable NoteCap in the Community Plugins settings

## Usage

1. Click the camera icon in the ribbon (left sidebar)
2. Take a photo or upload an image of your handwritten notes
3. NoteCap will automatically:

- Extract text from the image
- Generate relevant tags
- Create backlinks to related notes
- Create a new markdown note with all the content

## Settings

- **Minimum Tag Confidence**: Adjust the threshold for automatic tag generation (0-1)
- **Enable Auto Backlinks**: Toggle automatic creation of backlinks to related notes

## Tips for Best Results

- Ensure good lighting when taking photos
- Keep the paper flat and avoid shadows
- Use dark ink on light paper for best contrast
- Keep handwriting reasonably neat and well-spaced

## Known Issues

- OCR accuracy depends on handwriting clarity and image quality
- Tag generation might need manual refinement for specialized topics
- Performance may vary with large images or dense text

## Support

If you encounter any issues or have suggestions:

1. Check the [GitHub Issues](https://github.com/yourusername/notecap/issues) page
2. Make sure you have the latest version installed
3. Create a new issue with:

- A description of the problem
- Steps to reproduce
- Your Obsidian version
- Your NoteCap version

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

## License

MIT License. See [LICENSE](LICENSE) for more information.

## Credits

- Built on top of the excellent [Text Extractor](https://github.com/scambier/obsidian-text-extractor) plugin
- Created with 💜 for the Obsidian community

## Changelog

### 1.0.0

- Initial release
- Basic OCR functionality
- Automatic tag generation
- Backlink creation
- Settings panel
