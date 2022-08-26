(() => {
var exports = {};
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 9441:
/***/ ((module) => {

// Exports
module.exports = {
	"productAll_storeCard": "productAll_productAll_storeCard__8ohEr",
	"productAll_productRec": "productAll_productAll_productRec__jvNA9",
	"textContent": "productAll_textContent__4p8dO"
};


/***/ }),

/***/ 7936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShowProduct)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7105);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5725);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _subComponent_contactUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5760);
/* harmony import */ var _subComponent_manage_image_chooseImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8289);
/* harmony import */ var _subComponent_manage_image_hoverImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4620);
/* harmony import */ var _subComponent_manage_image_showImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8290);
/* harmony import */ var _styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9441);
/* harmony import */ var _styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _subComponent_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([use_debounce__WEBPACK_IMPORTED_MODULE_7__]);
use_debounce__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const apiUrl = (_next_config__WEBPACK_IMPORTED_MODULE_8___default().apiPath);
function ShowProduct({ stores , banner  }) {
    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_14___default().mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 800,
        timerProgressBar: true,
        didOpen: (toast)=>{
            toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_14___default().stopTimer));
            toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_14___default().resumeTimer));
        }
    });
    const state = (0,_config_state__WEBPACK_IMPORTED_MODULE_15__/* .useAppContext */ .b)();
    const { store_all , product_recom  } = stores.data;
    const { 0: searchStore , 1: setSearchStore  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const [value] = (0,use_debounce__WEBPACK_IMPORTED_MODULE_7__.useDebounce)(searchStore, 500);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { 0: storeAll , 1: setStoreAll  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(stores.data.store_all);
    const current_page = stores.data.current_page;
    const pages = {
        current_page: stores.data.current_page,
        per_page: stores.data.per_page,
        total_page: stores.data.total_page,
        total_store: stores.data.total_store
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        search();
    }, [
        value
    ]);
    async function search() {
        const params = new URLSearchParams({
            page: current_page,
            search: value
        });
        const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
        const gender = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("gender");
        const apiSearch = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: `${apiUrl}/api/product/${gender}/allStore?${params.toString()}`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        setStoreAll(apiSearch.data.data.store_all);
    }
    async function handleAddtoCard(product_code) {
        const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
        const addProductToCart = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: `${apiUrl}/api/member/cart/add/${product_code}`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then((res)=>{
            if (res.data.description == "product was add to cart.") {
                Toast.fire({
                    icon: "success",
                    title: "เพิ่มแล้ว"
                });
                getCart();
            } else {
                Toast.fire({
                    icon: "warning",
                    title: "สินค้า" + res.data.productName + "มีในตะกร้าแล้ว"
                });
            }
        });
    }
    async function getCart() {
        const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
        const getCart = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: `${apiUrl}/api/member/cart/get`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const cartQty = getCart.data.cart.length;
        if (cartQty > 0) {
            state.cartQty.set_cart_qty(cartQty);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subComponent_contactUs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-product",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "column-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "สินค้าแนะนำ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "column-product-recommend",
                                        children: product_recom.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: product_recom?.map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `recommend-column ${(_styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().productAll_storeCard)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subComponent_manage_image_showImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            image: data.product_img
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "column-img-bottom",
                                                            style: {
                                                                display: "flex",
                                                                margin: "0.5rem 0"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subComponent_manage_image_chooseImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                image: data.product_img
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "column-text-bottom",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: data.name_product
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().textContent),
                                                                    children: data.content_product
                                                                }),
                                                                data.canbuy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    onClick: ()=>handleAddtoCard(data.product_code),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa-solid fa-cart-shopping"
                                                                        }),
                                                                        data.price
                                                                    ]
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    style: {
                                                                        cursor: "not-allowed"
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa-solid fa fa-eye-slash"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "ไม่มีสินค้าแนะนำ"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "column-right",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-column-top",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: banner.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: banner.content
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "search",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "ค้นหาชื่อร้าน",
                                                name: "search",
                                                onChange: (e)=>{
                                                    setSearchStore(e.target.value);
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-search"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "column-product",
                                        children: storeAll?.map((data, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: `column ${(_styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().productAll_storeCard)}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        href: `/member/store/${data.store_code}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "column-top",
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            src: `${apiUrl}${data.store_profile}`,
                                                                            style: {
                                                                                cursor: "pointer"
                                                                            },
                                                                            width: 40,
                                                                            height: 40,
                                                                            alt: "store_profile"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: data.store_name
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "column-center ",
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    children: [
                                                                        !data.preOrder ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subComponent_manage_image_hoverImage__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                            image: data.product_img
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: `${apiUrl}${data.product_img}`,
                                                                            alt: "image-preOrder"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: (_styles_product_productAll_module_scss__WEBPACK_IMPORTED_MODULE_16___default().textContent),
                                                                            style: {
                                                                                textAlign: "center"
                                                                            },
                                                                            children: data.content_product
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "column-bottom",
                                                        children: data.preOrder ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            href: `/member/store/${data.store_code}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa-regular fa-clock"
                                                                    }),
                                                                    "สั่งจองเท่านั้น ",
                                                                    data.totalProduct,
                                                                    " รายการ"
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            href: `/member/store/${data.store_code}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                children: [
                                                                    "สินค้าในร้านทั้งหมด ",
                                                                    data.totalProduct,
                                                                    " รายการ"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subComponent_pagination__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        page: pages
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HoverImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_2__);



function HoverImage({ image  }) {
    const apiUrl = (_next_config__WEBPACK_IMPORTED_MODULE_2___default().apiPath);
    const image_split = image.split(",");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: `${apiUrl}${image_split[0]}`,
        "data-src1": `${apiUrl}${image_split[0]}`,
        "data-src2": `${apiUrl}${image_split[1]}`,
        onMouseOver: (e)=>{
            e.target.setAttribute("src", e.target.getAttribute("data-src2"));
        },
        onMouseLeave: (e)=>{
            e.target.setAttribute("src", e.target.getAttribute("data-src1"));
        },
        alt: "image-hover"
    });
};


/***/ }),

/***/ 6727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showProduct),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_subComponent_cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_member_showProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7936);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_member_showProduct__WEBPACK_IMPORTED_MODULE_5__]);
_components_member_showProduct__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function showProduct({ storeObj , bannerCover  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "FillFin"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subComponent_cover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                banner: bannerCover.banner
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_member_showProduct__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                stores: storeObj,
                banner: bannerCover.banner
            })
        ]
    });
};
async function getServerSideProps({ query , res  }) {
    const page = query.page || 1;
    const apiUrl = (_next_config__WEBPACK_IMPORTED_MODULE_4___default().apiPath);
    const access_token = res.req.cookies.access_token;
    const gender = res.req.cookies.gender;
    const formGetBanner = {
        gender: gender,
        page: "all-store"
    };
    const [getAllStore, getBannerCover] = await Promise.all([
        axios__WEBPACK_IMPORTED_MODULE_6___default()({
            method: "GET",
            url: `${apiUrl}/api/product/${gender}/allStore?page=${page}`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }),
        axios__WEBPACK_IMPORTED_MODULE_6___default()({
            method: "POST",
            url: `${apiUrl}/api/website/getBanner`,
            headers: {
                "Content-Type": "application/json"
            },
            data: formGetBanner
        })
    ]);
    return {
        props: {
            storeObj: getAllStore.data,
            bannerCover: getBannerCover.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("autoprefixer");

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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8087:
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ }),

/***/ 271:
/***/ ((module) => {

"use strict";
module.exports = require("sweetalert2");

/***/ }),

/***/ 7105:
/***/ ((module) => {

"use strict";
module.exports = import("use-debounce");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,952,664,143,760,461,707], () => (__webpack_exec__(6727)));
module.exports = __webpack_exports__;

})();