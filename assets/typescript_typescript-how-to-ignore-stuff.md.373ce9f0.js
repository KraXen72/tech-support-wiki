import{_ as s,c as n,o,a}from"./app.722da2f3.js";const F=JSON.parse('{"title":"typescript how to ignore stuff","description":"","frontmatter":{"title":"typescript how to ignore stuff"},"headers":[],"relativePath":"typescript/typescript-how-to-ignore-stuff.md"}'),t={name:"typescript/typescript-how-to-ignore-stuff.md"},p=a(`<h1 id="typescript-how-to-ignore-stuff" tabindex="-1">typescript how to ignore stuff <a class="header-anchor" href="#typescript-how-to-ignore-stuff" aria-hidden="true">#</a></h1><p><a href="https://dev.to/evaldasburlingis/typescript-for-beginners-how-to-ignore-code-4han" target="_blank" rel="noreferrer">https://dev.to/evaldasburlingis/typescript-for-beginners-how-to-ignore-code-4han</a></p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @ts-ignore</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myAge </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">25</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// no typescript error</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isTrue </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// error</span></span>
<span class="line"></span></code></pre></div><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @ts-nocheck</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myAge </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">25</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// no error</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isTrue </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// no error</span></span>
<span class="line"></span></code></pre></div>`,4),e=[p];function l(r,c,i,y,C,D){return o(),n("div",null,e)}const f=s(t,[["render",l]]);export{F as __pageData,f as default};
