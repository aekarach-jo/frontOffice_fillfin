exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 8079:
/***/ ((module) => {

// Exports
module.exports = {
	"statusChat": "contactUs_statusChat__4yzMc",
	"newMessage": "contactUs_newMessage__5bOTd",
	"chatContent": "contactUs_chatContent__zrKce",
	"mymove": "contactUs_mymove__ohnuv",
	"chatHeader": "contactUs_chatHeader__NHzwo",
	"chatBody": "contactUs_chatBody__b6Imq",
	"memberChat": "contactUs_memberChat__I3Y9E",
	"adminChat": "contactUs_adminChat__1vv95",
	"chatFooter": "contactUs_chatFooter__ZRmZX",
	"iconPlus": "contactUs_iconPlus__zgrYW",
	"iconSend": "contactUs_iconSend__GH_t8"
};


/***/ }),

/***/ 5760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4687);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5725);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8079);
/* harmony import */ var _styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7__);








const { io  } = __webpack_require__(8087);
const apiSocket = (_next_config__WEBPACK_IMPORTED_MODULE_6___default().socketPath);
const apiUrl = (_next_config__WEBPACK_IMPORTED_MODULE_6___default().apiPath);
function ContactUs() {
    const chatBody = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
    const { 0: toggleChat , 1: setToggleChat  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: conversation , 1: setConversation  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const state = (0,_config_state__WEBPACK_IMPORTED_MODULE_5__/* .useAppContext */ .b)();
    const socket = io(apiSocket);
    const access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("access_token");
    const isLogin = state.isLogin.get_login;
    const isStore = state.isStore.get_isStore;
    const { 0: statusRead , 1: setStatusRead  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const username = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("name");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (toggleChat) {
            apiReadChat();
            apiGetChat();
        }
    }, [
        toggleChat
    ]);
    socket.on("connect", ()=>{});
    socket.on(`user-${username}`, (req, res)=>{
        onSetChatMessage(req);
    });
    function onSetChatMessage(req) {
        setConversation((prev)=>[
                ...prev,
                {
                    username: req.username,
                    role: req.role,
                    message: req.message
                }
            ]);
        apiGetChat();
        setMessage("");
    // setTimeout(() => {
    //     if (toggleChat) {
    //         chatBody.current
    //             .scrollTo({
    //                 behavior: "smooth",
    //                 top: chatBody.current.scrollHeight,
    //             })
    //     }
    // }, 200)
    }
    async function apiGetChat() {
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "get",
                url: `${apiUrl}/api/member/getOldChat`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            }).then((res)=>{
                setStatusRead(res.data.statusRead);
                setConversation(res.data.oldMessage);
                if (toggleChat) {
                    setTimeout(()=>{
                        if (chatBody.current != null) {
                            chatBody.current.scrollTo({
                                behavior: "smooth",
                                top: chatBody.current.scrollHeight
                            });
                        }
                    }, 500);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    async function apiReadChat() {
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "get",
                url: `${apiUrl}/api/member/readChat`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    async function onSendMessageClick() {
        setConversation((prev)=>[
                ...prev,
                {
                    role: "member",
                    message: message
                }
            ]);
        setMessage("");
        setTimeout(()=>{
            chatBody.current.scrollTo({
                behavior: "smooth",
                top: chatBody.current.scrollHeight
            });
        }, 200);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "POST",
                url: `${apiUrl}/api/member/chatToAdmin`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
                data: {
                    message: message
                }
            }).then((res)=>{});
        } catch (err) {
            console.log(err);
        }
    }
    const something = (event)=>{
        if (event.keyCode === 13) {
            onSendMessageClick();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: isLogin && !isStore && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "contact-us",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "column-contact-us",
                        children: [
                            !toggleChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-contact-us",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "ติดต่อเรา"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "img-contact-us",
                                onClick: ()=>setToggleChat(!toggleChat),
                                children: [
                                    !statusRead && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().statusChat),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().newMessage),
                                            children: "  "
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().logoContact),
                                        width: 57,
                                        height: 57,
                                        src: "/assets/images/contact.jpg",
                                        alt: "image-contactUs"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                toggleChat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().chatContent),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().chatHeader),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Fillfin"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().chatBody),
                            ref: chatBody,
                            children: conversation?.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: data.role == "member" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().memberChat),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().iconMember),
                                                src: "/assets/images/product.png",
                                                alt: "image-contactUs"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: data.message
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().adminChat),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().iconAdmin),
                                                src: "/assets/images/contact.jpg",
                                                alt: "image-contactUs"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: data.message
                                            })
                                        ]
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().chatFooter),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().iconPlus),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-solid fa-circle-plus"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: message,
                                    type: "text",
                                    onChange: (e)=>setMessage(e.target.value),
                                    onKeyDown: (e)=>something(e)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_contactUs_module_scss__WEBPACK_IMPORTED_MODULE_7___default().iconSend),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-solid fa-paper-plane",
                                        onClick: (e)=>onSendMessageClick()
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;