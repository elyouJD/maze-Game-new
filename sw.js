const cacheName = 'maze-game-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './pave (1).png',
  './wall (1) (1).png',
  './mouse (1).png',
  './cat (1).png',
  './applause.mp3',
  './crowd.mp3'
];

// تثبيت الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// جلب الموارد من الكاش أولًا
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
