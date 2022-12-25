---
title: "svelte + vite publish to github pages"
---
# svelte + vite publish to github pages

if you followed  [svelte and vite template](svelte-and-vite-template)  you now have a webapp

build it with `npm run build` , the output will be in the dist folder

fix the paths in `index.html` by removing the first `/` as mentioned in [vite failing to load bundles](vite-failing-to-load-bundles)

then use the command `git subtree push --prefix dist origin gh-pages` to automatically create the *gh-pages* branch and push your dist folder there

now just enable github pages in the repo settings, set the branch to *gh-pages* and wait a minute for the page to build

you’re all set!