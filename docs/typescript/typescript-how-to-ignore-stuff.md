---
title: "typescript how to ignore stuff"
---
# typescript how to ignore stuff

https://dev.to/evaldasburlingis/typescript-for-beginners-how-to-ignore-code-4han

```tsx
// @ts-ignore
const myAge : number = "25" // no typescript error
const isTrue : boolean = 4; // error
```

```tsx
// @ts-nocheck
const myAge : number = "25" // no error
const isTrue : boolean = 4; // no error
```