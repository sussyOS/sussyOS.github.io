
const CACHE = 'pwa-shell-v2';
const FILES = ['/', '/index.html', '/manifest.json'];
self.addEventListener('install', evt => { evt.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', evt => evt.waitUntil(self.clients.claim()));
self.addEventListener('fetch', evt => {
  if(evt.request.mode === 'navigate'){
    evt.respondWith(fetch(evt.request).catch(()=>caches.match('/index.html')));
    return;
  }
  evt.respondWith(caches.match(evt.request).then(r=>r||fetch(evt.request)));
});
