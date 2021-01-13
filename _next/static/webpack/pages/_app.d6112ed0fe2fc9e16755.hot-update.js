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
      // "&:-webkit-autofill": {
      //   WebkitBoxShadow: "inherit"
      // },
      '&:-internal-autofill-selected': {
        backgroundColor: '#e83556 !important'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvdGhlbWUuanMiXSwibmFtZXMiOlsiU3BhY2luZyIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwib3ZlcnJpZGVzIiwiTXVpSW5wdXRMYWJlbCIsInJvb3QiLCJjb2xvciIsIk11aUlucHV0QmFzZSIsImlucHV0IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLENBQWhCO0FBRVAsSUFBTUMsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQVBBLGdEQUFPQTtBQURvQixDQUFELENBQTVCO0FBSUFGLEtBQUssQ0FBQ0csU0FBTixHQUFrQjtBQUNoQkMsZUFBYSxFQUFFO0FBQ2JDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUUsT0FESDtBQUVKLG1CQUFhO0FBQ1hBLGFBQUssRUFBRTtBQURJO0FBRlQ7QUFETyxHQURDO0FBU2hCQyxjQUFZLEVBQUU7QUFDWkYsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRTtBQURILEtBRE07QUFJWkUsU0FBSyxFQUFFO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUNBQWlDO0FBQy9CQyx1QkFBZSxFQUFFO0FBRGM7QUFKNUI7QUFKSztBQVRFLENBQWxCO0FBd0JlVCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ2MTEyZWQwZmUyZmM5ZTE2NzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi9wYWxldHRlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNpbmcgPSA4XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICBwYWxldHRlLFxyXG59KVxyXG5cclxudGhlbWUub3ZlcnJpZGVzID0ge1xyXG4gIE11aUlucHV0TGFiZWw6IHsgXHJcbiAgICByb290OiB7IFxyXG4gICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICBcIiYkZm9jdXNlZFwiOiB7IFxyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgTXVpSW5wdXRCYXNlOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgLy8gXCImOi13ZWJraXQtYXV0b2ZpbGxcIjoge1xyXG4gICAgICAvLyAgIFdlYmtpdEJveFNoYWRvdzogXCJpbmhlcml0XCJcclxuICAgICAgLy8gfSxcclxuICAgICAgJyY6LWludGVybmFsLWF1dG9maWxsLXNlbGVjdGVkJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlODM1NTYgIWltcG9ydGFudCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwic291cmNlUm9vdCI6IiJ9