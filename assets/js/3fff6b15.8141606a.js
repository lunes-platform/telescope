"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[591],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),r=t(7294),o=t(2389),s=t(5979),l=t(6010),i="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.UB)(),g=h.tabGroupChoices,T=h.setTabGroupChoices,N=(0,r.useState)(y),w=N[0],x=N[1],j=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=g[f];null!=_&&_!==w&&b.some((function(e){return e.value===_}))&&x(_)}var Z=function(e){var n=e.currentTarget,t=j.indexOf(n),a=b[t].value;a!==w&&(E(n),x(a),null!=f&&T(f,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},728:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=t(9877),l=t(8215),i=["components"],u={sidebar_position:2,description:"How to make transactions with Lunes SDK",keywords:["transfer","blockchain","lunes","sdk","transfer of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","transfer lunes","lunes wallet transfer","transfer token"]},c="\ud83d\udce9 Transfer Tokens",d={unversionedId:"sdk/transactions/send_token",id:"sdk/transactions/send_token",title:"\ud83d\udce9 Transfer Tokens",description:"How to make transactions with Lunes SDK",source:"@site/docs/sdk/transactions/send_token.mdx",sourceDirName:"sdk/transactions",slug:"/sdk/transactions/send_token",permalink:"/telescope/docs/sdk/transactions/send_token",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to make transactions with Lunes SDK",keywords:["transfer","blockchain","lunes","sdk","transfer of lunes sdk","lunes sdk","generate wallet","generate transaction in lunes","transfer lunes","lunes wallet transfer","transfer token"]},sidebar:"defaultSidebar",previous:{title:"\ud83d\udcee Transactions",permalink:"/telescope/docs/sdk/transactions/tx"},next:{title:"\ud83d\ude80 Token Airdrop",permalink:"/telescope/docs/sdk/transactions/issue"}},p={},f=[{value:"\ud83d\udea8 Read Before \ud83d\udea8",id:"-read-before-",level:2},{value:"Create Transaction",id:"create-transaction",level:2},{value:"Sign Transaction",id:"sign-transaction",level:2},{value:"Broadcast Transaction",id:"broadcast-transaction",level:2},{value:"Full Example",id:"full-example",level:2}],m={toc:f};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-transfer-tokens"},"\ud83d\udce9 Transfer Tokens"),(0,o.kt)("h2",{id:"-read-before-"},"\ud83d\udea8 ",(0,o.kt)("a",{parentName:"h2",href:"/docs/sdk/transactions/tx"},"Read Before")," \ud83d\udea8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/sdk/install_sdk"},"Install SDK"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/sdk/wallet/create"},"Create Wallet")))),(0,o.kt)("h2",{id:"create-transaction"},"Create Transaction"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{7-9}","{7-9}":!0},'from lunespy.tx.transfer import transfer_token_factory\nfrom lunespy.wallet import wallet_factory\n\nsender = wallet_factory()\n\ntx = transfer_token_factory(\n    sender_public_key=sender.public_key,\n    receiver_address="37sEXsHBBUagA3jmzHPz1ZGA3vDtCLUNs5Z",\n    amount=249.99\n)\n'))),(0,o.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{6-8}","{6-8}":!0},'import lunesjs from "lunesjs"\n\nconst sender = lunesjs.walletFactory({})\n\nconst tx = lunesjs.transferTokenFactory({\n    senderPublicKey: sender.public_key,\n    receiverAddress: "37sEXsHBBUagA3jmzHPz1ZGA3vDtCLUNs5Z",\n    amount: 249.99\n})\n'))),(0,o.kt)(l.Z,{value:"Web",label:"Web",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,o.kt)("h2",{id:"sign-transaction"},"Sign Transaction"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"tx.sign(sender.private_key)\n"))),(0,o.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"tx.sign(wallet.privateKey)\n"))),(0,o.kt)(l.Z,{value:"Web",label:"Web",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,o.kt)("h2",{id:"broadcast-transaction"},"Broadcast Transaction"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"tx.broadcast()\n"))),(0,o.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"tx.broadcast()\n"))),(0,o.kt)(l.Z,{value:"Web",label:"Web",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))),(0,o.kt)("h2",{id:"full-example"},"Full Example"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Python3",label:"Python3",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8,10,12,14,16,19,24,31}","{8,10,12,14,16,19,24,31}":!0},'from lunespy.tx.transfer import transfer_token_factory\nfrom lunespy.wallet import wallet_factory\n\nsender = wallet_factory()\n\ntx = transfer_token_factory(\n    # public key of sender\n    sender_public_key=sender.public_key,\n    # address that will receiver tokens\n    receiver_address="37sEXsHBBUagA3jmzHPz1ZGA3vDtCLUNs5Z",\n    # amount of tokens to send\n    amount=249.99,\n    # omit if you want to send lunes, pass only if you want to send some token\n    assetId="E3ZpxkM2kvS78aFYG2xFfngchMgik4ogLLRa6CBJvVgz",\n    # if you want to send a different fee amount, the default is 100000\n    fee=100000,\n    # to which chain the transaction should be mounted, the defaul is 1 (MAINNET)\n    # should be passed 0 for works in TESTNET\n    chain=0\n)\n\ntx.sign(\n  # private key of sender for sign the transaction\n  sender.private_key\n)\n\ntx.broadcast(\n    # url or ip:port of the node that will broadcast the transaction,\n    # (MAINNET) is https://lunesnode.lunes.io (defaul)\n    # (TESTNET) https://lunesnode-testnet.lunes.io\n    node = "https://my-full-node.com"\n)\n'))),(0,o.kt)(l.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"python {7,9,11,13,15,18,23,30}",python:!0,"{7,9,11,13,15,18,23,30}":!0},'import lunesjs from "lunesjs"\n\nconst sender = walletFactory({})\n\nconst tx = lunesjs.transferTokenFactory({\n    // public key of sender\n    senderPublicKey: sender.public_key,\n    // address that will receiver tokens\n    receiverAddress: "37sEXsHBBUagA3jmzHPz1ZGA3vDtCLUNs5Z",\n    // amount of tokens to send\n    amount: 249.99,\n    // omit if you want to send lunes, pass only if you want to send some token\n    assetId: "E3ZpxkM2kvS78aFYG2xFfngchMgik4ogLLRa6CBJvVgz",\n    // if you want to send a different fee amount, the default is 100000\n    fee: 100000,\n    // to which chain the transaction should be mounted, the defaul is 1 (MAINNET)\n    // should be passed 0 for works in TESTNET\n    chain: 0\n})\n\ntx.sign(\n  // private key of sender for sign the transaction\n  sender.privateKey\n)\n\ntx.broadcast(\n    // url or ip:port of the node that will broadcast the transaction,\n    // (MAINNET) is https://lunesnode.lunes.io (defaul)\n    // (TESTNET) https://lunesnode-testnet.lunes.io\n    "https://my-full-node.com"\n)\n'))),(0,o.kt)(l.Z,{value:"Web",label:"Web",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Comming Soon\n")))))}k.isMDXComponent=!0}}]);