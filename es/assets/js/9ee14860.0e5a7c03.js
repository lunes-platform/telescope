"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[267],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(n),f=l,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),l=n(7294),a=n(2389),o=n(5979),u=n(6010),s="tabItem_LplD";function i(e){var t,n,a,i=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),g=h.tabGroupChoices,T=h.setTabGroupChoices,w=(0,l.useState)(y),N=w[0],O=w[1],E=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=g[f];null!=P&&P!==N&&b.some((function(e){return e.value===P}))&&O(P)}var L=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==N&&(x(t),O(r),null!=f&&T(f,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var l=E.indexOf(e.currentTarget)-1;n=E[l]||E[E.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:L,onClick:L},a,{className:(0,u.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,a.Z)();return l.createElement(i,(0,r.Z)({key:String(t)},e))}},6189:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return f}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n(9877),u=n(8215),s=["components"],i={sidebar_position:2,description:"All Realeases of Lunes Platform!",keywords:["new version of LunesPay","version of Lunes Pay","Lunes","sdk","Lunes node version","Lunes version","release Lunes platform","release Lunes crab","release LunesPay"]},c="\ud83c\udf89 Releases",p={unversionedId:"get_started/releases",id:"get_started/releases",title:"\ud83c\udf89 Releases",description:"All Realeases of Lunes Platform!",source:"@site/docs/get_started/releases.mdx",sourceDirName:"get_started",slug:"/get_started/releases",permalink:"/telescope/es/docs/get_started/releases",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"All Realeases of Lunes Platform!",keywords:["new version of LunesPay","version of Lunes Pay","Lunes","sdk","Lunes node version","Lunes version","release Lunes platform","release Lunes crab","release LunesPay"]},sidebar:"defaultSidebar",previous:{title:"\ud83c\udf0e Hello World!",permalink:"/telescope/es/docs/get_started/overview"},next:{title:"\ud83c\udfc1 Empezando",permalink:"/telescope/es/docs/sdk/getting_started"}},d={},f=[{value:"Telescope <code>0.13.0</code>",id:"telescope-0130",level:2},{value:"Telescope <code>0.12.0</code>",id:"telescope-0120",level:2},{value:"Telescope <code>0.11.0</code>",id:"telescope-0110",level:2},{value:"Telescope <code>0.10.0</code>",id:"telescope-0100",level:2}],m={toc:f};function v(e){var t=e.components,n=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-releases"},"\ud83c\udf89 Releases"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Telescope",label:"Telescope",default:!0,mdxType:"TabItem"},(0,a.kt)("h2",{id:"telescope-0130"},"Telescope ",(0,a.kt)("inlineCode",{parentName:"h2"},"0.13.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 The SDK now supports issue Token and mint NFTs ",(0,a.kt)("inlineCode",{parentName:"li"},"python")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd25 minor tweaks and bug fixes")),(0,a.kt)("h2",{id:"telescope-0120"},"Telescope ",(0,a.kt)("inlineCode",{parentName:"h2"},"0.12.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 The SDK now supports sending Token transfers using ",(0,a.kt)("inlineCode",{parentName:"li"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd25 minor tweaks and bug fixes")),(0,a.kt)("h2",{id:"telescope-0110"},"Telescope ",(0,a.kt)("inlineCode",{parentName:"h2"},"0.11.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 The SDK now supports sending Token transfers using ",(0,a.kt)("inlineCode",{parentName:"li"},"python"))),(0,a.kt)("h2",{id:"telescope-0100"},"Telescope ",(0,a.kt)("inlineCode",{parentName:"h2"},"0.10.0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Technical Reference on Lunes Wallet Cryptography"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Implementation guide for any language"))),(0,a.kt)(u.Z,{value:"Full Node",label:"Full Node",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",null,"v0.7.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/lunes-platform/full-node/releases/download/0.0.7/lunesnode-latest.jar"},"full-node.jar")))),(0,a.kt)(u.Z,{value:"Wallet",label:"Wallet",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",null,"v0.1.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",null,"walle.apk")))),(0,a.kt)(u.Z,{value:"Wallet-lite",label:"Wallet-lite",default:!0,mdxType:"TabItem"},(0,a.kt)("h3",null,"v0.1.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",null,"walle-lite.zip"))))))}v.isMDXComponent=!0}}]);