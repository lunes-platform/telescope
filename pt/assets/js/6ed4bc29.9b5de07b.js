"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[257],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3117),a=n(7294),o=n(2389),l=n(9575),s=n(6010),u="tabItem_LplD";function i(e){var t,n,o,i=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),g=h.tabGroupChoices,O=h.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],E=w[1],x=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=g[m];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&E(j)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==T&&(N(t),E(r),null!=m&&O(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return a.createElement(i,(0,r.Z)({key:String(t)},e))}},4457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=n(9877),s=n(8215),u=["components"],i={sidebar_position:1,description:"O Sdk da Lunes tr\xe1s os desenvolvedores para mais perto da Lunes Blockchain!",keywords:["node","blockchain","lunes","sdk","apresenta\xe7\xe3o of lunes sdk","lunes sdk"]},c="\ud83c\udfc1 Come\xe7ando",d={unversionedId:"sdk/getting_started",id:"sdk/getting_started",title:"\ud83c\udfc1 Come\xe7ando",description:"O Sdk da Lunes tr\xe1s os desenvolvedores para mais perto da Lunes Blockchain!",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/sdk/getting_started.mdx",sourceDirName:"sdk",slug:"/sdk/getting_started",permalink:"/telescope/pt/docs/sdk/getting_started",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"O Sdk da Lunes tr\xe1s os desenvolvedores para mais perto da Lunes Blockchain!",keywords:["node","blockchain","lunes","sdk","apresenta\xe7\xe3o of lunes sdk","lunes sdk"]},sidebar:"defaultSidebar",previous:{title:"\ud83c\udf89 Releases",permalink:"/telescope/pt/docs/get_started/releases"},next:{title:"\ud83d\udef0 Install Lunes Node",permalink:"/telescope/pt/docs/sdk/install_node"}},p={},m=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Como Instalar",id:"como-instalar",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-come\xe7ando"},"\ud83c\udfc1 Come\xe7ando"),(0,o.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,o.kt)("p",null,"O ",(0,o.kt)("strong",{parentName:"p"},"Lunes SDK")," tra\u015b os desenvolvedores pra mais perto da Lunes Blockchain,\nprovidenciando uma s\xe9rie de aplicativos descentralizados(DApps) ou\naplica\xe7\xf5es que a Blockchain necessita. Isso ajuda os desenvolvedores a\ngerenciar suas contas da Blockchain e fazer transa\xe7\xf5es de formar mais pr\xe1tica."),(0,o.kt)("p",null,"A Biblioteca entrega as transa\xe7\xf5es na arquitetura ",(0,o.kt)("em",{parentName:"p"},"lunesnode"),".\n",(0,o.kt)("strong",{parentName:"p"},"O conceito de transa\xe7\xe3o aqui \xe9 qualquer tipo de intera\xe7\xe3o com a blockchain da Lunes."),"\nDiante disso, n\xf3s podemos criar transa\xe7\xf5es para transfer\xeancia de tokens, uma transa\xe7\xe3o\npara a cria\xe7\xe3o de tokens, uma transa\xe7\xe3o para criar um apelido(alias) para sua carteira, etc."),(0,o.kt)("h2",{id:"como-instalar"},"Como Instalar"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install lunespy\n"))),(0,o.kt)(s.Z,{value:"JavaScript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i lunescrab\n"))),(0,o.kt)(s.Z,{value:"Rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Comming Soon\n")))))}v.isMDXComponent=!0}}]);