"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./src/sign/SignForm/SignForm.tsx":
/*!****************************************!*\
  !*** ./src/sign/SignForm/SignForm.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignForm: function() { return /* binding */ SignForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignForm.module.scss */ \"./src/sign/SignForm/SignForm.module.scss\");\n/* harmony import */ var _SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SignForm = (param)=>{\n    let { buttontext } = param;\n    _s();\n    const PLACEHOLDER = {\n        email: \"이메일을 입력해 주세요.\",\n        password: \"비밀번호를 입력해 주세요.\"\n    };\n    const [idValue, setIdValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pwValue, setPwValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [idInputFocused, setIdInputFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwInputFocused, setPwInputFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPasswordOpened, setIsPasswordOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isIdError, setIsIdError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isPwError, setIsPwError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const PasswordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const IdInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleIdInputFocused = ()=>{\n        setIdInputFocused(true);\n    };\n    const handlePwInputFocused = ()=>{\n        setPwInputFocused(true);\n    };\n    const handleEyeButtonClicked = (e)=>{\n        e.preventDefault();\n        if (isPasswordOpened) {\n            PasswordInputRef.current.type = \"text\";\n            return setIsPasswordOpened(false);\n        }\n        PasswordInputRef.current.type = \"password\";\n        return setIsPasswordOpened(true);\n    };\n    const handleIdInputChange = (e)=>{\n        setIdValue(e.target.value);\n    };\n    const handlePwInputChange = (e)=>{\n        setPwValue(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (IdInputRef.current) {\n            IdInputRef.current.addEventListener(\"focusout\", ()=>{\n                const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z.]+$/;\n                if (!idValue.trim()) {\n                    return setIsIdError(\"이메일을 입력해 주세요.\");\n                }\n                if (!EMAIL_REG_EXP.test(idValue.trim())) {\n                    return setIsIdError(\"올바른 이메일 주소가 아닙니다.\");\n                }\n                return setIsIdError(\"\");\n            });\n        }\n    }, [\n        idValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (PasswordInputRef.current) {\n            PasswordInputRef.current.addEventListener(\"focusout\", ()=>{\n                if (!pwValue.trim()) {\n                    return setIsPwError(\"비밀번호를 입력해 주세요.\");\n                }\n                return setIsPwError(\"\");\n            });\n        }\n    }, [\n        pwValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inputcontainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"이메일\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().height12box)\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"\".concat((_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().idInput), \" \").concat(idInputFocused ? (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().focused) : \"\", \" \").concat(isIdError ? (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errortype) : \"\"),\n                        type: \"email\",\n                        id: \"email\",\n                        placeholder: PLACEHOLDER.email,\n                        onFocus: handleIdInputFocused,\n                        onChange: handleIdInputChange,\n                        ref: IdInputRef,\n                        value: idValue\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isIdError ? (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error) : \"\",\n                        children: isIdError\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().height12box)\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().height12box)\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"비밀번호\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().height12box)\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"\".concat((_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pwinput), \" \").concat(pwInputFocused ? (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().focused) : \"\", \" \").concat(isPwError ? (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errortype) : (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().errortype)),\n                        type: \"password\",\n                        id: \"password\",\n                        placeholder: PLACEHOLDER.password,\n                        onFocus: handlePwInputFocused,\n                        onChange: handlePwInputChange,\n                        ref: PasswordInputRef,\n                        value: pwValue\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isPwError ? (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error) : \"\",\n                        children: isPwError\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleEyeButtonClicked,\n                        children: \"눈모양 버튼입니다\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_SignForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),\n                type: \"submit\",\n                children: buttontext\n            }, void 0, false, {\n                fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yooseungjae/Desktop/dailymission/4-weekly-mission/src/sign/SignForm/SignForm.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignForm, \"Yedq6fsHIzjQmqcU7KSyTNQ2fUE=\");\n_c = SignForm;\nvar _c;\n$RefreshReg$(_c, \"SignForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUNkIsVUFBVXRCO3dCQUNWdUIsS0FBSy9CO3dCQUNMVSxPQUFPekI7Ozs7OztrQ0FFVCw4REFBQ2dDO3dCQUFJQyxXQUFXdkIsWUFBWWhCLG9FQUFZLEdBQUc7a0NBQUtnQjs7Ozs7O2tDQUNoRCw4REFBQ3NCO3dCQUFJQyxXQUFXdkMsMEVBQWtCOzs7Ozs7a0NBQ2xDLDhEQUFDc0M7d0JBQUlDLFdBQVd2QywwRUFBa0I7Ozs7OztrQ0FDbEMsOERBQUN5Qzt3QkFBTUMsU0FBUTtrQ0FBVzs7Ozs7O2tDQUMxQiw4REFBQ0o7d0JBQUlDLFdBQVd2QywwRUFBa0I7Ozs7OztrQ0FDbEMsOERBQUM0Qzt3QkFDQ0wsV0FBVyxHQUNUM0IsT0FEWVosc0VBQWMsRUFBQyxLQUV6QmtCLE9BREZOLGlCQUFpQlosc0VBQWMsR0FBRyxJQUNuQyxLQUFtRCxPQUFoRGtCLFlBQVlsQix3RUFBZ0IsR0FBR0Esd0VBQWdCO3dCQUNuRDRCLE1BQUs7d0JBQ0xvQixJQUFHO3dCQUNIQyxhQUFhOUMsWUFBWUUsUUFBUTt3QkFDakM2QyxTQUFTM0I7d0JBQ1Q0QixVQUFVbkI7d0JBQ1ZvQixLQUFLaEM7d0JBQ0xXLE9BQU92Qjs7Ozs7O2tDQUVULDhEQUFDOEI7d0JBQUlDLFdBQVdyQixZQUFZbEIsb0VBQVksR0FBRztrQ0FBS2tCOzs7Ozs7a0NBQ2hELDhEQUFDcUM7d0JBQU9DLFNBQVNoQztrQ0FBd0I7Ozs7Ozs7Ozs7OzswQkFFM0MsOERBQUMrQjtnQkFBT2hCLFdBQVd2QyxxRUFBYTtnQkFBRTRCLE1BQUs7MEJBQ3BDMUI7Ozs7Ozs7Ozs7OztBQUlULEVBQUU7R0E5R1dEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaWduL1NpZ25Gb3JtL1NpZ25Gb3JtLnRzeD85NmFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TaWduRm9ybS5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgU2lnbkZvcm1Qcm9wcyB7XG4gIGJ1dHRvbnRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFNpZ25Gb3JtOiBSZWFjdC5GQzxTaWduRm9ybVByb3BzPiA9ICh7IGJ1dHRvbnRleHQgfSkgPT4ge1xuICBjb25zdCBQTEFDRUhPTERFUjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICBlbWFpbDogXCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIixcbiAgICBwYXNzd29yZDogXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIixcbiAgfTtcblxuICBjb25zdCBbaWRWYWx1ZSwgc2V0SWRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3B3VmFsdWUsIHNldFB3VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpZElucHV0Rm9jdXNlZCwgc2V0SWRJbnB1dEZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHdJbnB1dEZvY3VzZWQsIHNldFB3SW5wdXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzUGFzc3dvcmRPcGVuZWQsIHNldElzUGFzc3dvcmRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNJZEVycm9yLCBzZXRJc0lkRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1B3RXJyb3IsIHNldElzUHdFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgSWRJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVJZElucHV0Rm9jdXNlZCA9ICgpID0+IHtcbiAgICBzZXRJZElucHV0Rm9jdXNlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQd0lucHV0Rm9jdXNlZCA9ICgpID0+IHtcbiAgICBzZXRQd0lucHV0Rm9jdXNlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFeWVCdXR0b25DbGlja2VkID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzUGFzc3dvcmRPcGVuZWQpIHtcbiAgICAgIFBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICByZXR1cm4gc2V0SXNQYXNzd29yZE9wZW5lZChmYWxzZSk7XG4gICAgfVxuICAgIFBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgIHJldHVybiBzZXRJc1Bhc3N3b3JkT3BlbmVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlkSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElkVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVB3SW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFB3VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKElkSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgSWRJbnB1dFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEVNQUlMX1JFR19FWFAgPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVouXSskLztcbiAgICAgICAgaWYgKCFpZFZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgIHJldHVybiBzZXRJc0lkRXJyb3IoXCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFFTUFJTF9SRUdfRVhQLnRlc3QoaWRWYWx1ZS50cmltKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHNldElzSWRFcnJvcihcIuyYrOuwlOuluCDsnbTrqZTsnbwg7KO87IaM6rCAIOyVhOuLmeuLiOuLpC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldElzSWRFcnJvcihcIlwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lkVmFsdWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChQYXNzd29yZElucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIFBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIXB3VmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgcmV0dXJuIHNldElzUHdFcnJvcihcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqULlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0SXNQd0Vycm9yKFwiXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHdWYWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Y29udGFpbmVyfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPuydtOuplOydvDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVpZ2h0MTJib3h9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlkSW5wdXR9ICR7XG4gICAgICAgICAgICBpZElucHV0Rm9jdXNlZCA/IHN0eWxlcy5mb2N1c2VkIDogXCJcIlxuICAgICAgICAgIH0gJHtpc0lkRXJyb3IgPyBzdHlsZXMuZXJyb3J0eXBlIDogXCJcIn1gfVxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e1BMQUNFSE9MREVSLmVtYWlsfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlkSW5wdXRGb2N1c2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJZElucHV0Q2hhbmdlfVxuICAgICAgICAgIHJlZj17SWRJbnB1dFJlZn1cbiAgICAgICAgICB2YWx1ZT17aWRWYWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzSWRFcnJvciA/IHN0eWxlcy5FcnJvciA6IFwiXCJ9Pntpc0lkRXJyb3J9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVpZ2h0MTJib3h9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVpZ2h0MTJib3h9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlaWdodDEyYm94fSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wd2lucHV0fSAke1xuICAgICAgICAgICAgcHdJbnB1dEZvY3VzZWQgPyBzdHlsZXMuZm9jdXNlZCA6IFwiXCJcbiAgICAgICAgICB9ICR7aXNQd0Vycm9yID8gc3R5bGVzLmVycm9ydHlwZSA6IHN0eWxlcy5lcnJvcnR5cGV9YH1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtQTEFDRUhPTERFUi5wYXNzd29yZH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVQd0lucHV0Rm9jdXNlZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHdJbnB1dENoYW5nZX1cbiAgICAgICAgICByZWY9e1Bhc3N3b3JkSW5wdXRSZWZ9XG4gICAgICAgICAgdmFsdWU9e3B3VmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1B3RXJyb3IgPyBzdHlsZXMuRXJyb3IgOiBcIlwifT57aXNQd0Vycm9yfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUV5ZUJ1dHRvbkNsaWNrZWR9PuuIiOuqqOyWkSDrsoTtirzsnoXri4jri6Q8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAge2J1dHRvbnRleHR9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2lnbkZvcm0iLCJidXR0b250ZXh0IiwiUExBQ0VIT0xERVIiLCJlbWFpbCIsInBhc3N3b3JkIiwiaWRWYWx1ZSIsInNldElkVmFsdWUiLCJwd1ZhbHVlIiwic2V0UHdWYWx1ZSIsImlkSW5wdXRGb2N1c2VkIiwic2V0SWRJbnB1dEZvY3VzZWQiLCJwd0lucHV0Rm9jdXNlZCIsInNldFB3SW5wdXRGb2N1c2VkIiwiaXNQYXNzd29yZE9wZW5lZCIsInNldElzUGFzc3dvcmRPcGVuZWQiLCJpc0lkRXJyb3IiLCJzZXRJc0lkRXJyb3IiLCJpc1B3RXJyb3IiLCJzZXRJc1B3RXJyb3IiLCJQYXNzd29yZElucHV0UmVmIiwiSWRJbnB1dFJlZiIsImhhbmRsZUlkSW5wdXRGb2N1c2VkIiwiaGFuZGxlUHdJbnB1dEZvY3VzZWQiLCJoYW5kbGVFeWVCdXR0b25DbGlja2VkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInR5cGUiLCJoYW5kbGVJZElucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQd0lucHV0Q2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVNQUlMX1JFR19FWFAiLCJ0cmltIiwidGVzdCIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dGNvbnRhaW5lciIsImxhYmVsIiwiaHRtbEZvciIsImhlaWdodDEyYm94IiwiaW5wdXQiLCJpZElucHV0IiwiZm9jdXNlZCIsImVycm9ydHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwib25DaGFuZ2UiLCJyZWYiLCJFcnJvciIsInB3aW5wdXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sign/SignForm/SignForm.tsx\n"));

/***/ })

});