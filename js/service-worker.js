self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('silvafutmz').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/news.js'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
