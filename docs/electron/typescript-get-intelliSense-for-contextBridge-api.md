---
title: "typescript get intelliSense for contextBridge api"
layout: "doc"
---
# typescript get intelliSense for contextBridge api

ok so basically this: https://www.electronjs.org/docs/latest/tutorial/context-isolation#usage-with-typescript

v preloade si spravim toto:

```tsx
const context = {
  timestwo: (num: number) => {
    return timestwo(num)
  }
}

export type IElectronAPI = typeof context;

//console.log(context)
contextBridge.exposeInMainWorld(
    "api", context
);
```

spravim si fontend.d.ts a dam tam toto:

```tsx
import { IElectronAPI } from './../main/preload'; //autoimport vscode extension ftw

declare global {
    interface Window {
      api: IElectronAPI
    }
}
```

a potom vo frontende:

```tsx
const api = window.api
```