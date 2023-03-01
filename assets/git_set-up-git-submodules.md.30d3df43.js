import{_ as s,c as e,o as t,a as o}from"./app.4602495e.js";const g=JSON.parse('{"title":"set up git submodules","description":"","frontmatter":{"title":"set up git submodules","layout":"doc"},"headers":[],"relativePath":"git/set-up-git-submodules.md"}'),a={name:"git/set-up-git-submodules.md"},l=o(`<h1 id="set-up-git-submodules" tabindex="-1">set up git submodules <a class="header-anchor" href="#set-up-git-submodules" aria-hidden="true">#</a></h1><p><a href="https://www.youtube.com/watch?v=gSlXo2iLBro" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=gSlXo2iLBro</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submodule</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">lin</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>when cloning first time, you can do <code>git clone &lt;link&gt; --recurse-submodules</code></li><li>or if you already cloned and you forgot, you can do <code>git submodule update --init</code></li><li>if you change something in the submodule, just commit and push it, then commit and push main repo.</li></ul><p>vs code recently-ish (2021) added a gui for submodules so handling them is pretty ok now.</p>`,5),n=[l];function i(p,c,u,r,d,m){return t(),e("div",null,n)}const _=s(a,[["render",i]]);export{g as __pageData,_ as default};