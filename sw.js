if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),a={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b994f779"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-iufXbhVu.css",revision:null},{url:"assets/js/index-ZChkaBwD.js",revision:null},{url:"index.html",revision:"a5ff7faa5467471b76d29de0edadf47f"},{url:"registerSW.js",revision:"70d7070968661cae3d09185231fba274"},{url:"manifest.webmanifest",revision:"5a8c0d99ebae8c8ea32a8c190a424b0e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.(?:mp4|webm|ogg)$/,new e.CacheFirst({cacheName:"video-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(?:webp|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
