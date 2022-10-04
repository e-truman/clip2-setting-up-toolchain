/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\";\n\n\nconst InputElement = () => {\n  const {\n    0: inputText,\n    1: setInputText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: historyList,\n    1: setHistoryList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setTimeout(() => {\n      setIsLoading(false);\n    }, 2000);\n  });\n  return isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 24\n  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      onChange: e => {\n        setInputText(e.target.value); // calling setter function, passing current input value to it\n\n        setHistoryList([...historyList, e.target.value]); // spread existing list, append current value\n      },\n      placeholder: \"Enter Some Text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined), inputText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 15\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: historyList.map(rec => {\n        // javaScript expression, maps over historyList, outpust it on every keystroke\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: rec\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 24\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 48\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputElement); // hooks allow you to attach reusable logic to existing components\n// every data store value is state\n// everything new on the screen is a new state//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlwMi1zZXR0aW5nLXVwLXRvb2xjaGFpbi8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwidXNlU3RhdGUiLCJoaXN0b3J5TGlzdCIsInNldEhpc3RvcnlMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInJlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUVBSyxrREFBUyxDQUFDLE1BQU07QUFDWkMsY0FBVSxDQUFDLE1BQU07QUFDYkYsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FKUSxDQUFUO0FBTUEsU0FBT0QsU0FBUyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUEyQjtBQUFBLDRCQUN2QztBQUFPLGNBQVEsRUFBR0ksQ0FBRCxJQUFPO0FBQ3BCUixvQkFBWSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaLENBRG9CLENBQ1M7O0FBQzdCUCxzQkFBYyxDQUFDLENBQUMsR0FBR0QsV0FBSixFQUFpQk0sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTFCLENBQUQsQ0FBZCxDQUZvQixDQUU2QjtBQUNwRCxPQUhEO0FBSUksaUJBQVcsRUFBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR1QyxFQU10Q1gsU0FOc0MsZUFPdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQdUMsZUFPakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQaUMsZUFRdkM7QUFBQSxnQkFDS0csV0FBVyxDQUFDUyxHQUFaLENBQWlCQyxHQUFELElBQVM7QUFBRTtBQUN4Qiw0QkFBTztBQUFBLG9CQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDSCxPQUZBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTNDO0FBY0gsQ0F6QkQ7O0FBMkJBLCtEQUFlZCxZQUFmLEUsQ0FFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtoaXN0b3J5TGlzdCwgc2V0SGlzdG9yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpc0xvYWRpbmcgPyA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gOiA8ZGl2PlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpIC8vIGNhbGxpbmcgc2V0dGVyIGZ1bmN0aW9uLCBwYXNzaW5nIGN1cnJlbnQgaW5wdXQgdmFsdWUgdG8gaXRcbiAgICAgICAgICAgIHNldEhpc3RvcnlMaXN0KFsuLi5oaXN0b3J5TGlzdCwgZS50YXJnZXQudmFsdWVdKSAvLyBzcHJlYWQgZXhpc3RpbmcgbGlzdCwgYXBwZW5kIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgU29tZSBUZXh0XCIgLz5cbiAgICAgICAge2lucHV0VGV4dH1cbiAgICAgICAgPGhyIC8+PGJyIC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtoaXN0b3J5TGlzdC5tYXAoKHJlYykgPT4geyAvLyBqYXZhU2NyaXB0IGV4cHJlc3Npb24sIG1hcHMgb3ZlciBoaXN0b3J5TGlzdCwgb3V0cHVzdCBpdCBvbiBldmVyeSBrZXlzdHJva2VcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57cmVjfTwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XG5cbi8vIGhvb2tzIGFsbG93IHlvdSB0byBhdHRhY2ggcmV1c2FibGUgbG9naWMgdG8gZXhpc3RpbmcgY29tcG9uZW50c1xuLy8gZXZlcnkgZGF0YSBzdG9yZSB2YWx1ZSBpcyBzdGF0ZVxuLy8gZXZlcnl0aGluZyBuZXcgb24gdGhlIHNjcmVlbiBpcyBhIG5ldyBzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();