const CACHE_NAME = 'bancho-steak-v1';

// 在这里，把联网的像素包网址也加进去
const ASSETS = [
  './',
  './index.html',
  './dave-ui-theme.css',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap' // 👈 举例：换成你代码里实际联网的那个网址！
];

// 安装时缓存所有资源（包括那个外链网址）
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 拦截请求，优先使用本地缓存
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
