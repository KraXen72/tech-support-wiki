---
title: "set up git submodules"
layout: "doc"
---
# set up git submodules

[https://www.youtube.com/watch?v=gSlXo2iLBro](https://www.youtube.com/watch?v=gSlXo2iLBro)

```jsx
git submodule add <link>
```

- when cloning first time, you can do git clone ... --recurse-submodules
- or if you already cloned and you forgor, you can do git submodule update --init
- if you change something in the submodule, just commit and push it, then commit and push main repo.