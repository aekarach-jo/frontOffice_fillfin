(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{24782:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store/order",function(){return n(83792)}])},83792:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return k},default:function(){return A}});var s=n(85893),r=n(9669),i=n.n(r),a=n(67294),c=n(47568),d=n(34051),l=n.n(d),o=n(47041),u=n(30381),h=n.n(u),m=n(15725),p=n.n(m),x=n(85760),g=n(12659),j=n(75431),f=n(86455),v=n.n(f),N=n(90949),y=n.n(N),_=p().apiPath;function w(e){var t=e.productList,n=e.orderDetail,r=e.qty,d=e.getAllProduct,u=function(e,t,n){v().fire({imageUrl:_+e.product_image,imageWidth:300,imageHeight:350,imageAlt:"Custom image",title:"\u0e23\u0e35\u0e27\u0e34\u0e27\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",text:e.product_name,html:'<textarea class="border-2" type="text" style="padding: 0.7rem ;border-radius: 10px ; width: 70%" id="message"/>',showCancelButton:!0,confirmButtonText:"\u0e23\u0e35\u0e27\u0e34\u0e27",cancelButtonText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",confirmButtonColor:"#ffb300",showLoaderOnConfirm:!0,allowOutsideClick:!1,preConfirm:function(){return""!=document.getElementById("message").value.trim()&&document.getElementById("message").value.trim()}}).then((function(s){if(!s.isConfirmed)return!1;!function(e){f.apply(this,arguments)}({productId:parseInt(e.product_id),message:s.value,orderNumber:n,star:parseInt(t.target.value)})}))},h=(0,a.useRef)(null),m=function(e){var t=function(t){var n=e.current,i=n.getBoundingClientRect(),a=n.firstElementChild.getBoundingClientRect();n.getAttribute("data-styleHeight")||n.setAttribute("data-styleHeight",i.height+"px"),i.height!=a.height?(n.style.height=a.height+"px",r(!s)):(n.style.height=n.getAttribute("data-styleHeight"),r(!s))},n=(0,a.useState)(!1),s=n[0],r=n[1];return(0,a.useEffect)((function(){e.current.style.height=e.current.getBoundingClientRect().height+"px"}),[]),{isCollapse:s,onCollapse:t}}(h),p=m.isCollapse,x=m.onCollapse;function f(){return(f=(0,c.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),n=(0,o.getCookie)("access_token"),e.next=4,i()({method:"POST",url:"".concat(_,"/api/member/order/review"),headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},data:t}).then((function(){v().fire("","\u0e23\u0e35\u0e27\u0e34\u0e27\u0e41\u0e25\u0e49\u0e27","success"),d()}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.jsx)(a.Fragment,{children:t?(0,s.jsxs)("div",{className:"column-list-detail",children:[(0,s.jsx)("div",{ref:h,style:{overflow:"hidden",transition:"height 0.3s"},children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"column-text-detail",children:[(0,s.jsxs)("div",{className:"column-left",children:[(0,s.jsx)("div",{className:"img-left",children:(0,s.jsx)("img",{src:"".concat(_).concat(e.product_image),alt:"image-productList",onError:function(e){return e.target.setAttribute("src","/assets/images/empty.png"),!1}})}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("h4",{children:e.product_name}),(0,s.jsx)("p",{children:e.product_content})]})]}),(0,s.jsx)("div",{className:"column-center",children:(0,s.jsx)("p",{style:{textAlign:"center",margin:"1rem"},children:e.price})}),(0,s.jsxs)("div",{className:"column-right",children:["pending"==e.product_status&&(0,s.jsx)("p",{children:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),"shipping"==e.product_status&&(0,s.jsx)("p",{children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),"success"==e.product_status&&(0,s.jsxs)("div",{className:y().rating,children:[(0,s.jsx)("p",{style:{textAlign:"center",margin:"1rem"},children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e41\u0e25\u0e49\u0e27"}),(0,s.jsx)(g.Z,{spacing:1,children:(0,s.jsx)(j.Z,{name:"size-medium",defaultValue:0,onClick:function(t){return u(e,t,n.orderNumber)}})})]}),"accepted"==e.product_status&&(0,s.jsx)("p",{children:"\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27"})]})]})},t)}))}),(0,s.jsx)("div",{className:"column-none-list",id:"btn-list",children:r>1&&(0,s.jsx)("button",{onClick:x,children:p?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("i",{className:"fa-solid fa-angle-down",style:{marginRight:"0.5rem"},children:" "}),"\u0e41\u0e2a\u0e14\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("i",{className:"fa-solid fa-angle-up",style:{marginRight:"0.5rem"},children:" "}),"\u0e0b\u0e48\u0e2d\u0e19\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"]})})}),(0,s.jsxs)("div",{className:y().footerAddress,children:[(0,s.jsx)("p",{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),(0,s.jsxs)("div",{className:"column-address",children:[(0,s.jsx)("p",{children:"\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"}),(0,s.jsx)("p",{children:n.name})]}),(0,s.jsxs)("div",{className:"column-address ",children:[(0,s.jsx)("p",{children:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"}),(0,s.jsx)("p",{children:n.address})]}),(0,s.jsxs)("div",{className:"column-address",children:[(0,s.jsx)("p",{children:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"}),(0,s.jsx)("p",{children:n.phone})]}),(0,s.jsxs)("div",{className:"column-address",style:{maxWidth:"13rem",wordBreak:"break-word",overflow:"hidden"},children:[(0,s.jsx)("p",{children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38"}),(0,s.jsx)("p",{className:y().textContent,children:n.note})]})]})]}):(0,s.jsx)("p",{style:{marginLeft:"auto",marginRight:"auto"},children:"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})}var C=p().apiPath;function b(){var e=function(e){var t=e.dateTime;return t=h()(t).format("DD MMM YYYY"),(0,s.jsxs)("p",{children:["\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d",(0,s.jsx)("span",{children:t})]})},t=(0,a.useState)([]),n=t[0],r=t[1];function d(){return(d=(0,c.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,o.getCookie)("access_token"),e.next=3,i()({method:"GET",url:"".concat(C,"/api/store/orders/get"),headers:{Authorization:"Bearer ".concat(t)}});case 3:n=e.sent,r(n.data.order);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,o.getCookie)("access_token"),e.next=3,i()({method:"GET",url:"".concat(C,"/api/member/getOrder"),headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){r(e.data.order)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),(0,s.jsx)(a.Fragment,{children:(0,s.jsxs)("div",{className:"order-list",style:{minHeight:"calc(100vh - 100px)"},children:[(0,s.jsxs)("div",{className:"img-background-column",children:[(0,s.jsx)("div",{className:"img-background"}),(0,s.jsxs)("div",{className:"column-shadow",children:[(0,s.jsx)("div",{className:"shadow-left"}),(0,s.jsx)("div",{className:"shadow-right"})]}),(0,s.jsx)("div",{className:"column-shadow-white"})]}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:"column-order-list",style:{zIndex:0},children:[(0,s.jsx)("div",{className:"head-text-top",children:(0,s.jsx)("p",{style:{fontSize:"24px"},children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e40\u0e14\u0e2d\u0e23\u0e4c"})}),(0,s.jsxs)("div",{className:"column-list",style:{marginBottom:"5rem"},children:[(0,s.jsxs)("div",{className:"text-head",children:[(0,s.jsx)("p",{className:"text-head-left",children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),(0,s.jsx)("p",{children:"\u0e23\u0e32\u0e04\u0e32"}),(0,s.jsx)("p",{children:"\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})]}),n.length>0?(0,s.jsx)(s.Fragment,{children:null===n||void 0===n?void 0:n.map((function(t,n){return(0,s.jsxs)("div",{className:"column-order",children:[(0,s.jsxs)("div",{className:"text-head-table",children:[(0,s.jsxs)("p",{children:["\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e40\u0e14\u0e2d\u0e23\u0e4c",(0,s.jsx)("span",{children:t.orderNumber})]}),(0,s.jsx)(e,{dateTime:t.createdAt}),"pending"==t.paymentStatus?(0,s.jsxs)("p",{children:["\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19",(0,s.jsx)("span",{children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23"})]}):(0,s.jsxs)("p",{children:["\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19",(0,s.jsx)("span",{children:"\u0e0a\u0e33\u0e23\u0e30\u0e41\u0e25\u0e49\u0e27"})]})]}),(0,s.jsx)(w,{productList:t.product,orderDetail:t,qty:t.product.length,getAllProduct:u})]},n)}))}):(0,s.jsx)("p",{style:{padding:"1rem",height:"3rem",textAlign:"center"},children:"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2d\u0e2d\u0e40\u0e14\u0e2d\u0e23\u0e4c"})]})]})]})})}var k=!0;function A(){return(0,s.jsx)(a.Fragment,{children:(0,s.jsx)(b,{})})}}},function(e){e.O(0,[675,354,431,142,774,888,179],(function(){return t=24782,e(e.s=t);var t}));var t=e.O();_N_E=t}]);