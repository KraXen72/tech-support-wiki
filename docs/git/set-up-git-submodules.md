---
title: "set up git submodules"
layout: "doc"
---
# set up git submodules

[https://www.youtube.com/watch?v=gSlXo2iLBro](https://www.youtube.com/watch?v=gSlXo2iLBro)

```bash
git submodule add <link>
```

- when cloning first time, you can do `git clone <link> --recurse-submodules`
- or if you already cloned and you forgot, you can do `git submodule update --init`
- if you change something in the submodule, just commit and push it, then commit and push main repo.
  
vs code recently-ish (2021) added a gui for submodules so handling them is pretty ok now.