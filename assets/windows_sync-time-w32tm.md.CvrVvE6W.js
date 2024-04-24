import{_ as e,c as t,o as s,a4 as i}from"./chunks/framework.FwfRAdxb.js";const _=JSON.parse('{"title":"Windows sync time","description":"","frontmatter":{"title":"Windows sync time","source":"https://superuser.com/a/1326025"},"headers":[],"relativePath":"windows/sync-time-w32tm.md","filePath":"windows/sync-time-w32tm.md","lastUpdated":1713999537000}'),o={name:"windows/sync-time-w32tm.md"},n=i('<p>If your comupter is often de-syncing it&#39;s time, you&#39;ve probably tried running:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>w32tm /resync</span></span></code></pre></div><p>However, if you&#39;re here, you&#39;ve gotten the following error:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>The following error occurred: The specified service does not exist as an installed service. (0x80070424)</span></span></code></pre></div><p>Open a new command prompt with <em>Run as Administrator</em> and do the following:</p><ol><li>register the service: <code>w32tm /register</code><ul><li>If you&#39;ve previously done this, it might be a good idea to run <code>w32tm /unregister</code> and then <code>w32tm /register</code></li></ul></li><li>start the service: <code>net start w32time</code></li><li>synchronize time: <code>w32tm /resync</code></li></ol>',6),a=[n];function c(r,d,l,p,m,h){return s(),t("div",null,a)}const g=e(o,[["render",c]]);export{_ as __pageData,g as default};
