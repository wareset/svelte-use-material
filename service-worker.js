!function(){"use strict";const e=["client/index.0f196fca.js","client/MDCFormField.c6ad7bed.js","client/Elevation.859c353a.js","client/IconButton.11238b4c.js","client/LinearProgress.38c85438.js","client/MDCTouch.fdd7f915.js","client/Typography.83f4e01f.js","client/Checkbox.89154de1.js","client/LayoutGrid.81b5b2d6.js","client/ImageList.225200b2.js","client/Snackbar.1c4b44d1.js","client/Button.c45bdfdc.js","client/Heading.4d47df06.js","client/Dialog.328dabac.js","client/Slider.6187c8e6.js","client/Switch.1b016130.js","client/[slug].b0438cfd.js","client/Radio.ef696186.js","client/Fab.a63c44ec.js","client/Tabs.57f4b881.js","client/client.82990e35.js"].concat(["service-worker-index.html","favicon.png","logo-192.png","logo-512.png","main.9ffc8ab3.css","manifest.json","mdc.css","successkid.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1597981989190").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1597981989190"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1597981989190").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const s=await t.match(e.request);if(s)return s;throw c}}))))})}();