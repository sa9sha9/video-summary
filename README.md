# VideoSum - 動画まとめサービス

動画を画像とテキストで自動的にまとめるWebサービスのプロトタイプ

## 🚀 概要

VideoSumは、YouTube動画のURLを入力するだけで、重要なシーンを画像とテキストで自動的にまとめるサービスです。
動画を視聴せずに、短時間で内容を理解できます。

## ✨ 主な機能（プロトタイプ版）

- ✅ URL入力画面
- ✅ まとめページ表示（ダミーデータ）
- ✅ レスポンシブデザイン
- ✅ ダークモード対応

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 16** - React フレームワーク
- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **TailwindCSS 4** - スタイリング

### 開発ツール
- **Yarn** - パッケージマネージャー
- **Turbopack** - 高速バンドラー

## 📦 セットアップ

### 必要要件
- Node.js 18.17以上
- Yarn 1.22以上

### インストール

```bash
# 依存関係のインストール
yarn install

# 開発サーバーの起動
yarn dev
```

開発サーバーが起動したら、ブラウザで http://localhost:3000 にアクセスします。

## 🎯 プロジェクト構造

```text
video-summary/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # ホームページ（URL入力）
│   │   ├── summary/[id]/       # まとめページ
│   │   │   └── page.tsx
│   │   └── globals.css         # グローバルスタイル
│   ├── components/             # 再利用可能なコンポーネント（予定）
│   └── lib/                    # ユーティリティ・データ
│       └── data/
│           └── dummyVideos.ts  # ダミーデータ
├── public/                     # 静的ファイル
├── next.config.ts              # Next.js設定
├── tailwind.config.ts          # TailwindCSS設定
└── tsconfig.json               # TypeScript設定
```

## 🎨 使い方（プロトタイプ版）

1. トップページにアクセス
2. 動画URLを入力（現在はダミー）
3. 著作権フリー確認チェックボックスにチェック
4. 「まとめを作成する」ボタンをクリック
5. まとめページが表示される（サンプル：カルボナーラの作り方）

## 📝 今後の実装予定

### Phase 1: 基本機能
- [ ] Supabaseの統合（データベース）
- [ ] 動画ダウンロード機能（yt-dlp）
- [ ] FFmpegでスクリーンショット抽出
- [ ] Whisper APIで音声書き起こし

### Phase 2: AI機能
- [ ] GPT-3.5で自動要約生成
- [ ] 重要シーンの自動判定

### Phase 3: デプロイ
- [ ] Vercelへのデプロイ
- [ ] 本番環境の設定

## 🔗 関連リンク

- [設計ドキュメント](path/to/obsidian/動画まとめサービス/)
- [Obsidian プロジェクトノート](~/Library/CloudStorage/GoogleDrive-sha9sa9@gmail.com/マイドライブ/00.Sync/Obsidian/default/動画まとめサービス/)

## 📄 ライセンス

MIT

## 🙏 謝辞

このプロジェクトは、動画コンテンツのアクセシビリティ向上を目指しています。
