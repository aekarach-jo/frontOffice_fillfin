"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "footer-column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "column-left",
                        children: "\xa9 2022 Fillfin.com All Rights Reserved"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "column-right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/content/terms-of-service",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "Terms of Service"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/content/privacy-policy",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "Privacy Policy"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 5040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4687);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5725);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);












const apiUrl = (_next_config__WEBPACK_IMPORTED_MODULE_9___default().apiPath);
function Nav() {
    const state = (0,_config_state__WEBPACK_IMPORTED_MODULE_8__/* .useAppContext */ .b)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { 0: dropdownActive , 1: setDropdownActive  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: dropdownActiveMenu , 1: setDropdownActiveMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: storeName , 1: setStoreName  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("storeName"));
    const { 0: emptyPackage , 1: setEmptyPackage  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("emptyPackage"));
    const { 0: statusPackage , 1: setStatusPackage  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: showDateExpire , 1: setShowDateExpire  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { 0: isFetching , 1: setIsFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const dropdown = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
    const refresh_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("refresh_token");
    const getIsStore = state.isStore.get_isStore;
    const isLogin = state.isLogin.get_login;
    const isStore = state.isStore.get_isStore;
    const empPackage = state.emptyPackage.get_emptyPackage;
    const cartQty = state.cartQty.get_cart_qty;
    const usernameCon = state.memberDetail.get_memberDetail;
    const dateEx = state.dateExpire.get_dateExpire;
    setTimeout(()=>{
        setIsFetching(false);
    }, 2000);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (refresh_token) {
            checkLogin();
            formetDateExpire();
        }
        if (isLogin) {
            getUsername();
            apiGetStatusPackage();
        }
        onClickOutsideBtn();
    }, [
        isLogin,
        isFetching
    ], dropdownActiveMenu, dropdownActive);
    function checkLogin() {
        if (!isFetching) {
            const checkAccess = setInterval(async ()=>{
                const accessToken = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
                if (!accessToken) {
                    return false;
                }
                const acc = jwt_decode__WEBPACK_IMPORTED_MODULE_10___default()(accessToken);
                const expiredTime = acc.exp - moment__WEBPACK_IMPORTED_MODULE_3___default()(Math.floor(Date.now() / 1000));
                if (expiredTime < 30 && !isFetching) {
                    clearInterval(checkAccess);
                    const token = await RefreshToken(apiUrl, refresh_token);
                    if (token) {
                        setIsFetching(true);
                    }
                } else {
                    state.isLogin.set_login(true);
                }
            }, 1000);
        }
        if (isFetching) {
            setIsFetching(false);
        }
    }
    const RefreshToken = async (apiUrl, refresh_token)=>{
        let token;
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "POST",
                url: `${apiUrl}/api/member/getToken`,
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    token: refresh_token
                })
            }).then((res)=>{
                (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookies)("access_token", res.data.token);
                token = res.data.token;
                state.isLogin.set_login(true);
            });
        } catch (err) {
            token = false;
        }
        return token;
    };
    function onClickOutsideBtn() {
        const checkIfClickedOutside = (e)=>{
            if (dropdown.current && !dropdown.current.contains(e.target)) {
                setDropdownActiveMenu(false);
                setDropdownActive(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return ()=>{
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }
    function formetDateExpire() {
        if (dateEx != 0) {
            setShowDateExpire(moment__WEBPACK_IMPORTED_MODULE_3___default()(dateEx).diff((0,moment__WEBPACK_IMPORTED_MODULE_3__.now)(), "days"));
        } else {
            setShowDateExpire(moment__WEBPACK_IMPORTED_MODULE_3___default()((0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("dateExpire")).diff((0,moment__WEBPACK_IMPORTED_MODULE_3__.now)(), "days"));
        }
    }
    function getUsername() {
        const cookieUsername = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("name");
        state.memberDetail.set_memberDetail(cookieUsername);
        if (cookieUsername) {
            const slic = cookieUsername.slice(5, 9);
            const repl = cookieUsername.replace(slic, "****");
            setUser(repl);
            if (storeName == undefined && !isStore) {
                getCartList();
            } else {
                state.isStore.set_isStore(true);
            }
        }
    }
    async function getCartList() {
        const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
        try {
            const getCart = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "GET",
                url: `${apiUrl}/api/member/cart/get`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            const dataCart = getCart.data.cart.length;
            state.cartQty.set_cart_qty(dataCart);
        } catch (err) {
            console.log(err.response);
        }
    }
    function onSignOut() {
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("name");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("gender");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("access_token");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("member_code");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("store_code");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("storeName");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("refresh_token");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("emptyPackage");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("package");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("storeCode");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("isLogin");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("isLoginCookie");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("renewPackage");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)("dateExpire");
        setStoreName(undefined);
        setEmptyPackage("");
        state.cartQty.set_cart_qty(0);
        state.isLogin.set_login(false);
        state.isStore.set_isStore(false);
        state.emptyPackage.set_emptyPackage(false);
        state.memberDetail.set_memberDetail("");
        state.dateExpire.set_dateExpire(0);
        router.push("/");
    }
    async function apiGetStatusPackage() {
        const mcode = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("member_code");
        if (!mcode) {
            return false;
        }
        const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
        const sPackage = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: `${apiUrl}/api/package/statusPayment/${mcode}`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const payStatus = sPackage.data;
        if (payStatus.statusPay == "pending") {
            setStatusPackage(true);
        } else {
            setStatusPackage(false);
        }
    }
    async function handleAddPackage() {
        const mcode = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("member_code");
        try {
            const sPackage = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "GET",
                url: `${apiUrl}/api/package/checkPackage/${mcode}`
            });
            if (sPackage.data.status) {
                const packageId = sPackage.data.package.package_id;
                (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookies)("renewPackage", packageId);
                router.push("/member/payment");
            }
        } catch (err) {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
                icon: "error",
                position: "center",
                title: err.response.data.description
            });
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "column-right",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "column-left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    cursor: "pointer"
                                },
                                src: "/assets/images/logo-fillfin.png",
                                alt: "image-logo"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "column-right",
                    children: isLogin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            !isStore && !empPackage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "column-time-member",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa-regular fa-clock"
                                            }),
                                            "เวลาสมาชิกคงเหลือ: ",
                                            showDateExpire,
                                            " วัน"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn-apply",
                                        onClick: ()=>handleAddPackage(),
                                        children: "เพิ่มระยะเวลา"
                                    })
                                ]
                            }) : false,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "column-dropdown-tel",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        id: "dropdown",
                                        onClick: ()=>setDropdownActive((prev)=>!prev),
                                        children: [
                                            user || usernameCon,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa-solid fa-angle-down"
                                            })
                                        ]
                                    }),
                                    dropdownActive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        ref: dropdown,
                                        className: `dropdown-tel active`,
                                        id: "dropdown-menu",
                                        style: {
                                            width: "max-content"
                                        },
                                        children: [
                                            !isStore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: !empPackage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "column-time-member",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa-regular fa-clock"
                                                                        }),
                                                                        "เวลาสมาชิกคงเหลือ: ",
                                                                        showDateExpire,
                                                                        " วัน"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "btn-apply",
                                                                    onClick: ()=>handleAddPackage(),
                                                                    children: "เพิ่มระยะเวลา"
                                                                })
                                                            ]
                                                        }),
                                                        statusPackage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: "/member/payment",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>setDropdownActive((prev)=>!prev),
                                                                children: "ชำระค่าสมาชิก"
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: "/member/order",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>setDropdownActive((prev)=>!prev),
                                                                children: "รายการสั่งซื้อ"
                                                            })
                                                        })
                                                    ]
                                                }) : false
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/store",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>setDropdownActive(!dropdownActive),
                                                            children: "ไปที่ร้านค้า"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/store/order",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>setDropdownActive(!dropdownActive),
                                                            children: "รายการออเดอร์"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>(onSignOut(), setDropdownActive(!dropdownActive)),
                                                children: "ออกจากระบบ"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !emptyPackage && !empPackage && !getIsStore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "column-btn-cart-shopping",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/member/cart",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "btn-cart-shopping",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fa-solid fa-cart-shopping"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "column-mumber",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: cartQty
                                                })
                                            })
                                        ]
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "column-menubar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn-bars",
                                        onClick: ()=>setDropdownActiveMenu(!dropdownActiveMenu),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa-solid fa-bars"
                                        })
                                    }),
                                    dropdownActiveMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: dropdown,
                                        className: "navbar active",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>setDropdownActiveMenu(!dropdownActiveMenu),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/content/terms-of-service",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: "Terms of Service"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>setDropdownActiveMenu(!dropdownActiveMenu),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/content/privacy-policy",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: "Privacy Policy"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>setDropdownActiveMenu(!dropdownActiveMenu),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "#",
                                                        children: "ติดต่อเรา"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: !isLogin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/login",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn-login",
                                        children: "เข้าสู่ระบบ"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/store/register",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn-apply",
                                        children: "สมัครร้านค้า"
                                    })
                                }),
                                " "
                            ]
                        })
                    })
                })
            ]
        })
    });
};


/***/ })

};
;