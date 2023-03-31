import{_ as s,o as a,c as n,a as p}from"./app.7f79d2e7.js";const e={},t=p(`<h1 id="hbase-shell-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#hbase-shell-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Hbase Shell \u5E38\u7528\u547D\u4EE4</h1><h2 id="_1\u3001\u8FDB\u5165hbase-shell" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u8FDB\u5165hbase-shell" aria-hidden="true">#</a> 1\u3001\u8FDB\u5165Hbase Shell</h2><ul><li>\u8FDB\u5165Hbase Shell\u5BA2\u6237\u7AEF\u547D\u4EE4\u64CD\u4F5C\u754C\u9762</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase shell
</code></pre></div><h2 id="_2\u3001\u67E5\u770B\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u67E5\u770B\u5E2E\u52A9" aria-hidden="true">#</a> 2\u3001\u67E5\u770B\u5E2E\u52A9</h2><ul><li>\u901A\u7528\u67E5\u770B\u5E2E\u52A9\u547D\u4EE4</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> help
</code></pre></div><ul><li>\u67E5\u770B\u67D0\u4E9B\u547D\u4EE4\u7684\u64CD\u4F5C\u65B9\u6CD5</li></ul><div class="language-text ext-text"><pre class="language-text"><code>hbase(main):001:0&gt; help &quot;scan&quot;
</code></pre></div><h2 id="_3\u3001\u67E5\u770B\u5E93\u8868\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u67E5\u770B\u5E93\u8868\u6E05\u5355" aria-hidden="true">#</a> 3\u3001\u67E5\u770B\u5E93\u8868\u6E05\u5355</h2><ul><li>\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u6709\u54EA\u4E9B\u8868</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">006</span>:<span class="token number">0</span><span class="token operator">&gt;</span> list
</code></pre></div><ul><li>\u5217\u51FA\u6240\u6709namespace</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> list_namespace
</code></pre></div><ul><li>\u5728namespace\u4E0B\u521B\u5EFA\u8868</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token string">&#39;database1:testtable&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fm1&#39;</span>
</code></pre></div><ul><li>\u67E5\u770Bnamespace\u4E0B\u7684\u8868</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> list_namespace_tables <span class="token string">&#39;database1&#39;</span>
</code></pre></div><ul><li>\u521B\u5EFAnamespace</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> create_namespace <span class="token string">&#39;database1&#39;</span>
</code></pre></div><ul><li>\u5220\u9664namespace</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> drop_namespace <span class="token string">&#39;database1&#39;</span>
</code></pre></div><h2 id="_4\u3001\u521B\u5EFA\u8868" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u521B\u5EFA\u8868" aria-hidden="true">#</a> 4\u3001\u521B\u5EFA\u8868</h2><ul><li>\u521B\u5EFA\u4E00\u5F20lagou\u8868\uFF0C \u5305\u542Bbase_info\u3001extra_info\u4E24\u4E2A\u5217\u65CF\uFF0C\u65B9\u6CD5\u4E00\uFF0C\u6700\u7B80\u5355</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extra_info&#39;</span> 
</code></pre></div><ul><li>\u521B\u5EFA\u4E00\u5F20lagou\u8868\uFF0C \u5305\u542Bbase_info\u3001extra_info\u4E24\u4E2A\u5217\u65CF\uFF0C\u65B9\u6CD5\u4E8C \uFF0C\u6307\u5B9A\u4FDD\u5B58\u7248\u672C</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;3&#39;</span>}<span class="token punctuation">,</span>{NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;extra_info&#39;</span><span class="token punctuation">,</span>VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;3&#39;</span>} 

<span class="token comment"># Hbase\u5EFA\u8868\u5FC5\u987B\u6307\u5B9A\u5217\u65CF\u4FE1\u606F </span>
<span class="token comment"># VERSIONS \u662F\u6307\u6B64\u5355\u5143\u683C\u5185\u7684\u6570\u636E\u53EF\u4EE5\u4FDD\u7559\u6700\u8FD1\u7684 3 \u4E2A\u7248\u672C</span>
</code></pre></div><ul><li>\u521B\u5EFA\u4E00\u4E2At_task_log\u8868\uFF0C\u5E76\u4E14\u8BBE\u7F6ETTL\u751F\u5B58\u671F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token string">&#39;t_task_log&#39;</span><span class="token punctuation">,</span>{NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> TTL<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;86400&#39;</span>}

<span class="token comment"># \u521B\u5EFAt_task_log\u8868\uFF0C\u5217\u65CFf, TTL\u8BBE\u7F6E86400\u79D2\u8FC7\u671F</span>
<span class="token comment"># \u5728major\u5408\u5E76\u8FC7\u7A0B\u4E2D\u65F6\u95F4\u6233\u88AB\u5224\u5B9A\u4E3A\u8D85\u8FC7TTL\u7684\u6570\u636E\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\uFF08TTL\u53C2\u6570\u7684\u5355\u4F4D\u662F\u79D2\uFF09</span>
</code></pre></div><ul><li>\u624B\u52A8\u6307\u5B9A\u9884\u5206\u533A</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">037</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token string">&#39;person&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;info1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;info2&#39;</span><span class="token punctuation">,</span>SPLITS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;1000&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2000&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3000&#39;</span><span class="token punctuation">]</span>
</code></pre></div><ul><li>\u4E5F\u53EF\u4EE5\u628A\u5206\u533A\u89C4\u5219\u521B\u5EFA\u4E8E\u6587\u4EF6\u4E2D</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>vim split<span class="token punctuation">.</span>txt

\u6587\u4EF6\u5185\u5BB9:
aaa 
bbb 
ccc 
ddd

\u6267\u884C
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">037</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token string">&#39;student&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>SPLITS_FILE <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;/root/hbase/split.txt&#39;</span>
</code></pre></div><h2 id="_5\u3001\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> 5\u3001\u63D2\u5165\u6570\u636E</h2><ul><li>\u5411lagou\u8868\u4E2D\u63D2\u5165\u4FE1\u606F\uFF0Crow key\u4E3A rk1\uFF0C\u5217\u65CFbase_info\u4E2D\u6DFB\u52A0name\u5217\u6807\u793A\u7B26\uFF0C\u503C\u4E3Awang</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> put <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span>
</code></pre></div><ul><li>\u5411lagou\u8868\u4E2D\u63D2\u5165\u4FE1\u606F\uFF0Crow key\u4E3Ark1\uFF0C\u5217\u65CFbase_info\u4E2D\u6DFB\u52A0age\u5217\u6807\u793A\u7B26\uFF0C\u503C\u4E3A30</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> put <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:age&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span>
</code></pre></div><ul><li>\u5411lagou\u8868\u4E2D\u63D2\u5165\u4FE1\u606F\uFF0Crow key\u4E3Ark1\uFF0C\u5217\u65CFextra_info\u4E2D\u6DFB\u52A0address\u5217\u6807\u793A\u7B26\uFF0C\u503C\u4E3Ashanghai</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> put <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extra_info:address&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shanghai&#39;</span>
</code></pre></div><h2 id="_6\u3001\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> 6\u3001\u67E5\u8BE2\u6570\u636E</h2><p>6.1 \u901A\u8FC7rowkey\u8FDB\u884C\u67E5\u8BE2</p><ul><li>\u83B7\u53D6\u8868\u4E2Drow key\u4E3Ark1\u7684\u6240\u6709\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span>
</code></pre></div><p>6.2 \u67E5\u770Browkey\u4E0B\u9762\u7684\u67D0\u4E2A\u5217\u65CF\u7684\u4FE1\u606F</p><ul><li>\u83B7\u53D6lagou\u8868\u4E2Drow key\u4E3Ark1\uFF0Cbase_info\u5217\u65CF\u7684\u6240\u6709\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info&#39;</span>
</code></pre></div><p>6.3 \u67E5\u770Browkey\u6307\u5B9A\u5217\u65CF\u6307\u5B9A\u5B57\u6BB5\u7684\u503C</p><ul><li>\u83B7\u53D6\u8868\u4E2Drow key\u4E3Ark1\uFF0Cbase_info\u5217\u65CF\u7684name\u3001age\u5217\u6807\u793A\u7B26\u7684\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">008</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:age&#39;</span>
</code></pre></div><p>6.4 \u67E5\u770Browkey\u6307\u5B9A\u591A\u4E2A\u5217\u65CF\u7684\u4FE1\u606F</p><ul><li>\u83B7\u53D6lagou\u8868\u4E2Drow key\u4E3Ark1\uFF0Cbase_info\u3001extra_info\u5217\u65CF\u7684\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">010</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extra_info&#39;</span> 
\u6216\u8005 
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">011</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMN</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extra_info&#39;</span><span class="token punctuation">]</span>} 
\u6216\u8005 
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">012</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMN</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;base_info:name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extra_info:address&#39;</span><span class="token punctuation">]</span>}
</code></pre></div><p>6.5 \u6307\u5B9Arowkey\u4E0E\u5217\u503C\u67E5\u8BE2</p><ul><li>\u83B7\u53D6\u8868\u4E2Drow key\u4E3Ark1\uFF0Ccell\u7684\u503C\u4E3Awang\u7684\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> {FILTER <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;ValueFilter(=, &#39;binary:wang&#39;)&quot;</span>}
</code></pre></div><p>6.6 \u6307\u5B9Arowkey\u4E0E\u5217\u503C\u6A21\u7CCA\u67E5\u8BE2</p><ul><li>\u83B7\u53D6\u8868\u4E2Drowkey\u4E3Ark1\uFF0C\u5217\u6807\u793A\u7B26\u4E2D\u542B\u6709a\u7684\u65B0\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> get <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> {FILTER <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot; (QualifierFilter(=,&#39;substring:a&#39;))&quot;</span>}
</code></pre></div><p>6.7 \u67E5\u8BE2\u6240\u6709\u6570\u636E</p><ul><li>\u67E5\u8BE2lagou\u8868\u4E2D\u7684\u6240\u6709\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">000</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span>
</code></pre></div><p>6.8 \u5217\u65CF\u67E5\u8BE2</p><ul><li>\u67E5\u8BE2\u8868\u4E2D\u5217\u65CF\u4E3A base_info \u7684\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span>} 
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">002</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> RAW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span> VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3</span>} 

<span class="token comment">## Scan\u65F6\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u5F00\u542FRaw\u6A21\u5F0F,\u5F00\u542FRaw\u6A21\u5F0F\u4F1A\u8FD4\u56DE\u5305\u62EC\u5DF2\u6DFB\u52A0\u5220\u9664\u6807\u8BB0\u4F46\u662F\u672A\u5B9E\u9645\u5220\u9664\u7684\u6570\u636E</span>
<span class="token comment">## VERSIONS\u6307\u5B9A\u67E5\u8BE2\u7684\u6700\u5927\u7248\u672C\u6570</span>
</code></pre></div><p>6.9 \u6307\u5B9A\u591A\u4E2A\u5217\u65CF\u4E0E\u6309\u7167\u6570\u636E\u503C\u6A21\u7CCA\u67E5\u8BE2</p><ul><li>\u67E5\u8BE2lagou\u8868\u4E2D\u5217\u65CF\u4E3A base_info \u548C extra_info\u4E14\u5217\u6807\u793A\u7B26\u4E2D\u542B\u6709a\u5B57\u7B26\u7684\u4FE1\u606F</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;extra_info&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> FILTER <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;(QualifierFilter(=,&#39;substring:a&#39;))&quot;</span>}
</code></pre></div><p>6.10 rowkey\u7684\u8303\u56F4\u503C\u67E5\u8BE2\uFF08\u975E\u5E38\u91CD\u8981\uFF09</p><ul><li>\u67E5\u8BE2lagou\u8868\u4E2D\u5217\u65CF\u4E3Abase_info\uFF0Crk\u8303\u56F4\u662F[rk1, rk3)\u7684\u6570\u636E\uFF08rowkey\u5E95\u5C42\u5B58\u50A8\u662F\u5B57\u5178\u5E8F\uFF09</li><li>\u6309rowkey\u987A\u5E8F\u5B58\u50A8\u3002</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> STARTROW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> ENDROW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;rk3&#39;</span>}
</code></pre></div><p>6.11 \u6307\u5B9Arowkey\u6A21\u7CCA\u67E5\u8BE2</p><ul><li>\u67E5\u8BE2lagou\u8868\u4E2Drow key\u4EE5rk\u5B57\u7B26\u5F00\u5934\u7684</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span>{FILTER<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&quot;PrefixFilter(&#39;rk&#39;)&quot;</span>}
</code></pre></div><h2 id="_7\u3001\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> 7\u3001\u66F4\u65B0\u6570\u636E</h2><ul><li><p>\u66F4\u65B0\u64CD\u4F5C\u540C\u63D2\u5165\u64CD\u4F5C\u4E00\u6A21\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u6709\u6570\u636E\u5C31\u66F4\u65B0\uFF0C\u6CA1\u6570\u636E\u5C31\u6DFB\u52A0</p></li><li><p>\u628Alagou\u8868\u4E2Drowkey\u4E3Ark1\u7684base_info\u5217\u65CF\u4E0B\u7684\u5217name\u4FEE\u6539\u4E3Aliang</p></li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">030</span>:<span class="token number">0</span><span class="token operator">&gt;</span> put <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;liang&#39;</span>
</code></pre></div><h2 id="_8\u3001\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> 8\u3001\u5220\u9664\u6570\u636E</h2><p>8.1 \u6307\u5B9Arowkey\u4EE5\u53CA\u5217\u540D\u8FDB\u884C\u5220\u9664</p><ul><li>\u5220\u9664lagou\u8868row key\u4E3Ark1\uFF0C\u5217\u6807\u793A\u7B26\u4E3A base_info:name \u7684\u6570\u636E</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">002</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">delete</span> <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:name&#39;</span>
</code></pre></div><p>8.2 \u6307\u5B9Arowkey\uFF0C\u5217\u540D\u4EE5\u53CA\u65F6\u95F4\u6233\u4FE1\u606F\u8FDB\u884C\u5220\u9664</p><ul><li>\u5220\u9664lagou\u8868row key\u4E3Ark1\uFF0C\u5217\u6807\u793A\u7B26\u4E3Abase_info:name\u7684\u6570\u636E</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> RAW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span> VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3</span>} 
<span class="token keyword">ROW</span>                                                         <span class="token keyword">COLUMN</span><span class="token operator">+</span>CELL
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:age<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797055275</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token operator">=</span><span class="token number">30</span>
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797189784</span><span class="token punctuation">,</span> <span class="token keyword">type</span><span class="token operator">=</span><span class="token keyword">Delete</span>     
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797189784</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token operator">=</span>liang
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797051271</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token operator">=</span>wang 

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">033</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">delete</span> <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rk1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;base_info:name&#39;</span><span class="token punctuation">,</span><span class="token number">1600660619655</span> 
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">023</span>:<span class="token number">0</span><span class="token operator">&gt;</span> scan <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span><span class="token punctuation">,</span> RAW <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span> VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3</span>} 
<span class="token keyword">ROW</span>                                                         <span class="token keyword">COLUMN</span><span class="token operator">+</span>CELL                                                      
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:age<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797055275</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token operator">=</span><span class="token number">30</span>
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797189784</span><span class="token punctuation">,</span> <span class="token keyword">type</span><span class="token operator">=</span><span class="token keyword">Delete</span>
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797189784</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token operator">=</span>liang
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1641797051271</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token operator">=</span>wang
 rk1                                                        <span class="token keyword">column</span><span class="token operator">=</span>base_info:name<span class="token punctuation">,</span> <span class="token keyword">timestamp</span><span class="token operator">=</span><span class="token number">1600660619655</span><span class="token punctuation">,</span> <span class="token keyword">type</span><span class="token operator">=</span><span class="token keyword">Delete</span>
</code></pre></div><p>8.3 \u5220\u9664\u5217\u65CF</p><ul><li>\u5220\u9664 base_info \u5217\u65CF</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span>

hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">035</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">alter</span> <span class="token string">&#39;lagou&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;base_info&#39;</span>
</code></pre></div><p>8.4 \u6E05\u7A7A\u8868\u6570\u636E</p><ul><li>\u5220\u9664lagou\u8868\u6570\u636E</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code>hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">001</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">truncate</span> <span class="token string">&#39;lagou&#39;</span>
</code></pre></div><p>8.5 \u5220\u9664\u8868</p><ul><li>\u5220\u9664lagou\u8868</li></ul><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">#\u5148disable \u518Ddrop </span>
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">036</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">disable</span> <span class="token string">&#39;lagou&#39;</span> 
hbase<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:<span class="token number">037</span>:<span class="token number">0</span><span class="token operator">&gt;</span> <span class="token keyword">drop</span> <span class="token string">&#39;lagou&#39;</span> 

<span class="token comment">#\u5982\u679C\u4E0D\u8FDB\u884Cdisable\uFF0C\u76F4\u63A5drop\u4F1A\u62A5\u9519 ERROR: Table user is enabled. Disable it first.</span>
</code></pre></div>`,93),o=[t];function l(c,r){return a(),n("div",null,o)}var u=s(e,[["render",l],["__file","index.html.vue"]]);export{u as default};
