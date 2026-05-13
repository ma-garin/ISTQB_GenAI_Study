/* ISTQB Study Portal — Search */
(function () {
  const INDEX = [
    // CT-AI
    { title: 'CT-AI ホーム', path: 'ct-ai/index.html', section: 'CT-AI v2.0', keywords: 'AI testing machine learning ISTQB' },
    { title: '第0章: Introduction（序文）', path: 'ct-ai/chapters/chapter-0.html', section: 'CT-AI v2.0', keywords: 'introduction preamble business outcomes learning objectives' },
    { title: '第1章: Introduction to Artificial Intelligence', path: 'ct-ai/chapters/chapter-1.html', section: 'CT-AI v2.0', keywords: 'AI artificial intelligence narrow general super ML deep learning generative hardware frameworks regulations' },
    { title: '第2章: Quality Characteristics for AI-Based Systems', path: 'ct-ai/chapters/chapter-2.html', section: 'CT-AI v2.0', keywords: 'quality characteristics ISO 25010 safety explainability acceptance criteria' },
    { title: '第3章: Machine Learning', path: 'ct-ai/chapters/chapter-3.html', section: 'CT-AI v2.0', keywords: 'machine learning supervised unsupervised reinforcement neural network training validation test dataset confusion matrix' },
    { title: '第4章: Testing AI-Based Systems', path: 'ct-ai/chapters/chapter-4.html', section: 'CT-AI v2.0', keywords: 'testing AI locked adaptive statistical test oracle generative AI LLM red teaming test levels risk-based' },
    { title: '第5章: Input Data Testing for ML Systems', path: 'ct-ai/chapters/chapter-5.html', section: 'CT-AI v2.0', keywords: 'input data bias data pipeline representativeness dataset constraint label correctness' },
    { title: '第6章: Model Testing for ML Systems', path: 'ct-ai/chapters/chapter-6.html', section: 'CT-AI v2.0', keywords: 'model testing adversarial metamorphic drift overfitting underfitting A/B back-to-back' },
    { title: '第7章: Machine Learning Development Testing', path: 'ct-ai/chapters/chapter-7.html', section: 'CT-AI v2.0', keywords: 'ML development deployment testing risks' },
    { title: 'CT-AI 用語集', path: 'ct-ai/chapters/glossary.html', section: 'CT-AI v2.0', keywords: 'glossary terms AI ML definitions' },
    { title: 'CT-AI 参考文献', path: 'ct-ai/chapters/references.html', section: 'CT-AI v2.0', keywords: 'references standards ISTQB documents' },
    { title: 'CT-AI 付録（BO/LOマトリクス）', path: 'ct-ai/chapters/appendices.html', section: 'CT-AI v2.0', keywords: 'appendix business outcomes learning objectives matrix' },
    // CT-GenAI
    { title: 'CT-GenAI ホーム', path: 'ct-genai/index.html', section: 'CT-GenAI v1.0', keywords: 'generative AI GenAI study' },
    { title: 'CT-GenAI 学習コンテンツ', path: 'ct-genai/study.html', section: 'CT-GenAI v1.0', keywords: '生成AI prompt LLM hallucination bias evaluation' },
    { title: 'CT-GenAI 問題演習', path: 'ct-genai/quiz.html', section: 'CT-GenAI v1.0', keywords: '問題 クイズ 演習 exam questions' },
    { title: 'CT-GenAI 用語集', path: 'ct-genai/glossary.html', section: 'CT-GenAI v1.0', keywords: '用語 glossary terms' },
    { title: 'CT-GenAI シラバス対訳', path: 'ct-genai/syllabus-ja.html', section: 'CT-GenAI v1.0', keywords: 'syllabus Japanese translation' },
  ];

  function search(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.section.toLowerCase().includes(q)
    ).slice(0, 10);
  }

  function getBase() {
    // Resolve path relative to repo root regardless of current page depth
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    // Find repo root by looking for known top-level markers
    // Assume structure: /ISTQB_GenAI_Study/... or deployed root
    let depth = 0;
    for (let i = parts.length - 1; i >= 0; i--) {
      if (['ct-ai', 'ct-genai', 'shared', 'chapters'].includes(parts[i])) {
        depth = parts.length - i;
        break;
      }
    }
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  function renderResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = '<p class="search-empty">見つかりませんでした。キーワードを変えてみてください。</p>';
      return;
    }
    const base = getBase();
    container.innerHTML = results.map(r => `
      <a href="${base}${r.path}" class="search-result-item">
        <span class="result-title">${r.title}</span>
        <span class="result-path">${r.section} › ${r.path}</span>
      </a>
    `).join('');
  }

  function init() {
    const dialog  = document.getElementById('search-dialog');
    const input   = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!dialog || !input || !results) return;

    let timeout;

    // Open
    document.querySelectorAll('[data-search-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        dialog.removeAttribute('hidden');
        input.value = '';
        results.innerHTML = '';
        input.focus();
      });
    });

    // Close
    dialog.addEventListener('click', e => {
      if (e.target === dialog) dialog.setAttribute('hidden', '');
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') dialog.setAttribute('hidden', '');
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        dialog.removeAttribute('hidden');
        input.value = '';
        results.innerHTML = '';
        input.focus();
      }
    });

    // Search
    input.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        renderResults(search(input.value.trim()), results);
      }, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
