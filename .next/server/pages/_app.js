(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5635:
/***/ ((module) => {

// Exports
module.exports = {
	"none": "loading_none__hP3dd",
	"body_loading": "loading_body_loading__MycXv",
	"fadeIn": "loading_fadeIn__TMlBv",
	"lds_ellipsis": "loading_lds_ellipsis__yIgau",
	"lds_ellipsis1": "loading_lds_ellipsis1___5mc4",
	"lds_ellipsis2": "loading_lds_ellipsis2__aK5lY",
	"lds_ellipsis3": "loading_lds_ellipsis3__tuouP"
};


/***/ }),

/***/ 520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/subComponent/nav.js
var nav = __webpack_require__(5040);
// EXTERNAL MODULE: ./components/subComponent/footer.js
var footer = __webpack_require__(5914);
// EXTERNAL MODULE: ./config/state.js
var state = __webpack_require__(4687);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/loading.module.scss
var loading_module = __webpack_require__(5635);
var loading_module_default = /*#__PURE__*/__webpack_require__.n(loading_module);
;// CONCATENATED MODULE: ./components/subComponent/loading.js



function Loading(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: props.loading ? (loading_module_default()).body_loading : (loading_module_default()).none,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (loading_module_default()).lds_ellipsis,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
            ]
        })
    });
}
/* harmony default export */ const subComponent_loading = (Loading);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/subComponent/scrollToTop.js


const ScrollToTop = ()=>{
    const { 0: showTopBtn , 1: setShowTopBtn  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 0) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "top-to-btm",
        style: {
            position: "fixed",
            zIndex: "2",
            bottom: 0,
            left: 0,
            margin: "2rem",
            cursor: "pointer",
            color: "#C93A87",
            fontSize: "30px"
        },
        children: showTopBtn && /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fa-solid fa-circle-arrow-up",
            onClick: goToTop
        })
    });
};
/* harmony default export */ const scrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./pages/_app.js










function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleStart = (url)=>{
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url)=>setLoading(false);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(state/* AppWrapper */.O, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(subComponent_loading, {
                loading: loading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(nav/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(scrollToTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,952,664,143,926], () => (__webpack_exec__(520)));
module.exports = __webpack_exports__;

})();