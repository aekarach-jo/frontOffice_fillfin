(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{12659:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(63366),c=n(87462),s=n(67294),o=n(95408),a=n(98700),i=n(59766),u=n(85578);const l=["sx"];function d(e){const{sx:t}=e,n=(0,r.Z)(e,l),{systemProps:s,otherProps:o}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{u.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let a;return a=Array.isArray(t)?[s,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,i.P)(n)?(0,c.Z)({},s,n):s}:(0,c.Z)({},s,t),(0,c.Z)({},o,{sx:a})}var m=n(77992),h=n(54502),p=n(85893);const f=["component","direction","spacing","divider","children"];function _(e,t){const n=s.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,c)=>(e.push(r),c<n.length-1&&e.push(s.cloneElement(t,{key:`separator-${c}`})),e)),[])}const g=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,c.Z)({display:"flex"},(0,o.k9)({theme:t},(0,o.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,a.hB)(t),c=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"===typeof e.spacing&&null!=e.spacing[n]||"object"===typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),s=(0,o.P$)({values:e.direction,base:c}),u=(0,o.P$)({values:e.spacing,base:c}),l=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${c=n?s[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[c]}`]:(0,a.NA)(r,t)}};var c};n=(0,i.Z)(n,(0,o.k9)({theme:t},u,l))}return n})),v=s.forwardRef((function(e,t){const n=d((0,h.Z)({props:e,name:"MuiStack"})),{component:s="div",direction:o="column",spacing:a=0,divider:i,children:u}=n,l=(0,r.Z)(n,f),m={direction:o,spacing:a};return(0,p.jsx)(g,(0,c.Z)({as:s,ownerState:m,ref:t},l,{children:i?_(u,i):u}))}));var x=v},85760:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(47568),c=n(29815),s=n(34051),o=n.n(s),a=n(85893),i=n(9669),u=n.n(i),l=n(47041),d=n(25675),m=n.n(d),h=n(67294),p=n(4687),f=n(15725),_=n.n(f),g=n(57496),v=n.n(g),x=n(57046).io,b=_().socketPath,j=_().apiPath;function y(){var e=(0,h.useRef)(0),t=(0,h.useState)(!1),n=t[0],s=t[1],i=(0,h.useState)([]),d=i[0],f=i[1],_=(0,h.useState)(""),g=_[0],y=_[1],C=(0,p.b)(),k=x(b),N=(0,l.getCookie)("access_token"),w=C.isLogin.get_login,P=C.isStore.get_isStore,Z=(0,h.useState)(!0),M=Z[0],U=Z[1],S=(0,l.getCookie)("name");function A(){return B.apply(this,arguments)}function B(){return(B=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u()({method:"get",url:"".concat(j,"/api/member/getOldChat"),headers:{Authorization:"Bearer ".concat(N)}}).then((function(t){U(t.data.statusRead),f(t.data.oldMessage),n&&setTimeout((function(){null!=e.current&&e.current.scrollTo({behavior:"smooth",top:e.current.scrollHeight})}),500)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function z(){return(z=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()({method:"get",url:"".concat(j,"/api/member/readChat"),headers:{Authorization:"Bearer ".concat(N)}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function R(){return T.apply(this,arguments)}function T(){return(T=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f((function(e){return(0,c.Z)(e).concat([{role:"member",message:g}])})),y(""),setTimeout((function(){e.current.scrollTo({behavior:"smooth",top:e.current.scrollHeight})}),200),t.prev=3,t.next=6,u()({method:"POST",url:"".concat(j,"/api/member/chatToAdmin"),headers:{Authorization:"Bearer ".concat(N)},data:{message:g}}).then((function(e){}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}(0,h.useEffect)((function(){n&&(!function(){z.apply(this,arguments)}(),A())}),[n]),k.on("connect",(function(){})),k.on("user-".concat(S),(function(e,t){!function(e){f((function(t){return(0,c.Z)(t).concat([{username:e.username,role:e.role,message:e.message}])})),A(),y("")}(e)}));return(0,a.jsx)(h.Fragment,{children:w&&!P&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"contact-us",children:(0,a.jsxs)("div",{className:"column-contact-us",children:[!n&&(0,a.jsx)("div",{className:"text-contact-us",children:(0,a.jsx)("p",{children:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32"})}),(0,a.jsxs)("div",{className:"img-contact-us",onClick:function(){return s(!n)},children:[!M&&(0,a.jsx)("div",{className:v().statusChat,children:(0,a.jsx)("div",{className:v().newMessage,children:"  "})}),(0,a.jsx)(m(),{className:v().logoContact,width:57,height:57,src:"/assets/images/contact.jpg",alt:"image-contactUs"})]})]})}),n&&(0,a.jsxs)("div",{className:v().chatContent,children:[(0,a.jsx)("div",{className:v().chatHeader,children:(0,a.jsx)("p",{children:"Fillfin"})}),(0,a.jsx)("div",{className:v().chatBody,ref:e,children:null===d||void 0===d?void 0:d.map((function(e,t){return(0,a.jsx)("div",{children:"member"==e.role?(0,a.jsxs)("div",{className:v().memberChat,children:[(0,a.jsx)("img",{className:v().iconMember,src:"/assets/images/product.png",alt:"image-contactUs"}),(0,a.jsx)("p",{children:e.message})]}):(0,a.jsxs)("div",{className:v().adminChat,children:[(0,a.jsx)("img",{className:v().iconAdmin,src:"/assets/images/contact.jpg",alt:"image-contactUs"}),(0,a.jsx)("p",{children:e.message})]})},t)}))}),(0,a.jsxs)("div",{className:v().chatFooter,children:[(0,a.jsx)("span",{className:v().iconPlus,children:(0,a.jsx)("i",{className:"fa-solid fa-circle-plus"})}),(0,a.jsx)("input",{value:g,type:"text",onChange:function(e){return y(e.target.value)},onKeyDown:function(e){13===e.keyCode&&R()}}),(0,a.jsx)("span",{className:v().iconSend,children:(0,a.jsx)("i",{className:"fa-solid fa-paper-plane",onClick:function(e){return R()}})})]})]})]})})}},57496:function(e){e.exports={statusChat:"contactUs_statusChat__4yzMc",newMessage:"contactUs_newMessage__5bOTd",chatContent:"contactUs_chatContent__zrKce",mymove:"contactUs_mymove__ohnuv",chatHeader:"contactUs_chatHeader__NHzwo",chatBody:"contactUs_chatBody__b6Imq",memberChat:"contactUs_memberChat__I3Y9E",adminChat:"contactUs_adminChat__1vv95",chatFooter:"contactUs_chatFooter__ZRmZX",iconPlus:"contactUs_iconPlus__zgrYW",iconSend:"contactUs_iconSend__GH_t8"}},90949:function(e){e.exports={productLayout:"orderMember_productLayout__FqYUb",colLeft:"orderMember_colLeft__6K1Ig",colGroup:"orderMember_colGroup__rPLwA",colCenter:"orderMember_colCenter__urqw_",price:"orderMember_price__UPt27",column_right:"orderMember_column_right__6Ac61",footerAddress:"orderMember_footerAddress__xxzZY",textContent:"orderMember_textContent__bX3RP"}}}]);