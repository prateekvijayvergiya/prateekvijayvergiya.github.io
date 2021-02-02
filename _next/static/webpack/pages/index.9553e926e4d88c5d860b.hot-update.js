webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact */ "./components/contact/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer/index.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home */ "./components/home/index.js");
/* harmony import */ var _components_navBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navBar */ "./components/navBar/index.js");
/* harmony import */ var _components_resume__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/resume */ "./components/resume/index.js");
/* harmony import */ var _components_spacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/spacer */ "./components/spacer/index.js");


var _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('home'),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  console.log(currentPage);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_navBar__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage,
    currentPage: currentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  })), currentPage === 'home' && __jsx(_components_home__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 34
    }
  })), currentPage === 'resume' && __jsx(_components_resume__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 36
    }
  })), currentPage === 'contact' && __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 37
    }
  }), __jsx(_components_spacer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    spacing: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

_s(Home, "KLlrbvIFn6o4dTsrFf/Szg7G3bM=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLE1BQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUU3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7QUFDQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQscUZBQVk7QUFBQ0Msa0JBQWMsRUFBZEEsY0FBRDtBQUFpQkQsZUFBVyxFQUFYQTtBQUFqQixHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUVHQSxXQUFXLEtBQUssTUFBaEIsSUFBMEIsTUFBQyx3REFBRCxxRkFBYztBQUFDQyxrQkFBYyxFQUFkQTtBQUFELEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUY3QixFQUdHRCxXQUFXLEtBQUssUUFBaEIsSUFBNEIsTUFBQywwREFBRCxxRkFBWTtBQUFDQyxrQkFBYyxFQUFkQTtBQUFELEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUgvQixFQUlHRCxXQUFXLEtBQUssU0FBaEIsSUFBNkIsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSmhDLEVBS0UsTUFBQywwREFBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGO0FBVUQ7O0dBYnVCRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk1NTNlOTI2ZTRkODhjNWQ4NjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCdcclxuaW1wb3J0IEFwcEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZSdcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhcidcclxuaW1wb3J0IFJlc3VtZSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VtZSdcclxuaW1wb3J0IFNwYWNlciBmcm9tICcuLi9jb21wb25lbnRzL3NwYWNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgnaG9tZScpXHJcbiAgY29uc29sZS5sb2coY3VycmVudFBhZ2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPE5hdkJhciB7Li4ue3NldEN1cnJlbnRQYWdlLCBjdXJyZW50UGFnZX19Lz5cclxuICAgICAge2N1cnJlbnRQYWdlID09PSAnaG9tZScgJiYgPEhvbWVQYWdlIHsuLi57c2V0Q3VycmVudFBhZ2V9fS8+fVxyXG4gICAgICB7Y3VycmVudFBhZ2UgPT09ICdyZXN1bWUnICYmIDxSZXN1bWUgey4uLntzZXRDdXJyZW50UGFnZX19Lz59XHJcbiAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ2NvbnRhY3QnICYmIDxDb250YWN0Lz59XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17N30vPlxyXG4gICAgICA8QXBwRm9vdGVyLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=