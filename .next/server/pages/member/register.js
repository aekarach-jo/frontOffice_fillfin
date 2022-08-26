"use strict";
(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 5725:
/***/ ((module) => {

/** @type {import('next').NextConfig} */ 
const nextConfig = {
    reactStrictMode: false,
    apiPath: "http://api.fillfin.com",
    socketPath: "http://socket.fillfin.com",
    images: {
        domains: [
            "http://api.fillfin.com"
        ]
    }
};
module.exports = nextConfig;


/***/ }),

/***/ 8468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register),
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
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(5725);
var next_config_default = /*#__PURE__*/__webpack_require__.n(next_config);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
;// CONCATENATED MODULE: ./components/subComponent/packages.js




const apiUrl = (next_config_default()).apiPath;
function Packages({ packages , setPackageId  }) {
    const { 0: handleChoose , 1: setHandlaChoose  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "column",
            children: packages.length > 0 && packages?.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "bg-color"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: data.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        onClick: ()=>setPackageId(data.package_id),
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        className: "column-detail",
                                                        children: "เลือก"
                                                    })
                                                ]
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
                            })
                        ]
                    })
                }, index))
        })
    });
};

;// CONCATENATED MODULE: ./components/signin/memberRegister.js









const memberRegister_apiUrl = (next_config_default()).apiPath;
function MemberRegister({ packageData , content  }) {
    const { 0: packageGender , 1: setPackageGender  } = (0,external_react_.useState)(packageData);
    const router = (0,router_.useRouter)();
    const { 0: isRegister , 1: setIsRegister  } = (0,external_react_.useState)(false); //checkbox
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const { 0: gender , 1: setGender  } = (0,external_react_.useState)("none");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,external_react_.useState)("");
    const { 0: packages , 1: setPackage  } = (0,external_react_.useState)([]);
    const { 0: packageId , 1: setPackageId  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (gender != "none") {
            const found = packageGender.filter((p)=>p.gender == gender);
            setPackage(found);
        } else {
            const found1 = packageGender.filter((p)=>p.gender == "men");
            setPackage(found1);
        }
    }, [
        gender,
        packageGender
    ]);
    function handleRegis() {
        if (username == "" || password == "" || confirmPassword == "") {
            external_sweetalert2_default().fire({
                icon: "warning",
                position: "center",
                title: "กรุณากรอกข้อมูลให้ครบ"
            });
            return false;
        }
        if (username.length != 10) {
            external_sweetalert2_default().fire({
                icon: "warning",
                position: "center",
                title: "กรุณากรอกเบอร์โทรศัพท์ให้ครบ"
            });
            return false;
        }
        if (password != confirmPassword) {
            external_sweetalert2_default().fire({
                icon: "warning",
                position: "center",
                title: "รหัสผ่านไม่ตรงกัน"
            });
            return false;
        }
        if (gender == "none") {
            external_sweetalert2_default().fire({
                icon: "warning",
                position: "center",
                title: "กรุณาเลือกประเภทสินค้า"
            });
            return false;
        }
        if (packageId == null) {
            external_sweetalert2_default().fire({
                icon: "warning",
                position: "center",
                title: "กรุณาเลือกแพ็กเกจ"
            });
            return false;
        }
        const formRegis = {
            username: username,
            password: password,
            gender: gender,
            package_id: packageId
        };
        register(formRegis);
    }
    async function register(formRegis) {
        try {
            const apiRegis = await external_axios_default()({
                method: "POST",
                url: `${memberRegister_apiUrl}/api/member/register`,
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(formRegis)
            });
            const data = apiRegis.data;
            if (data.status == true) {
                // await Swal.fire({
                //   icon: "success",
                //   title: data.description,
                //   position: "center",
                //   showConfirmButton: false,
                //   timer: 1000,
                // })
                // .then(() => {
                (0,external_cookies_next_.setCookies)("gender", formRegis.gender) // เก็บ gender ไว้ดึงข้อมูลในหน้า package ว่าก่อนหน้านี้เลือกอะไรไป
                ;
                (0,external_cookies_next_.setCookies)("package", formRegis.package_id) // เก็บ package_id ไว้ดึงข้อมูลในหน้า package ว่าก่อนหน้านี้เลือกอะไรไป
                ;
                (0,external_cookies_next_.setCookies)("member_code", data.memberCode); // เก็บ user-code ไว้ดึงข้อมูลในหน้า payment
                router.push(`/member/package`);
            // });
            }
        } catch (err) {
            console.log(err);
            let message = "";
            if (err.response.data.description == "username has been used.") {
                message = "เบอร์โทรศัพท์นี้มีในระบบแล้ว";
            }
            await external_sweetalert2_default().fire({
                icon: "error",
                title: message,
                position: "center",
                showConfirmButton: false,
                timer: 1200
            });
        }
    }
    function onClickCancel() {
        external_sweetalert2_default().fire({
            icon: "warning",
            title: "ยกเลิกการสมัครหรือไม่",
            position: "center",
            showCancelButton: true,
            cancelButtonText: "ยกเลิก",
            showConfirmButton: true,
            confirmButtonText: "ยืนยัน",
            confirmButtonColor: "#C93A87"
        }).then((res)=>{
            if (res.isConfirmed) {
                router.push("/login");
            }
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "apply",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "column-apply",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-top-apply",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "column-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                        className: "video",
                                        width: 400,
                                        controls: true,
                                        muted: true,
                                        loop: true,
                                        autoPlay: true,
                                        src: `${memberRegister_apiUrl}/streaming${content.videoLink}`
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: content.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "(ดู VDO ประกอบ)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: content.content
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "column-center-apply",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-left",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "column-text-login",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "กรอกข้อมูลผู้สมัคร"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "box-column-login",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-user-login",
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
                                                                        onChange: (e)=>{
                                                                            if (/^[\d]+$/.test(e.target.value.trim()) || e.target.value == "") {
                                                                                setUsername(e.target.value.trim());
                                                                            }
                                                                        },
                                                                        type: "text",
                                                                        value: username,
                                                                        placeholder: "Username",
                                                                        maxLength: 10
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
                                                                        onChange: (e)=>setPassword(e.target.value.trim()),
                                                                        type: "password",
                                                                        value: password,
                                                                        placeholder: "************"
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
                                                                                    "ยืนยัน รหัสผ่าน",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        children: "(Confirm Password)"
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
                                                                        onChange: (e)=>setConfirmPassword(e.target.value.trim()),
                                                                        type: "password",
                                                                        value: confirmPassword,
                                                                        placeholder: "************"
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
                                                                                    "ประเภทสินค้า",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        children: "(Product type)"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text-right"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                        onChange: (e)=>setGender(e.target.value),
                                                                        defaultValue: "none",
                                                                        style: {
                                                                            width: "100%",
                                                                            height: "39px",
                                                                            background: "#FFFFFF",
                                                                            border: "1px solid #747474",
                                                                            borderRadius: "5px",
                                                                            outlineStyle: "none",
                                                                            padding: "0 1rem"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                disabled: true,
                                                                                value: "none",
                                                                                children: "กรุณาเลือกประเภทสินค้า"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "men",
                                                                                children: "ผู้ชาย"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                                value: "women",
                                                                                children: "ผู้หญิง"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check",
                                            style: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    onClick: ()=>setIsRegister(!isRegister),
                                                    className: "form-check-input",
                                                    type: "checkbox",
                                                    id: "flexCheckChecked"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label",
                                                    htmlFor: "flexCheckChecked",
                                                    style: {
                                                        marginLeft: "10px"
                                                    },
                                                    children: "ยอมรับเงื่อนไขและข้อตกลงในการใช้บริการ"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "column-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "เลือกแพ็กเกจ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Packages, {
                                            packages: packages,
                                            setPackageId: setPackageId
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "line"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "btn-column",
                            children: [
                                isRegister ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>handleRegis(),
                                    className: "btn-left",
                                    children: "สมัครสมาชิก"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-left",
                                    style: {
                                        backgroundColor: "#e3e3e3",
                                        cursor: "not-allowed"
                                    },
                                    children: "สมัครสมาชิก"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>onClickCancel(),
                                    className: "btn-right",
                                    children: "ยกเลิก"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/member/register.js






const register_apiUrl = (next_config_default()).apiPath;
function register({ packageList , content  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Register"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MemberRegister, {
                packageData: packageList.data,
                content: content
            })
        ]
    });
};
async function getServerSideProps({ req , res  }) {
    const [apiPackage, apiContent] = await Promise.all([
        external_axios_default()({
            method: "GET",
            url: `${register_apiUrl}/api/package/get`,
            headers: {
                "Content-Type": "application/json"
            }
        }),
        external_axios_default()({
            method: "GET",
            url: `${register_apiUrl}/api/website/content/term-member`
        })
    ]);
    return {
        props: {
            packageList: apiPackage.data,
            content: apiContent.data.content
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

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675], () => (__webpack_exec__(8468)));
module.exports = __webpack_exports__;

})();