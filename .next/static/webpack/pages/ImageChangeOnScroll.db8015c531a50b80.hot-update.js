"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ImageChangeOnScroll = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currentImsge = ref[0], setCurrentImage = ref[1];\n    var images = [\n        \"Lily\",\n        \"Tea\",\n        \"Fox\",\n        \"DistanceOfTheMoon\",\n        \"Daisies\",\n        \"Birdskull\",\n        \"Buttercup\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: images.map(function(image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseOver: function() {\n                    setCurrentImsge(image);\n                    console.log(\"onMouseOver:\".concat(image));\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    primaryImg: \"/static/images/thumbs/\".concat(image, \"Thumb.jpg\"),\n                    secondaryImg: \"/static/images/fulls/\".concat(image, \"Full.jpg\"),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n                    lineNumber: 16,\n                    columnNumber: 25\n                }, _this)\n            }, image, false, {\n                fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n                lineNumber: 11,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_s(ImageChangeOnScroll, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBc0M7QUFDdUI7QUFFN0QsSUFBTUcsbUJBQW1CLEdBQUcsV0FBTTs7SUFDOUIsSUFBd0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0NHLFlBQVksR0FBcUJILEdBQVksR0FBakMsRUFBRUksZUFBZSxHQUFJSixHQUFZLEdBQWhCO0lBQ3BDLElBQU1LLE1BQU0sR0FBRztRQUFDLE1BQU07UUFBRSxLQUFLO1FBQUUsS0FBSztRQUFFLG1CQUFtQjtRQUFFLFNBQVM7UUFBRSxXQUFXO1FBQUUsV0FBVztLQUFDO0lBQy9GLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNDRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUs7WUFDbkIscUJBQ0ksOERBQUNGLEtBQUc7Z0JBQ0pHLFdBQVcsRUFBRSxXQUFJO29CQUNiQyxlQUFlLENBQUNGLEtBQUssQ0FBQztvQkFDdEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWEsQ0FBUSxPQUFOSixLQUFLLENBQUUsQ0FBQztnQkFDdkMsQ0FBQzswQkFDRyw0RUFBQ1AsZ0VBQW1CO29CQUFDWSxVQUFVLEVBQUUsd0JBQXVCLENBQVEsTUFBUyxDQUFmTCxLQUFLLEVBQUMsV0FBUyxDQUFDO29CQUFFTSxZQUFZLEVBQUUsdUJBQXNCLENBQVEsTUFBUSxDQUFkTixLQUFLLEVBQUMsVUFBUSxDQUFDO29CQUFHTyxHQUFHLEVBQUMsRUFBRTs7Ozs7eUJBQUc7ZUFMdklQLEtBQUs7Ozs7cUJBTVQsQ0FDVDtRQUNMLENBQUMsQ0FBQzs7Ozs7YUFDQSxDQUNSO0FBQ04sQ0FBQztHQWxCS04sbUJBQW1CO0FBQW5CQSxLQUFBQSxtQkFBbUI7QUFvQnpCLCtEQUFlQSxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzPzYwNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRJbXNnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgaW1hZ2VzID0gW1wiTGlseVwiLCBcIlRlYVwiLCBcIkZveFwiLCBcIkRpc3RhbmNlT2ZUaGVNb29uXCIsIFwiRGFpc2llc1wiLCBcIkJpcmRza3VsbFwiLCBcIkJ1dHRlcmN1cFwiXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEltc2dlKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTW91c2VPdmVyOiR7aW1hZ2V9YClcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltYXJ5SW1nPXtgL3N0YXRpYy9pbWFnZXMvdGh1bWJzLyR7aW1hZ2V9VGh1bWIuanBnYH0gc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9pbWFnZXMvZnVsbHMvJHtpbWFnZX1GdWxsLmpwZ2AgfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7Il0sIm5hbWVzIjpbInJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRJbXNnZSIsInNldEN1cnJlbnRJbWFnZSIsImltYWdlcyIsImRpdiIsIm1hcCIsImltYWdlIiwib25Nb3VzZU92ZXIiLCJzZXRDdXJyZW50SW1zZ2UiLCJjb25zb2xlIiwibG9nIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n"));

/***/ })

});