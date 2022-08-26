(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 2708:
/***/ ((module) => {

// Exports
module.exports = {
	"minHeight": "login_minHeight__cfdap"
};


/***/ }),

/***/ 7258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login),
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./components/subComponent/contactUs.js
var contactUs = __webpack_require__(5760);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
// EXTERNAL MODULE: ./config/state.js
var config_state = __webpack_require__(4687);
// EXTERNAL MODULE: ./styles/login.module.scss
var login_module = __webpack_require__(2708);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
;// CONCATENATED MODULE: ./components/signin/Login.js












function Login({ banner  }) {
    const state = (0,config_state/* useAppContext */.b)();
    const apiUrl = (next_config_default()).apiPath;
    const router = (0,router_.useRouter)();
    const { 0: pathLogin , 1: setPathLogin  } = (0,external_react_.useState)("");
    const { 0: showForm , 1: setShowForm  } = (0,external_react_.useState)("member");
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (showForm) {
            setPathLogin(showForm == "member" ? "member" : "store");
            setUsername("");
            setPassword("");
        }
    }, [
        showForm
    ]);
    function onSigninClick() {
        if (username == "" || password == "") {
            external_sweetalert2_default().fire({
                icon: "warning",
                position: "center",
                title: "กรุณากรอกข้อมูลให้ครบ"
            });
            return false;
        }
        const formLogin = {
            username,
            password
        };
        login(formLogin, pathLogin);
    }
    async function login(formLogin, pathLogin) {
        (0,external_cookies_next_.removeCookies)("name");
        (0,external_cookies_next_.removeCookies)("access_token");
        (0,external_cookies_next_.removeCookies)("refresh_token");
        (0,external_cookies_next_.removeCookies)("member_code");
        (0,external_cookies_next_.removeCookies)("storeName");
        (0,external_cookies_next_.removeCookies)("gender");
        (0,external_cookies_next_.removeCookies)("emptyPackage");
        try {
            const onLogin = await external_axios_default().post(`${apiUrl}/api/${pathLogin}/signin`, formLogin);
            const data = onLogin.data;
            if (data.status) {
                pathLogin == "member" ? (state.isLogin.set_login(true), state.memberDetail.set_memberDetail(data.data.userName), state.dateExpire.set_dateExpire(data.data.dateExpire), (0,external_cookies_next_.setCookies)("name", data.data.userName), (0,external_cookies_next_.setCookies)("access_token", data.data.access_token), (0,external_cookies_next_.setCookies)("refresh_token", data.data.refresh_token), (0,external_cookies_next_.setCookies)("member_code", data.data.member_code), (0,external_cookies_next_.setCookies)("gender", data.data.gender), (0,external_cookies_next_.setCookies)("package", data.data.packageId), (0,external_cookies_next_.setCookies)("dateExpire", data.data.dateExpire), apiGetStatusPackage()) : (state.memberDetail.set_memberDetail(data.data.storeName), state.isStore.set_isStore(true), state.isLogin.set_login(true), (0,external_cookies_next_.setCookies)("name", data.data.storeName), (0,external_cookies_next_.setCookies)("access_token", data.data.access_token), (0,external_cookies_next_.setCookies)("refresh_token", data.data.refresh_token), (0,external_cookies_next_.setCookies)("storeName", data.data.storeName), (0,external_cookies_next_.setCookies)("gender", data.data.gender), (0,external_cookies_next_.setCookies)("storeCode", data.data.storeCode), router.push("/store"));
            } else {
                await external_sweetalert2_default().fire({
                    title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
                    icon: "error",
                    timer: 1000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
            }
        } catch (err) {
            console.log(err);
            if (err.response.data.description == "wait admin to verify.") {
                external_sweetalert2_default().fire({
                    icon: "warning",
                    position: "center",
                    title: "รอการอนุมัติ"
                });
            } else {
                external_sweetalert2_default().fire({
                    icon: "error",
                    position: "center",
                    title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
                });
            }
        }
    }
    async function apiGetStatusPackage() {
        const mcode = (0,external_cookies_next_.getCookie)("member_code");
        try {
            const sPackage = await external_axios_default()({
                method: "GET",
                url: `${apiUrl}/api/package/checkPackage/${mcode}`
            });
            const statusPack = sPackage.data;
            if (!statusPack.status) {
                (0,external_cookies_next_.setCookies)("emptyPackage", true);
                state.emptyPackage.set_emptyPackage(true);
                router.push(`/member/package`);
            } else {
                (0,external_cookies_next_.setCookies)("emptyPackage", false);
                state.emptyPackage.set_emptyPackage(false);
                router.push(`/member`);
            }
        } catch (err) {
            console.log(err);
            external_sweetalert2_default().fire({
                icon: "error",
                position: "center",
                title: err.response.data.description
            });
        }
    }
    function handleforgetPass() {
        external_sweetalert2_default().fire({
            title: "กรุณาติดต่อแอดมิน"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `detil-login ${(login_module_default()).minHeight}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "img-background",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 404,
                                height: 1050,
                                alt: "image-gender",
                                className: "img-left",
                                src: "/assets/images/man.png",
                                layout: "fixed"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 404,
                                height: 1050,
                                alt: "image-gender",
                                className: "img-right",
                                src: "/assets/images/woman.png",
                                layout: "fixed"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(contactUs/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "column-shadow",
                        style: {
                            zIndex: "-1"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shadow-left"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shadow-right"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "column-login",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "column-img-top",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 1096,
                                    height: 300,
                                    src: `${apiUrl}/${banner.image}`,
                                    alt: "image-banner"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column-text-login",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "เข้าสู่ระบบ"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "box-column-login",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "menu-navbar",
                                                id: "menu-navbar",
                                                children: showForm == "member" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn-navbar active",
                                                            onClick: ()=>setShowForm("member"),
                                                            children: "สำหรับผู้ซื้อสินค้า"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn-navbar ",
                                                            onClick: ()=>setShowForm("store"),
                                                            children: "สำหรับร้านค้า"
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn-navbar ",
                                                            onClick: ()=>setShowForm("member"),
                                                            children: "สำหรับผู้ซื้อสินค้า"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn-navbar active",
                                                            onClick: ()=>setShowForm("store"),
                                                            children: "สำหรับร้านค้า"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "form-user-login active",
                                                id: "user",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "label-top",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "text-left",
                                                                        children: [
                                                                            "ชื่อผู้ใช้ ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                children: "(User)"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text-right",
                                                                        children: "(กรุณากรอกเป็นเบอร์โทรศัพท์)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                value: username,
                                                                placeholder: "Username",
                                                                maxLength: 10,
                                                                onChange: (e)=>{
                                                                    if (/^[0-9]+$/.test(e.target.value.trim()) || e.target.value == "") {
                                                                        setUsername(e.target.value.trim());
                                                                    }
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "label-top",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "text-left",
                                                                        children: [
                                                                            "รหัสผ่าน ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                children: "(Password)"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text-right",
                                                                        children: "(กรุณากรอกเป็นไอดีไลน์)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                onChange: (e)=>setPassword(e.target.value),
                                                                type: "password",
                                                                value: password,
                                                                placeholder: "Password"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>handleforgetPass(),
                                                                className: "text-bottom",
                                                                style: {
                                                                    cursor: "pointer"
                                                                },
                                                                children: "ลืมชื่อผู้ใช้ หรือ รหัสผ่าน"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: ()=>onSigninClick(),
                                                className: "btn-login",
                                                children: "เข้าระบบ"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column-text-detail",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "หรือ"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "หากคุณยังไม่มีบัญชีผู้ใช้ สามารถเข้าไปสมัครได้ที่ด้านล่างนี้เลย"
                                    })
                                ]
                            }),
                            showForm == "member" ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/member/register",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-menbar",
                                    children: "สมัครสมาชิก"
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/store/register",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-menbar",
                                    children: "สมัครร้านค้า"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/login.js






function login({ banner  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Login"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Login, {
                banner: banner
            })
        ]
    });
};
async function getServerSideProps() {
    const apiUrl = (next_config_default()).apiPath;
    const apiGetBanner = await external_axios_default()({
        method: "GET",
        url: `${apiUrl}/api/website/getSlide/login`
    });
    return {
        props: {
            banner: apiGetBanner.data.ads
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,952,664,143,760], () => (__webpack_exec__(7258)));
module.exports = __webpack_exports__;

})();