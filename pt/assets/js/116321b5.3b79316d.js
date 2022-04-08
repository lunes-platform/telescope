"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[99],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:3,description:"How to make transactions with Lunes SDK",keywords:["transactions","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet transactions"]},c="\ud83d\udc7e Create NFT",l={unversionedId:"sdk/transactions/issueNFT",id:"sdk/transactions/issueNFT",title:"\ud83d\udc7e Create NFT",description:"How to make transactions with Lunes SDK",source:"@site/docs/sdk/transactions/issueNFT.mdx",sourceDirName:"sdk/transactions",slug:"/sdk/transactions/issueNFT",permalink:"/pt/docs/sdk/transactions/issueNFT",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"How to make transactions with Lunes SDK",keywords:["transactions","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet transactions"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\ude80 Token Airdrop",permalink:"/pt/docs/sdk/transactions/issue"},next:{title:"\ud83d\udce9 Transfer Token",permalink:"/pt/docs/sdk/transactions/send_token"}},u={},p=[{value:"Create Wallet",id:"create-wallet",level:2},{value:"Create NFT",id:"create-nft",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=d("Tabs"),m=d("TabItem"),y={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-create-nft"},"\ud83d\udc7e Create NFT"),(0,o.kt)("h2",{id:"create-wallet"},"Create Wallet"),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(m,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from lunespy.client.wallet import Account\n\nwallet = Account()\n")),(0,o.kt)("h2",{id:"create-nft"},"Create NFT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.transaction.issue import IssueNFT\n\ntx = IssueNFT(\n  description="Tokenizing my Ford Mustang Shelby GT500 1967",\n  reissueable=False,\n  name="Eleanor",\n  sender=wallet,\n  quantity=1,\n  decimals=0\n).send()\n'))),(0,o.kt)(m,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))))}k.isMDXComponent=!0}}]);