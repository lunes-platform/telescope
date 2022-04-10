"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[281],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(2389),i=n(5979),s=n(6010),l="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,O=(0,a.useState)(g),N=O[0],T=O[1],E=[],Z=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var L=y[f];null!=L&&L!==N&&b.some((function(e){return e.value===L}))&&T(L)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==N&&(Z(t),T(r),null!=f&&w(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},7686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),s={sidebar_position:1,description:"Lunes SDK brings developers closer to the Lunes blockchain",keywords:["node","blockchain","lunes","sdk","apresentation of lunes sdk","lunes sdk"]},l="\ud83c\udfc1 Getting Started",u={unversionedId:"sdk/getting_started",id:"sdk/getting_started",title:"\ud83c\udfc1 Getting Started",description:"Lunes SDK brings developers closer to the Lunes blockchain",source:"@site/docs/sdk/getting_started.mdx",sourceDirName:"sdk",slug:"/sdk/getting_started",permalink:"/telescope/docs/sdk/getting_started",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Lunes SDK brings developers closer to the Lunes blockchain",keywords:["node","blockchain","lunes","sdk","apresentation of lunes sdk","lunes sdk"]},sidebar:"defaultSidebar",previous:{title:"\ud83c\udf89 Releases",permalink:"/telescope/docs/get_started/releases"},next:{title:"\ud83d\udce6 How to Install SDK",permalink:"/telescope/docs/sdk/install_sdk"}},c={},d=[{value:"\ud83d\uddfa Intro",id:"-intro",level:2},{value:"\ud83d\udef0 Lunes Node",id:"-lunes-node",level:2},{value:"\ud83c\udfd7 Architecture",id:"-architecture",level:2}],p={toc:d};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-getting-started"},"\ud83c\udfc1 Getting Started"),(0,o.kt)("h2",{id:"-intro"},"\ud83d\uddfa Intro"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Lunes SDK")," brings developers closer to the Lunes Blockchain,\nproviding a range of functionality for decentralized applications (DApps) and blockchain integrations.\nThis helps developers to manage their wallets and make transactions simply and securely."),(0,o.kt)("p",null,"The library is driven-transactions on the ",(0,o.kt)("em",{parentName:"p"},"lunesnode")," architecture.\n",(0,o.kt)("strong",{parentName:"p"},"The transaction concept here will be any type of interaction with the lunes blockchain."),"\nIn this way, we can create a transaction to transfer tokens, a transaction to create tokens,\na transaction to create a nickname (alias) for our address, etc."),(0,o.kt)("h2",{id:"-lunes-node"},"\ud83d\udef0 Lunes Node"),(0,o.kt)("p",null,'The Lunes Blockchain is a decentralized and distributed network based on the LPoS consensus algorithm. This network can be mainnet or testnet, in mainnet the nodes work with real values of tokens, currencies, NFT and assets. On the other hand, testnet has "fake" tokens to provide a test environment.\nIn the dev language, mainnet is prod and testnet is dev.'),(0,o.kt)("p",null,"Lunes Node is a node or server that has the responsibility to maintain and validate the blockchain, broadcast new transactions and provide an api for interaction and integration with the network."),(0,o.kt)("p",null,"With a Lunes Node you become a Lunes Blockchain participant and can provide network resiliency, validate data, and integrate real-world services into the blockchain."),(0,o.kt)("h2",{id:"-architecture"},"\ud83c\udfd7 Architecture"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83d\udd11 Wallet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Web 2.0"),"\n",(0,o.kt)("img",{alt:"image",src:n(8372).Z,width:"3232",height:"928"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lunes Protocol"),"\n",(0,o.kt)("img",{alt:"image",src:n(7034).Z,width:"3680",height:"982"}))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83d\udef0 Full Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Web 2.0"),"\n",(0,o.kt)("img",{alt:"image",src:n(4458).Z,width:"2464",height:"928"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lunes Protocol"),"\n",(0,o.kt)("img",{alt:"image",src:n(1472).Z,width:"3830",height:"2208"}))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83d\udd17 Blockchain"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Web 2.0"),"\n",(0,o.kt)("img",{alt:"image",src:n(8851).Z,width:"4576",height:"2496"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lunes Protocol"),"\n",(0,o.kt)("img",{alt:"image",src:n(2496).Z,width:"4576",height:"1888"}))))}f.isMDXComponent=!0},2496:function(e,t,n){t.Z=n.p+"assets/images/databaselunes-8e3cc133bfbc7531348e25be8226d0d3.png"},8851:function(e,t,n){t.Z=n.p+"assets/images/databaseweb2-ccb5cf1f80747b46fc5502cf63854711.png"},1472:function(e,t,n){t.Z=n.p+"assets/images/serverlunes-ce8d2c8d46f0ee3ebb24b90dbf536251.png"},4458:function(e,t,n){t.Z=n.p+"assets/images/serverweb2-225beb4ba3b22cae4193431a18a177b4.png"},7034:function(e,t,n){t.Z=n.p+"assets/images/userlunes-008d045a884949883ea28a821386ea3b.png"},8372:function(e,t,n){t.Z=n.p+"assets/images/userweb2-12fd351f7e171d13a1b5aa7c9995fd9f.png"}}]);