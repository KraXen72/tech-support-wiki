const fs = require('fs')
const path = require("path")

let sidebar = []

let folders = fs.readdirSync("docs")
	.filter(folder => !(folder.startsWith(".") || folder.startsWith("_") || folder.endsWith(".md") || folder == 'public'))
	.forEach(folder => {
		let items = fs.readdirSync(path.join("docs", folder))
			.filter(item => item.endsWith(".md"))
			.map(item => {
				const title = item.slice(0, -3)
				return { text: title.replaceAll("-", " "), link: ["", folder, title].join("/") }
			})

		sidebar.push({
			text: folder,
			collapsible: true,
			items: items
		})
})

const prepend = `export default `
const configSkeleton = {
	title: "tech support wiki",
	themeConfig: {
		sidebar: [],
		nav: [ { text: 'GitHub', link: 'https://github.com/KraXen72/tech-support-wiki' } ],
	}
}
Object.assign(configSkeleton.themeConfig.sidebar, sidebar)
fs.writeFileSync("docs\\.vitepress\\config.js", prepend + JSON.stringify(configSkeleton, null, 4))
console.log("generated sidebar")

// sidebar.forEach(cat => console.log(cat))
// folders.forEach(f => console.log(f, typeof f))