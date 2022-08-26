(() => {
var exports = {};
exports.id = 792;
exports.ids = [792];
exports.modules = {

/***/ 9910:
/***/ ((module) => {

// Exports
module.exports = {
	"containers": "package_containers__pzAsH",
	"card": "package_card__fNhVj",
	"chooseBtn": "package_chooseBtn__soFXo"
};


/***/ }),

/***/ 1597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ packagePage),
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
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./config/state.js
var config_state = __webpack_require__(4687);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: ./styles/package.module.scss
var package_module = __webpack_require__(9910);
var package_module_default = /*#__PURE__*/__webpack_require__.n(package_module);
;// CONCATENATED MODULE: ./components/member/showPackage.js










const apiUrl = (next_config_default()).apiPath;
function ShowPackage({ packagesList  }) {
    const state = (0,config_state/* useAppContext */.b)();
    const router = (0,router_.useRouter)();
    const { 0: packageGender , 1: setPackageGender  } = (0,external_react_.useState)(packagesList);
    const { 0: gender , 1: setGender  } = (0,external_react_.useState)((0,external_cookies_next_.getCookie)("gender"));
    const { 0: packages , 1: setPackage  } = (0,external_react_.useState)([]);
    const { 0: packageId , 1: setPackageId  } = (0,external_react_.useState)((0,external_cookies_next_.getCookie)("package"));
    (0,external_react_.useEffect)(()=>{
        apiGetStatusPackage();
        apiCheckPackage();
    // กรองเอาเฉพาะแพ็คเกจของเพศที่สมัคร
    }, []);
    async function apiGetStatusPackage() {
        const mcode = (0,external_cookies_next_.getCookie)("member_code");
        const access_token = (0,external_cookies_next_.getCookie)("access_token");
        try {
            const sPackage = await external_axios_default()({
                method: "GET",
                url: `${apiUrl}/api/package/statusPayment/${mcode}`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            const payStatus = sPackage.data;
            if (payStatus.statusPay == "pending") {
                router.push(`/member/payment`);
            } else {
                const found = packageGender.filter((p)=>p.gender == gender);
                setPackage(found);
            }
        } catch (err) {
            external_sweetalert2_default().fire({
                icon: "error",
                position: "center",
                title: err.description
            });
        }
    }
    async function apiCheckPackage() {
        const mcode = (0,external_cookies_next_.getCookie)("member_code");
        try {
            const sPackage = await external_axios_default()({
                method: "GET",
                url: `${apiUrl}/api/package/checkPackage/${mcode}`
            });
            const statusPack = sPackage.data;
            if (!statusPack.status) {
                state.emptyPackage.set_emptyPackage(true);
            } else {
                state.emptyPackage.set_emptyPackage(false);
            }
        } catch (err) {
            external_sweetalert2_default().fire({
                icon: "error",
                position: "center"
            });
        }
    }
    function choosPackage(pack) {
        external_sweetalert2_default().fire({
            icon: "question",
            title: "ยืนยันการเลือกแพ็กเกจ " + pack.name,
            position: "center",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            confirmButtonColor: "#C93A87"
        }).then((res)=>{
            if (res.isConfirmed) {
                (0,external_cookies_next_.setCookies)("package", pack.package_id);
                router.push("/member/payment");
            }
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    textAlign: "center",
                    alignItems: "center",
                    margin: "2rem"
                },
                children: "เลือกแพ็กเกจ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (package_module_default()).containers,
                children: packages.length > 0 && packages?.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (package_module_default()).card,
                        children: [
                            data.package_id == packageId,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column-detail",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "column-img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                width: 217,
                                                height: 223,
                                                src: `${apiUrl}${data.image}`,
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                alt: "image-package",
                                                quality: 20
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "bg-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: data.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-color"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-line",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: data.content
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        style: {
                                            display: "inline-flex",
                                            margin: "1rem"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: ()=>choosPackage(data),
                                            className: (package_module_default()).chooseBtn,
                                            children: "เลือก"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, index))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/member/package.js






const package_apiUrl = (next_config_default()).apiPath;
function packagePage({ packagesList  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Package"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ShowPackage, {
                packagesList: packagesList
            })
        ]
    });
};
async function getServerSideProps() {
    const apiGetPackage = await external_axios_default()({
        method: "GET",
        url: `${package_apiUrl}/api/package/get`
    });
    return {
        props: {
            packagesList: apiGetPackage.data.data
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
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,143], () => (__webpack_exec__(1597)));
module.exports = __webpack_exports__;

})();