---
title: "electron preload ⇒ renderer"
layout: "doc"
---
# electron preload ⇒ renderer

## solution 1 (credit: [Vendicated](https://github.com/Vendicated))
setup:  
```js
// preload
contextBridge.exposeInMainWorld("MyApi", {
  onMyMessage: listener => void ipcRenderer.on('my-message', listener)
})
```
```js
// renderer
MyApi.onMyMessage((event, data) => console.log(data));
```
use:
```js
browserWindow.webContents.send("my-message", { some: { data: "it just needs to be clonable (most js structures are)" }});
```
if you're using typescript, you might wanna check out [how to get intelliSense for contextBridge](typescript-get-intelliSense-for-contextBridge-api)


## solution 2 (Deprecated) [SO Post](https://stackoverflow.com/a/68753014)

You can use [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to send data from preload to renderer.
This approach is not recommended, because a lot of polyfills set the `event.source` to `window`

```js
// preload
window.postMessage("your-data", "*");
```

```js
// renderer
window.addEventListener("message", (event) => {
  // event.source === window means the message is coming from the preload
  // script, as opposed to from an <iframe> or other source.
  if (event.source === window) {
    console.log("from preload:", event.data);
  }
});
```

Or you can communicate directly from the main process to the renderer process AKA "main world" as seen [here in the docs](https://www.electronjs.org/docs/tutorial/message-ports#communicating-directly-between-the-main-process-and-the-main-world-of-a-context-isolated-page)