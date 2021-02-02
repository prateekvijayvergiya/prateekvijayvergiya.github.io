webpackHotUpdate_N_E("pages/index",{

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_PhoneSharp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PhoneSharp */ "./node_modules/@material-ui/icons/PhoneSharp.js");
/* harmony import */ var _material_ui_icons_PhoneSharp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneSharp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MailOutlineSharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MailOutlineSharp */ "./node_modules/@material-ui/icons/MailOutlineSharp.js");
/* harmony import */ var _material_ui_icons_MailOutlineSharp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutlineSharp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CopyrightSharp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CopyrightSharp */ "./node_modules/@material-ui/icons/CopyrightSharp.js");
/* harmony import */ var _material_ui_icons_CopyrightSharp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CopyrightSharp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconWithText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iconWithText */ "./components/footer/iconWithText/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\footer\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var AppFooter = function AppFooter() {
  _s();

  var classes = useStyles();
  return __jsx("footer", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_iconWithText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _material_ui_icons_PhoneSharp__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: 'Call',
    subtitle: '8058677244',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(_iconWithText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _material_ui_icons_MailOutlineSharp__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: 'Email',
    subtitle: 'prateek.vijayudr27@gmail.com',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_iconWithText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _material_ui_icons_CopyrightSharp__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: 'No © copyright issues',
    subtitle: 'Feel free to copy',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
};

_s(AppFooter, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = AppFooter;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () {
  return {
    container: {
      height: 'auto',
      width: '100%',
      backgroundColor: '#e83556',
      color: 'white',
      padding: 40
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (AppFooter);

var _c;

$RefreshReg$(_c, "AppFooter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwRm9vdGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImNvbnRhaW5lciIsIlBob25lU2hhcnBJY29uIiwiTWFpbE91dGxpbmVTaGFycEljb24iLCJDb3B5cmlnaHRTaGFycEljb24iLCJtYWtlU3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsU0FDRTtBQUFRLGFBQVMsRUFBRUQsT0FBTyxDQUFDRSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxxREFBRDtBQUFjLFFBQUksRUFBRUMsb0VBQXBCO0FBQW9DLFNBQUssRUFBRSxNQUEzQztBQUFtRCxZQUFRLEVBQUUsWUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxxREFBRDtBQUFjLFFBQUksRUFBRUMsMEVBQXBCO0FBQTBDLFNBQUssRUFBRSxPQUFqRDtBQUEwRCxZQUFRLEVBQUUsOEJBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMscURBQUQ7QUFBYyxRQUFJLEVBQUVDLHdFQUFwQjtBQUF3QyxTQUFLLEVBQUUsdUJBQS9DO0FBQXdFLFlBQVEsRUFBRSxtQkFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREY7QUFTRCxDQVhEOztHQUFNTixTO1VBQ1lFLFM7OztLQURaRixTO0FBYU4sSUFBTUUsU0FBUyxHQUFHSywyRUFBVSxDQUFDO0FBQUEsU0FBTztBQUNsQ0osYUFBUyxFQUFFO0FBQ1RLLFlBQU0sRUFBRSxNQURDO0FBRVRDLFdBQUssRUFBRSxNQUZFO0FBR1RDLHFCQUFlLEVBQUUsU0FIUjtBQUlUQyxXQUFLLEVBQUUsT0FKRTtBQUtUQyxhQUFPLEVBQUU7QUFMQTtBQUR1QixHQUFQO0FBQUEsQ0FBRCxDQUE1QjtBQVVlWix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNjRkOWEwNzY5MGE4OWQxNTAzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgUGhvbmVTaGFycEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lU2hhcnAnO1xyXG5pbXBvcnQgTWFpbE91dGxpbmVTaGFycEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWxPdXRsaW5lU2hhcnAnO1xyXG5pbXBvcnQgQ29weXJpZ2h0U2hhcnBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db3B5cmlnaHRTaGFycCc7XHJcbmltcG9ydCBJY29uV2l0aFRleHQgZnJvbSAnLi9pY29uV2l0aFRleHQnO1xyXG5cclxuY29uc3QgQXBwRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICB7LyogPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+ICovfVxyXG4gICAgICAgIDxJY29uV2l0aFRleHQgaWNvbj17UGhvbmVTaGFycEljb259IHRpdGxlPXsnQ2FsbCd9IHN1YnRpdGxlPXsnODA1ODY3NzI0NCd9IC8+XHJcbiAgICAgICAgPEljb25XaXRoVGV4dCBpY29uPXtNYWlsT3V0bGluZVNoYXJwSWNvbn0gdGl0bGU9eydFbWFpbCd9IHN1YnRpdGxlPXsncHJhdGVlay52aWpheXVkcjI3QGdtYWlsLmNvbSd9IC8+XHJcbiAgICAgICAgPEljb25XaXRoVGV4dCBpY29uPXtDb3B5cmlnaHRTaGFycEljb259IHRpdGxlPXsnTm8gwqkgY29weXJpZ2h0IGlzc3Vlcyd9IHN1YnRpdGxlPXsnRmVlbCBmcmVlIHRvIGNvcHknfSAvPlxyXG4gICAgICB7LyogPC9HcmlkPiAqL31cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2U4MzU1NicsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHBhZGRpbmc6IDQwLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==