(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Contact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Contact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        title: '',
        message: ''
      },
      validationErrors: {
        name: [],
        email: [],
        title: [],
        message: []
      },
      generalError: '',
      loading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', ['authenticated'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('auth', ['user'])),
  created: function created() {
    if (this.authenticated) {
      this.form.name = this.user.name;
      this.form.email = this.user.email;
    }
  },
  methods: {
    submitInformation: function () {
      var _submitInformation = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tempError;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.validationErrors = {
                  name: [],
                  email: [],
                  title: [],
                  message: []
                };
                this.generalError = '';
                this.loading = true;
                _context.prev = 3;
                _context.next = 6;
                return axios.post('/api/messages', this.form);

              case 6:
                this.$router.push({
                  name: 'main'
                });
                this.$notify({
                  group: 'messages',
                  type: 'success',
                  title: 'Mensaje enviado exitosamente'
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);

                if (_context.t0.response) {
                  if (_context.t0.response.data.errors) _.extend(this.validationErrors, _context.t0.response.data.errors);else this.generalError = _context.t0.response.data;
                } else {
                  tempError = "";

                  if (_context.t0.request) {
                    tempError = "El servidor tardó en responder";
                  } else {
                    tempError = "No se pudo comunicar con el servidor";
                  }

                  this.generalError = tempError + " (" + _context.t0.message + ")";
                }

              case 13:
                _context.prev = 13;
                this.loading = false;
                return _context.finish(13);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10, 13, 16]]);
      }));

      function submitInformation() {
        return _submitInformation.apply(this, arguments);
      }

      return submitInformation;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Contact.vue?vue&type=template&id=1d91a851& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "flex flex-1 flex-col sm:justify-center items-center sm:bg-orange-400"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-white sm:border sm:border-orange-500 sm:rounded-md sm:shadow-lg w-full max-w-full sm:max-w-sm lg:max-w-lg"
        },
        [
          _c(
            "h1",
            {
              staticClass:
                "bg-orange-500 text-white font-semibold text-3xl text-center p-4"
            },
            [_vm._v("Contáctanos")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "px-8 py-6" }, [
            _c(
              "form",
              {
                staticClass: "space-y-6",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitInformation($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "space-y-2" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      staticClass:
                        "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                      attrs: {
                        readonly: _vm.authenticated,
                        type: "text",
                        placeholder: "Nombre completo"
                      },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.validationErrors.name, function(error, index) {
                      return _c(
                        "p",
                        { key: index, staticClass: "text-red-600" },
                        [_vm._v(_vm._s(error))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "space-y-2" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      staticClass:
                        "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                      attrs: {
                        readonly: _vm.authenticated,
                        type: "email",
                        placeholder: "Dirección de correo electrónico"
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.validationErrors.email, function(error, index) {
                      return _c(
                        "p",
                        { key: index, staticClass: "text-red-600" },
                        [_vm._v(_vm._s(error))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "space-y-2" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.title,
                          expression: "form.title"
                        }
                      ],
                      staticClass:
                        "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                      attrs: {
                        type: "text",
                        maxlength: "100",
                        placeholder: "Asunto"
                      },
                      domProps: { value: _vm.form.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "title", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.validationErrors.title, function(error, index) {
                      return _c(
                        "p",
                        { key: index, staticClass: "text-red-600" },
                        [_vm._v(_vm._s(error))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "space-y-2" },
                  [
                    _c("div", { staticClass: "space-y-1" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.message,
                            expression: "form.message"
                          }
                        ],
                        staticClass:
                          "w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out",
                        attrs: { maxlength: "512", placeholder: "Mensaje" },
                        domProps: { value: _vm.form.message },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "message", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "text-sm text-orange-500 text-right" },
                        [_vm._v(_vm._s(_vm.form.message.length) + "/512")]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.validationErrors.message, function(
                      error,
                      index
                    ) {
                      return _c(
                        "p",
                        { key: index, staticClass: "text-red-600" },
                        [_vm._v(_vm._s(error))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.generalError
                  ? _c("p", { staticClass: "text-red-600" }, [
                      _vm._v(_vm._s(_vm.generalError))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "w-full btn-outlined btn-outlined-orange font-semibold text-center px-3 py-2",
                    attrs: { disabled: _vm.loading, type: "submit" }
                  },
                  [
                    _vm.loading
                      ? [
                          _c("span", {
                            staticClass: "spinner spinner-disabled w-6 h-6 mx-2"
                          })
                        ]
                      : [
                          _vm._v(
                            "\n                        Enviar mensaje\n                    "
                          )
                        ]
                  ],
                  2
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Contact.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Contact.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=1d91a851& */ "./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Contact.vue?vue&type=template&id=1d91a851& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=1d91a851& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);