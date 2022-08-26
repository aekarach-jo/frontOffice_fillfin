exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 2780:
/***/ ((module) => {

// Exports
module.exports = {
	"contentCol": "premium_contentCol__dhj_H",
	"backToStore": "premium_backToStore__LoIh7",
	"colReview": "premium_colReview__tcEaT"
};


/***/ }),

/***/ 6731:
/***/ ((module) => {

// Exports
module.exports = {
	"textGroup": "store_textGroup__1axdF",
	"profile_image": "store_profile_image__9mDpp",
	"iconEmpty": "store_iconEmpty__azg_p",
	"manage_image": "store_manage_image__kvCWR",
	"colImage": "store_colImage__JAbyi",
	"boxImage": "store_boxImage__ocwy7",
	"box": "store_box__AUhOf",
	"recCol": "store_recCol__tRsyB",
	"productAll": "store_productAll__7yKlD",
	"textContent": "store_textContent__V9p2_",
	"colBtn": "store_colBtn__WZiv5",
	"btnPrice": "store_btnPrice__CFsb4",
	"btnDelete": "store_btnDelete__j_2L2"
};


/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Store_premium)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./components/subComponent/contactAdmin.js
var contactAdmin = __webpack_require__(2303);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/member/store/store_premium/show_post/show_post.js




const apiUrl = (next_config_default()).apiPath;
function Show_post({ postList  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-box-top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "รายการโพสต์"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "โพสต์ทั้งหมด ",
                            postList.length,
                            " รายการ"
                        ]
                    })
                ]
            }),
            postList.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "column-product-recommend",
                children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: postList?.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "recommend-column",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-calendar",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/icons/icon-calendar.png",
                                            alt: "image-icon-calender"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(FormatDate, {
                                            dateTime: data.date
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "detail-text",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: data.caption
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "column-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ShowImagePost, {
                                        image: data.post_img
                                    })
                                })
                            ]
                        }, index))
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "column-product-recommend",
                style: {
                    height: "100%",
                    minWidth: "100vh",
                    overflow: "hidden"
                },
                children: "ไม่มีโพส"
            })
        ]
    });
};
function FormatDate({ dateTime  }) {
    dateTime = external_moment_default()().format("DD MMM YYYY");
    return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
        children: dateTime
    });
}
function ShowImagePost({ image  }) {
    if (!image) {
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/assets/images/empty.png",
            alt: "image-empty"
        });
    }
    const apiUrl = (next_config_default()).apiPath;
    let image_split = image.split(",");
    const response = image_split.map((data, index)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: `${apiUrl}/${data}`,
            alt: "image-post",
            onError: (e)=>{
                e.target.setAttribute("src", "/assets/images/empty.png");
                return false;
            }
        }, index);
    });
    return response;
}

// EXTERNAL MODULE: ./components/subComponent/manage-image/chooseImage.js
var chooseImage = __webpack_require__(8289);
// EXTERNAL MODULE: ./components/subComponent/manage-image/showImage.js
var showImage = __webpack_require__(8290);
// EXTERNAL MODULE: ./styles/store/store.module.scss
var store_module = __webpack_require__(6731);
var store_module_default = /*#__PURE__*/__webpack_require__.n(store_module);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./config/state.js
var config_state = __webpack_require__(4687);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/member/store/store_premium/show_preoder/show_preoder.js










