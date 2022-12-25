---
title: "svelte+vite $lib alias"
---
# svelte+vite $lib alias

[https://kit.svelte.dev/faq#aliases](https://kit.svelte.dev/faq#aliases)

you have to add this syntax stuff to your *vite.config.ts*:

```tsx
export default defineConfig({
	...
	resolve: {
			alias: {
				$rblib: path.resolve('./src/rblib'), 
				$components: path.resolve("./src/frontend/components")
			},
```

then also update the **global only** *tsconfig.json* (not the other ones) like this:

```json
{
	"compilerOptions": {
		...
		"paths": {
			"$rblib/*": ["src/rblib/*"],
```

this is for vite 2.x, rewrite for vite 3