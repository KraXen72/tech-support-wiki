---
title: "js method chaining"
---
# js method chaining (it’s beautiful)

https://schier.co/blog/method-chaining-in-javascript  
example:  
```jsx
let prependName = fullpath
      .replace(filename, "??filename")
      .replace(basedDir, "??basedDir")
      .split(slash)
      .filter(part => !["??basedDir", "??filename"].includes(part))
      .join(pslash)
```