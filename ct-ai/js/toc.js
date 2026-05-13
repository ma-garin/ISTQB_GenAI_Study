/* CT-AI — TOC Scroll Sync via IntersectionObserver */
(function () {
  function init() {
    const tocLinks = document.querySelectorAll('.toc-list a[href^="#"]');
    if (!tocLinks.length) return;

    const sections = Array.from(tocLinks).map(a => {
      const id = a.getAttribute('href').slice(1);
      return { el: document.getElementById(id), link: a };
    }).filter(s => s.el);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const active = sections.find(s => s.el === entry.target);
        if (!active) return;
        tocLinks.forEach(l => l.classList.remove('is-active'));
        active.link.classList.add('is-active');
      });
    }, {
      rootMargin: '-48px 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => obs.observe(s.el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
