/* ISTQB Study Portal — Dark Mode Manager */
(function () {
  const STORAGE_KEY = 'istqb-theme';
  const DARK = 'g100';
  const LIGHT = 'white';

  function applyTheme(dark) {
    const theme = dark ? DARK : LIGHT;
    document.documentElement.setAttribute('data-carbon-theme', theme);
    document.querySelectorAll('[data-theme-icon]').forEach(el => {
      el.textContent = dark ? '☀' : '🌙';
      el.setAttribute('aria-label', dark ? 'ライトモードに切替' : 'ダークモードに切替');
      el.setAttribute('title',      dark ? 'ライトモードに切替' : 'ダークモードに切替');
    });
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  }

  function init() {
    let saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = saved ? saved === DARK : prefersDark;
    applyTheme(useDark);

    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-theme-toggle]');
      if (!btn) return;
      const isDark = document.documentElement.getAttribute('data-carbon-theme') === DARK;
      applyTheme(!isDark);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      let s;
      try { s = localStorage.getItem(STORAGE_KEY); } catch (_) {}
      if (!s) applyTheme(e.matches);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
