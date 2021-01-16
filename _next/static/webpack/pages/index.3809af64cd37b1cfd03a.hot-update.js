webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navBar/faltu.js":
/*!************************************!*\
  !*** ./components/navBar/faltu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\navBar\\faltu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var NavBar = function NavBar(_ref) {
  _s();

  var setCurrentPage = _ref.setCurrentPage;
  var classes = useStyles();
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    collapseOnSelect: true,
    expand: "sm",
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Brand, {
    href: "#home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: 'h5',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Prateek Vijayvergiya"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: 'h6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Software Engineer")), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Collapse, {
    id: "responsive-navbar-nav",
    className: classes.collapse,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('home');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "HOME")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('resume');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "RESUME")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('projects');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "PROJECTS")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('contact');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "CONTACT")))));
};

_s(NavBar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = NavBar;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _collapse, _container;

  return {
    collapse: (_collapse = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_collapse, theme.breakpoints.up('sm'), {
      marginLeft: 50
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_collapse, theme.breakpoints.up('lg'), {
      marginLeft: 250
    }), _collapse),
    container: (_container = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, theme.breakpoints.down('sm'), {
      padding: 0,
      marginLeft: 0
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, theme.breakpoints.down('lg'), {
      padding: 30
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_container, theme.breakpoints.up('lg'), {
      padding: 50,
      marginLeft: 200
    }), _container)
  };
});
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIvZmFsdHUuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwic2V0Q3VycmVudFBhZ2UiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiY29udGFpbmVyIiwiY29sbGFwc2UiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwibWFyZ2luTGVmdCIsImRvd24iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFzQjtBQUFBOztBQUFBLE1BQXBCQyxjQUFvQixRQUFwQkEsY0FBb0I7QUFDbkMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsU0FDRSxNQUFDLDhEQUFEO0FBQVEsb0JBQWdCLE1BQXhCO0FBQXlCLFVBQU0sRUFBQyxJQUFoQztBQUFxQyxhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsU0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFFLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFJRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFFLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsQ0FERixFQVNFLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQWUscUJBQWMsdUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsOERBQUQsQ0FBUSxRQUFSO0FBQWlCLE1BQUUsRUFBQyx1QkFBcEI7QUFBNEMsYUFBUyxFQUFFRixPQUFPLENBQUNHLFFBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLFdBQU8sRUFBRTtBQUFBLGFBQU1KLGNBQWMsQ0FBQyxNQUFELENBQXBCO0FBQUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFNRSxNQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLFdBQU8sRUFBRTtBQUFBLGFBQU1BLGNBQWMsQ0FBQyxRQUFELENBQXBCO0FBQUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBTkYsRUFXRSxNQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLFdBQU8sRUFBRTtBQUFBLGFBQU1BLGNBQWMsQ0FBQyxVQUFELENBQXBCO0FBQUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQVhGLEVBZ0JFLE1BQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FoQkYsQ0FMRixDQVZGLENBREY7QUF5Q0QsQ0EzQ0Q7O0dBQU1ELE07VUFDWUcsUzs7O0tBRFpILE07QUE2Q04sSUFBTUcsU0FBUyxHQUFHRywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3ZDRixZQUFRLHdIQUNMRSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBREssRUFDd0I7QUFDNUJDLGdCQUFVLEVBQUU7QUFEZ0IsS0FEeEIsd0dBSUxILEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKSyxFQUl3QjtBQUM1QkMsZ0JBQVUsRUFBRTtBQURnQixLQUp4QixhQUQrQjtBQVN2Q04sYUFBUywwSEFDTkcsS0FBSyxDQUFDQyxXQUFOLENBQWtCRyxJQUFsQixDQUF1QixJQUF2QixDQURNLEVBQ3lCO0FBQzlCQyxhQUFPLEVBQUUsQ0FEcUI7QUFFOUJGLGdCQUFVLEVBQUU7QUFGa0IsS0FEekIseUdBS05ILEtBQUssQ0FBQ0MsV0FBTixDQUFrQkcsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FMTSxFQUt5QjtBQUM5QkMsYUFBTyxFQUFFO0FBRHFCLEtBTHpCLHlHQVFOTCxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBUk0sRUFRdUI7QUFDNUJHLGFBQU8sRUFBRSxFQURtQjtBQUU1QkYsZ0JBQVUsRUFBRTtBQUZnQixLQVJ2QjtBQVQ4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXdCZVYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzgwOWFmNjRjZDM3YjFjZmQwM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoe3NldEN1cnJlbnRQYWdlfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwic21cIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PXsnaDUnfT5cclxuICAgICAgICAgIFByYXRlZWsgVmlqYXl2ZXJnaXlhXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9eydoNid9PlxyXG4gICAgICAgICAgU29mdHdhcmUgRW5naW5lZXJcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2xsYXBzZX0+XHJcbiAgICAgICAgey8qIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjZmVhdHVyZXNcIj5GZWF0dXJlczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+UHJpY2luZzwvTmF2Lkxpbms+XHJcbiAgICAgICAgPC9OYXY+ICovfVxyXG4gICAgICAgIDxOYXY+XHJcbiAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoJ2hvbWUnKX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIEhPTUVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZSgncmVzdW1lJyl9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICBSRVNVTUVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZSgncHJvamVjdHMnKX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIFBST0pFQ1RTXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoJ2NvbnRhY3QnKX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICA8L05hdmJhcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbGxhcHNlOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDUwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogMjUwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IDMwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgcGFkZGluZzogNTAsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDIwMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwic291cmNlUm9vdCI6IiJ9