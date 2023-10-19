'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "a625b216214701706bff587033ea2518",
"/": "a625b216214701706bff587033ea2518",
"version.json": "64a9a073821170e20abb79cf437c55b1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin": "9f5c7673c6fb0f75ac29a25d60097d52",
"assets/FontManifest.json": "8eb733be99d5c8f9e468202354e0f5d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/AssetManifest.bin.json": "523551fc16f39e751ef1bb2294d19133",
"assets/assets/images/2.0x/ic_fab.png": "8aeba9a4502ff8ba536bd0bd5969a3f6",
"assets/assets/images/2.0x/ic_ratings.png": "f177aa2601ef476afddd3e8cae9c8027",
"assets/assets/images/2.0x/ic_black_back_arrow_round.png": "3b7459224b1659be7f19e3d028827f32",
"assets/assets/images/2.0x/ic_black_back_arrow.png": "f539afb890a1bfc95dfc2e4b83c67a27",
"assets/assets/images/2.0x/ic_menu_dots.png": "d7fc17064d1d9104b790270c1b43128d",
"assets/assets/images/2.0x/ic_bell.png": "b352ea570c01b04f9ab3d444624dd057",
"assets/assets/images/2.0x/ic_like.png": "f3eee3b7b0e9fd1fbab64aee1f341c51",
"assets/assets/images/2.0x/ic_bag.png": "c6b6f3f3043473f72075fe2a920ef48e",
"assets/assets/images/2.0x/ic_search.png": "5079a25dba36665013e9e2106064724f",
"assets/assets/images/2.0x/ic_cube_view.png": "1873aa7dbea372a8f5b14b1d5837afca",
"assets/assets/images/2.0x/ic_add_to_cart.png": "0753f65f9e1ea911ed260d14fbafa44b",
"assets/assets/images/2.0x/ic_lock.png": "3b80221378683abf26f935f6f4ad6e03",
"assets/assets/images/2.0x/ic_settings.png": "194afffd241f40d333864e979c2b659a",
"assets/assets/images/ic_fab.png": "36e2bebed5df82f687a0dd65e71aa7aa",
"assets/assets/images/ic_ratings.png": "0a4bcb9e0fda89a4019f2c9394b3662b",
"assets/assets/images/ic_black_back_arrow_round.png": "dda9a010cc78dd589796af9675e8759d",
"assets/assets/images/ic_cat_prod_6.png": "208fddbc8559f33824b7d54b6054477d",
"assets/assets/images/ic_product_detail_image_3.png": "012832094c4369277b998dc726fa9a80",
"assets/assets/images/ic_product_detail.png": "c25a51eace9d9d8310bd82920ad02453",
"assets/assets/images/ic_black_back_arrow.png": "87a89825cad375e0e1c5b724a43473d9",
"assets/assets/images/ic_menu_dots.png": "a97140f02d7889206f12824460616010",
"assets/assets/images/ic_bell.png": "f69bb66f2bdcd8bb889dcf6c0abfa7b4",
"assets/assets/images/ic_cat_prod_4.png": "70d8b0906602444153052b2f78494eb2",
"assets/assets/images/ic_product_2.png": "012832094c4369277b998dc726fa9a80",
"assets/assets/images/mindful_eng.png": "97dc9d435d2e7f20ab4ed1cbd3948d01",
"assets/assets/images/3.0x/ic_fab.png": "5207428d496d79350aa6910d62ba7263",
"assets/assets/images/3.0x/ic_ratings.png": "57959bb0382f7dab6c1e308bb3a9d3d6",
"assets/assets/images/3.0x/ic_black_back_arrow_round.png": "34ee9233f04bfc6871a502cc34bb142b",
"assets/assets/images/3.0x/ic_black_back_arrow.png": "51287e30bc7f3fe85e4e55f2e4d71f42",
"assets/assets/images/3.0x/ic_menu_dots.png": "b6f10ca807cffb551b882355480a238b",
"assets/assets/images/3.0x/ic_bell.png": "1a4930d1d02c59db460f2ec6d3bc255d",
"assets/assets/images/3.0x/ic_like.png": "fe5db4181754d0a67dad5208111b79f2",
"assets/assets/images/3.0x/ic_bag.png": "294694ac01ade78e4b072499740cbe20",
"assets/assets/images/3.0x/ic_search.png": "6ab034c010c1d4a5069736b2c73d5a1e",
"assets/assets/images/3.0x/ic_cube_view.png": "be1c28e09000f2ca18f64dd0f7f7197a",
"assets/assets/images/3.0x/ic_add_to_cart.png": "05804ef9c0cfd3fdaef2796b23b19df8",
"assets/assets/images/3.0x/ic_lock.png": "6f94717380393c375c0ae3cfb22cae0d",
"assets/assets/images/3.0x/ic_settings.png": "06bcd11fe1996876914b7350aa275fb0",
"assets/assets/images/ic_product_1.png": "8f6df544ae5a2453c320a18ff3d75e0e",
"assets/assets/images/ic_like.png": "beeaec3388b9d0b4cdf6c3fcdedfc83c",
"assets/assets/images/ic_bag.png": "3e1799771468b7a60e06eb26f6d3486e",
"assets/assets/images/ic_cat_prod_2.png": "ed25200fa6e166d485a564318caf4666",
"assets/assets/images/ic_search.png": "eb58fecec47279acd6bc036f3591ec52",
"assets/assets/images/ic_cube_view.png": "e21d3c4c4049824ff51ac6553ade001b",
"assets/assets/images/ic_product_detail_image_1.png": "099503732f07150c9bfb7b1f4f186d44",
"assets/assets/images/ic_add_to_cart.png": "dd74875e714b46308081d3d58ad6852a",
"assets/assets/images/ic_cat_prod_5.png": "2d6683ce91594391e4dcb9be856b76f0",
"assets/assets/images/ic_cat_prod_1.png": "583a25a0093fac4efc0e2de7a0d0cdba",
"assets/assets/images/ic_lock.png": "b17d6151178482ba1688a979d8e03b9e",
"assets/assets/images/ic_product_detail_image_2.png": "2ac04efa9db9f5221283691427615deb",
"assets/assets/images/ic_settings.png": "c607ec0afcc301572534d0145236b61a",
"assets/assets/images/ic_profile_pic.png": "f6ad045f326e0637ab1589df6a02430b",
"assets/assets/images/ic_cat_prod_3.png": "979a7fecbb7736a31059145d0177fb40",
"assets/assets/fonts/Averta-W01-Semibold.ttf": "5d640771234976607eb77f96b3e69c1c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "99b1d5f40bb9035231d42fd2823acb52",
"assets/AssetManifest.json": "1287f381e32e55a0684599084db532df",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.js.symbols": "d962dda3b28e2797a180f8ed6fa93810",
"canvaskit/skwasm.js.symbols": "1d9e5349f9dc8ab814f70d1c17fa92ce",
"canvaskit/canvaskit.wasm": "28990b21b43abaac1875a901df4939f7",
"canvaskit/chromium/canvaskit.js.symbols": "be1374a2b70ef0b5c613a08e82315f87",
"canvaskit/chromium/canvaskit.wasm": "959dbd1a06ac79075eaf4b1081dd3e14",
"canvaskit/chromium/canvaskit.js": "ee5174694d4a451c41b16dc39ef73808",
"canvaskit/skwasm.wasm": "8484bd572ac2ca9467b0a899d6971a19",
"canvaskit/canvaskit.js": "93a63b18433d5c16dd17b5d9ab497edb",
"manifest.json": "5919fe52b16f9a0ca0fb3a41d27aab2a",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "702ead7bf0c6ab06165fa327b694c80c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
