/* ISTQB Study Portal — Shell Navigation */
(function () {
  function init() {
    // Mobile sidebar toggle
    const trigger = document.querySelector('[data-sidebar-trigger]');
    const sidebar = document.querySelector('.bx--side-nav');
    const overlay = document.getElementById('sidebar-overlay');

    if (trigger && sidebar) {
      trigger.addEventListener('click', () => {
        const open = sidebar.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', open);
        if (overlay) overlay.style.display = open ? 'block' : 'none';
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        if (sidebar) sidebar.classList.remove('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        overlay.style.display = 'none';
      });
    }

    // Active nav link highlighting
    const path = window.location.pathname;
    document.querySelectorAll('.bx--side-nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      // Normalize: strip leading / and trailing /
      const linkPath = href.replace(/^\//, '').replace(/\/$/, '');
      const curPath  = path.replace(/^\//, '').replace(/\/$/, '');
      if (curPath === linkPath || (linkPath && curPath.endsWith(linkPath))) {
        link.classList.add('bx--side-nav__link--current');
        const item = link.closest('.bx--side-nav__item');
        if (item) item.classList.add('bx--side-nav__item--active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