const show_preoder_apiUrl = (next_config_default()).apiPath;
function Show_preoder({ preOrderList  }) {
    const state = (0,config_state/* useAppContext */.b)();
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
    async function handleAddtoCard(product_code) {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const addProductToCart = await external_axios_default()({
            method: "GET",
            url: `${show_preoder_apiUrl}/api/member/cart/add/${product_code}`,
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
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const getCart = await external_axios_default()({
            method: "GET",
            url: `${show_preoder_apiUrl}/api/member/cart/get`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const cartQty = getCart.data.cart.length;
        if (cartQty > 0) {
            state.cartQty.set_cart_qty(cartQty);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "column-text-top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "สินค้าจองล่วงหน้า (PRE-ORDER)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "รายการสินค้าจองล่วงหน้า (PRE-ORDER) ทั้งหมด ",
                            preOrderList.length,
                            " รายการ"
                        ]
                    })
                ]
            }),
            preOrderList.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `column-product-recommend ${(store_module_default()).box}`,
                    children: preOrderList?.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "recommend-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(showImage/* default */.Z, {
                                    image: data.product_img
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "column-img-bottom",
                                    style: {
                                        display: "flex",
                                        margin: "0.5rem 0"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(chooseImage/* default */.Z, {
                                        image: data.product_img
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `column-text-bottom ${(store_module_default()).productAll}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: data.name_product
                                        }),
                                        data.clip != "no" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "column-gift",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/icons/icon-gift.png",
                                                        alt: "image-gift"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "มีคลิป"
                                                    })
                                                ]
                                            })
                                        }) : null,
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: data.content_product
                                        }),
                                        data.canbuy ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>handleAddtoCard(data.product_code),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-cart-shopping"
                                                }),
                                                data.price
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            style: {
                                                cursor: "not-allowed"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa fa-eye-slash",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, index))
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "column-product-recommend",
                style: {
                    height: "0px",
                    overflow: "hidden"
                },
                children: "ไม่มีสินค้า PRE-ORDER"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
;// CONCATENATED MODULE: ./components/member/store/store_premium/show_product/show_product.js












const show_product_apiUrl = (next_config_default()).apiPath;
function Show_product({ productList  }) {
    const state = (0,config_state/* useAppContext */.b)();
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
    async function handleAddtoCard(product_code) {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const addProductToCart = await external_axios_default()({
            method: "GET",
            url: `${show_product_apiUrl}/api/member/cart/add/${product_code}`,
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
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const getCart = await external_axios_default()({
            method: "GET",
            url: `${show_product_apiUrl}/api/member/cart/get`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const cartQty = getCart.data.cart.length;
        if (cartQty > 0) {
            state.cartQty.set_cart_qty(cartQty);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "column-text-top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "สินค้าทั้งหมด"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "รายการสินค้าทั้งหมด ",
                            productList.length,
                            " รายการ"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `column-product-recommend ${(store_module_default()).box}`,
                style: {
                    height: "100%"
                },
                children: productList.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: productList?.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "recommend-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/member/store/product/${data.product_code}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(showImage/* default */.Z, {
                                            image: data.product_img
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "column-img-bottom",
                                    style: {
                                        display: "flex",
                                        margin: "0.5rem"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(chooseImage/* default */.Z, {
                                        image: data.product_img
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `column-text-bottom ${(store_module_default()).productAll}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: data.name_product
                                        }),
                                        data.clip != "no" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "column-gift",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/icons/icon-gift.png",
                                                        alt: "image-gift"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "มีคลิป"
                                                    })
                                                ]
                                            })
                                        }) : null,
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (store_module_default()).textContent,
                                            children: data.content_product
                                        }),
                                        data.canbuy ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>handleAddtoCard(data.product_code),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-cart-shopping"
                                                }),
                                                data.price
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            style: {
                                                cursor: "not-allowed"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa fa-eye-slash",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, index))
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "column-product-recommend",
                    style: {
                        height: "0px",
                        overflow: "hidden"
                    },
                    children: "ไม่มีสินค้า"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(contactUs/* default */.Z, {})
        ]
    });
};

// EXTERNAL MODULE: ./styles/product/premium.module.scss
var premium_module = __webpack_require__(2780);
var premium_module_default = /*#__PURE__*/__webpack_require__.n(premium_module);
;// CONCATENATED MODULE: ./components/member/store/store_premium/store_premium.js










const store_premium_apiUrl = (next_config_default()).apiPath;
function Store_premium({ stores , qrCode , statusChange  }) {
    const state = (0,config_state/* useAppContext */.b)();
    const { all_product , pre_order , review , store_detail , store_post  } = stores;
    const isStore = state.isStore.get_isStore;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "stone-premiem",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `premiem-column-left ${(premium_module_default()).contentCol}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column-text-top",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "column-text-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: 100,
                                            height: 100,
                                            src: `${store_premium_apiUrl}/${store_detail.profile_img}`
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "column-text-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: store_detail.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "column-text",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "อายุ : ",
                                                                    store_detail.age
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "สัดส่วน BWH : ",
                                                                    store_detail.bwh
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "น้ำหนัก : ",
                                                                    store_detail.weight,
                                                                    " กก."
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "ส่วนสูง : ",
                                                                    store_detail.height,
                                                                    " ชม."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    isStore && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: (premium_module_default()).backToStore,
                                                            onClick: ()=>statusChange(true),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-regular fa-eye"
                                                                }),
                                                                "ดูมุมมองร้านค้า"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column-text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "คอนเซ็ปต์ร้าน"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: store_detail.concept
                                    })
                                ]
                            }),
                            store_detail.profile_video && /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                className: "video",
                                style: {
                                    width: "100%",
                                    height: "14%",
                                    objectFit: "contain"
                                },
                                controls: true,
                                muted: true,
                                autoPlay: true,
                                loop: true,
                                src: `${store_premium_apiUrl}/streaming/${store_detail.profile_video}`,
                                poster: "/assets/images/product.png",
                                onError: (e)=>{
                                    e.target.setAttribute("src", "/assets/images/product.png");
                                    return false;
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "column-box-product",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Show_post, {
                                    postList: store_post
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `premiem-column-right ${(premium_module_default()).contentCol}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "column-box-product",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Show_product, {
                                    productList: all_product
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "column-box-product",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Show_preoder, {
                                    preOrderList: pre_order
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `column-menu-review ${(premium_module_default()).colReview}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "menu-review",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "รีวิวจากลูกค้า"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    review.length,
                                                    " การรีวิว"
                                                ]
                                            })
                                        ]
                                    }),
                                    review?.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (premium_module_default()).contentHeight,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "column-review",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "column-review-left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-user"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "column-review-right",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                children: data.memberName
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: data.message
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, index))
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(contactAdmin/* default */.Z, {
                qrCode: qrCode
            })
        ]
    });
};


/***/ }),

/***/ 2303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactAdmin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_2__);



const apiUrl = (_next_config__WEBPACK_IMPORTED_MODULE_2___default().apiPath);
function ContactAdmin({ qrCode  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "footer-column-top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-admin",
                        children: "ติดต่อแอดมิน"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "column-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn-line",
                            children: [
                                "ไลน์ ",
                                qrCode.content
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `${apiUrl}${qrCode.imageLink}`,
                        alt: "qr"
                    })
                ]
            })
        })
    });
};


/***/ })

};
;