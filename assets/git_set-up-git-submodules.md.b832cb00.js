import{_ as e,c as s,o as t,a as o}from"./app.722da2f3.js";const g=JSON.parse('{"title":"set up git submodules","description":"","frontmatter":{"title":"set up git submodules","layout":"doc"},"headers":[],"relativePath":"git/set-up-git-submodules.md"}'),a={name:"git/set-up-git-submodules.md"},l=o(`<h1 id="set-up-git-submodules" tabindex="-1">set up git submodules <a class="header-anchor" href="#set-up-git-submodules" aria-hidden="true">#</a></h1><p><a href="https://www.youtube.com/watch?v=gSlXo2iLBro" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=gSlXo2iLBro</a></p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git submodule add </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>when cloning first time, you can do git clone ... --recurse-submodules</li><li>or if you already cloned and you forgor, you can do git submodule update --init</li><li>if you change something in the submodule, just commit and push it, then commit and push main repo.</li></ul>`,4),n=[l];function i(u,c,r,p,d,m){return t(),s("div",null,n)}const h=e(a,[["render",i]]);export{g as __pageData,h as default};
