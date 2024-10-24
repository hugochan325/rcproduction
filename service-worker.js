const CACHE_NAME = 'my-app-cache-v1';
const ASSETS_TO_CACHE = [
  
];

// Install event: cache the essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: Serve images from 'assets/images/' dynamically, cache them
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Check if the request is for an image in the assets/images directory
  if (requestUrl.pathname.startsWith('/assets/images/')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Serve the image from the cache if available
        }

        // Fetch the image from the network and cache it dynamically
        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Cache the image
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    // Default behavior for other requests (optional, handle according to your needs)
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});
