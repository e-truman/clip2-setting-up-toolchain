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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ImageChangeOnScroll = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currentImage = ref[0], setCurrentImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), mouseEventCount = ref1[0], setMouseEventCount = ref1[1];\n    var images = [\n        \"Lily\",\n        \"Tea\",\n        \"Fox\",\n        \"DistanceOfTheMoon\",\n        \"Daisies\",\n        \"Birdskull\",\n        \"Buttercup\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.document.title = \"image: \".concat(currentImage) // sets browswer tab title\n        ;\n        console.log(\"setting title to \".concat(currentImage));\n    }, [\n        currentImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Mouse Event Count: \",\n                    mouseEventCount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            images.map(function(image) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseOver: function() {\n                        setCurrentImage(image);\n                        setMouseEventCount(mouseEventCount + 1);\n                        console.log(\"onMouseOver:\".concat(image));\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        primaryImg: \"/static/images/thumbs/\".concat(image, \"Thumb.jpg\"),\n                        secondaryImg: \"/static/images/fulls/\".concat(image, \"Full.jpg\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, _this)\n                }, image, false, {\n                    fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/ImageChangeOnScroll.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_s(ImageChangeOnScroll, \"8WgD/Ea28d6XIWd55k9CwunS/Jc=\");\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBaUQ7QUFDWTtBQUU3RCxJQUFNSSxtQkFBbUIsR0FBRyxXQUFNOztJQUM5QixJQUF3Q0gsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q0ksWUFBWSxHQUFxQkosR0FBWSxHQUFqQyxFQUFFSyxlQUFlLEdBQUlMLEdBQVksR0FBaEI7SUFDcEMsSUFBOENBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBbERNLGVBQWUsR0FBd0JOLElBQVcsR0FBbkMsRUFBRU8sa0JBQWtCLEdBQUlQLElBQVcsR0FBZjtJQUMxQyxJQUFNUSxNQUFNLEdBQUc7UUFBQyxNQUFNO1FBQUUsS0FBSztRQUFFLEtBQUs7UUFBRSxtQkFBbUI7UUFBRSxTQUFTO1FBQUUsV0FBVztRQUFFLFdBQVc7S0FBQztJQUUvRlAsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZRLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUUsU0FBUSxDQUFlLE9BQWJQLFlBQVksQ0FBRSxDQUFDLDBCQUEwQjtRQUEzQjtRQUMvQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQWtCLENBQWUsT0FBYlQsWUFBWSxDQUFFLENBQUM7SUFDbkQsQ0FBQyxFQUFDO1FBQUNBLFlBQVk7S0FBQyxDQUFDLENBQUM7SUFFbEIscUJBQ0ksOERBQUNVLEtBQUc7OzBCQUNBLDhEQUFDQyxNQUFJOztvQkFBQyxxQkFBbUI7b0JBQUNULGVBQWU7Ozs7OztxQkFBUTtZQUNoREUsTUFBTSxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO2dCQUNuQixxQkFDSSw4REFBQ0gsS0FBRztvQkFDSkksV0FBVyxFQUFFLFdBQUk7d0JBQ2JiLGVBQWUsQ0FBQ1ksS0FBSyxDQUFDO3dCQUN0QlYsa0JBQWtCLENBQUNELGVBQWUsR0FBRSxDQUFDLENBQUM7d0JBQ3RDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFhLENBQVEsT0FBTkksS0FBSyxDQUFFLENBQUM7b0JBQ3ZDLENBQUM7OEJBQ0csNEVBQUNmLGdFQUFtQjt3QkFBQ2lCLFVBQVUsRUFBRSx3QkFBdUIsQ0FBUSxNQUFTLENBQWZGLEtBQUssRUFBQyxXQUFTLENBQUM7d0JBQUVHLFlBQVksRUFBRSx1QkFBc0IsQ0FBUSxNQUFRLENBQWRILEtBQUssRUFBQyxVQUFRLENBQUM7d0JBQUdJLEdBQUcsRUFBQyxFQUFFOzs7Ozs2QkFBRzttQkFOdklKLEtBQUs7Ozs7eUJBT1QsQ0FDVDtZQUNMLENBQUMsQ0FBQzs7Ozs7O2FBQ0EsQ0FDUjtBQUNOLENBQUM7R0EzQktkLG1CQUFtQjtBQUFuQkEsS0FBQUEsbUJBQW1CO0FBNkJ6QiwrREFBZUEsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcz82MDcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFttb3VzZUV2ZW50Q291bnQsIHNldE1vdXNlRXZlbnRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBpbWFnZXMgPSBbXCJMaWx5XCIsIFwiVGVhXCIsIFwiRm94XCIsIFwiRGlzdGFuY2VPZlRoZU1vb25cIiwgXCJEYWlzaWVzXCIsIFwiQmlyZHNrdWxsXCIsIFwiQnV0dGVyY3VwXCJdXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlPSBgaW1hZ2U6ICR7Y3VycmVudEltYWdlfWAgLy8gc2V0cyBicm93c3dlciB0YWIgdGl0bGVcbiAgICAgICAgY29uc29sZS5sb2coYHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50SW1hZ2V9YClcbiAgICB9LFtjdXJyZW50SW1hZ2VdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5Nb3VzZSBFdmVudCBDb3VudDoge21vdXNlRXZlbnRDb3VudH08L3NwYW4+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEltYWdlKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW91c2VFdmVudENvdW50KG1vdXNlRXZlbnRDb3VudCArMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbk1vdXNlT3Zlcjoke2ltYWdlfWApXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgcHJpbWFyeUltZz17YC9zdGF0aWMvaW1hZ2VzL3RodW1icy8ke2ltYWdlfVRodW1iLmpwZ2B9IHNlY29uZGFyeUltZz17YC9zdGF0aWMvaW1hZ2VzL2Z1bGxzLyR7aW1hZ2V9RnVsbC5qcGdgIH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsOyJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsIkltYWdlQ2hhbmdlT25TY3JvbGwiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJtb3VzZUV2ZW50Q291bnQiLCJzZXRNb3VzZUV2ZW50Q291bnQiLCJpbWFnZXMiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNwYW4iLCJtYXAiLCJpbWFnZSIsIm9uTW91c2VPdmVyIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n"));

/***/ })

});