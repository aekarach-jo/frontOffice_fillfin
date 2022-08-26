"use strict";
(() => {
var exports = {};
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 6838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ payment),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
// EXTERNAL MODULE: external "form-data"
var external_form_data_ = __webpack_require__(8941);
var external_form_data_default = /*#__PURE__*/__webpack_require__.n(external_form_data_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
;// CONCATENATED MODULE: ./components/member/cart/paymentSummary/paymentSummary.js










const apiUrl = (next_config_default()).apiPath;
function PaymentSummary() {
    const router = (0,router_.useRouter)();
    const { 0: dropdownActiveBank , 1: setDropdownActiveBank  } = (0,external_react_.useState)(false);
    const inputImage = (0,external_react_.useRef)(null);
    // ข้อมูลแพ็กเกจ
    const { 0: cartList , 1: setCartList  } = (0,external_react_.useState)();
    const { 0: totalPrice , 1: setTotalPrice  } = (0,external_react_.useState)();
    const { 0: netPrice , 1: setNetPrice  } = (0,external_react_.useState)();
    // ฟอร์มรายละเอียดที่อยู่
    const { 0: fullname , 1: setFullname  } = (0,external_react_.useState)();
    const { 0: address , 1: setAddress  } = (0,external_react_.useState)();
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)();
    const { 0: subDistrict , 1: setSubDistrict  } = (0,external_react_.useState)();
    const { 0: district , 1: setDistrict  } = (0,external_react_.useState)();
    const { 0: province , 1: setProvince  } = (0,external_react_.useState)();
    const { 0: postalCode , 1: setPostalCode  } = (0,external_react_.useState)();
    const { 0: note , 1: setNote  } = (0,external_react_.useState)();
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    const { 0: bankList , 1: setBankList  } = (0,external_react_.useState)([]);
    const { 0: bank , 1: setBank  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        getCartList(), getBank();
    }, []);
    function inputImageOnChange(e) {
        if (!e.target.files.length) {
            return false;
        }
        if ([
            "image/jpeg",
            "iamge/jpg",
            "image/png",
            "image/webp"
        ].includes(e.target.files[0].type)) {
            const URLs = URL.createObjectURL(e.target.files[0]);
            setImage(URLs);
        } else {
            external_sweetalert2_default().fire({
                title: "กรุณาอัปโหลดเฉพาะไฟล์รูปภาพ",
                icon: "warning",
                position: "center"
            });
        }
    }
    function popupShowImage(image) {
        external_sweetalert2_default().fire({
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 520,
            imageAlt: "Custom image",
            showConfirmButton: false,
            background: "rgba(0,0,0,0)"
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
        setNetPrice(getCart.data.netprice);
        setCartList(dataCart);
    }
    async function getBank() {
        const bankData = await fetch(`${apiUrl}/api/bank/get`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const bankJson = await bankData.json();
        setBankList(bankJson.data);
        setBank(bankJson.data[0]);
    }
    function handleSend() {
        if (bank == "") {
            external_sweetalert2_default().fire({
                icon: "warning",
                title: "กรุณาเลือกบัญชี"
            });
            return false;
        }
        if (!image) {
            external_sweetalert2_default().fire({
                icon: "warning",
                title: "กรุณาอัปโหลดสลิป"
            });
            return false;
        }
        external_sweetalert2_default().fire({
            position: "center",
            icon: "question",
            title: "ยืนยันการชำระหรือไม่",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#C93A87",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            allowOutsideClick: true
        }).then((res)=>{
            if (res.isConfirmed) {
                const formData = new (external_form_data_default())();
                formData.append("name", fullname);
                formData.append("address", address);
                formData.append("phone", phone);
                formData.append("district", district);
                formData.append("subdistrict", subDistrict);
                formData.append("province", province);
                formData.append("code", postalCode);
                formData.append("note", note);
                formData.append("bank_ref", bank.id);
                formData.append("image", inputImage.current.files[0]);
                if (res.isConfirmed) {
                    createOrder(formData);
                }
            }
        });
    }
    async function createOrder(formData) {
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        const apiCreateOrder = await external_axios_default()({
            method: "POST",
            url: `${apiUrl}/api/member/createOrder`,
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            data: formData
        }).then((res)=>{
            external_sweetalert2_default().fire({
                position: "center",
                icon: "success",
                title: "ชำระสำเร็จ"
            }).then(()=>{
                router.push(`/member/order`);
            });
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "pay-summery",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pay-summery-column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-top",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "สรุปรายการชำระเงิน"
                            })
                        }),
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
                                                    children: netPrice
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-informatin",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "ข้อมูลจัดส่ง"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column-input",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "*ชื่อ"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            defaultValue: fullname,
                                                            onChange: (e)=>setFullname(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column-input",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "*ที่อยู่"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            defaultValue: address,
                                                            onChange: (e)=>setAddress(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column-input",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "*เบอร์โทร"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            value: phone,
                                                            onChange: (e)=>{
                                                                if (/^[0-9]+$/.test(e.target.value.trim()) || e.target.value == "") {
                                                                    setPhone(e.target.value.trim());
                                                                }
                                                            },
                                                            maxLength: 10
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "column-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    children: "*ตำบล/แขวง"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    defaultValue: subDistrict,
                                                                    maxLength: 20,
                                                                    onChange: (e)=>setSubDistrict(e.target.value)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "column-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    children: "*อำเภอ/เขต"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    defaultValue: district,
                                                                    maxLength: 20,
                                                                    onChange: (e)=>setDistrict(e.target.value)
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "column-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    children: "*จังหวัด"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    defaultValue: province,
                                                                    maxLength: 20,
                                                                    onChange: (e)=>setProvince(e.target.value)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "column-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    children: "*รหัสไปรษณีย์"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    maxLength: 5,
                                                                    value: postalCode,
                                                                    onChange: (e)=>{
                                                                        if (/^[0-9]+$/.test(e.target.value.trim()) || e.target.value == "") {
                                                                            setPostalCode(e.target.value.trim());
                                                                        }
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column-input",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            children: "ข้อความฝากถึงผู้ขาย"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            maxLength: 200,
                                                            defaultValue: note,
                                                            onChange: (e)=>setNote(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "ชำระค่าสินค้าและบริการ"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "pay-dropdown",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "dropdown-toggle",
                                                            onClick: ()=>setDropdownActiveBank((prev)=>!prev),
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "dropdown-toggle-left",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                            src: `${apiUrl}/${bank.image}`,
                                                                            width: 47,
                                                                            height: 25
                                                                        }),
                                                                        bank.bank_name,
                                                                        " / ",
                                                                        bank.bank_number,
                                                                        " / ",
                                                                        bank.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "dropdown-toggle-right",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-angle-down"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `pay-dropdown-menu ${dropdownActiveBank && "active"}`,
                                                            id: "pay-dropdown-menu",
                                                            children: bankList ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                children: bankList?.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "dropdown-item",
                                                                        onClick: ()=>{
                                                                            setDropdownActiveBank((prev)=>!prev);
                                                                            setBank(data);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: `${apiUrl}/${data.image}`,
                                                                                alt: "image-bankList"
                                                                            }),
                                                                            data.bank_name,
                                                                            " / ",
                                                                            data.bank_number,
                                                                            " / ",
                                                                            data.name
                                                                        ]
                                                                    }, index))
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "ไม่มีข้อมูล"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column-upload-slip",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "left",
                                                            style: {
                                                                height: "auto",
                                                                width: "200px"
                                                            },
                                                            children: [
                                                                image ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: image,
                                                                    alt: "image-slip",
                                                                    style: {
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "contain",
                                                                        cursor: "pointer"
                                                                    },
                                                                    onClick: ()=>popupShowImage(image)
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa-solid fa-image"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    style: {
                                                                        display: "none"
                                                                    },
                                                                    type: "file",
                                                                    accept: ".jpeg,.jpg,.png",
                                                                    ref: inputImage,
                                                                    onChange: (e)=>inputImageOnChange(e)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "right",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    children: "อัปโหลดสลิป"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "ขนาดอัปโหลดไฟล์ภาพ ไม่เกิน 5 Mb"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    type: "button",
                                                                    onClick: ()=>inputImage.current.click(),
                                                                    children: "อัปโหลด"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: ()=>handleSend(),
                                            children: "ส่ง"
                                        })
                                    ]
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

;// CONCATENATED MODULE: ./pages/member/cart/payment.js




function payment() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Payment"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PaymentSummary, {})
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

module.exports = require("axios");

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 8941:
/***/ ((module) => {

module.exports = require("form-data");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,143,760], () => (__webpack_exec__(6838)));
module.exports = __webpack_exports__;

})();