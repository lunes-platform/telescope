"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[224],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),k=u(n),d=a,m=k["".concat(i,".").concat(d)]||k[d]||p[d]||o;return n?r.createElement(m,s(s({ref:e},c),{},{components:n})):r.createElement(m,s({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3814:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={sidebar_position:1,description:"How to make transactions with Lunes SDK",keywords:["transactions","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet transactions"]},i="\ud83d\udcee Transactions",u={unversionedId:"sdk/transactions/tx",id:"sdk/transactions/tx",title:"\ud83d\udcee Transactions",description:"How to make transactions with Lunes SDK",source:"@site/docs/sdk/transactions/tx.mdx",sourceDirName:"sdk/transactions",slug:"/sdk/transactions/tx",permalink:"/telescope/fr/docs/sdk/transactions/tx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to make transactions with Lunes SDK",keywords:["transactions","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet transactions"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\udd11 Create Wallet",permalink:"/telescope/fr/docs/sdk/wallet/create"},next:{title:"\ud83d\udce9 Transfer Tokens",permalink:"/telescope/fr/docs/sdk/transactions/send_token"}},c={},p=[{value:"Tokens, Assets and NFTs",id:"tokens-assets-and-nfts",level:2},{value:"Lunes Transaction",id:"lunes-transaction",level:2}],k={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-transactions"},"\ud83d\udcee Transactions"),(0,o.kt)("h2",{id:"tokens-assets-and-nfts"},"Tokens, Assets and NFTs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token")," are representations of something real or not, such as identity, value, product, etc..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Asset")," are tokens that represent some value, which can be fractionable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NFT")," are a type of token, non-fractional, that represents the intellectual property of something, such as music, video, photo, etc.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tokens parameter")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"must be more than 4 and less than 16 characters.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"reissuable"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"allow you reissue your token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"quantity"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"how many tokens to create.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"decimal"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"fractionate your token.")))),(0,o.kt)("h2",{id:"lunes-transaction"},"Lunes Transaction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: uint 1byte"),(0,o.kt)("li",{parentName:"ul"},"Sender Public Key: array","[uint]"," 32bytes"),(0,o.kt)("li",{parentName:"ul"},"Token Flag: uint 1byte (0 for Lunes, 1 for Token)"),(0,o.kt)("li",{parentName:"ul"},"Token Id: array","[uint]"," 32bytes (0 for Lunes, array","[uint]"," for Token)"),(0,o.kt)("li",{parentName:"ul"},"Token Fee: uint 1byte (0 for Lunes, 1 for Token)"),(0,o.kt)("li",{parentName:"ul"},"Token Fee Id: array","[uint]"," 32bytes (0 for Lunes, array","[uint]"," for Token)"),(0,o.kt)("li",{parentName:"ul"},"Timestamp: uint 8bytes"),(0,o.kt)("li",{parentName:"ul"},"Amount: uint 8bytes"),(0,o.kt)("li",{parentName:"ul"},"Fee: uint 8bytes"),(0,o.kt)("li",{parentName:"ul"},"Recipient Address: array","[uint]"," 26bytes")))}d.isMDXComponent=!0}}]);