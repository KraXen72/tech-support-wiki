---
title: "typescript thinks svelte is jsx"
---
# typescript thinks svelte is jsx?
  
create a tsconfig.json in root directory with this in it:  
  
```json
{
  "extends": "@tsconfig/svelte/tsconfig.json",

  "include": ["src/**/*", "src/node_modules"],
  "exclude": ["node_modules/*", "__sapper__/*", "public/*"],
}
```
  
https://svelte.dev/blog/svelte-and-typescript  
  
assuming you use svelte-preprocess and lang=ts on the script tag  