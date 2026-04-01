# ISTQB CT-GenAI 学習アプリ

ISTQB Certified Tester Specialist Level – Testing with Generative AI (CT-GenAI) v1.0 シラバスをベースにした日本語学習ツールです。

🔗 **公開URL**: https://ma-garin.github.io/ISTQB_GenAI_Study/

## 機能

| ページ | 内容 |
|---|---|
| ホーム | 章構成・学習目標一覧 |
| 学習コンテンツ | 5章・英日バイリンガル解説・試験Tips |
| 問題演習 | 60問（K1〜K3）・章別・ランダム出題 |
| 学習スライド | 章別スライド学習（Foundation Seminar 2023 参考） |
| 用語集 | 50+件・カテゴリ絞り込み・検索 |
| 日本語対訳 | シラバス全文の日本語訳（英語用語付記） |

## 対象シラバス

- **資格**: ISTQB CT-GenAI（Certified Tester – Testing with Generative AI）
- **バージョン**: v1.0
- **章構成**: 全5章 / 735分 / 36学習目標（K1〜K3）

## PWA対応

スマートフォンのブラウザで開き「ホーム画面に追加」するとアプリとして使用できます。オフラインでも動作します。

## ファイル構成

```
├── index.html          # トップページ
├── study.html          # 学習コンテンツ
├── quiz.html           # 問題演習
├── slides.html         # 学習スライド
├── glossary.html       # 用語集
├── syllabus-ja.html    # シラバス日本語対訳
├── css/style.css       # スタイルシート
├── js/
│   ├── quiz-data.js    # 問題データ（60問）
│   ├── slides-data.js  # スライドデータ
│   └── glossary-data.js# 用語データ
├── manifest.json       # PWAマニフェスト
├── sw.js               # Service Worker
└── icons/              # PWAアイコン
```

## 免責事項

本アプリはISTQB公式コンテンツではなく、個人学習目的で作成したものです。試験の合格を保証するものではありません。原文シラバル（英語）は [ISTQB公式サイト](https://www.istqb.org/) を参照してください。
