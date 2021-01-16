webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navBar/index.js":
/*!************************************!*\
  !*** ./components/navBar/index.js ***!
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
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\navBar\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var AppNavBar = function AppNavBar(_ref) {
  _s();

  var setCurrentPage = _ref.setCurrentPage;
  var classes = useStyles();
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Brand, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "aa"), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Collapse, {
    id: "responsive-navbar-nav",
    className: classes.collapse,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('home');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "HOME")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('resume');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "RESUME")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('projects');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "PROJECTS")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
    onClick: function onClick() {
      return setCurrentPage('contact');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "CONTACT")))));
};

_s(AppNavBar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = AppNavBar;
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
/* harmony default export */ __webpack_exports__["default"] = (AppNavBar);

var _c;

$RefreshReg$(_c, "AppNavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwTmF2QmFyIiwic2V0Q3VycmVudFBhZ2UiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiY29udGFpbmVyIiwiY29sbGFwc2UiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwibWFyZ2luTGVmdCIsImRvd24iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFzQjtBQUFBOztBQUFBLE1BQXBCQyxjQUFvQixRQUFwQkEsY0FBb0I7QUFDdEMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsU0FDRSxNQUFDLDhEQUFEO0FBQVEsb0JBQWdCLE1BQXhCO0FBQXlCLFVBQU0sRUFBQyxJQUFoQztBQUFxQyxhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsU0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQsQ0FBUSxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQVVFLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQWUscUJBQWMsdUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsOERBQUQsQ0FBUSxRQUFSO0FBQWlCLE1BQUUsRUFBQyx1QkFBcEI7QUFBNEMsYUFBUyxFQUFFRixPQUFPLENBQUNHLFFBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsV0FBTyxFQUFFO0FBQUEsYUFBTUosY0FBYyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixFQU1FLE1BQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLFFBQUQsQ0FBcEI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FORixFQVdFLE1BQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLFVBQUQsQ0FBcEI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBWEYsRUFnQkUsTUFBQywyREFBRCxDQUFLLElBQUw7QUFBVSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxjQUFjLENBQUMsU0FBRCxDQUFwQjtBQUFBLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQWhCRixDQURGLENBWEYsQ0FERjtBQXNDRCxDQXhDRDs7R0FBTUQsUztVQUNZRyxTOzs7S0FEWkgsUztBQTBDTixJQUFNRyxTQUFTLEdBQUdHLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQVk7QUFDdkNGLFlBQVEsd0hBQ0xFLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FESyxFQUN3QjtBQUM1QkMsZ0JBQVUsRUFBRTtBQURnQixLQUR4Qix3R0FJTEgsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpLLEVBSXdCO0FBQzVCQyxnQkFBVSxFQUFFO0FBRGdCLEtBSnhCLGFBRCtCO0FBU3ZDTixhQUFTLDBIQUNORyxLQUFLLENBQUNDLFdBQU4sQ0FBa0JHLElBQWxCLENBQXVCLElBQXZCLENBRE0sRUFDeUI7QUFDOUJDLGFBQU8sRUFBRSxDQURxQjtBQUU5QkYsZ0JBQVUsRUFBRTtBQUZrQixLQUR6Qix5R0FLTkgsS0FBSyxDQUFDQyxXQUFOLENBQWtCRyxJQUFsQixDQUF1QixJQUF2QixDQUxNLEVBS3lCO0FBQzlCQyxhQUFPLEVBQUU7QUFEcUIsS0FMekIseUdBUU5MLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FSTSxFQVF1QjtBQUM1QkcsYUFBTyxFQUFFLEVBRG1CO0FBRTVCRixnQkFBVSxFQUFFO0FBRmdCLEtBUnZCO0FBVDhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBd0JlVix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYmFhYWQ0OTU2YjljNDkxODI3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmNvbnN0IEFwcE5hdkJhciA9ICh7c2V0Q3VycmVudFBhZ2V9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8TmF2YmFyLkJyYW5kPlxyXG4gICAgICAgIGFhXHJcbiAgICAgICAgey8qIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9eydoNSd9PlxyXG4gICAgICAgICAgUHJhdGVlayBWaWpheXZlcmdpeWFcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17J2g2J30+XHJcbiAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlclxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2xsYXBzZX0+IFxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKCdob21lJyl9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICBIT01FXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoJ3Jlc3VtZScpfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgUkVTVU1FXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoJ3Byb2plY3RzJyl9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICBQUk9KRUNUU1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKCdjb250YWN0Jyl9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb2xsYXBzZToge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiA1MCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IDI1MCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdsZycpXToge1xyXG4gICAgICBwYWRkaW5nOiAzMCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IDUwLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAyMDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2QmFyIl0sInNvdXJjZVJvb3QiOiIifQ==