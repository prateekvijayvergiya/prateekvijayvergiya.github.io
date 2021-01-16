webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navBar/faltu.js":
/*!************************************!*\
  !*** ./components/navBar/faltu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\navBar\\faltu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var NavBar = function NavBar() {
  return __jsx(Navbar, {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(Navbar.Brand, {
    href: "#home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, "React-Bootstrap"), __jsx(Navbar.Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }), __jsx(Navbar.Collapse, {
    id: "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(Nav, {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(Nav.Link, {
    href: "#features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Features"), __jsx(Nav.Link, {
    href: "#pricing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Pricing"), __jsx(NavDropdown, {
    title: "Dropdown",
    id: "collasible-nav-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(NavDropdown.Item, {
    href: "#action/3.1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Action"), __jsx(NavDropdown.Item, {
    href: "#action/3.2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Another action"), __jsx(NavDropdown.Item, {
    href: "#action/3.3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Something"), __jsx(NavDropdown.Divider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(NavDropdown.Item, {
    href: "#action/3.4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Separated link"))), __jsx(Nav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(Nav.Link, {
    href: "#deets",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "More deets"), __jsx(Nav.Link, {
    eventKey: 2,
    href: "#memes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Dank memes"))));
};

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/navBar/index.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useForceUpdate.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
false,

/***/ "./node_modules/dom-helpers/esm/addEventListener.js":
false,

/***/ "./node_modules/dom-helpers/esm/camelize.js":
false,

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
false,

/***/ "./node_modules/dom-helpers/esm/css.js":
false,

/***/ "./node_modules/dom-helpers/esm/getComputedStyle.js":
false,

/***/ "./node_modules/dom-helpers/esm/hyphenate.js":
false,

/***/ "./node_modules/dom-helpers/esm/hyphenateStyle.js":
false,

/***/ "./node_modules/dom-helpers/esm/isTransform.js":
false,

/***/ "./node_modules/dom-helpers/esm/listen.js":
false,

/***/ "./node_modules/dom-helpers/esm/ownerDocument.js":
false,

/***/ "./node_modules/dom-helpers/esm/ownerWindow.js":
false,

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeEventListener.js":
false,

/***/ "./node_modules/dom-helpers/esm/transitionEnd.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/prop-types-extra/lib/all.js":
false,

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AbstractNav.js":
false,

/***/ "./node_modules/react-bootstrap/esm/AbstractNavItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/CardContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Collapse.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Navbar.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarBrand.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarCollapse.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavbarToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SelectableContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/TabContext.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ThemeProvider.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
false,

/***/ "./node_modules/react-bootstrap/esm/triggerBrowserReflow.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/uncontrollable/esm/hook.js":
false,

/***/ "./node_modules/uncontrollable/esm/index.js":
false,

/***/ "./node_modules/uncontrollable/esm/uncontrollable.js":
false,

/***/ "./node_modules/uncontrollable/esm/utils.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

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
/* harmony import */ var _components_navBar_faltu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navBar/faltu */ "./components/navBar/faltu.js");
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
  }, __jsx(_components_navBar_faltu__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIvZmFsdHUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsIkhvbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDRSxNQUFDLE1BQUQ7QUFBUSxvQkFBZ0IsTUFBeEI7QUFBeUIsVUFBTSxFQUFDLElBQWhDO0FBQXFDLE1BQUUsRUFBQyxNQUF4QztBQUErQyxXQUFPLEVBQUMsTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGLE1BQUMsTUFBRCxDQUFRLEtBQVI7QUFBYyxRQUFJLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERSxFQUVGLE1BQUMsTUFBRCxDQUFRLE1BQVI7QUFBZSxxQkFBYyx1QkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZFLEVBR0YsTUFBQyxNQUFELENBQVEsUUFBUjtBQUFpQixNQUFFLEVBQUMsdUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEdBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxHQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0Us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O0FBVUQ7O0dBYnVCRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxODQ3NDVlOWE1YjIzYzhhYzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5SZWFjdC1Cb290c3RyYXA8L05hdmJhci5CcmFuZD5cclxuICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cclxuICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCI+XHJcbiAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjZmVhdHVyZXNcIj5GZWF0dXJlczwvTmF2Lkxpbms+XHJcbiAgICAgIDxOYXYuTGluayBocmVmPVwiI3ByaWNpbmdcIj5QcmljaW5nPC9OYXYuTGluaz5cclxuICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiRHJvcGRvd25cIiBpZD1cImNvbGxhc2libGUtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCI+QWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPkFub3RoZXIgYWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiPlNvbWV0aGluZzwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgPC9OYXY+XHJcbiAgICA8TmF2PlxyXG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNkZWV0c1wiPk1vcmUgZGVldHM8L05hdi5MaW5rPlxyXG4gICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9ezJ9IGhyZWY9XCIjbWVtZXNcIj5cclxuICAgICAgICBEYW5rIG1lbWVzXHJcbiAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICA8L05hdj5cclxuICA8L05hdmJhci5Db2xsYXBzZT5cclxuPC9OYXZiYXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCdcclxuaW1wb3J0IEFwcEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZSdcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdkJhci9mYWx0dSdcclxuaW1wb3J0IFJlc3VtZSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VtZSdcclxuaW1wb3J0IFNwYWNlciBmcm9tICcuLi9jb21wb25lbnRzL3NwYWNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgnaG9tZScpXHJcbiAgY29uc29sZS5sb2coY3VycmVudFBhZ2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPE5hdkJhciB7Li4ue3NldEN1cnJlbnRQYWdlfX0vPlxyXG4gICAgICB7Y3VycmVudFBhZ2UgPT09ICdob21lJyAmJiA8SG9tZVBhZ2Ugey4uLntzZXRDdXJyZW50UGFnZX19Lz59XHJcbiAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ3Jlc3VtZScgJiYgPFJlc3VtZSB7Li4ue3NldEN1cnJlbnRQYWdlfX0vPn1cclxuICAgICAge2N1cnJlbnRQYWdlID09PSAnY29udGFjdCcgJiYgPENvbnRhY3QvPn1cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXs3fS8+XHJcbiAgICAgIDxBcHBGb290ZXIvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==