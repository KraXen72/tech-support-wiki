---
title: "svelte and vite template"
---
# svelte and vite template

### UPDATE:

you can just use the cli to init a new svelte + vite project.

```jsx
// vanilla js
npm create vite@latest my-svelte-app -- --template svelte

// typescript
npm create vite@latest my-svelte-ts-app -- --template svelte-ts
```

more about it here: [https://vitejs.dev/guide/#scaffolding-your-first-vite-project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

### OLD WAY

for applications requiring also server side stuff, use [https://kit.svelte.dev](https://kit.svelte.dev/) 

for just simple plain vite + svelte or vite + svelte + ts go [https://vitejs.dev/guide/#trying-vite-online](https://vitejs.dev/guide/#trying-vite-online) and click on one of the links

you’ll be redirected to stackblitz: connect your github acocunt, publish the new project to a repo, then make it private if you want

you can now git clone the repo, `npm install` 

for developing use `npm run dev` , use `npm run preview` to preview the built app and `npm run build` to compile the svelte code into bundles

(this also automatically packs all npm modules you used)