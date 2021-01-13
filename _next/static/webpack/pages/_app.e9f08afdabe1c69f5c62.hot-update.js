webpackHotUpdate_N_E("pages/_app",{

/***/ "./theme/theme.js":
/*!************************!*\
  !*** ./theme/theme.js ***!
  \************************/
/*! exports provided: Spacing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spacing", function() { return Spacing; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");


var Spacing = 8;
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: _palette__WEBPACK_IMPORTED_MODULE_1__["default"]
});
theme.overrides = {
  MuiInputLabel: {
    root: {
      color: "black",
      "&$focused": {
        color: "black"
      }
    }
  },
  MuiInputBase: {
    root: {
      color: 'black'
    },
    input: {
      "&:-webkit-autofill": {
        bakgroundColor: 'inherit'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvdGhlbWUuanMiXSwibmFtZXMiOlsiU3BhY2luZyIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwib3ZlcnJpZGVzIiwiTXVpSW5wdXRMYWJlbCIsInJvb3QiLCJjb2xvciIsIk11aUlucHV0QmFzZSIsImlucHV0IiwiYmFrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLEdBQUcsQ0FBaEI7QUFFUCxJQUFNQyxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBUEEsZ0RBQU9BO0FBRG9CLENBQUQsQ0FBNUI7QUFJQUYsS0FBSyxDQUFDRyxTQUFOLEdBQWtCO0FBQ2hCQyxlQUFhLEVBQUU7QUFDYkMsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxPQURIO0FBRUosbUJBQWE7QUFDWEEsYUFBSyxFQUFFO0FBREk7QUFGVDtBQURPLEdBREM7QUFTaEJDLGNBQVksRUFBRTtBQUNaRixRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREgsS0FETTtBQUlaRSxTQUFLLEVBQUU7QUFDTCw0QkFBc0I7QUFDcEJDLHNCQUFjLEVBQUU7QUFESTtBQURqQjtBQUpLO0FBVEUsQ0FBbEI7QUFxQmVULG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTlmMDhhZmRhYmUxYzY5ZjVjNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnXHJcblxyXG5leHBvcnQgY29uc3QgU3BhY2luZyA9IDhcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGUsXHJcbn0pXHJcblxyXG50aGVtZS5vdmVycmlkZXMgPSB7XHJcbiAgTXVpSW5wdXRMYWJlbDogeyBcclxuICAgIHJvb3Q6IHsgXHJcbiAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgIFwiJiRmb2N1c2VkXCI6IHsgXHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBNdWlJbnB1dEJhc2U6IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgY29sb3I6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBcIiY6LXdlYmtpdC1hdXRvZmlsbFwiOiB7XHJcbiAgICAgICAgYmFrZ3JvdW5kQ29sb3I6ICdpbmhlcml0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=