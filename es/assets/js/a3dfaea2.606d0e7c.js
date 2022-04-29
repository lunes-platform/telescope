"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[502],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(7294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(2389),o=n(5979),i=n(6010),s="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,d=t.block,p=t.defaultValue,c=t.values,m=t.groupId,k=t.className,g=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,o.lx)(f,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(e=null!=p?p:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!f.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),v=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,r.useState)(b),T=w[0],O=w[1],E=[],L=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var Z=v[m];null!=Z&&Z!==T&&f.some((function(t){return t.value===Z}))&&O(Z)}var x=function(t){var e=t.currentTarget,n=E.indexOf(e),a=f[n].value;a!==T&&(L(e),O(a),null!=m&&y(m,a))},P=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=E.indexOf(t.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(t.currentTarget)-1;n=E[r]||E[E.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},f.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return E.push(t)},onKeyDown:P,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===e})}),null!=n?n:e)}))),u?(0,r.cloneElement)(g.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function d(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},1270:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),s=["components"],u={sidebar_position:1,description:"Intro",keywords:["intro"]},d="\ud83c\udf0e Hello World!",p={unversionedId:"get_started/overview",id:"get_started/overview",title:"\ud83c\udf0e Hello World!",description:"Intro",source:"@site/docs/get_started/overview.mdx",sourceDirName:"get_started",slug:"/get_started/overview",permalink:"/telescope/es/docs/get_started/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Intro",keywords:["intro"]},sidebar:"defaultSidebar",next:{title:"\ud83c\udf89 Releases",permalink:"/telescope/es/docs/get_started/releases"}},c={},m=[{value:"\ud83d\ude0a Who we are",id:"-who-we-are",level:2},{value:"\ud83d\udd2d Vision",id:"-vision",level:2},{value:"\ud83c\udfd7 How",id:"-how",level:2},{value:"\ud83d\udca1 The New Paradigm",id:"-the-new-paradigm",level:2},{value:"\u2705 What is Done",id:"-what-is-done",level:2}],k={toc:m};function g(t){var e=t.components,u=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,u,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-hello-world"},"\ud83c\udf0e Hello World!"),(0,l.kt)("p",null,"Welcome to the Telescope. Here you can find technical content for build on top of Lunes Blockchain.\nLunes is token-drive blockchain created in 2015 with goal be fast and simple to support the new Token Economics.\nLunes is different because Tokens on Lunes are not built with smart contracts, it are Native Tokens!\nLunes is a proof-of-stake blockchain. By design, it consumes much less energy and computational power.\nTo get the most out of the Telescope, you should have programming experience and a basic understanding of blockchain concepts, such as UTxO, transactions, addresses, key derivation, and networking."),(0,l.kt)("h2",{id:"-who-we-are"},"\ud83d\ude0a Who we are"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lunes is a token-driven, modular blockchain-based platform open to everyone.")),(0,l.kt)("h2",{id:"-vision"},"\ud83d\udd2d Vision"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Be a simple, modular and expandable blockchain for everyone.")),(0,l.kt)("h2",{id:"-how"},"\ud83c\udfd7 How"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Decoupling components and writing accurate, readable documentation for everyone to contribute.")),(0,l.kt)("h2",{id:"-the-new-paradigm"},"\ud83d\udca1 The New Paradigm"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83d\udd11 Authenticated"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Web 2.0"),"\n",(0,l.kt)("img",{alt:"image",src:n(8327).Z,width:"3232",height:"928"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lunes Protocol"),"\n",(0,l.kt)("img",{alt:"image",src:n(3277).Z,width:"3680",height:"928"}))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83d\udef0 Infrastructure"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Web 2.0"),"\n",(0,l.kt)("img",{alt:"image",src:n(9872).Z,width:"2464",height:"928"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lunes Protocol"),"\n",(0,l.kt)("img",{alt:"image",src:n(9511).Z,width:"3882",height:"2496"}))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\ud83d\udd17 Store Data"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Web 2.0"),"\n",(0,l.kt)("img",{alt:"image",src:n(7951).Z,width:"4576",height:"2496"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lunes Protocol"),"\n",(0,l.kt)("img",{alt:"image",src:n(8239).Z,width:"4576",height:"1888"}))),(0,l.kt)("h2",{id:"-what-is-done"},"\u2705 What is Done"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Lunes Node",label:"\ud83d\udef0 Lunes Node",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Lunes Protocol"),' is a decentralized and distributed network based on the LPoS consensus algorithm.\nThis network can be mainnet or testnet, in mainnet the nodes work with real values of tokens, currencies, NFT and assets.\nOn the other hand, testnet has "fake" tokens to provide a test environment.\n',(0,l.kt)("strong",{parentName:"p"},"In the dev language, mainnet is prod and testnet is stage"),"."),(0,l.kt)("p",null,"Lunes Node is a fuul-node or server that has the responsibility to maintain and validate the blockchain,\nbroadcast new transactions and provide an api for interaction and integration with the network."),(0,l.kt)("p",null,"Running a Lunes Node, you become a participant in the Lunes Blockchain and can provide network resiliency,\nvalidate data, receive rewards and can expose an API to broadcast transactions and integrate real-world services into the blockchain."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MAINNET"),(0,l.kt)("th",{parentName:"tr",align:null},"TESTNET"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Mass Transfer for Lunes and any Tokens and NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Running and ready to receive new features")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer any Tokens and NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Reissue Tokens and NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Create Tokens and NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Burn Tokens and NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer Lunes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Sponsor Token"))))),(0,l.kt)(i.Z,{value:"SDK",label:"\ud83d\udce6 SDK",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Lunes SDK")," helps developers manage their wallets and transact simply and securely,\nproviding a variety of functionality for decentralized applications (DApps) and blockchain integrations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The transaction concept here will be any type of write interaction with the lunes blockchain."),"\nIn this way, we can create a transaction to transfer tokens, a transaction to create tokens, a transaction to burn tokens,\na transaction to mint an NFT, etc."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Python3.6+"),(0,l.kt)("th",{parentName:"tr",align:null},"JavaScript"),(0,l.kt)("th",{parentName:"tr",align:null},"Rust"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Create Wallet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer Lunes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Mass Transfer Lunes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Stake Lunes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Withdraw Stake Lunes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Create Tokens & NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Transfer any Tokens & NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Mass Transfer any Tokens & NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Reissue Tokens & NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Burn Tokens & NFTs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd52"),(0,l.kt)("td",{parentName:"tr",align:null},"Sponsor Token")))))))}g.isMDXComponent=!0},8239:function(t,e,n){e.Z=n.p+"assets/images/databaselunes-b1501b4a8992d89c43ec6d6bcff589de.png"},7951:function(t,e,n){e.Z=n.p+"assets/images/databaseweb2-d99bbc219218165498671a3e2ddd0103.png"},9511:function(t,e,n){e.Z=n.p+"assets/images/serverlunes-ab361a19d38b5c188e9f5c9b31c922f1.png"},9872:function(t,e,n){e.Z=n.p+"assets/images/serverweb2-225beb4ba3b22cae4193431a18a177b4.png"},3277:function(t,e,n){e.Z=n.p+"assets/images/userlunes-1680fc5a69a5958ab9ec234779e83fec.png"},8327:function(t,e,n){e.Z=n.p+"assets/images/userweb2-12fd351f7e171d13a1b5aa7c9995fd9f.png"}}]);