# ISTQB Multi-Cert Portal — 引き継ぎドキュメント

**日付**: 2026-05-13  
**ブランチ**: `claude/system-improvement-suggestions-GeoEV`  
**担当 AI**: Claude Sonnet 4.6 → Codex へ引き継ぎ

---

## 完了済み作業

### 共有インフラ（shared/）
| ファイル | 状態 |
|----------|------|
| `shared/css/carbon-theme.css` | ✅ 作成済 |
| `shared/css/shell.css` | ✅ 作成済 |
| `shared/js/theme.js` | ✅ 作成済 |
| `shared/js/shell.js` | ✅ 作成済 |
| `shared/js/search.js` | ✅ 作成済 |

### ポータル
| ファイル | 状態 |
|----------|------|
| `index.html` | ✅ 新ポータル版（3資格カード）に置き換え済 |

### CT-AI コンテンツ
| ファイル | 状態 |
|----------|------|
| `ct-ai/css/ct-ai.css` | ✅ 作成済 |
| `ct-ai/js/toc.js` | ✅ 作成済 |
| `ct-ai/js/glossary-data.js` | ✅ 作成済（70+用語） |
| `ct-ai/js/quiz-data.js` | ✅ 作成済（40問） |
| `ct-ai/index.html` | ✅ 作成済 |
| `ct-ai/chapters/chapter-0.html` | ✅ 作成済（23KB） |
| `ct-ai/chapters/chapter-1.html` | ✅ 作成済（55KB、8 LO） |
| `ct-ai/chapters/chapter-2.html` | ✅ 作成済（27KB、3 LO） |
| `ct-ai/chapters/chapter-3.html` | ✅ 作成済（64KB、8 LO + 4 HO） |
| `ct-ai/chapters/chapter-4.html` | ✅ 作成済（46KB、7 LO + 1 HO） |
| `ct-ai/chapters/chapter-5.html` | ✅ 作成済（42KB、6 LO + 1 HO） |
| `ct-ai/chapters/chapter-6.html` | ❌ **未作成** |
| `ct-ai/chapters/chapter-7.html` | ❌ **未作成** |
| `ct-ai/chapters/glossary.html` | ✅ 作成済 |
| `ct-ai/chapters/references.html` | ✅ 作成済 |
| `ct-ai/chapters/appendices.html` | ✅ 作成済 |

### CT-GenAI 移行
| ファイル | 状態 |
|----------|------|
| `ct-genai/css/ct-genai.css` | ✅ 作成済（Carbonシェル互換オーバーライド付き） |
| `ct-genai/js/quiz-data.js` | ✅ git mv 済 |
| `ct-genai/js/glossary-data.js` | ✅ git mv 済 |
| `ct-genai/js/slides-data.js` | ✅ git mv 済 |
| `ct-genai/quiz.html` | ✅ git mv 済（シェル更新未完了） |
| `ct-genai/study.html` | ✅ git mv 済（シェル更新未完了） |
| `ct-genai/glossary.html` | ✅ git mv 済（シェル更新未完了） |
| `ct-genai/slides.html` | ✅ git mv 済（シェル更新未完了） |
| `ct-genai/syllabus-ja.html` | ✅ git mv 済（シェル更新未完了） |
| `ct-genai/index.html` | ❌ **未作成** |

### インフラ更新
| ファイル | 状態 |
|----------|------|
| `manifest.json` | ❌ **未更新** |
| `sw.js` | ❌ **未更新** |
| `README.md` | ❌ **未更新** |

---

## 残タスク（Codex が実施）

### 1. CT-AI 章 6・7 を作成

**`ct-ai/chapters/chapter-6.html`** — Model Testing for ML Systems (225分, 10 LO)

Learning Objectives:
- AI-6.1.1 (K2) Give examples of test approaches for ML model risk mitigation
- AI-6.1.2 (K2) Explain purpose and focus of reviewing ML model documentation
- AI-6.1.3 (K2) Explain ML functional performance testing for probabilistic ML systems
- AI-6.1.4 (K2) Summarize adversarial testing of ML systems
- AI-6.1.5 (K3) Use metamorphic testing to derive test cases for a given scenario
- HO-6.1.6 (H2) Hands-on: Apply Metamorphic Testing
- AI-6.1.7 (K2) Explain how drift testing is used on operational ML systems
- AI-6.1.8 (K2) Explain how overfitting and underfitting are detected by testing
- AI-6.1.9 (K2) Explain how A/B testing is used in ML systems
- AI-6.1.10 (K2) Explain how back-to-back testing is used in ML systems

