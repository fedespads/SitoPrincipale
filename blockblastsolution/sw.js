const CACHE_NAME = 'blockblast-v1';
const ASSETS = [
    '/blockblastsolution/',
    '/blockblastsolution/index.html',
    '/blockblastsolution/index.css',
    '/blockblastsolution/index.js',
    '/blockblastsolution/manifest.json',
    'https://fedespada.com/font/SF-Pro-Display-Bold.ttf',
    'https://fedespada.com/font/Bebas.ttf'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            })
        ))
    );
}); 