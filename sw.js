if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.91cd7fcf.js",revision:null},{url:"assets/index.9ac6d75d.css",revision:null},{url:"index.html",revision:"e05cd2d781528580a9461b00f0415d8f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"5fb528be59ede91eb0accacdcf5cfc49"},{url:"android-chrome-512x512.png",revision:"3d3b991d93de54ed0984e29924acbf79"},{url:"manifest.webmanifest",revision:"859104e08b8deb01ca7c6a7b5e7e90b0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
