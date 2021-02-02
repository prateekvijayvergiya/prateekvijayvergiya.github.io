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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contact */ "./components/contact/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer/index.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home */ "./components/home/index.js");
/* harmony import */ var _components_navBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navBar */ "./components/navBar/index.js");
/* harmony import */ var _components_resume__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/resume */ "./components/resume/index.js");
/* harmony import */ var _components_spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/spacer */ "./components/spacer/index.js");


var _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function Home() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('home'),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  console.log(currentPage);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_navBar__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage,
    currentPage: currentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, currentPage === 'home' && __jsx(_components_home__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 34
    }
  })), currentPage === 'resume' && __jsx(_components_resume__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 36
    }
  })), currentPage === 'contact' && __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  })), __jsx(_components_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
}

_s(Home, "nTEwlYxbq0F88v1Ntl7Azn0ALrw=", false, function () {
  return [useStyles];
});

_c = Home;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      minHeight: '100%',
      margin: '0 auto -50px'
    }
  };
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWluSGVpZ2h0IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCOztBQUQ2QixrQkFFU0Msc0RBQVEsQ0FBQyxNQUFELENBRmpCO0FBQUEsTUFFdEJDLFdBRnNCO0FBQUEsTUFFVEMsY0FGUzs7QUFHN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxXQUFaO0FBQ0EsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFELHFGQUFZO0FBQUNDLGtCQUFjLEVBQWRBLGNBQUQ7QUFBaUJELGVBQVcsRUFBWEE7QUFBakIsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgsT0FBTyxDQUFDTyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NKLFdBQVcsS0FBSyxNQUFoQixJQUEwQixNQUFDLHdEQUFELHFGQUFjO0FBQUNDLGtCQUFjLEVBQWRBO0FBQUQsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRDNCLEVBRUNELFdBQVcsS0FBSyxRQUFoQixJQUE0QixNQUFDLDBEQUFELHFGQUFZO0FBQUNDLGtCQUFjLEVBQWRBO0FBQUQsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRjdCLEVBR0NELFdBQVcsS0FBSyxTQUFoQixJQUE2QixNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIOUIsQ0FGRixFQU9FLE1BQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERjtBQVlEOztHQWhCdUJKLEk7VUFDTkUsUzs7O0tBRE1GLEk7QUFrQnhCLElBQU1FLFNBQVMsR0FBR08sMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0YsYUFBUyxFQUFFO0FBQ1RHLGVBQVMsRUFBRSxNQURGO0FBRVRDLFlBQU0sRUFBRTtBQUZDO0FBRDRCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlYWQ3OWQwMjQ3MTcwMmQyYmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnXHJcbmltcG9ydCBBcHBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXInXHJcbmltcG9ydCBSZXN1bWUgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bWUnXHJcbmltcG9ydCBTcGFjZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zcGFjZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKVxyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZCYXIgey4uLntzZXRDdXJyZW50UGFnZSwgY3VycmVudFBhZ2V9fS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ2hvbWUnICYmIDxIb21lUGFnZSB7Li4ue3NldEN1cnJlbnRQYWdlfX0vPn1cclxuICAgICAge2N1cnJlbnRQYWdlID09PSAncmVzdW1lJyAmJiA8UmVzdW1lIHsuLi57c2V0Q3VycmVudFBhZ2V9fS8+fVxyXG4gICAgICB7Y3VycmVudFBhZ2UgPT09ICdjb250YWN0JyAmJiA8Q29udGFjdC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXs3fS8+XHJcbiAgICAgIDxBcHBGb290ZXIvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8gLTUwcHgnLFxyXG4gIH1cclxufSkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=