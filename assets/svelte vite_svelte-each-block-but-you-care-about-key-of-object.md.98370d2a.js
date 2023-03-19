import{_ as e,c as s,o,N as t}from"./chunks/framework.54f67b00.js";const a="/tech-support-wiki/svelte_each_block_but_you_care_about_key_of_object.png",k=JSON.parse('{"title":"svelte each block but you care about key of object","description":"","frontmatter":{"title":"svelte each block but you care about key of object"},"headers":[],"relativePath":"svelte vite/svelte-each-block-but-you-care-about-key-of-object.md"}'),c={name:"svelte vite/svelte-each-block-but-you-care-about-key-of-object.md"},l=t('<h1 id="svelte-each-block-but-you-care-about-key-of-object" tabindex="-1">svelte each block but you care about key of object <a class="header-anchor" href="#svelte-each-block-but-you-care-about-key-of-object" aria-label="Permalink to &quot;svelte each block but you care about key of object&quot;">​</a></h1><p>just use object.entries. instead of this:</p><p><img src="'+a+`" alt=""></p><p>use:</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;">#</span><span style="color:#A6ACCD;">each</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pokemon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sprites</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> [</span><span style="color:#FFCB6B;">spriteKey</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">image</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),n=[l];function p(r,b,u,y,i,_){return o(),s("div",null,n)}const F=e(c,[["render",p]]);export{k as __pageData,F as default};
