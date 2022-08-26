(() => {
var exports = {};
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 2215:
/***/ ((module) => {

// Exports
module.exports = {
	"minHeight": "cart_minHeight__Kg_S4"
};


/***/ }),

/***/ 4353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CartPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./config/state.js
var config_state = __webpack_require__(4687);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
// EXTERNAL MODULE: ./styles/cart.module.scss
var cart_module = __webpack_require__(2215);
var cart_module_default = /*#__PURE__*/__webpack_require__.n(cart_module);
;// CONCATENATED MODULE: ./components/member/cart/cart.js










const apiUrl = (next_config_default()).apiPath;
function Cart() {
    const router = (0,router_.useRouter)();
    const state = (0,config_state/* useAppContext */.b)();
    const { 0: cartList , 1: setCartList  } = (0,external_react_.useState)();
    const { 0: totalPrice , 1: setTotalPrice  } = (0,external_react_.useState)();
    const isLogin = state.isLogin.get_login;
    (0,external_react_.useEffect)(()=>{
        getCartList();
    }, []);
    const Toast = external_sweetalert2_default().mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 800,
        timerProgressBar: true,
        didOpen: (toast)=>{
            toast.addEventListener("mouseenter", (external_sweetalert2_default()).stopTimer);
            toast.addEventListener("mouseleave", (external_sweetalert2_default()).resumeTimer);
        }
    });
    function handleDeleteItem(product_code) {
        external_sweetalert2_default().fire({
            title: "ยืนยันการลบสินค้า",
            icon: "warning",
            position: "center",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#C93A87",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            allowOutsideClick: false,
            animation: true
        }).then((res)=>{
            if (res.isConfirmed) {
                onDeleteItem(product_code);
            }
        });
    }
    async function onDeleteItem(product_code) {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const deleteItem = await external_axios_default()({
            method: "GET",
            url: `${apiUrl}/api/member/cart/delete/${product_code}`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(()=>{
            Toast.fire({
                icon: "success",
                title: "ลบแล้ว"
            });
            getCartList();
        });
    }
    async function getCartList() {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const getCart = await external_axios_default()({
            method: "GET",
            url: `${apiUrl}/api/member/cart/get`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const dataCart = getCart.data.cart;
        setTotalPrice(getCart.data.totalprice);
        setCartList(dataCart);
        state.cartQty.set_cart_qty(dataCart.length);
    }
    async function handleCheckProduct() {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const apiChack = await external_axios_default()({
            method: "GET",
            url: `${apiUrl}/api/member/cart/checkProduct`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then((res)=>{
            if (res.data.status) {
                router.push("/member/cart/payment");
            } else {
                external_sweetalert2_default().fire({
                    title: "สินค้าบางรายการหมด",
                    icon: "warning",
                    position: "center",
                    showConfirmButton: false,
                    timer: 800
                });
            }
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `shopping-cart ${(cart_module_default()).minHeight}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "ตระกร้าสินค้า"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "shopping-cart-column",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-list-left",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "head-table",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        children: "รายการสินค้า"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "total",
                                                        children: "ราคา "
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            children: cartList ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: cartList.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "column-left",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: `${apiUrl}${data.productImg}`,
                                                                            alt: "image-product"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "column-text",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                    children: data.productName
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    children: data.productContent
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "column-right",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            style: {
                                                                                marginRight: "0px"
                                                                            },
                                                                            children: data.productPrice
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            onClick: ()=>handleDeleteItem(data.productCode),
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fa-regular fa-trash-can"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            }) : null
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-text-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "เงือนไขการจัดส่งสินค้า"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna felis id nulla eget. Sed donec faucibus enim in porta tristique. Sed laoreet elementum dictumst blandit at euismod urna. Sed turpis consectetur potenti scelerisque ac."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sit varius pellentesque mattis vitae. Integer nisl nisl neque interdum diam. Sit id viverra lobortis nec elit sit arcu. Ac, adipiscing"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-list-right",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "head-table",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "รายการสินค้า"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "total",
                                                        children: "ราคา "
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                            children: [
                                                cartList ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: cartList.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "column-left",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "column-text",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                children: data.productName
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "column-right",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: data.productPrice
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }, index))
                                                }) : null,
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "td-summary",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: "รวมราคาสินค้า"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: totalPrice
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "td-bottom",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: "รวมทั้งหมด"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: totalPrice
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>handleCheckProduct(),
                                    children: "ชำระค่าสินค้าและบริการ"
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

;// CONCATENATED MODULE: ./pages/member/cart/index.js




function CartPage() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Cart"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cart, {})
        ]
    });
};
async function getServerSideProps() {
    return {
        props: {
            data: []
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

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,143,760], () => (__webpack_exec__(4353)));
module.exports = __webpack_exports__;

})();