**`ct-ai/chapters/chapter-7.html`** — Machine Learning Development Testing (30分, 2 LO)

Learning Objectives:
- AI-7.1.1 (K2) Give examples of test approaches for ML development risk mitigation
- AI-7.1.2 (K2) Explain various forms of ML system deployment testing

#### 章 HTML の共通構造（必ず守ること）

```html
<!DOCTYPE html>
<html lang="ja" data-carbon-theme="white">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>第N章：タイトル — CT-AI v2.0</title>
  <link rel="stylesheet" href="https://unpkg.com/carbon-components@10.58.0/css/carbon-components.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="../../shared/css/carbon-theme.css">
  <link rel="stylesheet" href="../../shared/css/shell.css">
  <link rel="stylesheet" href="../css/ct-ai.css">
</head>
<body>
  <!-- Carbon Header -->
  <header class="bx--header" role="banner">
    <button class="bx--header__menu-trigger bx--header__action" data-sidebar-trigger aria-label="メニュー" aria-expanded="false">&#9776;</button>
    <a class="bx--header__name" href="../../index.html">
      <svg class="header-logo-svg" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2e86c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span>ISTQB Study Portal</span>
      <span class="header-product-name">/ CT-AI v2.0</span>
    </a>
    <div class="bx--header__global">
      <a href="../../index.html" class="bx--header__action" style="font-size:0.75rem;width:auto;padding:0 12px;">← ポータル</a>
      <button class="bx--header__action header-search-btn" data-search-open aria-label="検索">&#128269;</button>
      <button class="bx--header__action header-theme-btn" data-theme-toggle data-theme-icon aria-label="ダークモードに切替">🌙</button>
    </div>
  </header>

  <!-- Sidebar overlay (mobile) -->
  <div id="sidebar-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:7800;"></div>

  <!-- Side Nav — 全章リスト（現在の章に bx--side-nav__link--current を付与）-->
  <nav class="bx--side-nav" aria-label="CT-AI ナビゲーション">
    <ul class="bx--side-nav__nav" role="list">
      <li class="bx--side-nav__header">ポータル</li>
      <li class="bx--side-nav__item"><a href="../../index.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">← ポータルに戻る</span></a></li>
      <li class="bx--side-nav__item"><a href="../index.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">CT-AI ホーム</span></a></li>
      <li class="bx--side-nav__header">CT-AI v2.0 章</li>
      <li class="bx--side-nav__item"><a href="chapter-0.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">第0章 序文</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-1.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">第1章 AI入門</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-2.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">第2章 品質特性</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-3.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">第3章 機械学習</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-4.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">第4章 AIテスト</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-5.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">第5章 入力データ</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-6.html" class="bx--side-nav__link [ACTIVE_IF_CH6]"><span class="bx--side-nav__link-text">第6章 モデルテスト</span></a></li>
      <li class="bx--side-nav__item"><a href="chapter-7.html" class="bx--side-nav__link [ACTIVE_IF_CH7]"><span class="bx--side-nav__link-text">第7章 ML開発</span></a></li>
      <li class="bx--side-nav__header">補足資料</li>
      <li class="bx--side-nav__item"><a href="glossary.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">用語集</span></a></li>
      <li class="bx--side-nav__item"><a href="references.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">参考文献</span></a></li>
      <li class="bx--side-nav__item"><a href="appendices.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">付録（BO/LO）</span></a></li>
    </ul>
  </nav>

  <!-- Search modal -->
  <div id="search-dialog" hidden role="dialog" aria-modal="true" aria-label="検索">
    <div class="search-modal">
      <div class="search-input-wrap"><span>&#128269;</span><input id="search-input" type="search" placeholder="キーワードで検索…" autocomplete="off"></div>
      <div id="search-results" class="search-results"></div>
    </div>
  </div>

  <main class="bx--content">
    <!-- Chapter hero -->
    <div class="chapter-hero chN">
      <div class="chapter-hero-inner">
        <p class="chapter-hero-eyebrow">CT-AI v2.0 — Chapter N</p>
        <h1 class="chapter-hero-title">第N章：タイトル</h1>
        <p class="chapter-hero-subtitle">Learning Time: Nmin</p>
        <div class="chapter-hero-lo-row">
          <span class="lo-chip k2">AI-N.1.1</span>
          <!-- ... all LO chips -->
        </div>
      </div>
    </div>

    <!-- Content with bilingual sections -->
    <div class="toc-content-layout">
      <aside class="toc-sidebar">
        <p class="toc-heading">目次</p>
        <ul class="toc-list">
          <li><a href="#s-N-1">N.1 セクションタイトル</a></li>
          <!-- ... -->
        </ul>
      </aside>

      <div class="toc-main">
        <section id="s-N-1" class="syllabus-section">
          <div class="bilingual-section">
            <div class="en-column">
              <details class="en-original">
                <summary>Original English ▸</summary>
                <div class="en-text"><p>English original text...</p></div>
              </details>
            </div>
            <div class="ja-column">
              <h2 class="section-title">N.1 タイトル</h2>
              <div class="lo-summary-row">
                <span class="lo-badge k2">AI-N.1.1 K2</span>
              </div>
              <p>日本語訳...</p>
              <!-- tables, info-boxes, etc. -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>

  <footer class="app-footer">
    <span><a href="../index.html">CT-AI v2.0</a></span>
    <span>
      <a href="chapter-PREV.html">← 第PREV章</a> ·
      <a href="NEXT.html">次へ →</a>
    </span>
    <span>© 2026 · ISTQB®</span>
  </footer>

  <script src="../../shared/js/theme.js"></script>
  <script src="../../shared/js/shell.js"></script>
  <script src="../../shared/js/search.js"></script>
  <script src="../js/toc.js"></script>
</body>
</html>
```

