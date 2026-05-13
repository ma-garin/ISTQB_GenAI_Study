const STORAGE_KEY = "istqb-ctai-theme";
const DARK = "g100";
const LIGHT = "white";

function preferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-carbon-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
  const isDark = theme === DARK;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.textContent = isDark ? "Light" : "Dark";
    button.setAttribute("aria-label", isDark ? "ライトモードに切替" : "ダークモードに切替");
    button.setAttribute("title", isDark ? "ライトモードに切替" : "ダークモードに切替");
  });
}

export function initTheme() {
  applyTheme(preferredTheme());

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    const current = document.documentElement.getAttribute("data-carbon-theme");
    applyTheme(current === DARK ? LIGHT : DARK);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    applyTheme(event.matches ? DARK : LIGHT);
  });
}
