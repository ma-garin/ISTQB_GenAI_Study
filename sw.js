const CACHE_NAME = 'istqb-study-v6';
const ASSETS = [
  './',
  './index.html',
  './ct-ai/index.html',
  './ct-ai/chapters/chapter-0.html',
  './ct-ai/chapters/chapter-1.html',
  './ct-ai/chapters/chapter-6.html',
  './ct-ai/chapters/chapter-7.html',
  './ct-ai/chapters/glossary.html',
  './ct-ai/assets/css/app.css',
  './ct-ai/assets/css/carbon-overrides.css',
  './ct-ai/assets/js/app.js',
  './ct-ai/assets/js/theme.js',
  './ct-ai/assets/js/search.js',
  './ct-ai/assets/js/toc.js',
  './ct-genai/index.html',
  './ct-genai/quiz.html',
  './ct-genai/glossary.html',
  './ct-genai/study.html',
  './ct-genai/slides.html',
  './ct-genai/syllabus-ja.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});
