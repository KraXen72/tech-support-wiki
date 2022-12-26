---
title: "typescript get intelliSense for contextBridge api"
layout: "doc"
---
# typescript get intelliSense for contextBridge api

ok so basically this: https://www.electronjs.org/docs/latest/tutorial/context-isolation#usage-with-typescript

preload:
```ts
// context is an example function you want to expose in the api
const context = {
  timestwo: (num: number) => {
    return timestwo(num)
  }
}

export type IElectronAPI = typeof context;

contextBridge.exposeInMainWorld(
    "api", context
);
```

make a `frontend.d.ts` and put this in it:
```ts
import { IElectronAPI } from './../main/preload'; //autoimport vscode extension ftw

declare global {
    interface Window {
      api: IElectronAPI
    }
}
```
frontend:
```ts
const api = window.api
api.timestwo(2) // => 4 (we get autocomplete)
```