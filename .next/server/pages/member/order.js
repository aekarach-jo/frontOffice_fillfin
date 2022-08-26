(() => {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 1357:
/***/ ((module) => {

// Exports
module.exports = {
	"productLayout": "orderMember_productLayout__FqYUb",
	"colLeft": "orderMember_colLeft__6K1Ig",
	"colGroup": "orderMember_colGroup__rPLwA",
	"colCenter": "orderMember_colCenter__urqw_",
	"price": "orderMember_price__UPt27",
	"column_right": "orderMember_column_right__6Ac61",
	"footerAddress": "orderMember_footerAddress__xxzZY",
	"textContent": "orderMember_textContent__bX3RP"
};


/***/ }),

/***/ 6902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ order),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./styles/orderMember.module.scss
var orderMember_module = __webpack_require__(1357);
var orderMember_module_default = /*#__PURE__*/__webpack_require__.n(orderMember_module);
;// CONCATENATED MODULE: ./components/member/cart/order_member/collapse.js








const apiUrl = (next_config_default()).apiPath;
function ProductList({ productList , orderDetail , qty , getAllProduct  }) {
    const rootRef = (0,external_react_.useRef)(null);
    const { isCollapse , onCollapse  } = UseCollapse(rootRef);
    function onReview(data, e, orderNumber) {
        external_sweetalert2_default().fire({
            imageUrl: apiUrl + data.product_image,
            imageWidth: 300,
            imageHeight: 350,
            imageAlt: "Custom image",
            title: "รีวิวสินค้า",
            text: data.product_name,
            html: `<textarea class="border-2" type="text" style="padding: 0.7rem ;border-radius: 10px ; width: 70%" id="message"/>`,
            showCancelButton: true,
            confirmButtonText: "รีวิว",
            cancelButtonText: "ยกเลิก",
            confirmButtonColor: "#ffb300",
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            preConfirm: ()=>{
                if (document.getElementById("message").value.trim() == "") {
                    return false;
                }
                return document.getElementById("message").value.trim();
            }
        }).then((result)=>{
            if (result.isConfirmed) {
                const formReview = {
                    productId: parseInt(data.product_id),
                    message: result.value,
                    orderNumber: orderNumber,
                    star: parseInt(e.target.value)
                };
                apiCreateReview(formReview);
            } else {
                return false;
            }
        });
    }
    async function apiCreateReview(formReview) {
        getAllProduct();
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const apiCreate = await external_axios_default()({
            method: "POST",
            url: `${apiUrl}/api/member/order/review`,
            headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/json"
            },
            data: formReview
        }).then(()=>{
            external_sweetalert2_default().fire("", "รีวิวแล้ว", "success");
            getAllProduct();
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: productList ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "column-list-detail",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: rootRef,
                    style: {
                        overflow: "hidden",
                        transition: "height 0.3s"
                    },
                    children: productList?.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column-text-detail",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "column-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img-left",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${apiUrl}${data.product_image}`,
                                                    alt: "image-productList",
                                                    onError: (e)=>{
                                                        e.target.setAttribute("src", "/assets/images/empty.png");
                                                        return false;
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: data.product_name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: data.product_content
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "column-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: {
                                                textAlign: "center",
                                                margin: "1rem"
                                            },
                                            children: data.price
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "column-right",
                                        children: [
                                            data.product_status == "pending" && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "เตรียมจัดส่ง"
                                            }),
                                            data.product_status == "shipping" && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "กำลังจัดส่ง"
                                            }),
                                            data.product_status == "success" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (orderMember_module_default()).rating,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            textAlign: "center",
                                                            margin: "1rem"
                                                        },
                                                        children: "จัดส่งแล้ว"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                        spacing: 1,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Rating, {
                                                            name: "size-medium",
                                                            defaultValue: 0,
                                                            onClick: (e)=>onReview(data, e, orderDetail.orderNumber)
                                                        })
                                                    })
                                                ]
                                            }),
                                            data.product_status == "accepted" && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "ได้รับสินค้าแล้ว"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "column-none-list",
                    id: "btn-list",
                    children: qty > 1 ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: onCollapse,
                        children: isCollapse ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-angle-down",
                                    style: {
                                        marginRight: "0.5rem"
                                    },
                                    children: " "
                                }),
                                "แสดงรายการ"
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-angle-up",
                                    style: {
                                        marginRight: "0.5rem"
                                    },
                                    children: " "
                                }),
                                "ซ่อนรายการ"
                            ]
                        })
                    }) : false
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (orderMember_module_default()).footerAddress,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "ข้อมูลจัดส่ง"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-address",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "ชื่อ-นามสกุล"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: orderDetail.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-address ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "ที่อยู่"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: orderDetail.address
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-address",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "เบอร์โทร"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: orderDetail.phone
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-address",
                            style: {
                                maxWidth: "13rem",
                                wordBreak: "break-word",
                                overflow: "hidden"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "หมายเหตุ"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (orderMember_module_default()).textContent,
                                    children: orderDetail.note
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
            style: {
                marginLeft: "auto",
                marginRight: "auto"
            },
            children: "ไม่พบสินค้า"
        })
    });
};
function UseCollapse(root) {
    const { 0: isCollapse , 1: setIsCollapse  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        root.current.style.height = root.current.getBoundingClientRect().height + "px";
    }, []);
    function onCollapse(e) {
        const _root = root.current;
        const rootStyle = _root.getBoundingClientRect();
        const child = _root.firstElementChild;
        const childStyle = child.getBoundingClientRect();
        if (!_root.getAttribute("data-styleHeight")) _root.setAttribute("data-styleHeight", rootStyle.height + "px");
        if (rootStyle.height != childStyle.height) {
            _root.style.height = childStyle.height + "px";
            setIsCollapse(!isCollapse);
        } else {
            _root.style.height = _root.getAttribute("data-styleHeight");
            setIsCollapse(!isCollapse);
        }
    }
    return {
        isCollapse,
        onCollapse
    };
}
{}
;// CONCATENATED MODULE: ./components/member/cart/order_member/order_member.js









