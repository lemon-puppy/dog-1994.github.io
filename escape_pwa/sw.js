importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
var cacheStorageKey = 'minimal-pwa-1'
var cacheList = [
  '/',
  './index.html',
  './main.css',
  './icon.png'
]
/**
 * 删除缓存
 * @param {*} key 
 */
const deleteCache = async (key) => {
  await caches.delete(key);
};

/**
 * 删除旧的缓存
 */
const deleteOldCaches = async () => {
  const cacheKeepList = [cacheName];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheStorageKey)
      .then(function (cache) {
        cache.addAll([
          './',
          './icons',
          './src',
          './index.html',
        ]);
      }).then(() =>
        self.skipWaiting()
      )
    // caches.open(cacheStorageKey)
    //   .then(cache => cache.addAll(cacheList))
    //   .then(() => self.skipWaiting())
  )
})
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      if (response != null) {
        return response
      }
      return fetch(e.request.url)
    })
  )
})
self.addEventListener('activate', function (e) {
  e.waitUntil(
    //获取所有cache名称
    caches.keys().then(cacheNames => {
      return Promise.all(
        // 获取所有不同于当前版本名称cache下的内容
        cacheNames.filter(cacheNames => {
          return cacheNames !== cacheStorageKey
        }).map(cacheNames => {
          return caches.delete(cacheNames)
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})
