(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{438:function(n,t,e){var map={"./2020-05-03_create-blog.json":439,"./2020-05-04_test.json":440};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=438},439:function(n){n.exports=JSON.parse('{"title":"ブログ作りました。","image":"example.jpg","tags":"Nuxt.js,GKE","created_at":"2020-05-03T00:00:00.000Z","bodyContent":"## 概要\\nコロナの外出自粛のおかげでとても暇になったのでブログを作ってみました。\\nNuxt.jsで作ったサイトをCloud Run上で動かしています。\\n\\n## 記事公開について\\n### 記事の作成方法\\nmarkdownで記事を書き、その記事がremoteのmasterブランチにマージされると自動でデプロイされる仕組みになっています。\\nGKEにはCode Buildを使ってデプロイするか、Github Actionsでデプロイするか迷ったのですが、現状はGithub Actionsを使用するようにしています。\\n\\n### 記事公開の仕組みについて\\n記事をmarkdownで記述したのち、masterにプッシュすると以下のような処理が走ります。\\n\\n1. markdownから記事の情報を取り出すスクリプト(processmd)が走り、記事情報のjsonを作成\\n2. Nuxt.jsの静的ソースの作成\\n3. Dockerイメージの作成\\n4. GKEにデプロイ\\n\\n## 料金について\\nかかっている料金はざっくり以下のようになっています。\\n\\n- ドメイン\\n- GKEのインスタンス使用量\\n- ネットワーク使用量\\n\\nGKEのインスタンスに関してはspotインスタンスを使用しているので料金は抑えられているかと思います。\\n一応GCPの無料枠もあるのですが、そこそこ使ってしまいそうです。\\nCloud Runについても考えたのですが、速度面等も考慮してこちらを使用することにしました。\\n\\n以下サンプルコードです。\\n```javascript\\nconst hoge = \\"\\";\\nconsole.log(hoge);\\n```","bodyHtml":"<h2>概要</h2>\\n<p>コロナの外出自粛のおかげでとても暇になったのでブログを作ってみました。\\nNuxt.jsで作ったサイトをCloud Run上で動かしています。</p>\\n<h2>記事公開について</h2>\\n<h3>記事の作成方法</h3>\\n<p>markdownで記事を書き、その記事がremoteのmasterブランチにマージされると自動でデプロイされる仕組みになっています。\\nGKEにはCode Buildを使ってデプロイするか、Github Actionsでデプロイするか迷ったのですが、現状はGithub Actionsを使用するようにしています。</p>\\n<h3>記事公開の仕組みについて</h3>\\n<p>記事をmarkdownで記述したのち、masterにプッシュすると以下のような処理が走ります。</p>\\n<ol>\\n<li>markdownから記事の情報を取り出すスクリプト(processmd)が走り、記事情報のjsonを作成</li>\\n<li>Nuxt.jsの静的ソースの作成</li>\\n<li>Dockerイメージの作成</li>\\n<li>GKEにデプロイ</li>\\n</ol>\\n<h2>料金について</h2>\\n<p>かかっている料金はざっくり以下のようになっています。</p>\\n<ul>\\n<li>ドメイン</li>\\n<li>GKEのインスタンス使用量</li>\\n<li>ネットワーク使用量</li>\\n</ul>\\n<p>GKEのインスタンスに関してはspotインスタンスを使用しているので料金は抑えられているかと思います。\\n一応GCPの無料枠もあるのですが、そこそこ使ってしまいそうです。\\nCloud Runについても考えたのですが、速度面等も考慮してこちらを使用することにしました。</p>\\n<p>以下サンプルコードです。</p>\\n<pre><code class=\\"hljs\\"><span class=\\"hljs-keyword\\">const</span> hoge = <span class=\\"hljs-string\\">\\"\\"</span>;\\n<span class=\\"hljs-built_in\\">console</span>.log(hoge);</code></pre>","preview":"概要\\nコロナの外出自粛のおかげでとても暇になったのでブログを作ってみました。\\nNuxt.jsで作ったサイトをCloud","dir":"contents/json","base":"2020-05-03_create-blog.json","ext":".json","sourceBase":"2020-05-03_create-blog.md","sourceExt":".md"}')},440:function(n){n.exports=JSON.parse('{"title":"タイトル","image":"example.jpg","tags":"test","created_at":"2020-05-04T00:00:00.000Z","bodyContent":"## 概要\\n本文\\n\\n## その１\\nhoge\\n### 1-1\\nfugahoge\\n### 1-2\\nhogehoge\\n#### 1-2-1\\nテスト（[トップページ](http://localhost:3000)）","bodyHtml":"<h2>概要</h2>\\n<p>本文</p>\\n<h2>その１</h2>\\n<p>hoge</p>\\n<h3>1-1</h3>\\n<p>fugahoge</p>\\n<h3>1-2</h3>\\n<p>hogehoge</p>\\n<h4>1-2-1</h4>\\n<p>テスト（<a href=\\"http://localhost:3000\\">トップページ</a>）</p>\\n","preview":"概要\\n本文\\n\\nその１\\nhoge\\n1-1\\nfugahoge\\n1-2\\nhogehoge\\n1-2-1\\nテスト（トップページ）","dir":"contents/json","base":"2020-05-04_test.json","ext":".json","sourceBase":"2020-05-04_test.md","sourceExt":".md"}')},445:function(n,t,e){"use strict";e.r(t);e(21),e(22),e(1),e(92),e(71),e(94);var o,r=e(13),c=e(27),l=e(37),h=e(52),d=e(26),m=e(93),summary=e(146),f=e(112);function j(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(d.a)(n);if(t){var r=Object(d.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(h.a)(this,e)}}var v=Object(m.Component)(o=function(n){Object(l.a)(o,n);var t=j(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"mounted",value:function(){f.a.highlightAll()}},{key:"validate",value:function(n){var t=n.params;return summary.sourceFileArray.includes("contents/md/".concat(t.date,"_").concat(t.slug,".md"))}},{key:"asyncData",value:function(n){var t=n.params;return Object.assign({},e(438)("./".concat(t.date,"_").concat(t.slug,".json")),{params:t})}}]),o}(m.Vue))||o,_=e(34),component=Object(_.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"post-title"},[n._v(n._s(n.title))]),n._v(" "),e("div",{staticClass:"post-meta"},[e("time",[n._v(n._s(n.params.date))])]),n._v(" "),e("div",{staticClass:"post markdown-body",domProps:{innerHTML:n._s(n.$md.render(n.bodyContent))}})])}),[],!1,null,null,null);t.default=component.exports}}]);