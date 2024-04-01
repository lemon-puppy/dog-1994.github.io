importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
var cacheStorageKey = 'minimal-pwa-1'
var cacheList = [
  '/',
  'index.html',
  'main.css',
  'icon.png'
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
  const cacheKeepList = [cacheStorageKey];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheStorageKey).then(function (cache) {
      cache.addAll([
        './index.html',
        './icon.png',
      ]);
    })
  )
})
/**
 * 缓存优先
 * @param {*} request 
 * @returns 
 */
const cacheFirst = async (request) => {
  // 从缓存中读取 respondWith表示拦截请求并返回自定义的响应
  const responseFromCache = await caches.match(request);
  console.log('responseFromCache', responseFromCache);
  if (responseFromCache) {
    return responseFromCache
  }
  // 如果缓存中没有，就从网络中请求
  const responseFromServer = await fetch(request);
  const cache = await caches.open(cacheStorageKey);
  // 将请求到的资源添加到缓存中
  cache.put(request, responseFromServer.clone());
  return responseFromServer;
}

self.addEventListener("fetch", (event) => {
  // 拦截请求
  console.log('caches match',);
  console.log('fetch', event.request.url);
  event.respondWith(cacheFirst(event.request));
});
self.addEventListener('activate', function (event) {
  console.log('activate');
  // 删除旧的缓存，直到清除完成后才继续激活
  event.waitUntil(deleteOldCaches());
});
