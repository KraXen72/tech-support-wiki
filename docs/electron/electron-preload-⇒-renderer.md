---
title: "electron preload ⇒ renderer"
layout: "doc"
---
# electron preload ⇒ renderer

[https://stackoverflow.com/a/68753014](https://stackoverflow.com/a/68753014)

You can use [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to send data from preload to renderer

```jsx
// preload
window.postMessage("your-data", "*");
```

```jsx
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