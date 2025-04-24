export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],

  css: ["~/assets/css/tailwind.css", "~/assets/css/markdown.css"],

  image: {
    domains: ["images.ctfassets.net"],
    contentful: {},
    format: ["webp", "jpg", "jpeg", "png"],
    quality: 80,
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    classPrefix: "",
    classSuffix: "",
    storageKey: "theme",
  },

  compatibilityDate: "2025-04-24",

  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID,
      contentfulAccessToken: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      contentfulPreviewToken: process.env.NUXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
    },
  },

  // @nuxt/content configuration
  content: {
    // Disable the SQLite dependency
    documentDriven: false,
    markdown: {
      // コードブロックのシンタックスハイライト
      highlight: {
        theme: "github-dark",
      },
      // マークダウンの拡張機能
      remarkPlugins: ["remark-gfm"],
      rehypePlugins: ["rehype-external-links"],
      anchorLinks: false,
    },
  } as any,

  googleFonts: {
    families: {
      "Noto+Sans+JP": [100, 300, 400, 500, 700, 900],
      Hannari: true,
    },
    display: "swap",
    preload: true,
  },
});
