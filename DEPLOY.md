# Cloudflare Pagesへのデプロイ手順

## 🚀 Cloudflare Pagesとは

- Cloudflareが提供する静的サイトホスティングサービス
- Next.jsの完全サポート
- グローバルCDN配信
- 無料プランで十分なスペック

## 📋 デプロイ手順

### 1. Cloudflareダッシュボードにアクセス

https://dash.cloudflare.com にアクセスしてログイン

### 2. Pages を開く

左サイドバーから「Workers & Pages」を選択

### 3. 新しいプロジェクトを作成

1. 「Create application」ボタンをクリック
2. 「Pages」タブを選択
3. 「Connect to Git」をクリック

### 4. GitHubリポジトリを接続

1. GitHubアカウントを認証
2. リポジトリ一覧から `video-summary` を選択
3. 「Begin setup」をクリック

### 5. ビルド設定

以下の設定を入力：

**プロジェクト名**: `video-summary`（または任意の名前）

**Branch**: `main`

**Framework preset**: `Next.js`

**Build command**: `yarn build`

**Build output directory**: `.next`

**Environment variables**: （現時点では不要）

### 6. デプロイを開始

「Save and Deploy」ボタンをクリック

初回デプロイには3-5分程度かかります。

### 7. デプロイ完了

デプロイが完了すると、以下のようなURLが発行されます：

```text
https://video-summary-xxx.pages.dev
```

## 🔧 Next.js固有の設定（重要）

Cloudflare PagesでNext.jsを動かすには、追加設定が必要な場合があります。

### package.jsonに出力設定を追加

```json
{
  "scripts": {
    "build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/"
  }
}
```

または、`next.config.ts`に以下を追加：

```typescript
const nextConfig = {
  output: 'export', // 静的エクスポート
};
```

**注意**: `output: 'export'`を使うと、一部のNext.js機能（API Routes、Server Componentsなど）が使えなくなります。

### 推奨：@cloudflare/next-on-pagesを使用

より良い方法は、Cloudflareの公式アダプターを使用することです：

```bash
yarn add -D @cloudflare/next-on-pages
```

`package.json`を更新：

```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev",
    "deploy": "npm run pages:build && wrangler pages deploy"
  }
}
```

Cloudflare Pagesのビルド設定を変更：

**Build command**: `yarn pages:build`

**Build output directory**: `.vercel/output/static`

## 🌐 カスタムドメインの設定（オプション）

1. Cloudflare Pagesダッシュボードで「Custom domains」を選択
2. 「Set up a custom domain」をクリック
3. 所有しているドメインを入力
4. DNS設定を確認・更新

## 📊 現在のステータス

- ✅ GitHubリポジトリ作成済み: https://github.com/sa9sha9/video-summary
- ⏳ Cloudflare Pagesへのデプロイ: 手動で実施してください

## 🔄 自動デプロイ

Cloudflare Pagesと連携後、`main`ブランチへのpushで自動的にデプロイされます：

```bash
git add .
git commit -m "feat: 新機能追加"
git push origin main
```

## 📝 トラブルシューティング

### ビルドエラーが出る場合

1. `output: 'export'`を`next.config.ts`に追加
2. または`@cloudflare/next-on-pages`を使用
3. ビルドログを確認して、エラー内容を特定

### デプロイ後に404エラーが出る場合

- ルーティングが正しく設定されているか確認
- `_routes.json`ファイルが必要な場合がある

## 🎯 次のステップ

1. Cloudflare Pagesダッシュボードで新しいプロジェクトを作成
2. GitHubリポジトリと連携
3. ビルド設定を入力
4. デプロイ実行
5. 発行されたURLにアクセスして動作確認

デプロイ完了後のURLを教えてください！
