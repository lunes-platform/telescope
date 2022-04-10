"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[89],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(7294),l=a(2389),o=a(5979),u=a(6010),s="tabItem_LplD";function i(e){var t,a,l,i=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),g=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,r.useState)(y),N=T[0],j=T[1],x=[],Z=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=g[d];null!=P&&P!==N&&v.some((function(e){return e.value===P}))&&j(P)}var O=function(e){var t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==N&&(Z(t),j(n),null!=d&&w(d,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,u.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,l.Z)();return r.createElement(i,(0,n.Z)({key:String(t)},e))}},5458:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(9877),u=a(8215),s=["components"],i={sidebar_position:2,description:"How to create a wallet with Lunes SDK",keywords:["wallet","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet","lunes creation wallet"]},c="\ud83d\udd11 Create Wallet",p={unversionedId:"sdk/wallet/create",id:"sdk/wallet/create",title:"\ud83d\udd11 Create Wallet",description:"How to create a wallet with Lunes SDK",source:"@site/docs/sdk/wallet/create.mdx",sourceDirName:"sdk/wallet",slug:"/sdk/wallet/create",permalink:"/telescope/pt/docs/sdk/wallet/create",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to create a wallet with Lunes SDK",keywords:["wallet","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet","lunes creation wallet"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\udd10 Cryptography",permalink:"/telescope/pt/docs/sdk/wallet/cryptography"},next:{title:"\ud83d\udcee Transactions",permalink:"/telescope/pt/docs/sdk/transactions/tx"}},m={},d=[{value:"\ud83d\udea8 Read Before",id:"-read-before",level:2},{value:"<em>New</em> Wallet",id:"new-wallet",level:2},{value:"From <em>seed</em>",id:"from-seed",level:2},{value:"From <em>private key</em>",id:"from-private-key",level:2},{value:"From <em>public key</em>",id:"from-public-key",level:2},{value:"From <em>address</em>",id:"from-address",level:2}],f={toc:d};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-create-wallet"},"\ud83d\udd11 Create Wallet"),(0,l.kt)("h2",{id:"-read-before"},"\ud83d\udea8 ",(0,l.kt)("a",{parentName:"h2",href:"/docs/sdk/wallet/cryptography"},"Read Before")),(0,l.kt)("h2",{id:"new-wallet"},(0,l.kt)("em",{parentName:"h2"},"New")," Wallet"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from lunespy.client.account import Wallet\n\nwallet = Wallet()\n"))),(0,l.kt)(u.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n"))),(0,l.kt)(u.Z,{value:"Web.js",label:"Web.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-seed"},"From ",(0,l.kt)("em",{parentName:"h2"},"seed")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.account import Wallet\n\nwallet = Wallet(\n    seed = "phone dove naive find erase grant right cause garden struggle robust ball",\n    chain = "mainnet",\n    nonce = 0\n)\n'))),(0,l.kt)(u.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Comming Soon\n"))),(0,l.kt)(u.Z,{value:"Web.js",label:"Web.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-private-key"},"From ",(0,l.kt)("em",{parentName:"h2"},"private key")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.account import Wallet\n\nwallet = Wallet(\n    private_key="4ErHkZRfViERqzDn23PaboWqwBJPUzYVZGFaGA3FvZNL"\n)\n'))),(0,l.kt)(u.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n"))),(0,l.kt)(u.Z,{value:"Web.js",label:"Web.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-public-key"},"From ",(0,l.kt)("em",{parentName:"h2"},"public key")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.account import Wallet\n\nwallet = Wallet(\n    public_key="6ABYrcXPHxrhiq1p7zcLV9EKxP24TPXr7e1LHimfqTz8"\n)\n'))),(0,l.kt)(u.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n"))),(0,l.kt)(u.Z,{value:"Web.js",label:"Web.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-address"},"From ",(0,l.kt)("em",{parentName:"h2"},"address")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.account import Wallet\n\nwallet = Wallet(\n    address="37VBg3J5PHti1QP1mishpXnkmQkasmcDKNh"\n)\n'))),(0,l.kt)(u.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n"))),(0,l.kt)(u.Z,{value:"Web.js",label:"Web.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))))}b.isMDXComponent=!0}}]);