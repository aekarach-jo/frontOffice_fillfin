(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{79361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},28045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(79361).Z,a=i(94941).Z,o=i(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,c=void 0!==l&&l,h=e.priority,p=void 0!==h&&h,z=e.loading,j=e.lazyRoot,I=void 0===j?null:j,_=e.lazyBoundary,R=e.className,L=e.quality,q=e.width,C=e.height,N=e.style,O=e.objectFit,P=e.objectPosition,W=e.onLoadingComplete,B=e.placeholder,M=void 0===B?"empty":B,Z=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=d.useContext(m.ImageConfigContext),V=d.useMemo((function(){var e=b||U||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[U]),F=D,H=i?"responsive":"intrinsic";"layout"in F&&(F.layout&&(H=F.layout),delete F.layout);var G=k;if("loader"in F){if(F.loader){var T=F.loader;G=function(e){e.config;var t=s(e,["config"]);return T(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(Z=Z||Q.blurDataURL,J=Q.src,(!H||"fill"!==H)&&(C=C||Q.height,q=q||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var K=!p&&("lazy"===z||"undefined"===typeof z);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);v.has(t)&&(K=!1);y&&(c=!0);var X,Y=a(d.useState(!1),2),$=Y[0],ee=Y[1],te=a(g.useIntersection({rootRef:I,rootMargin:_||"200px",disabled:!K}),3),ie=te[0],ne=te[1],ae=te[2],oe=!K||ne,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:P},de=x(q),ue=x(C),fe=x(L);0;var ge=Object.assign({},N,se),me="blur"!==M||$?{}:{backgroundSize:O||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===H)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof ue){var he=ue/de,pe=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===H?(re.display="block",re.position="relative",ce=!0,le.paddingTop=pe):"intrinsic"===H?(re.display="inline-block",re.position="relative",re.maxWidth="100%",ce=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===H&&(re.display="inline-block",re.position="relative",re.width=de,re.height=ue)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};oe&&(ye=A({config:V,src:t,unoptimized:c,layout:H,width:de,quality:fe,sizes:i,loader:G}));var be=t;0;var ve,we="imagesrcset",ze="imagesizes";we="imageSrcSet",ze="imageSizes";var Se=(n(ve={},we,ye.srcSet),n(ve,ze,ye.sizes),ve),Ae=d.default.useLayoutEffect,xe=d.useRef(W),ke=d.useRef(t);d.useEffect((function(){xe.current=W}),[W]),Ae((function(){ke.current!==t&&(ae(),ke.current=t)}),[ae,t]);var je=r({isLazy:K,imgAttributes:ye,heightInt:ue,widthInt:de,qualityInt:fe,layout:H,className:R,imgStyle:ge,blurStyle:me,loading:z,config:V,unoptimized:c,placeholder:M,loader:G,srcString:be,onLoadingCompleteRef:xe,setBlurComplete:ee,setIntersection:ie,isVisible:oe,noscriptSizes:i},F);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:re},ce?d.default.createElement("span",{style:le},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(E,Object.assign({},je))),p?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Se))):null)};var r=i(6495).Z,l=i(92648).Z,c=i(91598).Z,s=i(17273).Z,d=c(i(67294)),u=l(i(5443)),f=i(99309),g=i(57190),m=i(59977),h=(i(63794),i(82392));var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1}||{},y=p.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,o=new URL("".concat(t.path).concat(I(i))),r=o.searchParams;r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),a&&r.set("q",a.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(I(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function A(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,r=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var d,u=.01*(d=Math).min.apply(d,o(s));return{widths:r.filter((function(e){return e>=a[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,a,c),u=d.widths,f=d.kind,g=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:u[g]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=z.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function j(e,t,i,n,a,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===n&&o(!0),null==a?void 0:a.current)){var i=e.naturalWidth,r=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:r})}})))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,o=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,h=e.config,p=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,S=e.onError,x=(e.isVisible,e.noscriptSizes),k=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":a,className:o,style:r({},l,c),ref:d.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,m,0,f,b,v)}),[w,m,a,f,b,v]),onLoad:function(e){j(e.currentTarget,m,0,f,b,v),z&&z(e)},onError:function(e){"blur"===f&&v(!0),S&&S(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},k,A({config:h,src:m,unoptimized:p,layout:a,width:i,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":a,style:l,className:o,loading:g}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25675:function(e,t,i){e.exports=i(28045)}}]);