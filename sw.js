if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>n(e,r),l={module:{uri:r},exports:t,require:o};s[r]=Promise.all(i.map((e=>l[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-cfcf5a78"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-CnwZGuQc.css",revision:null},{url:"assets/js/index-CTXsQgTg.js",revision:null},{url:"index.html",revision:"138e9d709c69cfce9323d4dbc0a2b30e"},{url:"registerSW.js",revision:"70d7070968661cae3d09185231fba274"},{url:"manifest.webmanifest",revision:"5a8c0d99ebae8c8ea32a8c190a424b0e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.(?:mp4|webm|ogg)$/,new e.CacheFirst({cacheName:"video-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
