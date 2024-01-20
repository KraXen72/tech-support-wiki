import{_ as s,o as i,c as t,V as a}from"./chunks/framework.WP9juYLV.js";const y=JSON.parse('{"title":"typescript how to ignore stuff","description":"","frontmatter":{"title":"typescript how to ignore stuff"},"headers":[],"relativePath":"typescript/typescript-how-to-ignore-stuff.md","filePath":"typescript/typescript-how-to-ignore-stuff.md","lastUpdated":1672008622000}'),e={name:"typescript/typescript-how-to-ignore-stuff.md"},n=a(`<h1 id="typescript-how-to-ignore-stuff" tabindex="-1">typescript how to ignore stuff <a class="header-anchor" href="#typescript-how-to-ignore-stuff" aria-label="Permalink to &quot;typescript how to ignore stuff&quot;">​</a></h1><p><a href="https://dev.to/evaldasburlingis/typescript-for-beginners-how-to-ignore-code-4han" target="_blank" rel="noreferrer">https://dev.to/evaldasburlingis/typescript-for-beginners-how-to-ignore-code-4han</a></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @ts-ignore</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myAge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;25&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // no typescript error</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isTrue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// error</span></span></code></pre></div><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @ts-nocheck</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myAge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;25&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // no error</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isTrue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// no error</span></span></code></pre></div>`,4),p=[n];function h(r,l,k,o,d,c){return i(),t("div",null,p)}const F=s(e,[["render",h]]);export{y as __pageData,F as default};