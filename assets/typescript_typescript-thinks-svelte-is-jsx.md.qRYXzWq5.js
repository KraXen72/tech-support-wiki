import{_ as s,o as t,c as i,R as e}from"./chunks/framework.QTPdkqON.js";const y=JSON.parse('{"title":"typescript thinks svelte is jsx","description":"","frontmatter":{"title":"typescript thinks svelte is jsx"},"headers":[],"relativePath":"typescript/typescript-thinks-svelte-is-jsx.md","filePath":"typescript/typescript-thinks-svelte-is-jsx.md","lastUpdated":1672008622000}'),a={name:"typescript/typescript-thinks-svelte-is-jsx.md"},n=e(`<h1 id="typescript-thinks-svelte-is-jsx" tabindex="-1">typescript thinks svelte is jsx? <a class="header-anchor" href="#typescript-thinks-svelte-is-jsx" aria-label="Permalink to &quot;typescript thinks svelte is jsx?&quot;">​</a></h1><p>create a tsconfig.json in root directory with this in it:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@tsconfig/svelte/tsconfig.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__sapper__/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><a href="https://svelte.dev/blog/svelte-and-typescript" target="_blank" rel="noreferrer">https://svelte.dev/blog/svelte-and-typescript</a></p><p>assuming you use svelte-preprocess and lang=ts on the script tag</p>`,5),p=[n];function l(h,r,k,o,c,d){return t(),i("div",null,p)}const u=s(a,[["render",l]]);export{y as __pageData,u as default};