#### 既存章を参照パターンとして使用
chapter-5.html を参照するのがベスト（直前の章なので構造が最も近い）。

---

### 2. CT-GenAI ページの Carbon シェル更新

移動済みの各 HTML ファイルを以下のように更新：

**対象ファイル**:
- `ct-genai/quiz.html`
- `ct-genai/study.html`
- `ct-genai/glossary.html`
- `ct-genai/slides.html`
- `ct-genai/syllabus-ja.html`

**変更内容**:
1. `<head>` に以下の CSS リンクを追加:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/carbon-components@10.58.0/css/carbon-components.min.css">
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap">
   <link rel="stylesheet" href="../shared/css/carbon-theme.css">
   <link rel="stylesheet" href="../shared/css/shell.css">
   ```
2. CSS パスを `css/style.css` → `css/ct-genai.css` に変更（または `css/ct-genai-legacy.css`）
3. 旧 `<header>` タグを Carbon shell header に置き換え（下記テンプレート参照）
4. フッターを Carbon shell フッターに置き換え
5. `</body>` 前に shared JS を追加:
   ```html
   <script src="../shared/js/theme.js"></script>
   <script src="../shared/js/shell.js"></script>
   <script src="../shared/js/search.js"></script>
   ```

**CT-GenAI Carbon Shell ヘッダーテンプレート**:
```html
<header class="bx--header" role="banner">
  <button class="bx--header__menu-trigger bx--header__action" data-sidebar-trigger aria-label="メニュー" aria-expanded="false">&#9776;</button>
  <a class="bx--header__name" href="../index.html">
    <svg class="header-logo-svg" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2e86c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <span>ISTQB Study Portal</span>
    <span class="header-product-name">/ CT-GenAI v1.0</span>
  </a>
  <div class="bx--header__global">
    <a href="../index.html" class="bx--header__action" style="font-size:0.75rem;width:auto;padding:0 12px;">← ポータル</a>
    <button class="bx--header__action header-search-btn" data-search-open aria-label="検索">&#128269;</button>
    <button class="bx--header__action header-theme-btn" data-theme-toggle data-theme-icon aria-label="ダークモードに切替">🌙</button>
  </div>
</header>

<div id="sidebar-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:7800;"></div>

<nav class="bx--side-nav" aria-label="CT-GenAI ナビゲーション">
  <ul class="bx--side-nav__nav" role="list">
    <li class="bx--side-nav__header">ポータル</li>
    <li class="bx--side-nav__item"><a href="../index.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">← ポータルに戻る</span></a></li>
    <li class="bx--side-nav__item"><a href="index.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">CT-GenAI ホーム</span></a></li>
    <li class="bx--side-nav__header">CT-GenAI v1.0</li>
    <li class="bx--side-nav__item"><a href="study.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">学習コンテンツ</span></a></li>
    <li class="bx--side-nav__item"><a href="quiz.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">問題演習</span></a></li>
    <li class="bx--side-nav__item"><a href="glossary.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">用語集</span></a></li>
    <li class="bx--side-nav__item"><a href="syllabus-ja.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">シラバス対訳</span></a></li>
    <li class="bx--side-nav__item"><a href="slides.html" class="bx--side-nav__link"><span class="bx--side-nav__link-text">スライド</span></a></li>
  </ul>
