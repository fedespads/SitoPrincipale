const CACHE_NAME = 'block-puzzle-v1';
const ASSETS = [
  '/BlockPuzzle/',
  '/BlockPuzzle/index.html',
  '/BlockPuzzle/style.css',
  '/BlockPuzzle/script.js',
  '/BlockPuzzle/overlay.png',
  '/BlockPuzzle/manifest.json',
  '/BlockPuzzle/icon-192x192.png',
  '/BlockPuzzle/icon-512x512.png'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Cache new resources if they're part of our app
            if (event.request.url.startsWith(self.location.origin)) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
            }
            return response;
          });
      })
  );
}); 