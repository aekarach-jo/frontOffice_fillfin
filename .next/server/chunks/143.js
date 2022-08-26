"use strict";
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 4687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AppWrapper),
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const { createContext , useReducer , useContext  } = __webpack_require__(6689);
const AppContext = createContext();
let initialState = {
    cartQty: 0,
    isLogin: false,
    isStore: false,
    emptyPackage: false,
    memberDetail: "",
    dateExpire: 0
};
function reducer(state, action) {
    switch(action.type){
        case "cartQty":
            return {
                ...state,
                cartQty: action.data
            };
        case "isLogin":
            return {
                ...state,
                isLogin: action.data
            };
        case "isStore":
            return {
                ...state,
                isStore: action.data
            };
        case "memberDetail":
            return {
                ...state,
                memberDetail: action.data
            };
        case "emptyPackage":
            return {
                ...state,
                emptyPackage: action.data
            };
        case "dateExpire":
            return {
                ...state,
                dateExpire: action.data
            };
        default:
            return state;
    }
}
function AppWrapper({ children  }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        cartQty: {
            get_cart_qty: state.cartQty,
            set_cart_qty: (params)=>{
                dispatch({
                    type: "cartQty",
                    data: params
                });
            }
        },
        isLogin: {
            get_login: state.isLogin,
            set_login: (params)=>{
                dispatch({
                    type: "isLogin",
                    data: params
                });
            }
        },
        isStore: {
            get_isStore: state.isStore,
            set_isStore: (params)=>{
                dispatch({
                    type: "isStore",
                    data: params
                });
            }
        },
        memberDetail: {
            get_memberDetail: state.memberDetail,
            set_memberDetail: (params)=>{
                dispatch({
                    type: "memberDetail",
                    data: params
                });
            }
        },
        emptyPackage: {
            get_emptyPackage: state.emptyPackage,
            set_emptyPackage: (params)=>{
                dispatch({
                    type: "emptyPackage",
                    data: params
                });
            }
        },
        dateExpire: {
            get_dateExpire: state.dateExpire,
            set_dateExpire: (params)=>{
                dispatch({
                    type: "dateExpire",
                    data: params
                });
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: value,
        children: children
    });
}
function useAppContext() {
    return useContext(AppContext);
}


/***/ }),

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


/***/ })

};
;