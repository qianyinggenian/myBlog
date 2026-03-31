import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.36fc5445.js";const p="/myBlog/img/自定义el-input.png",d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"base/elementUI/index.md","filePath":"base/elementUI/index.md","lastUpdated":1705039368000}'),o={name:"base/elementUI/index.md"},e=l(`<h2 id="_1、el-input-自定义" tabindex="-1">1、el-input 自定义 <a class="header-anchor" href="#_1、el-input-自定义" aria-label="Permalink to &quot;1、el-input 自定义&quot;">​</a></h2><h3 id="自定义内容-proxyinput-vue" tabindex="-1">自定义内容 proxyInput.vue <a class="header-anchor" href="#自定义内容-proxyinput-vue" aria-label="Permalink to &quot;自定义内容 proxyInput.vue&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-input</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inputValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inputValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-on</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$listeners&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-slot</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">prepend</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;prepend&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-slot</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;append&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-input</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputValue: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: [String, Number]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** input输入框是否去除所有的空格 默认-否 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    isRemoveSpaces: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (newVal </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inputValue) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inputValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVal;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      immediate: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">handleChange</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isRemoveSpaces) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inputValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">\\s</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inputValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inputValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;">, val);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-input</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inputValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inputValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-on</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$listeners&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">prepend</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;prepend&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;append&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-input</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      inputValue: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      type: [String, Number]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** input输入框是否去除所有的空格 默认-否 */</span></span>
<span class="line"><span style="color:#24292E;">    isRemoveSpaces: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (newVal </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.inputValue) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.inputValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newVal;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      immediate: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">handleChange</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isRemoveSpaces) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.inputValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">\\s</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;input&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.inputValue);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.inputValue);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;">, val);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="使用demo" tabindex="-1">使用demo <a class="header-anchor" href="#使用demo" aria-label="Permalink to &quot;使用demo&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">proxyInput</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">prefix-icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;el-icon-search&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">suffix-icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;el-icon-date&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearable</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:is-remove-spaces</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inputValue&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;prepend&quot;</span><span style="color:#E1E4E8;">&gt;前&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;append&quot;</span><span style="color:#E1E4E8;">&gt;后&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">proxyInput</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> proxyInput </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./proxyInput.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxyInput</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        inputValue: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    props: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    watch: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    computed: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> () {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">proxyInput</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">prefix-icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;el-icon-search&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">suffix-icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;el-icon-date&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearable</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:is-remove-spaces</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inputValue&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;prepend&quot;</span><span style="color:#24292E;">&gt;前&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;append&quot;</span><span style="color:#24292E;">&gt;后&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">proxyInput</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> proxyInput </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./proxyInput.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">      proxyInput</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        inputValue: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    props: {},</span></span>
<span class="line"><span style="color:#24292E;">    watch: {},</span></span>
<span class="line"><span style="color:#24292E;">    computed: {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> () {},</span></span>
<span class="line"><span style="color:#24292E;">    methods: {}</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="效果图" tabindex="-1">效果图 <a class="header-anchor" href="#效果图" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="`+p+`" alt="自定义el-input"></p><h2 id="_2、el-select自定义" tabindex="-1">2、el-select自定义 <a class="header-anchor" href="#_2、el-select自定义" aria-label="Permalink to &quot;2、el-select自定义&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!--  对el-select的二次封装--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-select</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectTitle&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-on</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$listeners&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-slot</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">prefix</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;prefix&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-slot</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">empty</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;empty&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-option</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item in options&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item[keyValue]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item[keyLabel]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item[keyValue]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-option</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-select</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      selectTitle: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      selectValue: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: [String, Array]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    keyValue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&#39;value&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    keyLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&#39;label&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newVal;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      immediate: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectValue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (newVal </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> newVal.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> newVal </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.keyValue] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> newVal);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (result) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectTitle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> result[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.keyLabel];</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectTitle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getArrTitle</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectTitle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      immediate: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getArrTitle</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectValue.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> list) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (val </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> key[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.keyValue]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            arr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(key);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.selectTitle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> value[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.keyLabel]).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!--  对el-select的二次封装--&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-select</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectTitle&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-on</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$listeners&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">prefix</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;prefix&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-slot</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">empty</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;empty&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-option</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item in options&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item[keyValue]&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item[keyLabel]&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item[keyValue]&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-option</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-select</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      selectTitle: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      selectValue: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      type: [String, Array]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    keyValue: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&#39;value&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    keyLabel: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&#39;label&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    options: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.selectValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newVal;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      immediate: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    selectValue: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (newVal </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> newVal.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> newVal </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.keyValue] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> newVal);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (result) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.selectTitle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> result[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.keyLabel];</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.selectTitle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getArrTitle</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.selectTitle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      immediate: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getArrTitle</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options));</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.selectValue.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> list) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (val </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> key[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.keyValue]) {</span></span>
<span class="line"><span style="color:#24292E;">            arr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.selectTitle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> value[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.keyLabel]).</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="使用demo-1" tabindex="-1">使用demo <a class="header-anchor" href="#使用demo-1" aria-label="Permalink to &quot;使用demo&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!--  封装后的使用demo--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">proxySelect</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">multiple</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;options&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearable</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">proxySelect</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> proxySelect </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./index.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;dome&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxySelect</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&#39;选项1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;黄金糕&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&#39;选项2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&#39;选项3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;蚵仔煎&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&#39;选项4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;龙须面&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&#39;选项5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;北京烤鸭&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }]</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!--  封装后的使用demo--&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">proxySelect</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">multiple</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;options&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearable</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">proxySelect</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> proxySelect </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./index.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;dome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    proxySelect</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: [{</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&#39;选项1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;黄金糕&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&#39;选项2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&#39;选项3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;蚵仔煎&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&#39;选项4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;龙须面&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&#39;选项5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;北京烤鸭&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }]</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {},</span></span>
<span class="line"><span style="color:#24292E;">  watch: {},</span></span>
<span class="line"><span style="color:#24292E;">  computed: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {}</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,11),t=[e];function c(E,r,y,i,F,u){return n(),a("div",null,t)}const g=s(o,[["render",c]]);export{d as __pageData,g as default};
