import type { Config } from "tailwindcss";
import type { Config as DaisyUIConfig } from "daisyui";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        // Hannariはutilityクラスで定義するため、ここでは定義しない
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
    darkTheme: "emerald",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
  },
} satisfies Config & { daisyui: DaisyUIConfig };
