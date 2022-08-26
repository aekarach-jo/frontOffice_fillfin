(() => {
var exports = {};
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 6238:
/***/ ((module) => {

// Exports
module.exports = {
	"contentHeight": "preview_contentHeight__Nsmh6",
	"chooseImage": "preview_chooseImage__IJMVo",
	"textPrice": "preview_textPrice__cdpfP"
};


/***/ }),

/***/ 5523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ productId),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
// EXTERNAL MODULE: ./styles/product/preview.module.scss
var preview_module = __webpack_require__(6238);
var preview_module_default = /*#__PURE__*/__webpack_require__.n(preview_module);
;// CONCATENATED MODULE: ./components/store/Preview.js






function Preview({ product  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `detail-product ${(preview_module_default()).contentHeight}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "detail-product-column",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "detail-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `column-images ${(preview_module_default()).chooseImage}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ChooseImage, {
                                        image: product.product_img
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: product.name_product
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: product.content_product
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-text-bottom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "ราคา"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: (preview_module_default()).textPrice,
                                            children: [
                                                product.price,
                                                " BTH"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "detail-right",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ShowImage, {
                                    image: product.product_img
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        right: 24
                                    },
                                    onClick: ()=>router_default().back(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-xmark"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(contactUs/* default */.Z, {})
            ]
        })
    });
};
function ShowImage({ image  }) {
    if (!image) {
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/assets/images/product.png"
        });
    }
    const apiUrl = (next_config_default()).apiPath;
    let image_split = image.split(",");
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: `${apiUrl}${image_split[0]}`,
        alt: "image-preview",
        style: {
            cursor: "pointer"
        },
        className: "image-main",
        onError: (e)=>{
            e.target.setAttribute("src", "/assets/images/product.png");
            return false;
        }
    });
}
function ChooseImage({ image  }) {
    if (!image) {
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/assets/images/product.png",
            alt: "image-product"
        });
    }
    const apiUrl = (next_config_default()).apiPath;
    let image_split = image.split(",");
    const response = image_split.map((data, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            alt: "image-product",
            src: `${apiUrl}/${data}`,
            onClick: (e)=>{
                e.target.closest(".detail-product").querySelector(".image-main").setAttribute("src", e.target.getAttribute("src"));
            },
            onError: (e)=>{
                e.target.setAttribute("src", "/assets/images/product.png");
                return false;
            }
        }, index);
    });
    return response;
}

;// CONCATENATED MODULE: ./pages/member/store/product/[id].js






function productId({ product  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Product"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Preview, {
                product: product
            })
        ]
    });
};
async function getServerSideProps({ query , req  }) {
    const apiUrl = (next_config_default()).apiPath;
    const access_token = req.cookies.access_token;
    const gender = req.cookies.gender;
    const product_code = query.id;
    const apiGetProductCode = await external_axios_default()({
        method: "GET",
        url: `${apiUrl}/api/product/${product_code}?gender=${gender}`,
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return {
        props: {
            product: apiGetProductCode.data.data
        }
    };
}


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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 8087:
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,143,760], () => (__webpack_exec__(5523)));
module.exports = __webpack_exports__;

})();