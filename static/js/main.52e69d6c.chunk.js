(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{218:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},248:function(t,n){},250:function(t,n){},254:function(t,n){},255:function(t,n){},282:function(t,n){},284:function(t,n){},295:function(t,n){},297:function(t,n){},307:function(t,n){},309:function(t,n){},325:function(t,n){},359:function(t,n){},360:function(t,n){},431:function(t,n){},433:function(t,n){},438:function(t,n){},440:function(t,n){},447:function(t,n){},459:function(t,n){},462:function(t,n){},467:function(t,n){},542:function(t,n,e){},543:function(t,n,e){},544:function(t,n,e){"use strict";e.r(n);var a,i,r,o,s,p,u,c,l,d,y,b,m,f,x,h,g,w,j=e(1),v=e(84),T=e.n(v),O=e(85),C=e(13),M=e(56),k=e(19),A=e.n(k),E=e(68),_=e(66),S=e.n(_),I=e(217),N=e.n(I),F=e(218),U=e(69),D=e(219),z=e(15),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(z.a)(Object(z.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(z.a)(Object(z.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(z.a)(Object(z.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(z.a)(Object(z.a)({},t),{},{account:n.payload.account});default:return t}},P={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(z.a)(Object(z.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(z.a)(Object(z.a)({},t),{},{loading:!1,name:n.payload.name,totalSupply:n.payload.totalSupply,cost:n.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(z.a)(Object(z.a)({},P),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},B=Object(U.b)({blockchain:R,data:W}),H=[D.a],K=Object(U.c)(U.a.apply(void 0,H)),q=Object(U.d)(B,K),Q=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},J=function(t){return function(){var t=Object(E.a)(A.a.mark((function t(n){var e,a,i;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,q.getState().blockchain.smartContract.methods.name().call();case 4:return e=t.sent,t.next=7,q.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=t.sent,t.next=10,q.getState().blockchain.smartContract.methods.cost().call();case 10:i=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{name:e,totalSupply:a,cost:i}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),n(Q("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(n){return t.apply(this,arguments)}}()},Y=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(E.a)(A.a.mark((function n(e){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(J());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},V=e(14),X=V.a.div(a||(a=Object(C.a)(["\n  background-color: var(--black);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):""})),Z=V.a.div(i||(i=Object(C.a)(["\n  height: 2px;\n  width: 2px;\n"]))),$=V.a.div(r||(r=Object(C.a)(["\n  height: 10px;\n  width: 5px;\n"]))),tt=V.a.div(o||(o=Object(C.a)(["\n  height: 30px;\n  width: 10px;\n"]))),nt=(V.a.div(s||(s=Object(C.a)(["\n  height: 60px;\n  width: 20px;\n"]))),V.a.div(p||(p=Object(C.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||10}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"}))),et=V.a.p(u||(u=Object(C.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),at=(V.a.p(c||(c=Object(C.a)(["\n  color: var(--white);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),V.a.p(l||(l=Object(C.a)(["\n  color: var(--white);\n  font-size: 20px;\n  line-height: 1.6;\n"])))),it=(V.a.div(d||(d=Object(C.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),V.a.div(y||(y=Object(C.a)(["\n  background-color: var(--black);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"https://gateway.pinata.cloud/ipfs/QmUvPLroxDvBoaGDrKh4qEYCTvfyK6hJduWrMwUUHF9Hor"})),e.p+"static/media/1.f7455a6d.png"),rt=e.p+"static/media/90.40372dcf.png",ot=e(8),st=V.a.input.attrs((function(t){return{type:"number",min:1,max:1,defaultValue:t.value}}))(b||(b=Object(C.a)(["\n  border-radius: 5px;\n  border: none;\n  background-color: #10990000;\n  padding: 9px;\n  font-weight: bold;\n  color: #ff0000;\n  width: 50px;\n  cursor: ;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),pt=V.a.button(m||(m=Object(C.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: #41a7ff;\n  padding: 10px;\n  font-weight: bold;\n  color: #ffffff;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(62, 54, 62, 1);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 1);\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 20px -2px rgba(67, 239, 239, 0.6);\n  }\n"]))),ut=V.a.div(f||(f=Object(C.a)(["\n  display: flex;\n  flex: ;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),ct=V.a.img(x||(x=Object(C.a)(["\nheight: 0px;\ncenter\nposition: fixed;\n  margin-bottom: -25px;\n  margin-top: 0px;\n  @media (min-width: 767px) {\n    width: 200px;\n    height: 200px;\n  }\n  transition: width 1s;\n  transition: height 1s;\n"])));V.a.img(h||(h=Object(C.a)(["\n  width: 300px;\n  height: 300px;\n  @media (min-width: 767px) {\n    width: 300px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),V.a.img(g||(g=Object(C.a)(["\n  border-radius: 50px;\n  color: #ffffff;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(100, 0, 250, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(100, 0, 250, 1);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(100, 0, 250, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 20px -2px rgba(250, 250, 0, 0.9);\n  }\n"]))),V.a.div(w||(w=Object(C.a)(["\n  height: 0px;\n  position: fixed;\n  margin-bottom: 0px;\n\n  .photobanner {\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    overflow: hidden;\n    white-space: nowrap;\n    animation: bannermove 60s linear infinite alternate;\n\n    &:hover {\n      animation-play-state: ;\n    }\n  }\n\n  .photobanner img {\n    height: 175px;\n    margin: 0 0em;\n  }\n\n  @keyframes bannermove {\n    70% {\n      transform: translate(-50%, 0);\n    }\n    70% {\n      transform: translate(50%, 0);\n    }\n  }\n"])));var lt=function(){var t=Object(M.b)(),n=Object(M.c)((function(t){return t.blockchain})),e=Object(M.c)((function(t){return t.data})),a=Object(j.useState)(" 1 Weirdo NFT = 5 Matic"),i=Object(O.a)(a,2),r=i[0],o=i[1],s=Object(j.useState)(!1),p=Object(O.a)(s,2),u=p[0],c=p[1],l=Object(j.useState)(1),d=Object(O.a)(l,2),y=d[0],b=d[1],m=function(){""!==n.account&&null!==n.smartContract&&t(J(n.account))};return Object(j.useEffect)((function(){m()}),[n.account]),Object(ot.jsx)(X,{image:it,children:Object(ot.jsxs)(nt,{flex:1,ai:"center",style:{padding:20},children:[Object(ot.jsxs)(et,{style:{textAlign:"center",fontSize:42,fontWeight:"bold"},children:[Object(ot.jsx)(ct,{alt:"",src:rt}),Object(ot.jsx)(Z,{})]}),Object(ot.jsxs)(ut,{flex:10,style:{padding:0},children:[Object(ot.jsx)(nt,{flex:10,jc:"center",ai:"center",children:Object(ot.jsxs)(et,{style:{textAlign:"center",fontSize:30,fontWeight:"bold"},children:[e.totalSupply," / 2022",Object(ot.jsx)($,{})]})}),Object(ot.jsx)(nt,{flex:10,jc:"center",ai:"center",children:2022==Number(e.totalSupply)?Object(ot.jsxs)(ot.Fragment,{children:[Object(ot.jsx)(et,{style:{textAlign:"center"},children:"SOLD OUT!"}),Object(ot.jsx)(tt,{}),Object(ot.jsxs)(at,{style:{textAlign:"center"},children:["You can still trade Weirdo NFTs at"," ",Object(ot.jsx)("a",{target:"",href:"https://opensea.io/collection/",children:"The Weird | Faces"})]})]}):Object(ot.jsxs)(ot.Fragment,{children:[Object(ot.jsx)(at,{style:{textAlign:"center"},children:r}),Object(ot.jsx)($,{}),""===n.account||null===n.smartContract?Object(ot.jsxs)(nt,{ai:"center",jc:"center",children:[Object(ot.jsx)($,{}),Object(ot.jsx)(pt,{onClick:function(n){n.preventDefault(),t(function(){var t=Object(E.a)(A.a.mark((function t(n){var e,a,i,r,o,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),e=window,a=e.ethereum,i=a&&a.isMetaMask,t.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!i){t.next=23;break}return S.a.setProvider(a),r=new N.a(a),t.prev=8,t.next=11,a.request({method:"eth_requestAccounts"});case 11:return o=t.sent,t.next=14,a.request({method:"net_version"});case 14:137==t.sent?(s=new S.a(F,"0x736701275C152A8C5Ff134E9857218EA19c6066E"),n({type:"CONNECTION_SUCCESS",payload:{account:o[0],smartContract:s,web3:r}}),a.on("accountsChanged",(function(t){n(G(t[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):n(Y("Change network to Polygon")),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(8),n(Y("Something went wrong"));case 21:t.next=24;break;case 23:n(Y("Install Metamask"));case 24:case"end":return t.stop()}}),t,null,[[8,18]])})));return function(n){return t.apply(this,arguments)}}()),m()},children:"CONNECT WALLET"}),""!==n.errorMsg?Object(ot.jsx)(ot.Fragment,{children:Object(ot.jsx)(at,{style:{textAlign:"center"},children:n.errorMsg})}):null]}):Object(ot.jsxs)(nt,{ai:"center",jc:"center",fd:"row",children:[Object(ot.jsx)(st,{value:y,onChange:function(t){return b(t.target.value)}}),Object(ot.jsx)(pt,{disabled:u?1:0,onClick:function(e){var a;e.preventDefault(),(a=y)<=0||(o("Preparing your Weird Face..."),c(!0),n.smartContract.methods.mint(a).send({gasLimit:"285000",to:"0x736701275C152A8C5Ff134E9857218EA19c6066E",from:n.account,value:n.web3.utils.toWei((5*a).toString(),"ether")}).once("error",(function(t){console.log(t),o("Sorry, something went wrong please try again later."),c(!1)})).then((function(e){o("Thank you, your transaction was successfully, do it again."),c(!1),t(J(n.account))}))),m()},children:u?"PLEASE HOLD...":"Purchase ".concat(y," IC NFT")})]})]})})]}),Object(ot.jsx)($,{}),Object(ot.jsx)(et,{style:{textAlign:"center",fontSize:16},children:"Connect to the Polygon network"}),Object(ot.jsx)(at,{style:{textAlign:"center",fontSize:20},children:Object(ot.jsx)(at,{style:{textAlign:"center",fontSize:16},children:" "})}),Object(ot.jsx)($,{})]})})},dt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,548)).then((function(n){var e=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),a(t),i(t),r(t),o(t)}))};e(542),e(543);T.a.render(Object(ot.jsx)(M.a,{store:q,children:Object(ot.jsx)(lt,{})}),document.getElementById("root")),dt()}},[[544,1,2]]]);
//# sourceMappingURL=main.52e69d6c.chunk.js.map