const order_member_apiUrl = (next_config_default()).apiPath;
function Order_member() {
    const { 0: order , 1: setOrder  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        getOrder();
    }, []);
    async function getOrder() {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const apiGetOrder = await external_axios_default()({
            method: "GET",
            url: `${order_member_apiUrl}/api/member/getOrder`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        setOrder(apiGetOrder.data.order);
    }
    function FormatDate({ dateTime  }) {
        dateTime = external_moment_default()(dateTime).format("DD MMM YYYY");
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                "วันที่สั่งซื้อ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: dateTime
                })
            ]
        });
    }
    async function getAllProduct() {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const getAll = await external_axios_default()({
            method: "GET",
            url: `${order_member_apiUrl}/api/member/getOrder`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then((res)=>{
            setOrder(res.data.order);
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "order-list",
            style: {
                minHeight: "calc(100vh - 100px)"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "img-background-column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-background"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "shadow-left"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "shadow-right"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "column-shadow-white"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(contactUs/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "column-order-list",
                    style: {
                        zIndex: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "head-text-top",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    fontSize: "24px"
                                },
                                children: "รายการออเดอร์"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-list",
                            style: {
                                marginBottom: "5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-head",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-head-left",
                                            children: "รายการสินค้า"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "ราคา"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "การจัดส่ง"
                                        })
                                    ]
                                }),
                                order.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: order?.map((orders, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "column-order",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-head-table",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "เลขที่ออเดอร์",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: orders.orderNumber
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(FormatDate, {
                                                            dateTime: orders.createdAt
                                                        }),
                                                        orders.paymentStatus == "pending" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "การชำระเงิน",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "กำลังดำเนินการ"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "การชำระเงิน",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "ชำระแล้ว"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ProductList, {
                                                    productList: orders.product,
                                                    orderDetail: orders,
                                                    qty: orders.product.length,
                                                    getAllProduct: getAllProduct
                                                })
                                            ]
                                        }, index))
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        padding: "1rem",
                                        height: "3rem",
                                        textAlign: "center"
                                    },
                                    children: "ไม่มีออเดอร์"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/member/order.js




function order() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Order"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Order_member, {})
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

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

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

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

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
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,143,760], () => (__webpack_exec__(6902)));
module.exports = __webpack_exports__;

})();