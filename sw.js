// ======================================================
// Service Worker - University Website
// ======================================================

const CACHE_NAME = "university-cache-v6";

const STATIC_ASSETS = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/manifest.json",
    "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"
];


// ======================================================
// INSTALL
// ======================================================

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(STATIC_ASSETS);
        })

    );

});


// ======================================================
// ACTIVATE
// ======================================================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames.map(name => {

                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }

                })

            );

        })

    );

    self.clients.claim();

});


// ======================================================
// FETCH (Network First Strategy)
// ======================================================

self.addEventListener("fetch", event => {

    const requestURL = new URL(event.request.url);

    // تجاهل API
    if (
        requestURL.hostname.includes("countapi.xyz") ||
        requestURL.hostname.includes("google-analytics")
    ) {
        return;
    }

    event.respondWith(

        fetch(event.request)

        .then(networkResponse => {

            if (!networkResponse || networkResponse.status !== 200) {
                return networkResponse;
            }

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME)
            .then(cache => {

                if (
                    !requestURL.href.includes("mediafire") &&
                    !requestURL.href.includes("drive.google")
                ) {
                    cache.put(event.request, responseClone);
                }

            });

            return networkResponse;

        })

        .catch(() => {

            return caches.match(event.request)
            .then(cachedResponse => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return new Response("أنت غير متصل بالإنترنت", {
                    status: 503,
                    statusText: "Offline"
                });

            });

        })

    );

});


// ======================================================
// FORCE UPDATE MESSAGE
// ======================================================

self.addEventListener("message", event => {

    if (event.data === "skipWaiting") {
        self.skipWaiting();
    }

});
