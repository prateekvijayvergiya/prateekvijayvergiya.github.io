webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contact/contactForm/index.js":
/*!*************************************************!*\
  !*** ./components/contact/contactForm/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../spacer */ "./components/spacer/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\contact\\contactForm\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2).max(20).required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email("Invalid Email.").required("Required"),
  message: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2).max(100).required('Required')
});

var ContactForm = function ContactForm() {
  _s();

  var classes = useStyles();

  var sendEmail = function sendEmail() {};

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values) {
      console.log(values);
    },
    validateOnChange: ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](touched) ? false : true
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors,
      touched = _useFormik.touched;

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: 'Enter your name',
    fullWidth: true,
    variant: "outlined",
    name: "name",
    onChange: handleChange,
    values: values.name,
    className: classes.textField,
    error: touched.name && Boolean(errors.name),
    helperText: touched.name && errors.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: 'Enter your email',
    fullWidth: true,
    variant: "outlined",
    name: "email",
    onChange: handleChange,
    values: values.email,
    error: touched.email && Boolean(errors.email),
    helperText: touched.email && errors.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: 'Enter your message',
    fullWidth: true,
    variant: "outlined",
    name: "message",
    onChange: handleChange,
    values: values.message,
    error: touched.message && Boolean(errors.message),
    helperText: touched.message && errors.message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "Z6Cu88D4p40jXYtGOJjipceeAlw=", false, function () {
  return [useStyles, formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"]];
});

