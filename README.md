# ISTQB AI Testing 日本語対訳教材サイト

ISTQB が提供するシラバス・サンプル試験を、静的ホスティングで読める日本語対訳教材として再構築する学習サイトです。

公開 URL: https://ma-garin.github.io/ISTQB_GenAI_Study/

## 構成

現在は以下の2資格を分けて配置しています。

| パス | 内容 |
|---|---|
| `/` | 資格ポータル |
| `/ct-genai/` | CT-GenAI v1.0 教材 |
| `/ct-ai/` | CT-AI v2.0 日本語対訳教材 |

今後、ISTQB の他シラバスを追加する場合も、資格ごとに同じ粒度のディレクトリを追加します。

```text
.
├── index.html
├── shared/
│   ├── css/
│   └── js/
├── ct-ai/
│   ├── index.html
│   ├── chapters/
│   │   ├── chapter-0.html
│   │   ├── chapter-1.html
│   │   ├── chapter-2.html
│   │   ├── chapter-3.html
│   │   ├── chapter-4.html
│   │   ├── chapter-5.html
│   │   ├── chapter-6.html
│   │   ├── chapter-7.html
│   │   ├── glossary.html
│   │   ├── references.html
│   │   └── appendices.html
│   ├── assets/
│   │   ├── css/
│   │   │   ├── app.css
│   │   │   └── carbon-overrides.css
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── theme.js
│   │   └── img/
│   ├── css/
│   └── js/
└── ct-genai/
```

## セットアップ

npm やビルド工程は不要です。ローカル確認は任意の静的 HTTP サーバーで行います。

```bash
python3 -m http.server 8123
```

ブラウザで `http://127.0.0.1:8123/` を開きます。GitHub Pages ではリポジトリ直下をそのまま公開できます。

## GitHub Pages 配置

1. GitHub のリポジトリ設定で Pages を開く
2. Source を `Deploy from a branch` にする
3. Branch を `main`、Folder を `/ (root)` にする
4. 保存後、`https://ma-garin.github.io/ISTQB_GenAI_Study/` で確認する

## Carbon Design System 採用理由

Carbon Design System は、学習教材に必要な可読性・情報密度・アクセシビリティを両立しやすいエンタープライズ向けデザインシステムです。このサイトでは以下を重視しています。

- 固定ヘッダーと左サイドナビによる安定した移動
- IBM Plex Sans による長文の読みやすさ
- DataTable / Tag / UI Shell 相当の構造
- 落ち着いた空色テーマ
- `prefers-color-scheme` に対応したダークモード

## CT-AI の教材仕様

- 章ごとの HTML 分割
- 左カラムに英語原文、右カラムに日本語訳
- 英文表示 ON/OFF
- 用語検索
- 章内スクロール進捗バー
- sticky TOC と現在セクション同期
- 表・図のカード UI 化
- GitHub Pages でそのまま配信可能

## カスタマイズ

色は `ct-ai/assets/css/carbon-overrides.css` のトークンを変更します。

```css
:root {
  --primary-sky: #5dade2;
  --primary-sky-dark: #2e86c1;
  --header-bg: #d6eaf8;
  --sidebar-bg: #ebf5fb;
  --content-bg: #fdfefe;
  --border-soft: #d4e6f1;
  --text-main: #1f2937;
}
```

章ページの共通挙動は `ct-ai/assets/js/app.js`、テーマ切替は `ct-ai/assets/js/theme.js` にあります。

## 免責事項

本サイトは ISTQB 公式サイトではありません。ISTQB® は ISTQB の登録商標です。試験範囲・出題形式・受験要件は変更される可能性があるため、受験前に ISTQB / JSTQB の公式情報を確認してください。