</nav>

<div id="search-dialog" hidden role="dialog" aria-modal="true" aria-label="検索">
  <div class="search-modal">
    <div class="search-input-wrap"><span>&#128269;</span><input id="search-input" type="search" placeholder="キーワードで検索…" autocomplete="off"></div>
    <div id="search-results" class="search-results"></div>
  </div>
</div>
```

**`<main>` タグ**: `<main>` を `<main class="bx--content">` に変更。

**CT-GenAI Carbon Shell フッターテンプレート**:
```html
<footer class="app-footer">
  <span><a href="index.html">CT-GenAI v1.0</a></span>
  <span>© 2026 · ISTQB®</span>
</footer>
```

---

### 3. `ct-genai/index.html` を作成

旧 `index.html`（現在は新ポータルに置き換えられている）の CT-GenAI 部分を独立したホームページとして作成。

参照: 元の old `index.html` のコンテンツは git log で確認できる（コミット前）。

必要コンテンツ:
- CT-GenAI 5章の LO カード一覧
- 学習進捗サマリー（既存の localStorage ベースのロジックを流用）
- 試験情報（試験時間 65分、40問、K1-K3）
- 各ページへのリンクカード（学習/演習/用語集/対訳/スライド）

---

### 4. `manifest.json` と `sw.js` を更新

**`manifest.json`**: `name` を `"ISTQB Study Portal"` に、`start_url` を `"/"` に変更。

**`sw.js`**: キャッシュ名を `istqb-v1` に更新し、新ファイル一覧を追加:
```
shared/css/carbon-theme.css
shared/css/shell.css
shared/js/theme.js
shared/js/shell.js
shared/js/search.js
ct-ai/index.html
ct-ai/chapters/chapter-0.html 〜 chapter-7.html
ct-ai/chapters/glossary.html
ct-ai/chapters/references.html
ct-ai/chapters/appendices.html
ct-ai/css/ct-ai.css
ct-ai/js/toc.js
ct-ai/js/glossary-data.js
ct-ai/js/quiz-data.js
ct-genai/index.html
ct-genai/study.html 等
```

---

### 5. CT-AI サイドナビの不整合修正

`ct-ai/chapters/references.html` のサイドナビには `chapter-0.html` へのリンクが欠けている（他ページと不整合）。修正が必要。

---

## 技術メモ

### ファイル参照パス（相対パス）
| 場所 | shared/ への参照 |
|------|----------------|
| `index.html` (root) | `shared/css/carbon-theme.css` |
| `ct-ai/chapters/*.html` | `../../shared/css/carbon-theme.css` |
| `ct-genai/*.html` | `../shared/css/carbon-theme.css` |

### CSS クラスリファレンス（shell.css/ct-ai.css）
- `.bx--header`, `.bx--side-nav`, `.bx--content` — Carbon Shell レイアウト
- `.chapter-hero.chN` — 章ヒーロー（N = 0-7）
- `.bilingual-section` — 英日2カラム（grid: 1fr 2.2fr）
- `.en-original` — `<details>` 英語原文アコーディオン
- `.toc-sidebar`, `.toc-list`, `.toc-main` — TOC + コンテンツレイアウト
- `.lo-badge.k2/.k3/.ho` — LO レベルバッジ
- `.lo-chip` — ヒーロー内 LO チップ
- `.info-box` — 情報ボックス（`.hands-on` バリアント付き）
- `.content-table` — Carbon スタイル テーブル
- `.formula-box` — 数式ボックス（第3章用）
- `.confusion-matrix`, `.cm-tp/.cm-fp/.cm-fn/.cm-tn` — 混同行列（第3章用）

### ダークモード
- `<html data-carbon-theme="white">` / `"g100"`
- `localStorage` キー: `istqb-theme`
- `shared/js/theme.js` が制御

### TOC スクロール同期
- `ct-ai/js/toc.js` が IntersectionObserver を使用
- セクションは `id="s-N-M"` 形式（例: `id="s-6-1"`)
- TOC リンクは `href="#s-N-M"` 形式

---

## Git 作業

```bash
# コミット（完了済み作業をステージング）
git add -A
git commit -m "feat: migrate to multi-cert Carbon portal (partial - ch6/ch7 pending)"
git push -u origin claude/system-improvement-suggestions-GeoEV
```

---

*このドキュメントは Claude Sonnet 4.6 が作成。Codex への引き継ぎ用。*
