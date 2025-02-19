import "obsidian";
declare module "obsidian" {
  interface App {
    plugins: {
      plugins: {
        [key: string]: any;
      };
    };
  }
}
export {};
