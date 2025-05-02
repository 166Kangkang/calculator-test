self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("calculator-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/manifest.json",
        "/images/icon-192x192.png",
        "/images/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = ["calculator-cache"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
