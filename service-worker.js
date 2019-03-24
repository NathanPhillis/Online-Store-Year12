importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
  console.log("Workbox has loaded.");
} else {
  console.error(`Workbox has failed to load.`);
}