"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[224],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1,description:"How to make transactions with Lunes SDK",keywords:["transactions","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet transactions"]},c="\ud83d\udcee Transactions",l={unversionedId:"sdk/transactions/tx",id:"sdk/transactions/tx",title:"\ud83d\udcee Transactions",description:"How to make transactions with Lunes SDK",source:"@site/docs/sdk/transactions/tx.mdx",sourceDirName:"sdk/transactions",slug:"/sdk/transactions/tx",permalink:"/docs/sdk/transactions/tx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to make transactions with Lunes SDK",keywords:["transactions","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet transactions"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\udd11 Create Wallet",permalink:"/docs/sdk/wallet/create"},next:{title:"\ud83d\udc8c Send Lunes",permalink:"/docs/sdk/transactions/send_lunes"}},u={},p=[{value:"Native Tokens",id:"native-tokens",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-transactions"},"\ud83d\udcee Transactions"),(0,o.kt)("h2",{id:"native-tokens"},"Native Tokens"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Brief description of what Tokens, Assets and NFTs are")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token")," are representations of something real or not, such as identity, value, product, etc..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Asset")," are tokens that represent some value, which can be fractionable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NFT")," are a type of token, non-fractional, that represents the intellectual property of something, such as music, video, photo, etc.")),(0,o.kt)("p",null,"Your parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," must be more than 4 and less than 16 characters."),(0,o.kt)("p",null,"You can choose how many tokens to create by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"quantity")," parameter."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"decimal")," parameter can be useful to fractionate your token."),(0,o.kt)("p",null,"Putting ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"reissuable")," parameter will allow you to issue more of the same asset in the future."),(0,o.kt)("p",null,"The issue Token costs ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"1Lunes"))))}f.isMDXComponent=!0}}]);