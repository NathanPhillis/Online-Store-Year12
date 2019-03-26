importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
  console.log("mems");
} else {
  console.error(`Workbox has failed to load.`);
}