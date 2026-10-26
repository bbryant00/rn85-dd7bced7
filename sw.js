const C='m-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','style.css','app.js','minisearch.js','text.json','manifest.webmanifest','apple-touch-icon.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.open(C).then(async c=>{const u=e.request.url.split('#')[0];const hit=await c.match(u,{ignoreSearch:true});if(hit)return hit;const r=await fetch(e.request);if(r.ok&&u.startsWith(self.location.origin))c.put(u,r.clone());return r}).catch(()=>caches.match('index.html')))});
