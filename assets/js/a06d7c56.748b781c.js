"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[607],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return h}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),h=s,u=d["".concat(i,".").concat(h)]||d[h]||c[h]||r;return t?n.createElement(u,l(l({ref:a},m),{},{components:t})):n.createElement(u,l({ref:a},m))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6126:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),l=["components"],o={sidebar_position:1,description:"How to create a wallet with Lunes SDK",keywords:["wallet","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet","lunes creation wallet"]},i="\ud83d\udd10 Cryptography",p={unversionedId:"sdk/wallet/cryptography",id:"sdk/wallet/cryptography",title:"\ud83d\udd10 Cryptography",description:"How to create a wallet with Lunes SDK",source:"@site/docs/sdk/wallet/cryptography.mdx",sourceDirName:"sdk/wallet",slug:"/sdk/wallet/cryptography",permalink:"/telescope/docs/sdk/wallet/cryptography",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to create a wallet with Lunes SDK",keywords:["wallet","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet","lunes creation wallet"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\udef0 Install Lunes Node",permalink:"/telescope/docs/sdk/install_node"},next:{title:"\ud83d\udd11 Create Wallet",permalink:"/telescope/docs/sdk/wallet/create"}},m={},c=[{value:"A <strong>Wallet</strong> like is an e-mail account, which instead of having <em>address@provider</em> and <em>password</em> has:",id:"a-wallet-like-is-an-e-mail-account-which-instead-of-having-addressprovider-and-password-has",level:2},{value:"The wallet can be generated for testnet or mainnet. <strong>This will only change the address</strong>.",id:"the-wallet-can-be-generated-for-testnet-or-mainnet-this-will-only-change-the-address",level:2},{value:"The seed used to create an wallet must be a list of 12 or more words, it is possible to generate a seed with up to 2048 words.",id:"the-seed-used-to-create-an-wallet-must-be-a-list-of-12-or-more-words-it-is-possible-to-generate-a-seed-with-up-to-2048-words",level:2},{value:"The chance of two equal wallets to be created is \frac 1 {2048^n} where n is the number of words.",id:"the-chance-of-two-equal-wallets-to-be-created-is-frac-1-2048n-where-n-is-the-number-of-words",level:2},{value:"You can generate a wallet passing your <code>seed</code>, <code>private key</code>, <code>public key</code> and <code>address</code> as <strong>parameters</strong> or nothing to generate a new one.",id:"you-can-generate-a-wallet-passing-your-seed-private-key-public-key-and-address-as-parameters-or-nothing-to-generate-a-new-one",level:2},{value:"Changing the nonce is possible generate 4 294 967 295 different wallets with only one seed.",id:"changing-the-nonce-is-possible-generate-4-294-967-295-different-wallets-with-only-one-seed",level:2}],d={toc:c};function h(e){var a=e.components,t=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-cryptography"},"\ud83d\udd10 Cryptography"),(0,r.kt)("h2",{id:"a-wallet-like-is-an-e-mail-account-which-instead-of-having-addressprovider-and-password-has"},"A ",(0,r.kt)("strong",{parentName:"h2"},"Wallet")," like is an e-mail account, which instead of having ",(0,r.kt)("em",{parentName:"h2"},"address@provider")," and ",(0,r.kt)("em",{parentName:"h2"},"password")," has:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seed: list of random words used to generate keys and address"),(0,r.kt)("li",{parentName:"ul"},"chain: blockchain fork, can be mainnet or testnet"),(0,r.kt)("li",{parentName:"ul"},"nonce: number used to generate new keys with the same seed"),(0,r.kt)("li",{parentName:"ul"},"private key: key used to sign transactions"),(0,r.kt)("li",{parentName:"ul"},"public key: key derived from the private key used to derive the address"),(0,r.kt)("li",{parentName:"ul"},"address: public address used to receive assets")),(0,r.kt)("h2",{id:"the-wallet-can-be-generated-for-testnet-or-mainnet-this-will-only-change-the-address"},"The wallet can be generated for testnet or mainnet. ",(0,r.kt)("strong",{parentName:"h2"},"This will only change the address"),"."),(0,r.kt)("h2",{id:"the-seed-used-to-create-an-wallet-must-be-a-list-of-12-or-more-words-it-is-possible-to-generate-a-seed-with-up-to-2048-words"},"The seed used to create an wallet must be a list of 12 or more words, it is possible to generate a seed with up to 2048 words."),(0,r.kt)("h2",{id:"the-chance-of-two-equal-wallets-to-be-created-is-frac-1-2048n-where-n-is-the-number-of-words"},"The chance of two equal wallets to be created is ",(0,r.kt)("span",{parentName:"h2",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"mfrac"},"1"),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mn",{parentName:"mrow"},"204"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"8"),(0,r.kt)("mi",{parentName:"msup"},"n"))))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac 1 {2048^n}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.190108em",verticalAlign:"-0.345em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.845108em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"4"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"8"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.5935428571428571em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.07142857142857144em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," where ",(0,r.kt)("span",{parentName:"h2",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of words."),(0,r.kt)("h2",{id:"you-can-generate-a-wallet-passing-your-seed-private-key-public-key-and-address-as-parameters-or-nothing-to-generate-a-new-one"},"You can generate a wallet passing your ",(0,r.kt)("inlineCode",{parentName:"h2"},"seed"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"private key"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"public key")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"address")," as ",(0,r.kt)("strong",{parentName:"h2"},"parameters")," or nothing to generate a new one."),(0,r.kt)("h2",{id:"changing-the-nonce-is-possible-generate-4-294-967-295-different-wallets-with-only-one-seed"},"Changing the nonce is possible generate 4 294 967 295 different wallets with only one seed."))}h.isMDXComponent=!0}}]);