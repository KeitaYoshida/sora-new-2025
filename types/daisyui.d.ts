declare module "daisyui" {
  export interface Config {
    themes?: string[] | false;
    darkTheme?: string;
    base?: boolean;
    styled?: boolean;
    utils?: boolean;
    prefix?: string;
    logs?: boolean;
  }
}
