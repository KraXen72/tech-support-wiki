import{_ as e,o,c as t,R as a}from"./chunks/framework.QTPdkqON.js";const g=JSON.parse('{"title":"Hello! 👋","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1672011879000}'),i={name:"index.md"},r=a('<h1 id="hello-👋" tabindex="-1">Hello! 👋 <a class="header-anchor" href="#hello-👋" aria-label="Permalink to &quot;Hello! 👋&quot;">​</a></h1><blockquote><p>a tech support/coding wiki by <a href="https://github.com/KraXen72" target="_blank" rel="noreferrer">KraXen72</a></p></blockquote><p>basically each time i encourtered a noteworthy problem i solved, i made a small note how i did it. this is what came from it.</p><h2 id="notes" tabindex="-1">notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;notes&quot;">​</a></h2><ul><li>the sidebars are generated by a script in the root folder, cause <a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">vitepress</a> sidebar is not automatic for whatever reason. <ul><li>make sure to run <code>sidebar-generator.js</code> with node when making/editing/removing some files/folders</li></ul></li><li>the algolia doc search does not work because i cannot be bothered. use <code>Ctrl + F</code></li></ul><h2 id="suggestions" tabindex="-1">suggestions <a class="header-anchor" href="#suggestions" aria-label="Permalink to &quot;suggestions&quot;">​</a></h2><ul><li>feel free to just <strong>bookmark</strong> this and check it if desperate sometime in the future</li><li>also, feel free to <a href="https://github.com/KraXen72/tech-support-wiki/pulls" target="_blank" rel="noreferrer">open a pull request</a> when you solve some issue/have an idea what could fit here. i&#39;ll most likely merge it <ul><li>you can use <a href="https://obsidian.md" target="_blank" rel="noreferrer">obsidian</a> to edit the <code>docs</code> folder</li></ul></li></ul><h3 id="contribution-guidelines" tabindex="-1">contribution guidelines <a class="header-anchor" href="#contribution-guidelines" aria-label="Permalink to &quot;contribution guidelines&quot;">​</a></h3><ul><li>put all images in <code>docs/public</code> and reference them as <code>![alt_text](/image.png)</code></li><li>images &amp; notes should <strong>NOT</strong> contain spaces.</li><li>notes should have them replaced with <code>-</code>, as in <code>note title</code> =&gt; <code>note-title</code></li><li>images should have them replaced with <code>_</code>, as in <code>my cool image.png</code> =&gt; <code>my_cool_image.png</code></li><li>run with <code>npm run dev</code> for development</li><li>to test the site, run <code>npm run build</code> and <code>npm run preview</code>.</li></ul><h3 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h3><ul><li>write a script to resolve &amp; convert obsidian image/note links to vitepress/commonmark alternatives</li></ul>',11),l=[r];function n(s,d,c,h,u,m){return o(),t("div",null,l)}const b=e(i,[["render",n]]);export{g as __pageData,b as default};