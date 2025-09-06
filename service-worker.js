self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("delavaz-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index",
        "/main",
        "/assets/css/jquery.mobile-1.4.5.min.css",
        "/assets/css/Style.css",
        "/assets/css/fonts.css",
        "/app.js",
        "/assets/js/jquery.mobile-1.4.5.min.js",
        "/assets/js/jquery.js",
        "/assets/images/icon.png",
        "/assets/images/splash.png"
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
