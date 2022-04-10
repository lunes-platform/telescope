"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[267],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=i(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),o=n(5979),u=n(6010),s="tabItem_LplD";function i(e){var t,n,l,i=e.lazy,c=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,a.useState)(h),T=O[0],E=O[1],P=[],L=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=k[d];null!=x&&x!==T&&b.some((function(e){return e.value===x}))&&E(x)}var j=function(e){var t=e.currentTarget,n=P.indexOf(t),r=b[n].value;r!==T&&(L(t),E(r),null!=d&&w(d,r))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;n=P[a]||P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:N,onFocus:j,onClick:j},l,{className:(0,u.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return a.createElement(i,(0,r.Z)({key:String(t)},e))}},6189:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),u=n(8215),s=["components"],i={sidebar_position:2,description:"All Realeases of Lunes Platform!",keywords:["new version of LunesPay","version of Lunes Pay","Lunes","sdk","Lunes node version","Lunes version","release Lunes platform","release Lunes crab","release LunesPay"]},c="\ud83c\udf89 Releases",p={unversionedId:"get_started/releases",id:"get_started/releases",title:"\ud83c\udf89 Releases",description:"All Realeases of Lunes Platform!",source:"@site/docs/get_started/releases.mdx",sourceDirName:"get_started",slug:"/get_started/releases",permalink:"/telescope/es/docs/get_started/releases",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"All Realeases of Lunes Platform!",keywords:["new version of LunesPay","version of Lunes Pay","Lunes","sdk","Lunes node version","Lunes version","release Lunes platform","release Lunes crab","release LunesPay"]},sidebar:"defaultSidebar",previous:{title:"\ud83c\udf0e Hello World!",permalink:"/telescope/es/docs/get_started/overview"},next:{title:"\ud83c\udfc1 Empezando",permalink:"/telescope/es/docs/sdk/getting_started"}},f={},d=[],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-releases"},"\ud83c\udf89 Releases"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Full Node",label:"Full Node",default:!0,mdxType:"TabItem"},(0,l.kt)("h3",null,"v0.7.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/lunes-platform/full-node/releases/download/0.0.7/lunesnode-latest.jar"},"full-node.jar")))),(0,l.kt)(u.Z,{value:"Wallet",label:"Wallet",default:!0,mdxType:"TabItem"},(0,l.kt)("h3",null,"v0.1.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",null,"walle.apk")))),(0,l.kt)(u.Z,{value:"Wallet-lite",label:"Wallet-lite",default:!0,mdxType:"TabItem"},(0,l.kt)("h3",null,"v0.1.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",null,"walle-lite.zip"))))))}v.isMDXComponent=!0}}]);