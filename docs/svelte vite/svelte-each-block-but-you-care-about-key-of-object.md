---
title: "svelte each block but you care about key of object"
---
# svelte each block but you care about key of object

just use object.entries. instead of this:
  
![](/svelte_each_block_but_you_care%20about_key_of_object.png)  
  
use:  
  
```jsx
{#each Object.entries(pokemon.sprites) as [spriteKey, image]}
```