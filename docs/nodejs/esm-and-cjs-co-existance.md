---
title: "esm and cjs co-existance"
---
# esm and cjs co-existance

https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
  
- so like electron needs it's stuff in *commonjs*
- most of my electron apps already use utils.js as a commonjs module
- svelte needs it's stuff in *esm*
1. the way i've solved it i put general (not requiring node modules) utils in a separate esm module (in subfolder) like this:
   ![esm and cjs](esm_and_cjs_coexistence-pic.png)
- the subfolder's `package.json` has this: `{"type": "module"}` so its an esm module
- all functions in (esm) lib.js are exported like this: `export function shortenFilename(){...}`
1. the `utils.js` imports all the lib's functions with standard named imports and require, and exports them using `module.exports = { namedExports }`
2. the main `package.json` has this added for it to work:
    ```json
    {
    	...
    	"exports": {
        "require": "./utils.js",
        "import": "./esm/lib.js"
      }
    }
    ```

to see the whole lib and more detaills, check this: 
https://github.com/KraXen72/roseboxlib