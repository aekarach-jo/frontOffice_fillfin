(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{36429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(67258)}])},85760:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var s=n(47568),a=n(29815),r=n(34051),c=n.n(r),o=n(85893),i=n(9669),l=n.n(i),m=n(47041),u=n(25675),d=n.n(u),h=n(67294),p=n(4687),g=n(15725),x=n.n(g),f=n(57496),v=n.n(f),j=n(57046).io,_=x().socketPath,k=x().apiPath;function b(){var e=(0,h.useRef)(0),t=(0,h.useState)(!1),n=t[0],r=t[1],i=(0,h.useState)([]),u=i[0],g=i[1],x=(0,h.useState)(""),f=x[0],b=x[1],N=(0,p.b)(),C=j(_),w=(0,m.getCookie)("access_token"),y=N.isLogin.get_login,P=N.isStore.get_isStore,S=(0,h.useState)(!0),U=S[0],E=S[1],Z=(0,m.getCookie)("name");function F(){return H.apply(this,arguments)}function H(){return(H=(0,s.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l()({method:"get",url:"".concat(k,"/api/member/getOldChat"),headers:{Authorization:"Bearer ".concat(w)}}).then((function(t){E(t.data.statusRead),g(t.data.oldMessage),n&&setTimeout((function(){null!=e.current&&e.current.scrollTo({behavior:"smooth",top:e.current.scrollHeight})}),500)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function T(){return(T=(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({method:"get",url:"".concat(k,"/api/member/readChat"),headers:{Authorization:"Bearer ".concat(w)}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function z(){return B.apply(this,arguments)}function B(){return(B=(0,s.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g((function(e){return(0,a.Z)(e).concat([{role:"member",message:f}])})),b(""),setTimeout((function(){e.current.scrollTo({behavior:"smooth",top:e.current.scrollHeight})}),200),t.prev=3,t.next=6,l()({method:"POST",url:"".concat(k,"/api/member/chatToAdmin"),headers:{Authorization:"Bearer ".concat(w)},data:{message:f}}).then((function(e){}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}(0,h.useEffect)((function(){n&&(!function(){T.apply(this,arguments)}(),F())}),[n]),C.on("connect",(function(){})),C.on("user-".concat(Z),(function(e,t){!function(e){g((function(t){return(0,a.Z)(t).concat([{username:e.username,role:e.role,message:e.message}])})),F(),b("")}(e)}));return(0,o.jsx)(h.Fragment,{children:y&&!P&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"contact-us",children:(0,o.jsxs)("div",{className:"column-contact-us",children:[!n&&(0,o.jsx)("div",{className:"text-contact-us",children:(0,o.jsx)("p",{children:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32"})}),(0,o.jsxs)("div",{className:"img-contact-us",onClick:function(){return r(!n)},children:[!U&&(0,o.jsx)("div",{className:v().statusChat,children:(0,o.jsx)("div",{className:v().newMessage,children:"  "})}),(0,o.jsx)(d(),{className:v().logoContact,width:57,height:57,src:"/assets/images/contact.jpg",alt:"image-contactUs"})]})]})}),n&&(0,o.jsxs)("div",{className:v().chatContent,children:[(0,o.jsx)("div",{className:v().chatHeader,children:(0,o.jsx)("p",{children:"Fillfin"})}),(0,o.jsx)("div",{className:v().chatBody,ref:e,children:null===u||void 0===u?void 0:u.map((function(e,t){return(0,o.jsx)("div",{children:"member"==e.role?(0,o.jsxs)("div",{className:v().memberChat,children:[(0,o.jsx)("img",{className:v().iconMember,src:"/assets/images/product.png",alt:"image-contactUs"}),(0,o.jsx)("p",{children:e.message})]}):(0,o.jsxs)("div",{className:v().adminChat,children:[(0,o.jsx)("img",{className:v().iconAdmin,src:"/assets/images/contact.jpg",alt:"image-contactUs"}),(0,o.jsx)("p",{children:e.message})]})},t)}))}),(0,o.jsxs)("div",{className:v().chatFooter,children:[(0,o.jsx)("span",{className:v().iconPlus,children:(0,o.jsx)("i",{className:"fa-solid fa-circle-plus"})}),(0,o.jsx)("input",{value:f,type:"text",onChange:function(e){return b(e.target.value)},onKeyDown:function(e){13===e.keyCode&&z()}}),(0,o.jsx)("span",{className:v().iconSend,children:(0,o.jsx)("i",{className:"fa-solid fa-paper-plane",onClick:function(e){return z()}})})]})]})]})})}},67258:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return P},default:function(){return S}});var s=n(85893),a=n(9008),r=n.n(a),c=n(67294),o=n(47568),i=n(34051),l=n.n(i),m=n(41664),u=n.n(m),d=n(86455),h=n.n(d),p=n(85760),g=n(11163),x=n(25675),f=n.n(x),v=n(15725),j=n.n(v),_=n(47041),k=n(9669),b=n.n(k),N=n(4687),C=n(27037),w=n.n(C);function y(e){var t=e.banner,n=function(){if(""==P||""==E)return h().fire({icon:"warning",position:"center",title:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a"}),!1;!function(e,t){F.apply(this,arguments)}({username:P,password:E},d)},a=(0,N.b)(),r=j().apiPath,i=(0,g.useRouter)(),m=(0,c.useState)(""),d=m[0],x=m[1],v=(0,c.useState)("member"),k=v[0],C=v[1],y=(0,c.useState)(""),P=y[0],S=y[1],U=(0,c.useState)(""),E=U[0],Z=U[1];function F(){return F=(0,o.Z)(l().mark((function e(t,n){var s,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,_.removeCookies)("name"),(0,_.removeCookies)("access_token"),(0,_.removeCookies)("refresh_token"),(0,_.removeCookies)("member_code"),(0,_.removeCookies)("storeName"),(0,_.removeCookies)("gender"),(0,_.removeCookies)("emptyPackage"),e.prev=7,e.next=10,b().post("".concat(r,"/api/").concat(n,"/signin"),t);case 10:if(s=e.sent,!(c=s.data).status){e.next=16;break}"member"==n?(a.isLogin.set_login(!0),a.memberDetail.set_memberDetail(c.data.userName),a.dateExpire.set_dateExpire(c.data.dateExpire),(0,_.setCookies)("name",c.data.userName),(0,_.setCookies)("access_token",c.data.access_token),(0,_.setCookies)("refresh_token",c.data.refresh_token),(0,_.setCookies)("member_code",c.data.member_code),(0,_.setCookies)("gender",c.data.gender),(0,_.setCookies)("package",c.data.packageId),(0,_.setCookies)("dateExpire",c.data.dateExpire),H()):(a.memberDetail.set_memberDetail(c.data.storeName),a.isStore.set_isStore(!0),a.isLogin.set_login(!0),(0,_.setCookies)("name",c.data.storeName),(0,_.setCookies)("access_token",c.data.access_token),(0,_.setCookies)("refresh_token",c.data.refresh_token),(0,_.setCookies)("storeName",c.data.storeName),(0,_.setCookies)("gender",c.data.gender),(0,_.setCookies)("storeCode",c.data.storeCode),i.push("/store")),e.next=18;break;case 16:return e.next=18,h().fire({title:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",icon:"error",timer:1e3,showCancelButton:!1,showConfirmButton:!1});case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),console.log(e.t0),"wait admin to verify."==e.t0.response.data.description?h().fire({icon:"warning",position:"center",title:"\u0e23\u0e2d\u0e01\u0e32\u0e23\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34"}):h().fire({icon:"error",position:"center",title:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"});case 24:case"end":return e.stop()}}),e,null,[[7,20]])}))),F.apply(this,arguments)}function H(){return T.apply(this,arguments)}function T(){return(T=(0,o.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,_.getCookie)("member_code"),e.prev=1,e.next=4,b()({method:"GET",url:"".concat(r,"/api/package/checkPackage/").concat(t)});case 4:n=e.sent,n.data.status?((0,_.setCookies)("emptyPackage",!1),a.emptyPackage.set_emptyPackage(!1),i.push("/member")):((0,_.setCookies)("emptyPackage",!0),a.emptyPackage.set_emptyPackage(!0),i.push("/member/package")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),h().fire({icon:"error",position:"center",title:e.t0.response.data.description});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return(0,c.useEffect)((function(){k&&(x("member"==k?"member":"store"),S(""),Z(""))}),[k]),(0,s.jsx)(c.Fragment,{children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"detil-login ".concat(w().minHeight),children:[(0,s.jsxs)("div",{className:"img-background",children:[(0,s.jsx)(f(),{width:404,height:1050,alt:"image-gender",className:"img-left",src:"/assets/images/man.png",layout:"fixed"}),(0,s.jsx)(f(),{width:404,height:1050,alt:"image-gender",className:"img-right",src:"/assets/images/woman.png",layout:"fixed"})]}),(0,s.jsx)(p.Z,{}),(0,s.jsxs)("div",{className:"column-shadow",style:{zIndex:"-1"},children:[(0,s.jsx)("div",{className:"shadow-left"}),(0,s.jsx)("div",{className:"shadow-right"})]}),(0,s.jsxs)("div",{className:"column-login",children:[(0,s.jsx)("div",{className:"column-img-top",children:(0,s.jsx)(f(),{width:1096,height:300,src:"".concat(r,"/").concat(t.image),alt:"image-banner"})}),(0,s.jsxs)("div",{className:"column-text-login",children:[(0,s.jsx)("h2",{children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"}),(0,s.jsxs)("div",{className:"box-column-login",children:[(0,s.jsx)("div",{className:"menu-navbar",id:"menu-navbar",children:"member"==k?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"btn-navbar active",onClick:function(){return C("member")},children:"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e0b\u0e37\u0e49\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),(0,s.jsx)("button",{className:"btn-navbar ",onClick:function(){return C("store")},children:"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"btn-navbar ",onClick:function(){return C("member")},children:"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e0b\u0e37\u0e49\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),(0,s.jsx)("button",{className:"btn-navbar active",onClick:function(){return C("store")},children:"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})]})}),(0,s.jsxs)("div",{className:"form-user-login active",id:"user",children:[(0,s.jsxs)("div",{className:"form",children:[(0,s.jsxs)("div",{className:"label-top",children:[(0,s.jsxs)("div",{className:"text-left",children:["\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 ",(0,s.jsx)("p",{children:"(User)"})]}),(0,s.jsx)("div",{className:"text-right",children:"(\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c)"})]}),(0,s.jsx)("input",{type:"text",value:P,placeholder:"Username",maxLength:10,onChange:function(e){(/^[0-9]+$/.test(e.target.value.trim())||""==e.target.value)&&S(e.target.value.trim())}})]}),(0,s.jsxs)("div",{className:"form",children:[(0,s.jsxs)("div",{className:"label-top",children:[(0,s.jsxs)("div",{className:"text-left",children:["\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19 ",(0,s.jsx)("p",{children:"(Password)"})]}),(0,s.jsx)("div",{className:"text-right",children:"(\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e2d\u0e14\u0e35\u0e44\u0e25\u0e19\u0e4c)"})]}),(0,s.jsx)("input",{onChange:function(e){return Z(e.target.value)},type:"password",value:E,placeholder:"Password"}),(0,s.jsx)("a",{onClick:function(){h().fire({title:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e41\u0e2d\u0e14\u0e21\u0e34\u0e19"})},className:"text-bottom",style:{cursor:"pointer"},children:"\u0e25\u0e37\u0e21\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 \u0e2b\u0e23\u0e37\u0e2d \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"})]})]}),(0,s.jsx)("button",{onClick:function(){return n()},className:"btn-login",children:"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e30\u0e1a\u0e1a"})]})]}),(0,s.jsxs)("div",{className:"column-text-detail",children:[(0,s.jsx)("h2",{children:"\u0e2b\u0e23\u0e37\u0e2d"}),(0,s.jsx)("p",{children:"\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49\u0e40\u0e25\u0e22"})]}),"member"==k?(0,s.jsx)(u(),{href:"/member/register",children:(0,s.jsx)("button",{className:"btn-menbar",children:"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"})}):(0,s.jsx)(u(),{href:"/store/register",children:(0,s.jsx)("button",{className:"btn-menbar",children:"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})})]})]})})})}var P=!0;function S(e){var t=e.banner;return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Login"})}),(0,s.jsx)(y,{banner:t})]})}},57496:function(e){e.exports={statusChat:"contactUs_statusChat__4yzMc",newMessage:"contactUs_newMessage__5bOTd",chatContent:"contactUs_chatContent__zrKce",mymove:"contactUs_mymove__ohnuv",chatHeader:"contactUs_chatHeader__NHzwo",chatBody:"contactUs_chatBody__b6Imq",memberChat:"contactUs_memberChat__I3Y9E",adminChat:"contactUs_adminChat__1vv95",chatFooter:"contactUs_chatFooter__ZRmZX",iconPlus:"contactUs_iconPlus__zgrYW",iconSend:"contactUs_iconSend__GH_t8"}},27037:function(e){e.exports={minHeight:"login_minHeight__cfdap"}}},function(e){e.O(0,[675,354,774,888,179],(function(){return t=36429,e(e.s=t);var t}));var t=e.O();_N_E=t}]);