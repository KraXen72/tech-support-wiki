---
title: "pnpm link"
---
# pnpm link
  
The docs page for the `pnpm link` command does a poor job of explaining it. Here's my attempt at understanding the very useful command `pnpm link` is.

Full documentation on [pnpm.io](https://pnpm.io/cli/link)  

## preface

This command is used to link a local copy of a package to another project, so you can get instant changes reflected in the other project, without publishing the package to npm or going through github.

> For super small, one/two-time modifications, check out [pnpm patch](https://pnpm.io/cli/patch).
> It is easier, faster, and might be what you're looking for.
> However, if you want to, contribute your changes of the package back to your repo, or are developing 2 packages at the same time (library + project), `pnpm link` is likely the right answer.
  
> If you're developing more packages in an ecosystem, consider using a [pnpm monorepo](https://pnpm.io/workspaces). It is better for larger projects

## the example
  
In my example, I am going to:
- link my fork of `sveltekit-adapter-iis`, in `D:/coding/svelte/fork-sveltekit-adapter-iis`
- into my project `pursiny-sveltekit`, in `D:/coding/svelte/pursiny-sveltekit`
  
## the linked package
cd into `D:/coding/svelte/fork-sveltekit-adapter-iis`, and run:  
```bash
pnpm link --global
```
This makes it available to the current global pnpm store
The `name` attribute in this package's `package.json` is `sveltekit-adapter-iis`

## the consumer
cd into `D:/coding/svelte/pursiny-sveltekit`, 
> Make sure  to remove all previously installed packages with the same name beforehand
> with `pnpm rm <package name>`, like `pnpm rm sveltekit-adapter-iis`
  
and run:
```bash
pnpm link --global sveltekit-adapter-iis
```

now it will be linked

## appearing in package.json
  
What's really confusing is that after a package is sucessfully linked, it does not show up as a dependecny in `package.json`. It still works, but for ease of mind or other reasons you might want to add it to `package.json`. 
### using a github link
  
If you add the pacakge like this: `pnpm add -D github:KraXen72/sveltekit-adapter-iis`, while it is linked, the link will have precedence over github, but others can install the dependency from github. [More info](https://pnpm.io/cli/add#install-from-git-repository)

### explicitly showing it is linked
  
running  `pnpm add -D ../fork-sveltekit-adapter-iis` or `pnpm add -D D:\coding\svelte\fork-sveltekit-adapter-iis` will create the pnpm link, and add it to `package.json`. [More info](https://pnpm.io/cli/add#install-from-local-file-system)

