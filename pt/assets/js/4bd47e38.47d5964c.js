"use strict";(self.webpackChunktelescope=self.webpackChunktelescope||[]).push([[732],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),r=t(7294),l=t(2389),o=t(5979),s=t(6010),i="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(N,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!N.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),v=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],L=w[1],j=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=v[d];null!=E&&E!==T&&N.some((function(e){return e.value===E}))&&L(E)}var P=function(e){var n=e.currentTarget,t=j.indexOf(n),a=N[t].value;a!==T&&(O(n),L(a),null!=d&&y(d,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},k)},N.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},5555:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=t(9877),s=t(8215),i=["components"],u={sidebar_position:2,description:"Lunes Tutorial about Lunes node, Lunes Wallet, about everything!",keywords:["how to install Lunes node","how Lunes node work","Lunes node tutorial","how to mine in Lunes network","Lunes network","Lunes blockchain","Lunes plataform miner","how to make a POS in Lunes plataform"]},p="\ud83d\udef0 Install Lunes Node",c={unversionedId:"sdk/install_node",id:"sdk/install_node",title:"\ud83d\udef0 Install Lunes Node",description:"Lunes Tutorial about Lunes node, Lunes Wallet, about everything!",source:"@site/docs/sdk/install_node.mdx",sourceDirName:"sdk",slug:"/sdk/install_node",permalink:"/telescope/pt/docs/sdk/install_node",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Lunes Tutorial about Lunes node, Lunes Wallet, about everything!",keywords:["how to install Lunes node","how Lunes node work","Lunes node tutorial","how to mine in Lunes network","Lunes network","Lunes blockchain","Lunes plataform miner","how to make a POS in Lunes plataform"]},sidebar:"defaultSidebar",previous:{title:"\ud83c\udfc1 Come\xe7ando",permalink:"/telescope/pt/docs/sdk/getting_started"},next:{title:"\ud83d\udd10 Cryptography",permalink:"/telescope/pt/docs/sdk/wallet/cryptography"}},m={},d=[{value:"\ud83d\udea8 See Before",id:"-see-before",level:2}],k={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-install-lunes-node"},"\ud83d\udef0 Install Lunes Node"),(0,l.kt)("h2",{id:"-see-before"},"\ud83d\udea8 ",(0,l.kt)("a",{parentName:"h2",href:"/docs/sdk/getting_started#lunes-node"},"See Before")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"\ud83d\udc27 Linux",label:"\ud83d\udc27 Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"  Install ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"http://www.google.com/search?q=how+to+install+java+8+linux"},"java8"))),(0,l.kt)("p",null,"  Install ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../get_started/releases"},"Lunes Node"))),(0,l.kt)("p",null,"  Copy ",(0,l.kt)("a",null,(0,l.kt)("strong",{parentName:"p"},"lunesnode.conf")),", complete config file ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/lunes-platform/lunesnode/blob/master/src/main/resources/application.conf"},"here"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'  lunes {\n      directory = "./"\n      blockchain.type = "MAINNET"\n      network.known-peers = ["5.196.155.34:7770"]\n      wallet.password = "123"\n      wallet.seed = "BASE58"\n  }\n')),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Files Tree")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/your/path/lunes/"',title:'"/your/path/lunes/"'},"  \u251c\u2500\u2500 lunesnode-latest.jar\n  \u2514\u2500\u2500 lunesnode.conf\n")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Run Lunes Node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar lunesnode-latest.jar lunesnode.conf\n")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Create a Service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-systemd",metastring:'title="/etc/systemd/system/lunesnode.service"',title:'"/etc/systemd/system/lunesnode.service"'},"[Unit]\nDescription = Lunes Node Blockchain\nAfter = network.target\n\n[Service]\nWorkingDirectory = /path/mylunesblockchain/\nExecStart = /usr/bin/java -jar lunesnode-latest.jar lunesnode.conf\nRestart = always\nRestartSec = 30s\nStandardOutput = journal\nStandardError = journal\nSyslogIdentifier = lunesnode\n\n[Install]\nWantedBy = multi-user.target\n"))),(0,l.kt)(s.Z,{value:"\ud83d\udc33 Docker",label:"\ud83d\udc33 Docker",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Comming Soon\n"))),(0,l.kt)(s.Z,{value:"\ud83c\udf4e MacOs",label:"\ud83c\udf4e MacOs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Comming Soon\n"))),(0,l.kt)(s.Z,{value:"\ud83e\ude9f Windows",label:"\ud83e\ude9f Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"  You have to install ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.java.com/pt-BR/download/"},"java8"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"After install, verify your version of java in ",(0,l.kt)("strong",{parentName:"p"},"CMD")," line"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,l.kt)("p",{parentName:"li"},"Get a version of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"./releases"},"Lunes Node"))),(0,l.kt)("p",{parentName:"li"},"Inside your folder make a file with a name ",(0,l.kt)("strong",{parentName:"p"},"lunesnode.conf")," with this content: "),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Lunes Node config file"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="lunesnode.conf"',title:'"lunesnode.conf"'},'# Minimum needed to run\nlunes {\n  # where will the blockchain be stored\n  directory = "./"\n\n  # choose your chain MAINNET or TESTNET\n  blockchain.type = ""\n\n  # put ip:port of any node in chain that you chose\n  # MAINNET 5.196.155.34:7770\n  # TESTNET 5.196.155.46:7770\n  network.known-peers = [""]\n\n  # It will hide (encrypt) your seed\n  wallet.password = ""\n\n  # Your seed hashed in BASED58\n  wallet.seed = ""\n}\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Complete config file ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/lunes-platform/lunesnode/blob/master/src/main/resources/application.conf"},"here"))))),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Files tree")),(0,l.kt)("p",{parentName:"li"},"PATH = the path where you saved the file "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/PATH/mylunesblockchain/"',title:'"/PATH/mylunesblockchain/"'},"  \u251c\u2500\u2500 lunesnode-latest.jar\n  \u2514\u2500\u2500 lunesnode.conf\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"After getting a version of Lunes Node, in ",(0,l.kt)("strong",{parentName:"li"},"CMD")," line, enter the folder where you saved the files:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /PATH/mylunesblockchain\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"For running")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar lunesnode-latest.jar lunesnode.conf\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"LOG Verification")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In cmd, inside your folder, type it:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd PATH\\mylunesblockchain\\log\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"If you want enable Lunes Node to run forever, create a service:")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On folder of your node, create one file with a name ",(0,l.kt)("strong",{parentName:"li"},"node.bat")," with this content:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar PATH\\mylunesblockchain\\lunesnode-latest.jar PATH\\mylunesblockchain\\lunesnode.conf\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download a version 2.24 of NSSM (2014-08-31) ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"http://nssm.cc/release/nssm-2.24.zip"},"here")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Unzip the file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"CMD"))," with a administrator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Verify your Windows version 64 or 32 bits"),(0,l.kt)("p",{parentName:"li"},"For 64 bits type it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  cd PATH\\nssm-2.24\\win64\n")),(0,l.kt)("p",{parentName:"li"},"For 32 bits type it:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  cd PATH\\nssm-2.24\\win32\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Type the commands below"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'nssm.exe install "LunesNode" "PATH\\mylunesblockchain\\node.bat"\n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'nssm set LunesNode DisplayName "LunesNode"\n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'nssm set LunesNode AppDirectory "PATH\\mylunesblockchain"\n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'nssm set LunesNode Description "start lunes node with node.bat : java -jar PATH/lunesnode-latest.jar PATH/lunesnode.conf"\n')),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nssm set LunesNode Start SERVICE_AUTO_START\n")))))))}f.isMDXComponent=!0}}]);