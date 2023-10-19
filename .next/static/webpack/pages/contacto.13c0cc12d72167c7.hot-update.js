"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacto",{

/***/ "./pages/contacto.js":
/*!***************************!*\
  !*** ./pages/contacto.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Contacto = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // Inicializado como una cadena vacía\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // Inicializado como una cadena vacía\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Simula una operación de envío exitosa (esto debería estar vinculado a tu lógica real)\n        const operacionExitosa = true;\n        if (operacionExitosa) {\n            // Si la operación fue exitosa, establece el mensaje de éxito y borra el mensaje de error\n            setSuccessMessage(\"\\xa1Correo electr\\xf3nico enviado con \\xe9xito!\");\n            setErrorMessage(\"\");\n        } else {\n            // Si hubo un error en la operación, establece el mensaje de error y borra el mensaje de éxito\n            setErrorMessage(\"Error al enviar el correo electr\\xf3nico\");\n            setSuccessMessage(\"\");\n        }\n        // Limpia los campos del formulario\n        setName(\"\");\n        setEmail(\"\");\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"alert alert-success\",\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                lineNumber: 33,\n                columnNumber: 28\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"alert alert-danger\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                lineNumber: 34,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6 mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Contacto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"name\",\n                                            className: \"form-label\",\n                                            children: \"Nombre:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            id: \"name\",\n                                            className: \"form-control\",\n                                            value: name,\n                                            onChange: (e)=>setName(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"form-label\",\n                                            children: \"Correo Electr\\xf3nico:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            id: \"email\",\n                                            className: \"form-control\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"message\",\n                                            className: \"form-label\",\n                                            children: \"Mensaje:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"message\",\n                                            className: \"form-control\",\n                                            value: message,\n                                            onChange: (e)=>setMessage(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"btn btn-primary\",\n                                    children: \"Enviar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\porfolio\\\\pages\\\\contacto.js\",\n        lineNumber: 32,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Contacto, \"u3DC77xcbuRGIFL7WQS86lBTZAQ=\");\n_c = Contacto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contacto);\nvar _c;\n$RefreshReg$(_c, \"Contacto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ3hDLE1BQU1FLFdBQVc7O0lBQ2IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLLHFDQUFxQztJQUMvRixNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLLHFDQUFxQztJQUUzRixNQUFNWSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBRWhCLHdGQUF3RjtRQUN4RixNQUFNQyxtQkFBbUI7UUFFekIsSUFBSUEsa0JBQWtCO1lBQ3BCLHlGQUF5RjtZQUN6Rk4sa0JBQWtCO1lBQ2xCRSxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMLDhGQUE4RjtZQUM5RkEsZ0JBQWdCO1lBQ2hCRixrQkFBa0I7UUFDcEI7UUFFQSxtQ0FBbUM7UUFDbkNOLFFBQVE7UUFDUkUsU0FBUztRQUNURSxXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7WUFDWlQsZ0NBQWtCLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFBdUJUOzs7Ozs7WUFDeERFLDhCQUFnQiw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQXNCUDs7Ozs7OzBCQUV0RCw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDTiw4REFBQ0M7NEJBQUtDLFVBQVVSOzs4Q0FDZCw4REFBQ0k7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FBTUMsU0FBUTs0Q0FBT0wsV0FBVTtzREFBYTs7Ozs7O3NEQUM3Qyw4REFBQ007NENBQ0NDLE1BQUs7NENBQ0xDLElBQUc7NENBQ0hSLFdBQVU7NENBQ1ZTLE9BQU94Qjs0Q0FDUHlCLFVBQVUsQ0FBQ2QsSUFBTVYsUUFBUVUsRUFBRWUsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7OENBRzNDLDhEQUFDVjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNJOzRDQUFNQyxTQUFROzRDQUFRTCxXQUFVO3NEQUFhOzs7Ozs7c0RBQzlDLDhEQUFDTTs0Q0FDQ0MsTUFBSzs0Q0FDTEMsSUFBRzs0Q0FDSFIsV0FBVTs0Q0FDVlMsT0FBT3RCOzRDQUNQdUIsVUFBVSxDQUFDZCxJQUFNUixTQUFTUSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FHNUMsOERBQUNWO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQU1DLFNBQVE7NENBQVVMLFdBQVU7c0RBQWE7Ozs7OztzREFDaEQsOERBQUNZOzRDQUNDSixJQUFHOzRDQUNIUixXQUFVOzRDQUNWUyxPQUFPcEI7NENBQ1BxQixVQUFVLENBQUNkLElBQU1OLFdBQVdNLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUc5Qyw4REFBQ0k7b0NBQU9OLE1BQUs7b0NBQVNQLFdBQVU7OENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RDtHQXpFTWhCO0tBQUFBO0FBMkVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3RvLmpzP2M1OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBDb250YWN0byA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaWNpYWxpemFkbyBjb21vIHVuYSBjYWRlbmEgdmFjw61hXHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpOyAvLyBJbmljaWFsaXphZG8gY29tbyB1bmEgY2FkZW5hIHZhY8OtYVxyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICAvLyBTaW11bGEgdW5hIG9wZXJhY2nDs24gZGUgZW52w61vIGV4aXRvc2EgKGVzdG8gZGViZXLDrWEgZXN0YXIgdmluY3VsYWRvIGEgdHUgbMOzZ2ljYSByZWFsKVxyXG4gICAgICBjb25zdCBvcGVyYWNpb25FeGl0b3NhID0gdHJ1ZTtcclxuICBcclxuICAgICAgaWYgKG9wZXJhY2lvbkV4aXRvc2EpIHtcclxuICAgICAgICAvLyBTaSBsYSBvcGVyYWNpw7NuIGZ1ZSBleGl0b3NhLCBlc3RhYmxlY2UgZWwgbWVuc2FqZSBkZSDDqXhpdG8geSBib3JyYSBlbCBtZW5zYWplIGRlIGVycm9yXHJcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJ8KhQ29ycmVvIGVsZWN0csOzbmljbyBlbnZpYWRvIGNvbiDDqXhpdG8hJyk7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTaSBodWJvIHVuIGVycm9yIGVuIGxhIG9wZXJhY2nDs24sIGVzdGFibGVjZSBlbCBtZW5zYWplIGRlIGVycm9yIHkgYm9ycmEgZWwgbWVuc2FqZSBkZSDDqXhpdG9cclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0Vycm9yIGFsIGVudmlhciBlbCBjb3JyZW8gZWxlY3Ryw7NuaWNvJyk7XHJcbiAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJycpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIExpbXBpYSBsb3MgY2FtcG9zIGRlbCBmb3JtdWxhcmlvXHJcbiAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPntzdWNjZXNzTWVzc2FnZX08L2Rpdj59XHJcbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9kaXY+fVxyXG4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGgyPkNvbnRhY3RvPC9oMj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+Tm9tYnJlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Db3JyZW8gRWxlY3Ryw7NuaWNvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NZW5zYWplOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RvO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0byIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZXJhY2lvbkV4aXRvc2EiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contacto.js\n"));

/***/ })

});