# 工房 草來舎 プロジェクト設定

## 1. プロジェクト概要

工房 草來舎（そうらいしゃ）は、信州伊那谷の南端、泰阜村にある陶芸工房の EC サイトです。

### サイトの特徴

- 伝統的な登り窯での陶芸作品の EC 販売（Shopify 連携）
- ブログによる工房の日常や作品づくりの発信（Contentful 連携）
- 自然との調和を大切にした物づくりの哲学を表現するデザイン

### 技術スタック

- フレームワーク: Nuxt3
- UI フレームワーク: Tailwind CSS + DaisyUI
- モード: SPA
- CMS: Contentful（ブログ）
- EC: Shopify（商品管理・決済）

## 2. 依存パッケージ

### 主要パッケージ

- `nuxt`: 最新版
- `@nuxtjs/tailwindcss`: 最新版
- `@nuxtjs/color-mode`: 最新版
- `daisyui`: 最新版
- `contentful`: 最新版
- `@nuxtjs/markdownit`: 最新版

## 3. 設定ファイル

### nuxt.config.ts

```typescript
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/markdownit"],

  colorMode: {
    // preference: "system", // デフォルトテーマ
    // dataValue: "theme", // <html>タグでdata-themeを有効化
    classSuffix: "",
  },

  tailwindcss: { exposeConfig: true },
  compatibilityDate: "2025-04-24",

  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      contentfulPreviewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    },
  },
});
```

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
```

## 4. プロジェクト構造

```
.
├── .nuxt/
├── .output/
├── .vscode/
├── node_modules/
├── docs/
├── pages/
│   └── blog/
│       ├── index.vue     # ブログ一覧
│       └── [slug].vue    # ブログ詳細
├── types/
│   └── contentful.ts     # Contentful型定義
├── utils/
│   └── contentful.ts     # Contentfulクライアント
├── app.vue
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
└── tsconfig.json
```

## 5. 開発環境

- Node.js: 最新版
- パッケージマネージャー: pnpm
- TypeScript: 有効

## 6. スクリプト

- `pnpm dev`: 開発サーバー起動
- `pnpm build`: プロダクションビルド
- `pnpm generate`: 静的サイト生成
- `pnpm preview`: ビルド済みアプリのプレビュー

## 7. 環境変数

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

## 8. メタ情報

```html
<meta
  name="description"
  content="信州伊那谷の南端、自然豊かな泰阜村に草來舎の陶芸工房はあります。伝統的な登り窯で、主に食器や花入れ、酒器などを焼いています。土は信楽と唐津を主に、釉薬は薪窯ならではの自然釉と、地元の草木の灰から仕立てた灰釉。林檎灰釉、藁灰釉、松灰釉、楢灰釉など。そして装飾は粉引、刷毛目、三島など、素朴な技法で丁寧に手間をかけて作陶しています。"
/>
```
