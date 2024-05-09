import{_ as a,c as n,o as s,a4 as e}from"./chunks/framework.FwfRAdxb.js";const t="/tech-support-wiki/assets/before.Dplh-rvF.png",p="/tech-support-wiki/assets/after.CX42ZCbr.png",g=JSON.parse('{"title":"Numbering equations with line breaks","description":"","frontmatter":{"title":"Numbering equations with line breaks"},"headers":[],"relativePath":"typst/numbering-equations-with-line-breaks.md","filePath":"typst/numbering-equations-with-line-breaks.md","lastUpdated":1715281296000}'),i={name:"typst/numbering-equations-with-line-breaks.md"},o=e(`<h1 id="numbering-equations-with-line-breaks" tabindex="-1">Numbering equations with line breaks <a class="header-anchor" href="#numbering-equations-with-line-breaks" aria-label="Permalink to &quot;Numbering equations with line breaks&quot;">​</a></h1><p>I encountered this problem while trying to write some equations in Typst:</p><p>I had this piece of code that I expected would number every equation in an equation block with line breaks:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#set math.equation(</span></span>
<span class="line"><span>  numbering: &quot;(1)&quot;,</span></span>
<span class="line"><span>  number-align: bottom,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ I_&quot;R1&quot; &amp;= U_&quot;R1&quot; / R_1 \\ </span></span>
<span class="line"><span> &amp;= (I_0 dot (R_1R_2) / (R_1+R_2)) / R_1 \\</span></span>
<span class="line"><span> &amp;= I_0 dot R_2 / (R_1+R_2)</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>However, only the final equation was numbered.</p><p><img src="`+t+'" alt="before"></p><p>The expected behaviour was this:</p><p><img src="'+p+`" alt="after"></p><p>It turned out I had to import another package called <a href="https://typst.app/universe/package/equate" target="_blank" rel="noreferrer">equate</a> in order to get the above format. Make sure to disable sub-numbering by including this code:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* Import this package to improve equation numbering */</span></span>
<span class="line"><span>#import &quot;@preview/equate:0.1.0&quot;: equate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Setting for math equations */</span></span>
<span class="line"><span>#set math.equation(</span></span>
<span class="line"><span>  numbering: &quot;(1)&quot;,</span></span>
<span class="line"><span>  number-align: bottom,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#show: equate.with(</span></span>
<span class="line"><span>  sub-numbering: false,</span></span>
<span class="line"><span>)</span></span></code></pre></div>`,10),l=[o];function r(u,c,h,b,m,d){return s(),n("div",null,l)}const q=a(i,[["render",r]]);export{g as __pageData,q as default};
