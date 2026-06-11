const CACHE_NAME = 'bancho-steak-v1';

// 这里已经把你联网的像素字体包完美加入缓存列表
const ASSETS = [
  './',
  './index.html',
  './dave-ui-theme.css',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
];

// 安装时缓存所有资源（包括谷歌像素字体）
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
