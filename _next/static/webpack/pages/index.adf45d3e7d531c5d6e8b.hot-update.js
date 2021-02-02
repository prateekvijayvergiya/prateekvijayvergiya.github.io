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
      columnNumber: 36
    }
  })), currentPage === 'resume' && __jsx(_components_resume__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentPage: setCurrentPage
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 38
    }
  })), currentPage === 'contact' && __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 39
    }
  })), __jsx("div", {
    className: classes.push,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      margin: '0 auto 50'
    },
    push: {
      height: '100px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwicHVzaCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1pbkhlaWdodCIsIm1hcmdpbiIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFENkIsa0JBRVNDLHNEQUFRLENBQUMsTUFBRCxDQUZqQjtBQUFBLE1BRXRCQyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBRzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRCxxRkFBWTtBQUFFQyxrQkFBYyxFQUFkQSxjQUFGO0FBQWtCRCxlQUFXLEVBQVhBO0FBQWxCLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVILE9BQU8sQ0FBQ08sU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixXQUFXLEtBQUssTUFBaEIsSUFBMEIsTUFBQyx3REFBRCxxRkFBYztBQUFFQyxrQkFBYyxFQUFkQTtBQUFGLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUQ3QixFQUVHRCxXQUFXLEtBQUssUUFBaEIsSUFBNEIsTUFBQywwREFBRCxxRkFBWTtBQUFFQyxrQkFBYyxFQUFkQTtBQUFGLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUYvQixFQUdHRCxXQUFXLEtBQUssU0FBaEIsSUFBNkIsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSGhDLENBRkYsRUFPRTtBQUFLLGFBQVMsRUFBRUgsT0FBTyxDQUFDUSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREY7QUFhRDs7R0FqQnVCVCxJO1VBQ05FLFM7OztLQURNRixJO0FBbUJ4QixJQUFNRSxTQUFTLEdBQUdRLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNILGFBQVMsRUFBRTtBQUNUSSxlQUFTLEVBQUUsTUFERjtBQUVUQyxZQUFNLEVBQUU7QUFGQyxLQUQ0QjtBQUt2Q0osUUFBSSxFQUFFO0FBQ0pLLFlBQU0sRUFBRTtBQURKO0FBTGlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkZjQ1ZDNlN2Q1MzFjNWQ2ZThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnXHJcbmltcG9ydCBBcHBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZCYXInXHJcbmltcG9ydCBSZXN1bWUgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bWUnXHJcbmltcG9ydCBTcGFjZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zcGFjZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKVxyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZCYXIgey4uLnsgc2V0Q3VycmVudFBhZ2UsIGN1cnJlbnRQYWdlIH19IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2N1cnJlbnRQYWdlID09PSAnaG9tZScgJiYgPEhvbWVQYWdlIHsuLi57IHNldEN1cnJlbnRQYWdlIH19IC8+fVxyXG4gICAgICAgIHtjdXJyZW50UGFnZSA9PT0gJ3Jlc3VtZScgJiYgPFJlc3VtZSB7Li4ueyBzZXRDdXJyZW50UGFnZSB9fSAvPn1cclxuICAgICAgICB7Y3VycmVudFBhZ2UgPT09ICdjb250YWN0JyAmJiA8Q29udGFjdCAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnB1c2h9PjwvZGl2PlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezd9IC8+XHJcbiAgICAgIDxBcHBGb290ZXIgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxyXG4gICAgbWFyZ2luOiAnMCBhdXRvIDUwJyxcclxuICB9LFxyXG4gIHB1c2g6IHtcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICB9XHJcbn0pKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9