# 曽良窯 公式ウェブサイト (2025 年リニューアル版)

このリポジトリは工房草來舎の公式ウェブサイトのソースコードを管理しています。Nuxt 3 を使用した SPA として実装されています。

## 技術スタック

- **フレームワーク**: Nuxt 3
- **スタイリング**:
  - Tailwind CSS
  - DaisyUI
- **パッケージマネージャー**: pnpm
- **Node.js バージョン**: 20.4.0
- **デプロイ**: Netlify

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/KeitaYoshida/sora-new-2025.git
cd sora-new-2025

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm run dev
```

## ビルドとデプロイ

```bash
# プロダクションビルド
pnpm run build

# プレビュー
pnpm run preview
```

デプロイは Netlify と連携しており、main ブランチへのプッシュ時に自動的にデプロイされます。

## プロジェクト構造

```
├── app.vue          # アプリケーションのエントリーポイント
├── assets/         # グローバルアセット（CSS等）
├── components/     # Vue コンポーネント
├── layouts/        # レイアウトコンポーネント
├── pages/          # ページコンポーネント
├── public/         # 静的ファイル
└── utils/          # ユーティリティ関数
```

## 環境変数

プロジェクトを実行するには、以下の環境変数が必要です：

```env
NUXT_PUBLIC_SITE_URL=https://soraisha.netlify.app
```

## コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

## ライセンス

All Rights Reserved - 工房草來舎
