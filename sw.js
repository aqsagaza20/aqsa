// ملف Service Worker منفصل للتخزين المؤقت
const CACHE_NAME = 'university-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(error => console.log('خطأ في التخزين المؤقت:', error))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }))
        )
    );
});

self.addEventListener('fetch', event => {
    // تجاهل طلبات API
    if (event.request.url.includes('api.countapi.xyz')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        // لا تقم بتخزين روابط خارجية كبيرة
                        if (!response || response.status !== 200 || 
                            event.request.url.includes('mediafire') ||
                            event.request.url.includes('drive.google')) {
                            return response;
                        }
                        
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseToCache))
                            .catch(() => {});
                        return response;
                    })
                    .catch(() => {
                        // فشل الاتصال بالإنترنت
                        return new Response('غير متصل', { status: 503 });
                    });
            })
    );
});
