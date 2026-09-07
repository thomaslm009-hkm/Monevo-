/**
 * MONEVO — Progressive Web App Service Worker
 * Enables offline access, asset caching, and standalone home-screen app experience.
 */

const CACHE_NAME = 'monevo-pwa-cache-v3';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './images/monevo-logo.svg',
  './images/monevo-logo.png',
  './images/icon-192.png',
  './images/icon-512.png',
  './pages/login.html',
  './pages/dashboard.html',
  './pages/expenses.html',
  './pages/budget.html',
  './pages/meal-planner.html',
  './pages/restaurant.html',
  './pages/bill-splitter.html',
  './pages/savings.html',
  './pages/discounts.html',
  './pages/analytics.html',
  './pages/profile.html'
];

// Install Event — Pre-cache static shell & skip waiting
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Monevo SW] Pre-caching offline shell v3');
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate Event — Cleanup all old caches immediately and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[Monevo SW] Deleting legacy cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event — Network First (online fetches fresh code; offline uses cache)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache when offline
        return caches.match(event.request);
      })
  );
});
