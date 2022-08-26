"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 2707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(796);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function Pagination({ page  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: pageArr , 1: setPageArr  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: totalPage , 1: setTotalPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(page.total_page);
    const { 0: pageSelect , 1: setPageSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        pagination();
    }, []);
    function pagination() {
        let arr = [];
        for(let i = 1; i <= totalPage; i++){
            arr.push(i);
        }
        setPageArr(arr);
        setPageSelect(router.query.page);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pagination",
        children: pageArr?.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: `${pageSelect == data && "active"}`,
                    href: `/member?page=${data.toString()}`,
                    children: data
                })
            }, index))
    });
};


/***/ })

};
;