_c = ContactForm;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    textField: {
      color: 'inherit'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/emailjs-com/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emailjs-com/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js");
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = __webpack_require__(/*! ./services/ui/UI */ "./node_modules/emailjs-com/source/services/ui/UI.js");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/source/services/ui/UI.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vc291cmNlL21vZGVscy9FbWFpbEpTUmVzcG9uc2VTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9zb3VyY2Uvc2VydmljZXMvdWkvVUkuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInNoYXBlIiwibmFtZSIsIm1pbiIsIm1heCIsInJlcXVpcmVkIiwiZW1haWwiLCJtZXNzYWdlIiwiQ29udGFjdEZvcm0iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwic2VuZEVtYWlsIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRlT25DaGFuZ2UiLCJSIiwidG91Y2hlZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9ycyIsInRleHRGaWVsZCIsIkJvb2xlYW4iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDMUNDLE1BQUksRUFBRUYsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsRUFBeEIsRUFBNEJDLFFBQTVCLENBQXFDLFVBQXJDLENBRG9DO0FBRTFDQyxPQUFLLEVBQUVOLDBDQUFBLEdBQ0ZNLEtBREUsQ0FDSSxnQkFE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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9HYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NzczYTIxZmRlNGFhZmU1NmExYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uLy4uL3NwYWNlclwiXHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBuYW1lOiBZdXAuc3RyaW5nKCkubWluKDIpLm1heCgyMCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAgIC5lbWFpbChcIkludmFsaWQgRW1haWwuXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKS5taW4oMikubWF4KDEwMCkucmVxdWlyZWQoJ1JlcXVpcmVkJylcclxufSk7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBzZW5kRW1haWwgPSAoKSA9PiB7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBvblN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiBSLmlzRW1wdHkodG91Y2hlZCkgPyBmYWxzZSA6IHRydWVcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgbmFtZSd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubmFtZSAmJiBCb29sZWFuKGVycm9ycy5uYW1lKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIGVtYWlsJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICBlcnJvcj17dG91Y2hlZC5lbWFpbCAmJiBCb29sZWFuKGVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIG1lc3NhZ2UnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMubWVzc2FnZX1cclxuICAgICAgICBlcnJvcj17dG91Y2hlZC5tZXNzYWdlICYmIEJvb2xlYW4oZXJyb3JzLm1lc3NhZ2UpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQubWVzc2FnZSAmJiBlcnJvcnMubWVzc2FnZX1cclxuICAgICAgLz5cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+IFxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgY29sb3I6ICdpbmhlcml0J1xyXG4gIH1cclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRW1haWxKU1Jlc3BvbnNlU3RhdHVzID0gZXhwb3J0cy5zZW5kRm9ybSA9IGV4cG9ydHMuc2VuZCA9IGV4cG9ydHMuaW5pdCA9IHZvaWQgMDtcbnZhciBFbWFpbEpTUmVzcG9uc2VTdGF0dXNfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9FbWFpbEpTUmVzcG9uc2VTdGF0dXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFbWFpbEpTUmVzcG9uc2VTdGF0dXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVtYWlsSlNSZXNwb25zZVN0YXR1c18xLkVtYWlsSlNSZXNwb25zZVN0YXR1czsgfSB9KTtcbnZhciBVSV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvdWkvVUlcIik7XG52YXIgX3VzZXJJRCA9IG51bGw7XG52YXIgX29yaWdpbiA9ICdodHRwczovL2FwaS5lbWFpbGpzLmNvbSc7XG5mdW5jdGlvbiBzZW5kUG9zdCh1cmwsIGRhdGEsIGhlYWRlcnMpIHtcbiAgICBpZiAoaGVhZGVycyA9PT0gdm9pZCAwKSB7IGhlYWRlcnMgPSB7fTsgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZVN0YXR1cyA9IG5ldyBFbWFpbEpTUmVzcG9uc2VTdGF0dXNfMS5FbWFpbEpTUmVzcG9uc2VTdGF0dXMoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVN0YXR1cy5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZVN0YXR1cy50ZXh0ID09PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZVN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2VTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVtYWlsSlNSZXNwb25zZVN0YXR1c18xLkVtYWlsSlNSZXNwb25zZVN0YXR1cyhldmVudC50YXJnZXQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFwcGVuZEdvb2dsZUNhcHRjaGEodGVtcGxhdGVQcmFtcykge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ctcmVjYXB0Y2hhLXJlc3BvbnNlJyk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC52YWx1ZSkge1xuICAgICAgICB0ZW1wbGF0ZVByYW1zWydnLXJlY2FwdGNoYS1yZXNwb25zZSddID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxlbWVudCA9IG51bGw7XG4gICAgcmV0dXJuIHRlbXBsYXRlUHJhbXM7XG59XG5mdW5jdGlvbiBmaXhJZFNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yWzBdICE9PSAnIycgJiYgc2VsZWN0b3JbMF0gIT09ICcuJykge1xuICAgICAgICByZXR1cm4gJyMnICsgc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcjtcbn1cbi8qKlxuICogSW5pdGlhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHNldCB0aGUgRW1haWxKUyB1c2VyIElEXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luIC0gc2V0IHRoZSBFbWFpbEpTIG9yaWdpblxuICovXG5mdW5jdGlvbiBpbml0KHVzZXJJRCwgb3JpZ2luKSB7XG4gICAgX3VzZXJJRCA9IHVzZXJJRDtcbiAgICBfb3JpZ2luID0gb3JpZ2luIHx8ICdodHRwczovL2FwaS5lbWFpbGpzLmNvbSc7XG59XG5leHBvcnRzLmluaXQgPSBpbml0O1xuLyoqXG4gKiBTZW5kIGEgdGVtcGxhdGUgdG8gdGhlIHNwZWNpZmljIEVtYWlsSlMgc2VydmljZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJRCAtIHRoZSBFbWFpbEpTIHNlcnZpY2UgSURcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZUlEIC0gdGhlIEVtYWlsSlMgdGVtcGxhdGUgSURcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZVByYW1zIC0gdGhlIHRlbXBsYXRlIHBhcmFtcywgd2hhdCB3aWxsIGJlIHNldCB0byB0aGUgRW1haWxKUyB0ZW1wbGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHRoZSBFbWFpbEpTIHVzZXIgSURcbiAqIEByZXR1cm5zIHtQcm9taXNlPEVtYWlsSlNSZXNwb25zZVN0YXR1cz59XG4gKi9cbmZ1bmN0aW9uIHNlbmQoc2VydmljZUlELCB0ZW1wbGF0ZUlELCB0ZW1wbGF0ZVByYW1zLCB1c2VySUQpIHtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICBsaWJfdmVyc2lvbjogJzIuNi40JyxcbiAgICAgICAgdXNlcl9pZDogdXNlcklEIHx8IF91c2VySUQsXG4gICAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VJRCxcbiAgICAgICAgdGVtcGxhdGVfaWQ6IHRlbXBsYXRlSUQsXG4gICAgICAgIHRlbXBsYXRlX3BhcmFtczogYXBwZW5kR29vZ2xlQ2FwdGNoYSh0ZW1wbGF0ZVByYW1zKVxuICAgIH07XG4gICAgcmV0dXJuIHNlbmRQb3N0KF9vcmlnaW4gKyAnL2FwaS92MS4wL2VtYWlsL3NlbmQnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2VuZCA9IHNlbmQ7XG4vKipcbiAqIFNlbmQgYSBmb3JtIHRoZSBzcGVjaWZpYyBFbWFpbEpTIHNlcnZpY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlSUQgLSB0aGUgRW1haWxKUyBzZXJ2aWNlIElEXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVJRCAtIHRoZSBFbWFpbEpTIHRlbXBsYXRlIElEXG4gKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxGb3JtRWxlbWVudH0gZm9ybSAtIHRoZSBmb3JtIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySUQgLSB0aGUgRW1haWxKUyB1c2VyIElEXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxFbWFpbEpTUmVzcG9uc2VTdGF0dXM+fVxuICovXG5mdW5jdGlvbiBzZW5kRm9ybShzZXJ2aWNlSUQsIHRlbXBsYXRlSUQsIGZvcm0sIHVzZXJJRCkge1xuICAgIGlmICh0eXBlb2YgZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZml4SWRTZWxlY3Rvcihmb3JtKSk7XG4gICAgfVxuICAgIGlmICghZm9ybSB8fCBmb3JtLm5vZGVOYW1lICE9PSAnRk9STScpIHtcbiAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIHRoZSBIVE1MIGZvcm0gZWxlbWVudCBvciB0aGUgc3R5bGUgc2VsZWN0b3Igb2YgZm9ybSc7XG4gICAgfVxuICAgIFVJXzEuVUkucHJvZ3Jlc3NTdGF0ZShmb3JtKTtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdsaWJfdmVyc2lvbicsICcyLjYuNCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnc2VydmljZV9pZCcsIHNlcnZpY2VJRCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0ZW1wbGF0ZV9pZCcsIHRlbXBsYXRlSUQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcl9pZCcsIHVzZXJJRCB8fCBfdXNlcklEKTtcbiAgICByZXR1cm4gc2VuZFBvc3QoX29yaWdpbiArICcvYXBpL3YxLjAvZW1haWwvc2VuZC1mb3JtJywgZm9ybURhdGEpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBVSV8xLlVJLnN1Y2Nlc3NTdGF0ZShmb3JtKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBVSV8xLlVJLmVycm9yU3RhdGUoZm9ybSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbmRGb3JtID0gc2VuZEZvcm07XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBzZW5kOiBzZW5kLFxuICAgIHNlbmRGb3JtOiBzZW5kRm9ybVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbWFpbEpTUmVzcG9uc2VTdGF0dXMgPSB2b2lkIDA7XG52YXIgRW1haWxKU1Jlc3BvbnNlU3RhdHVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVtYWlsSlNSZXNwb25zZVN0YXR1cyhodHRwUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBodHRwUmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICB0aGlzLnRleHQgPSBodHRwUmVzcG9uc2UucmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gRW1haWxKU1Jlc3BvbnNlU3RhdHVzO1xufSgpKTtcbmV4cG9ydHMuRW1haWxKU1Jlc3BvbnNlU3RhdHVzID0gRW1haWxKU1Jlc3BvbnNlU3RhdHVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVJID0gdm9pZCAwO1xudmFyIFVJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVJKCkge1xuICAgIH1cbiAgICBVSS5jbGVhckFsbCA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLlBST0dSRVNTKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuRE9ORSk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkVSUk9SKTtcbiAgICB9O1xuICAgIFVJLnByb2dyZXNzU3RhdGUgPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICB0aGlzLmNsZWFyQWxsKGZvcm0pO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQodGhpcy5QUk9HUkVTUyk7XG4gICAgfTtcbiAgICBVSS5zdWNjZXNzU3RhdGUgPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5QUk9HUkVTUyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCh0aGlzLkRPTkUpO1xuICAgIH07XG4gICAgVUkuZXJyb3JTdGF0ZSA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLlBST0dSRVNTKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKHRoaXMuRVJST1IpO1xuICAgIH07XG4gICAgVUkuUFJPR1JFU1MgPSAnZW1haWxqcy1zZW5kaW5nJztcbiAgICBVSS5ET05FID0gJ2VtYWlsanMtc3VjY2Vzcyc7XG4gICAgVUkuRVJST1IgPSAnZW1haWxqcy1lcnJvcic7XG4gICAgcmV0dXJuIFVJO1xufSgpKTtcbmV4cG9ydHMuVUkgPSBVSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=