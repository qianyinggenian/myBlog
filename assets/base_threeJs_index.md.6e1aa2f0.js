import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.36fc5445.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/threeJs/index.md","filePath":"base/threeJs/index.md","lastUpdated":1702363481000}'),l={name:"base/threeJs/index.md"},o=p(`<h2 id="dat-gui使用方法" tabindex="-1">dat.gui使用方法 <a class="header-anchor" href="#dat-gui使用方法" aria-label="Permalink to &quot;dat.gui使用方法&quot;">​</a></h2><h3 id="_1、安装-yarn-add-dat-gui-s" tabindex="-1">1、安装 yarn add dat.gui -S <a class="header-anchor" href="#_1、安装-yarn-add-dat-gui-s" aria-label="Permalink to &quot;1、安装 yarn add dat.gui -S&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> dat </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;dat.gui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> folderSky;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          });</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gui</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> dat.</span><span style="color:#B392F0;">GUI</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (folderSky) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gui.</span><span style="color:#B392F0;">removeFolder</span><span style="color:#E1E4E8;">(folderSky);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          folderSky </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gui.</span><span style="color:#B392F0;">addFolder</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Sky&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          folderSky.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(parameters, </span><span style="color:#9ECBFF;">&#39;elevation&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">(updateSun);</span></span>
<span class="line"><span style="color:#E1E4E8;">          folderSky.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(parameters, </span><span style="color:#9ECBFF;">&#39;azimuth&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">(updateSun);</span></span>
<span class="line"><span style="color:#E1E4E8;">          folderSky.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// gui.add(sphere.position, &quot;x&quot;).min(-5).max(5).step(0.1);</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// gui</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">//     .add(spotLight, &quot;angle&quot;)</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">//     .min(0)</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">//     .max(Math.PI / 2)</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">//     .step(0.01);</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// gui.add(spotLight, &quot;distance&quot;).min(0).max(10).step(0.01);</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// gui.add(spotLight, &quot;penumbra&quot;).min(0).max(1).step(0.01);</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// gui.add(spotLight, &quot;decay&quot;).min(0).max(5).step(0.01);</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> dat </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;dat.gui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> folderSky;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    components: {},</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          });</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      methods: {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gui</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> dat.</span><span style="color:#6F42C1;">GUI</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (folderSky) {</span></span>
<span class="line"><span style="color:#24292E;">            gui.</span><span style="color:#6F42C1;">removeFolder</span><span style="color:#24292E;">(folderSky);</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          folderSky </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gui.</span><span style="color:#6F42C1;">addFolder</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Sky&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          folderSky.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(parameters, </span><span style="color:#032F62;">&#39;elevation&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">90</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">(updateSun);</span></span>
<span class="line"><span style="color:#24292E;">          folderSky.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(parameters, </span><span style="color:#032F62;">&#39;azimuth&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">(updateSun);</span></span>
<span class="line"><span style="color:#24292E;">          folderSky.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// gui.add(sphere.position, &quot;x&quot;).min(-5).max(5).step(0.1);</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// gui</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">//     .add(spotLight, &quot;angle&quot;)</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">//     .min(0)</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">//     .max(Math.PI / 2)</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">//     .step(0.01);</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// gui.add(spotLight, &quot;distance&quot;).min(0).max(10).step(0.01);</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// gui.add(spotLight, &quot;penumbra&quot;).min(0).max(1).step(0.01);</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// gui.add(spotLight, &quot;decay&quot;).min(0).max(5).step(0.01);</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const g=s(l,[["render",t]]);export{F as __pageData,g as default};
