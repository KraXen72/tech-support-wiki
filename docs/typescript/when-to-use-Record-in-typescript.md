---
title: "when to use Record in typescript"
---
# when to use `Record` in typescript

to quote WaterNinja101 from svelte discord:
  
> `Object.keys` is defined to return a `string[]`
  
> typescript doesn't care where that `string[]` came from, so when you iterate over it, it goes "hey, you can't use any string to access a property of this object"
  
> a `Record` type specifically says "you can use any string to access a property on this object"
  