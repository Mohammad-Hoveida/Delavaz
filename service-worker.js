self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("delavaz-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index",
        "/main.jade",
        "/css/jquery.mobile-1.4.5.min.css",
        "/css/Style.css",
        "/css/font.css",
        "/js/jquery.mobile-1.4.5.min.js",
        "/js/jquery.js",
        "/images/icon.png",
        "/images/splash.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});



