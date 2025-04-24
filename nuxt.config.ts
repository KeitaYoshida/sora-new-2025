export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],

  css: ["~/assets/css/tailwind.css", "~/assets/css/markdown.css"],

  image: {
    provider: "contentful",
    contentful: {
      baseURL: "https://images.ctfassets.net",
      spaces: {
        default: {
          spaceId: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID,
          accessToken: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        },
      },
    },
    domains: ["images.ctfassets.net"],
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

  googleFonts: {
    families: {
      "Noto+Sans+JP": [100, 300, 400, 500, 700, 900],
      Hannari: true,
    },
    display: "swap",
    preload: true,
  },
});
