"use strict";
(() => {
var exports = {};
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 6444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContentPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
;// CONCATENATED MODULE: ./components/content/content.js



function Content({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "terms-service",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "img-background",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-left",
                            src: "/assets/images/man.png",
                            alt: "image-men"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-right",
                            src: "/assets/images/woman.png",
                            alt: "image-women"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(contactUs/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "terms-service-column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-head",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: content.title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "column-text",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    wordWrap: "break-word",
                                    display: "inline-block"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "editor",
                                    dangerouslySetInnerHTML: {
                                        __html: `${content.content}`
                                    }
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/content/[id].js






function ContentPage({ content  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: content.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                content: content
            })
        ]
    });
};
async function getServerSideProps({ params  }) {
    const apiUrl = (next_config_default()).apiPath;
    const response = await external_axios_default()({
        method: "GET",
        url: `${apiUrl}/api/website/content/${params.id}`
    });
    return {
        props: {
            content: response.data.content
        }
    };
} // <div style={{ height : '100vh'}} dangerouslySetInnerHTML={{
 //   __html : data.content
 // }}>
 // </div>
 // let contentMock = `
 // <h1>Where does it come from?</h1>
 //   <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
 // `


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8087:
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,143,760], () => (__webpack_exec__(6444)));
module.exports = __webpack_exports__;

})();