---
title: "electron reloader ignore files"
layout: "doc"
---
# dev server violently reloading app?

when you are writing some files in the app (programatically, like with `fs`), make sure it doesen't trigger the dev server reload. 

for example, if using `electron-reloader` you can set up ignores like this:

```tsx
try {
	require('electron-reloader')(module, {
		debug: false,
		watchRenderer: true,
		ignore: ["**/*.svelte", "**/*.css", "**/*.html", "**/common/**/*", "**/config.json", '**/db/**/*' ]
	});
} catch (_) { 
	console.log('electron-reloader made an oopsie');
}
```