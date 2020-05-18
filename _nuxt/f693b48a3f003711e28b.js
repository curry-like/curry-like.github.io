(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{439:function(n,t,e){var map={"./2020-05-17_create-blog.json":440};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=439},440:function(n){n.exports=JSON.parse('{"title":"ブログ作りました。","image":"example.jpg","tags":"Nuxt.js,GKE","created_at":"2020-05-17T00:00:00.000Z","bodyContent":"## 概要\\nコロナの外出自粛のおかげで暇になったのでポートフォリオを作ってみました。\\n機能としてはまだ最小限しかなく、ポートフォリオのトップページと、ブログページを作成しています。\\n\\nこのサイトは Nuxt.js で作成したサイトを Github Pages で公開しています。\\n今回は作ったサイトの開発に関して記事にして行こうと思います。\\n\\n## セットアップ\\n使用している技術と開発環境構築について書いていきます。\\n\\n### 使用している技術\\n以下の技術を使用しています。\\n- node 12.x\\n- TypeScript\\n- Nuxt.js\\n- Docker\\n\\nNodeのバージョンはGithub Actionsで用意されているNodeを使おうと思ったため、その中で一番新しかった12系を使用しています。\\n\\n### 開発\\n[こちら](https://github.com/curry-like/curry-like.github.io)のリポジトリをcloneし、以下のコマンドを実行すると開発環境が整います。\\n```shell script\\n$ docker-compose up\\n```\\n\\nこのコマンドで起動するコンテナは、npmのwatchタスクを動かすように設定しています。\\ndocker-compose内でブログのディレクトリをコンテナにマウントしているので、localでソースコードを書き換えると自動で更新されます。\\nコマンド実行後、「localhost:3000」を開くとサービスが立ち上がっているかと思います。\\n\\nデザインに関しては自分は特にこだわりがないので、 Bootstrap を使用しているのですが、文字の大きさやレイアウトについて一部みやすいように修正を加えてあります。\\n\\n## 記事公開について\\nこのサイトにはブログ機能をつけたわけなのですが、ブログというと日々記事を更新していく必要があります。\\nそこでここでは記事の公開方法について書いていきます。\\n\\n### 記事の作成方法\\n記事は全て markdown で書くようにしています。\\nmarkdown を contents/md 以下に配置し、下記のコマンドを実行すると記事が反映されます。\\n```shell script\\n$ docker-compose run --rm nuxt npm run processmd\\n```\\n\\nこのジョブでは下記のことを行っています。\\n1. processmd で記事情報をjsonに変換\\n2. 記事のsummary をまとめた json を作成\\n3. 1, 2で作成したjsonを反映させる\\n\\nはじめは processmd で作成したjsonをそのまま反映させようとしたのですが、一時的に json の形式がおかしくなってしまうため、一度下書きの json を作成し、その後に反映させるようにしました。\\n\\n### 記事の本番公開の仕組みについて\\n記事を markdown で記述したのち、develop にプッシュするとGithub Actions が起動し、以下の処理が走ります。\\n\\n1. Node のセットアップ\\n2. 各種依存関係の install\\n3. processmd コマンドで記事を作成\\n4. generate コマンドで静的ファイルの作成\\n5. masterにコミット\\n\\nmaster へのコミットに関しては peaceiris/actions-gh-pages@v3 を使用しています。\\n\\nNuxt.js の公式ページでは Travis CI を使用する例が記載されていたのですが、Github Actions で完結させたかったためこのような作りとなりました。\\n\\nGithub Pages の場合、repository 名が 「<USER_NAME>.github.io」ではない場合は静的ファイルを配置する directory を指定できたり、master 以外のブランチを後悔できたりするので、master にマージされるとリリースのような流れにできるかなと思います。\\n\\n## 料金について\\nGithub Pagesを使用しているので、特に料金はかかっていません。\\n独自のドメインを使用したり、自分でサーバーを立てたりするとその料金がかかりますが、ミニマムな構成で構築すればドメイン料金程度で運用できるかと思います。","bodyHtml":"<h2>概要</h2>\\n<p>コロナの外出自粛のおかげで暇になったのでポートフォリオを作ってみました。\\n機能としてはまだ最小限しかなく、ポートフォリオのトップページと、ブログページを作成しています。</p>\\n<p>このサイトは Nuxt.js で作成したサイトを Github Pages で公開しています。\\n今回は作ったサイトの開発に関して記事にして行こうと思います。</p>\\n<h2>セットアップ</h2>\\n<p>使用している技術と開発環境構築について書いていきます。</p>\\n<h3>使用している技術</h3>\\n<p>以下の技術を使用しています。</p>\\n<ul>\\n<li>node 12.x</li>\\n<li>TypeScript</li>\\n<li>Nuxt.js</li>\\n<li>Docker</li>\\n</ul>\\n<p>NodeのバージョンはGithub Actionsで用意されているNodeを使おうと思ったため、その中で一番新しかった12系を使用しています。</p>\\n<h3>開発</h3>\\n<p><a href=\\"https://github.com/curry-like/curry-like.github.io\\">こちら</a>のリポジトリをcloneし、以下のコマンドを実行すると開発環境が整います。</p>\\n<pre><code class=\\"hljs\\">$ docker-compose up</code></pre><p>このコマンドで起動するコンテナは、npmのwatchタスクを動かすように設定しています。\\ndocker-compose内でブログのディレクトリをコンテナにマウントしているので、localでソースコードを書き換えると自動で更新されます。\\nコマンド実行後、「localhost:3000」を開くとサービスが立ち上がっているかと思います。</p>\\n<p>デザインに関しては自分は特にこだわりがないので、 Bootstrap を使用しているのですが、文字の大きさやレイアウトについて一部みやすいように修正を加えてあります。</p>\\n<h2>記事公開について</h2>\\n<p>このサイトにはブログ機能をつけたわけなのですが、ブログというと日々記事を更新していく必要があります。\\nそこでここでは記事の公開方法について書いていきます。</p>\\n<h3>記事の作成方法</h3>\\n<p>記事は全て markdown で書くようにしています。\\nmarkdown を contents/md 以下に配置し、下記のコマンドを実行すると記事が反映されます。</p>\\n<pre><code class=\\"hljs\\">$ docker-compose run --rm nuxt npm run processmd</code></pre><p>このジョブでは下記のことを行っています。</p>\\n<ol>\\n<li>processmd で記事情報をjsonに変換</li>\\n<li>記事のsummary をまとめた json を作成</li>\\n<li>1, 2で作成したjsonを反映させる</li>\\n</ol>\\n<p>はじめは processmd で作成したjsonをそのまま反映させようとしたのですが、一時的に json の形式がおかしくなってしまうため、一度下書きの json を作成し、その後に反映させるようにしました。</p>\\n<h3>記事の本番公開の仕組みについて</h3>\\n<p>記事を markdown で記述したのち、develop にプッシュするとGithub Actions が起動し、以下の処理が走ります。</p>\\n<ol>\\n<li>Node のセットアップ</li>\\n<li>各種依存関係の install</li>\\n<li>processmd コマンドで記事を作成</li>\\n<li>generate コマンドで静的ファイルの作成</li>\\n<li>masterにコミット</li>\\n</ol>\\n<p>master へのコミットに関しては peaceiris/actions-gh-pages@v3 を使用しています。</p>\\n<p>Nuxt.js の公式ページでは Travis CI を使用する例が記載されていたのですが、Github Actions で完結させたかったためこのような作りとなりました。</p>\\n<p>Github Pages の場合、repository 名が 「&lt;USER_NAME&gt;.github.io」ではない場合は静的ファイルを配置する directory を指定できたり、master 以外のブランチを後悔できたりするので、master にマージされるとリリースのような流れにできるかなと思います。</p>\\n<h2>料金について</h2>\\n<p>Github Pagesを使用しているので、特に料金はかかっていません。\\n独自のドメインを使用したり、自分でサーバーを立てたりするとその料金がかかりますが、ミニマムな構成で構築すればドメイン料金程度で運用できるかと思います。</p>\\n","preview":"概要\\nコロナの外出自粛のおかげで暇になったのでポートフォリオを作ってみました。\\n機能としてはまだ最小限しかなく、ポートフォリオのトップページと、ブログページを作成しています。\\n\\nこのサイトは","dir":"contents/json_temp","base":"2020-05-17_create-blog.json","ext":".json","sourceBase":"2020-05-17_create-blog.md","sourceExt":".md"}')},445:function(n,t,e){"use strict";e.r(t);e(21),e(22),e(1),e(92),e(71),e(94);var o,r=e(13),c=e(27),l=e(37),d=e(52),m=e(26),h=e(93),summary=e(146),j=e(112);function f(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(m.a)(n);if(t){var r=Object(m.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(d.a)(this,e)}}var v=Object(h.Component)(o=function(n){Object(l.a)(o,n);var t=f(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"mounted",value:function(){j.a.highlightAll()}},{key:"validate",value:function(n){var t=n.params;return summary.sourceFileArray.includes("contents/md/".concat(t.date,"_").concat(t.slug,".md"))}},{key:"asyncData",value:function(n){var t=n.params;return Object.assign({},e(439)("./".concat(t.date,"_").concat(t.slug,".json")),{params:t})}}]),o}(h.Vue))||o,y=e(34),component=Object(y.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"post-title"},[n._v(n._s(n.title))]),n._v(" "),e("div",{staticClass:"post-meta"},[e("time",[n._v(n._s(n.params.date))])]),n._v(" "),e("div",{staticClass:"post markdown-body",domProps:{innerHTML:n._s(n.$md.render(n.bodyContent))}})])}),[],!1,null,null,null);t.default=component.exports}}]);