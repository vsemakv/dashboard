exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("455e4537", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_55e9e162_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_55e9e162_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_55e9e162_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_55e9e162_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_55e9e162_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-55e9e162]{background-color:#fff;height:60px;justify-content:space-between;padding:16px 24px;position:relative;width:100%;z-index:2}.header[data-v-55e9e162],.header__logo[data-v-55e9e162]{align-items:center;display:flex}.header__logo[data-v-55e9e162]{justify-content:center}.header__logo img[data-v-55e9e162]{height:37px;margin-right:8px;width:37px}.header__logo h1[data-v-55e9e162]{font-size:26px}.header__logo h1 span[data-v-55e9e162]{color:#838383;font-size:10px}.header__burger[data-v-55e9e162]{align-items:center;cursor:pointer;display:flex;flex-direction:column;height:20px;justify-content:center;position:relative;width:30px}.header__burger>li[data-v-55e9e162]{background-color:#5932ea;border-radius:5px;height:4px;left:0;list-style:none;position:absolute;transition:all .3s ease;width:30px}@media screen and (min-width:1440px){.header[data-v-55e9e162]{display:none}}.header__burger>li[data-v-55e9e162]:first-child{top:0}.header__burger>li[data-v-55e9e162]:nth-child(2){top:50%;transform:translateY(-50%)}.header__burger>li[data-v-55e9e162]:nth-child(3){bottom:0}.opened-burger[data-v-55e9e162]{position:absolute}.opened-burger-top[data-v-55e9e162]{top:10px!important;transform:rotate(45deg)}.opened-burger-center[data-v-55e9e162]{opacity:0;top:15px}.opened-burger-bottom[data-v-55e9e162]{top:10px;transform:rotate(-45deg)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=55e9e162&scoped=true&lang=pug
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header"
  }, [_vm._ssrNode("<div class=\"header__logo\" data-v-55e9e162>", "</div>", [_vm._ssrNode("<img src=\"/images/svg/Logo.svg\" alt=\"Logo Dashboard\" class=\"header__logo\" data-v-55e9e162>"), _c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('h1', [_vm._v("Dashboard "), _c('span', [_vm._v("v.01")])])])], 2), _vm._ssrNode("<div class=\"header__burger\" data-v-55e9e162><li" + _vm._ssrClass(null, {
    'opened-burger-top': _vm.isShowBurger,
    'opened-burger': true
  }) + " data-v-55e9e162></li><li" + _vm._ssrClass(null, {
    'opened-burger-center': _vm.isShowBurger,
    'opened-burger': true
  }) + " data-v-55e9e162></li><li" + _vm._ssrClass(null, {
    'opened-burger-bottom': _vm.isShowBurger,
    'opened-burger': true
  }) + " data-v-55e9e162></li></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=55e9e162&scoped=true&lang=pug

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js

/* harmony default export */ var Headervue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      isShowBurger: "burger/getBurger"
    })
  },
  methods: {
    toggleDropdown() {
      this.$store.dispatch("burger/toggle");
    }
  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Headervue_type_script_lang_js = (Headervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55e9e162",
  "4133d9f4"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header.js.map