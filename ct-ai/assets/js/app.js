import { initTheme } from "./theme.js";

const ENGLISH_KEY = "istqb-ctai-show-english";

const searchIndex = [
  { title: "CT-AI ホーム", href: "index.html", terms: "ct-ai ai testing syllabus business outcomes learning objectives" },
  { title: "第0章 序文", href: "chapter-0.html", terms: "introduction purpose career path business outcomes exam structure" },
  { title: "第1章 AIの概要", href: "chapter-1.html", terms: "ai-based system conventional system narrow ai general ai super ai generative ai foundation model gpu tpu" },
  { title: "第2章 品質特性", href: "chapter-2.html", terms: "quality characteristics explainability safety acceptance criteria iso 25059" },
  { title: "第3章 機械学習", href: "chapter-3.html", terms: "machine learning ml workflow confusion matrix deep neural network rag" },
  { title: "第4章 AIシステムのテスト", href: "chapter-4.html", terms: "test oracle statistical testing red teaming generative ai risk-based testing" },
  { title: "第5章 入力データテスト", href: "chapter-5.html", terms: "input data testing bias data pipeline representativeness label correctness" },
  { title: "第6章 モデルテスト", href: "chapter-6.html", terms: "model testing adversarial testing metamorphic testing drift overfitting underfitting ab testing" },
  { title: "第7章 ML開発テスト", href: "chapter-7.html", terms: "ml development testing shadow deployment canary release deployment testing" },
  { title: "用語集", href: "glossary.html", terms: "glossary ai-specific terms explainability overfitting underfitting drift foundation model" },
];

function initEnglishToggle() {
  const saved = localStorage.getItem(ENGLISH_KEY);
  const showEnglish = saved === null ? true : saved === "1";
  document.body.classList.toggle("hide-english", !showEnglish);
  document.querySelectorAll("[data-english-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(showEnglish));
    button.textContent = showEnglish ? "English ON" : "English OFF";
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-english-toggle]");
    if (!button) return;
    const next = document.body.classList.contains("hide-english");
    document.body.classList.toggle("hide-english", !next);
    localStorage.setItem(ENGLISH_KEY, next ? "1" : "0");
    document.querySelectorAll("[data-english-toggle]").forEach((item) => {
      item.setAttribute("aria-pressed", String(next));
      item.textContent = next ? "English ON" : "English OFF";
    });
  });
}

function initSidebar() {
  const trigger = document.querySelector("[data-sidebar-trigger]");
  const sideNav = document.querySelector(".bx--side-nav");
  const overlay = document.getElementById("sidebar-overlay");
  if (!trigger || !sideNav || !overlay) return;

  const close = () => {
    sideNav.classList.remove("is-open");
    overlay.style.display = "none";
    trigger.setAttribute("aria-expanded", "false");
  };

  trigger.addEventListener("click", () => {
    const open = !sideNav.classList.contains("is-open");
    sideNav.classList.toggle("is-open", open);
    overlay.style.display = open ? "block" : "none";
    trigger.setAttribute("aria-expanded", String(open));
  });
  overlay.addEventListener("click", close);
}

function initProgress() {
  const bar = document.querySelector("[data-progress-bar]");
  if (!bar) return;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };
  update();
  document.addEventListener("scroll", update, { passive: true });
}

function initTocSync() {
  const links = [...document.querySelectorAll(".toc-list a[href^='#']")];
  if (!links.length) return;
  const map = new Map(links.map((link) => [link.getAttribute("href").slice(1), link]));
  const sections = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove("is-active"));
        map.get(entry.target.id)?.classList.add("is-active");
      });
    },
    { rootMargin: "-25% 0px -65% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

function normalizedHref(href) {
  const inChapter = location.pathname.includes("/chapters/");
  if (inChapter && href === "index.html") return "../index.html";
  if (inChapter) return href;
  if (href === "index.html") return "index.html";
  if (href.endsWith(".html") && href !== "../index.html") return `chapters/${href}`;
  return href;
}

function renderResults(query, container) {
  const q = query.trim().toLowerCase();
  if (!q) {
    container.innerHTML = "";
    return;
  }
  const results = searchIndex.filter((item) => `${item.title} ${item.terms}`.toLowerCase().includes(q)).slice(0, 8);
  container.innerHTML = results.length
    ? results
        .map(
          (item) =>
            `<a class="search-result" href="${normalizedHref(item.href)}"><strong>${item.title}</strong><br><span>${item.terms}</span></a>`,
        )
        .join("")
    : `<p class="search-result">該当する項目がありません。</p>`;
}

function initSearch() {
  const dialog = document.getElementById("search-dialog");
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const headerInput = document.querySelector("[data-header-search]");
  if (!dialog || !input || !results) return;

  const open = (value = "") => {
    dialog.hidden = false;
    input.value = value;
    renderResults(value, results);
    input.focus();
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-search-open]")) open();
    if (!dialog.hidden && !event.target.closest(".search-modal") && !event.target.closest("[data-search-open]")) {
      dialog.hidden = true;
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      open();
    }
    if (event.key === "Escape") dialog.hidden = true;
  });

  input.addEventListener("input", () => renderResults(input.value, results));
  headerInput?.addEventListener("input", () => open(headerInput.value));
}

function initCodeCopy() {
  document.querySelectorAll("pre code").forEach((code) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code";
    button.textContent = "Copy";
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(code.textContent || "");
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    });
    code.parentElement?.append(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initEnglishToggle();
  initSidebar();
  initProgress();
  initTocSync();
  initSearch();
  initCodeCopy();
});
