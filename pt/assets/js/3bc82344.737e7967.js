"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[89],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(3117),r=n(7294),l=n(2389),o=n(9575),u=n(6010),i="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),w=h.tabGroupChoices,g=h.setTabGroupChoices,T=(0,r.useState)(k),N=T[0],x=T[1],P=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=w[d];null!=S&&S!==N&&b.some((function(e){return e.value===S}))&&x(S)}var Z=function(e){var t=e.currentTarget,n=P.indexOf(t),a=b[n].value;a!==N&&(O(t),x(a),null!=d&&g(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:Z,onClick:Z},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},5458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=n(9877),u=n(8215),i=["components"],c={sidebar_position:2,description:"How to create a wallet with Lunes SDK",keywords:["wallet","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet","lunes creation wallet"]},s="\ud83d\udd11 Create Wallet",p={unversionedId:"sdk/wallet/create",id:"sdk/wallet/create",title:"\ud83d\udd11 Create Wallet",description:"How to create a wallet with Lunes SDK",source:"@site/docs/sdk/wallet/create.mdx",sourceDirName:"sdk/wallet",slug:"/sdk/wallet/create",permalink:"/pt/docs/sdk/wallet/create",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to create a wallet with Lunes SDK",keywords:["wallet","blockchain","lunes","sdk","transactions of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","lunes transactions","lunes wallet","lunes creation wallet"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\udd10 Cryptography",permalink:"/pt/docs/sdk/wallet/cryptography"},next:{title:"\ud83d\udcee Transactions",permalink:"/pt/docs/sdk/transactions/tx"}},m={},d=[{value:"\ud83d\udea8 See Before",id:"-see-before",level:2},{value:"<em>New</em> Wallet",id:"new-wallet",level:2},{value:"From <em>seed</em>",id:"from-seed",level:2},{value:"From <em>private key</em>",id:"from-private-key",level:2},{value:"From <em>public key</em>",id:"from-public-key",level:2},{value:"From <em>address</em>",id:"from-address",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-create-wallet"},"\ud83d\udd11 Create Wallet"),(0,l.kt)("h2",{id:"-see-before"},"\ud83d\udea8 ",(0,l.kt)("a",{parentName:"h2",href:"/docs/sdk/wallet/cryptography"},"See Before")),(0,l.kt)("h2",{id:"new-wallet"},(0,l.kt)("em",{parentName:"h2"},"New")," Wallet"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from lunespy.client.wallet import Account\n\nwallet = Account()\n"))),(0,l.kt)(u.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-seed"},"From ",(0,l.kt)("em",{parentName:"h2"},"seed")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.wallet import Account\n\nwallet = Account(\n    seed = "phone dove naive find erase grant right cause garden struggle robust ball",\n    chain = "mainnet",\n    nonce = 0\n)\n'))),(0,l.kt)(u.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-private-key"},"From ",(0,l.kt)("em",{parentName:"h2"},"private key")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.wallet import Account\n\nwallet = Account(\n    private_key="4ErHkZRfViERqzDn23PaboWqwBJPUzYVZGFaGA3FvZNL"\n)\n'))),(0,l.kt)(u.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-public-key"},"From ",(0,l.kt)("em",{parentName:"h2"},"public key")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.wallet import Account\n\nwallet = Account(\n    public_key="6ABYrcXPHxrhiq1p7zcLV9EKxP24TPXr7e1LHimfqTz8"\n)\n'))),(0,l.kt)(u.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,l.kt)("h2",{id:"from-address"},"From ",(0,l.kt)("em",{parentName:"h2"},"address")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Python3",label:"Python3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from lunespy.client.wallet import Account\n\nwallet = Account(\n    address="37VBg3J5PHti1QP1mishpXnkmQkasmcDKNh"\n)\n'))),(0,l.kt)(u.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))))}v.isMDXComponent=!0}}]);