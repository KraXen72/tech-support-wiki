---
title: tailwindcss on windows without a bundler
---
# Quick quide how to use tailwind css without a bundler

This guide is primarily for windows. To use tailwindcss without a bundler, we will be using the `tailwindcss` cli. I will show you two ways to install it.
  
## The quick & dirty way
1. Go to [tailwindcss/releases](https://github.com/tailwindlabs/tailwindcss/releases) on github
2. Download `tailwindcss-windows-x64.exe`
3. put it into your project directory
  
### notes
- You will have to either put it in `PATH` manually, or reference the exe file
- If you want to reference the exe file, rename it for sanity
  - So you can do something like `> tailwind.exe --config=...`

## The Real Hacker™ way
1. Install [scoop package manager](https://scoop.sh)
2. `> scoop install main/tailwindcss`
3. Now it's in `PATH` & supports auto-updating through scoop

## Create a config file
Just like you would normally, create a `tailwind.config.js` file.  
below is an example of one
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [ // all the paths you want to watch and recompile on
	"./assets/style.css",
    "./index.php",
	"./rezervacia.php"
  ],
  theme: {
    extend: { 
		colors: { // you can add custom colors here
			bbg: "#E4E2E0",
			btext: "#525B64",
			baux: "#617391",
			btextcol: "#FFFFFF",
			btextcolhl: "#DDDDDD",
			btextcolhov: "#111111",
			btextcolhovhl: "#999999"
		},
	},
	fontFamily: {
		'roboto': ['Roboto', 'system-ui'],
		'patua': ['Patua One', 'system-ui']
	}
  },
  plugins: [],
}
```  
[full tailwindcss config documentation](https://tailwindcss.com/docs/configuration)

## Running the cli
To run the cli, do the following
```bash
> tailwindcss -c tailwind.config.js -w -o assets/tailwind-out.css -m
```
  
> If you installed it as an exe, put it in the same folder and instead of `tailwind`, run `tailwind.exe` or whatever you named it
  
Let's break down the flags:
- `-c` = config file
- `-w` = watch mode, automatically re-compile on changes to the tracked files
- `-o` = output file. make sure to import this in your site, **not** the file you write your @apply and other tailwind things
- `-m` = minify. optional. makes the css minified/condensed

## Creating a start scripts
You can create a simple `tailwind-dev.bat` script, just copy the above command into it, save as all files and add the `.bat` extension before hitting `Save`  
  
Now you don't need to type the command every time

## Seeing the css refresh instantly in the browser
Automatic re-compilation of tailwind => css is nice, but you know what would be even nicer? Yeah, hot reloading (so you don't need to refresh the page manually, like a caveman).  
  
I'll show you how to set up very easy live css reloading with VSCode, since that's what you are probably using anyway. 
- If you don't know what vs code is, [read the page and download it](https://code.visualstudio.com). 
- In the off chance you are using something more advanced like vim or emacs, you can do a simple `vite .` in the directory to serve the files, i guess. or something more eccentric & less reliable.  
  
### Install the `Live Server (Five Server)` extension by `Yannick` 
- [marketplace link](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server), id: `yandeu.five-server`
  
then, click the `Go Live` button at the bottom of your status bar in vscode:
![go live](/open_five_server.png)

happy live-reloading! the future is *now*

### Troubleshooting: Some error about PHP
if you get some error about php path, download PHP 
- `scoop install php` or from [here](https://windows.php.net/download#php-8.3) => x64 thread safe zip
  
and create a `fiveserver.config.js` in your project directory:
```js
module.exports = {
	// or whatever your path is
	php: "C:\\Users\\Nex\\scoop\\apps\\php\\current\\php.exe"
}
```

should work™

