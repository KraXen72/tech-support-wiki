const fs = require('fs')
const path = require("path")

let sidebar = []

// go through all folders, filter bad ones
let folders = fs.readdirSync("docs")
	.filter(folder => !(
		folder.startsWith(".") 	||
		folder.startsWith("_") 	||
		folder.endsWith(".md") 	||
		folder.endsWith(".vue") ||
		folder === 'public'
	))
	.forEach(folder => {
		// create item entries
		let items = fs.readdirSync(path.join("docs", folder))
			.filter(item => item.endsWith(".md"))
			.map(item => {
				const title = item.slice(0, -3)
				return { text: title.replaceAll("-", " "), link: ["", folder, title].join("/") }
			})
		
		// push category into sidebar
		sidebar.push({
			text: folder,
			collapsible: true,
			items: items
		})
})

// syntax needed by vitepress
const prepend = `export default `

// the actual config lol
/** @type {import('vitepress').} */
const configSkeleton = {
	title: "tech support wiki",
	base: "/tech-support-wiki/",
	lastUpdated: true,
	head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],
	themeConfig: {
		sidebar: [],
		nav: [ 
			{ text: 'GitHub', link: 'https://github.com/KraXen72/tech-support-wiki' },
			{ text: 'Ko-fi', link: 'https://ko-fi.com/kraxen72' }
		 ],
		outline: {
			level: [2, 6]
		},
		search: {
      provider: 'local'
    }
	}
}
Object.assign(configSkeleton.themeConfig.sidebar, sidebar)
fs.writeFileSync("docs\\.vitepress\\config.js", prepend + JSON.stringify(configSkeleton, null, 4))
console.log("generated sidebar")

// sidebar.forEach(cat => console.log(cat))
// folders.forEach(f => console.log(f, typeof f))
