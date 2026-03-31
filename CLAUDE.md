# CLAUDE.md — ISTQB CT-GenAI 学習アプリ

## プロジェクト概要
ISTQB CT-GenAI v1.0 シラバスベースの純粋 HTML/CSS/JS 学習アプリ。
サーバー不要。全UI・コンテンツは日本語。

## ファイル構成（読む必要がある場合のみ読む）
| ファイル | 役割 | サイズ目安 |
|---|---|---|
| index.html | トップ・章一覧 | 小 |
| study.html | 学習コンテンツ（5章・バイリンガル表・試験Tips） | 大 |
| quiz.html | 問題演習UI | 中 |
| glossary.html | 用語集UI | 小 |
| syllabus-ja.html | シラバス日本語対訳（5章フル） | 大 |
| css/style.css | 全スタイル | 中 |
| js/quiz-data.js | 問題データ（60問） | 大 |
| js/glossary-data.js | 用語データ（50+件） | 中 |

## 重要：コンテキスト節約ルール
- **大型ファイル（study.html, syllabus-ja.html, quiz-data.js）は指示された箇所のみ部分読み込み**（offset/limit使用）
- **ナビゲーション変更は全ファイル共通** — 変更時は必ず5ファイル全てに同じ変更を適用
- **CSSクラスを新規追加する前にstyle.cssで既存クラスを確認**（重複防止）

## ナビゲーション構造（全ページ共通）
```html
<nav>
  <a href="index.html">ホーム</a>
  <a href="study.html">学習</a>
  <a href="quiz.html">問題演習</a>
  <a href="glossary.html">用語集</a>
  <a href="syllabus-ja.html">日本語対訳</a>
</nav>
```

## 章カラー定義
| 章 | 色コード | CSS class |
|---|---|---|
| 第1章 | #2980b9 | ch-1 |
| 第2章 | #8e44ad | ch-2 |
| 第3章 | #c0392b | ch-3 |
| 第4章 | #16a085 | ch-4 |
| 第5章 | #d35400 | ch-5 |

## 重要なCSSクラス（再定義禁止）
- `.exam-tip` — 試験Tips（黄色ボックス）
- `.bilingual-table` — 英日対訳表
- `.chapter-summary` — 章サマリーボックス
- `.syllabus-section` / `.syllabus-section-header` — 対訳ページ用
- `.chapter-banner` — 章バナー
- `.en-word` — インライン英語表記（青・イタリック）

## 作業分割の推奨パターン
- **1タスク = 1ファイル** を原則とする
- 複数ファイル更新は「共通部分（nav等）」と「個別コンテンツ」を別指示に分ける
- 大型コンテンツ追加（章の追加など）は章単位で分割する
