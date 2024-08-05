exports.ids = [2];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0f55cfd5", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_2dab13e6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_2dab13e6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_2dab13e6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_2dab13e6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_2dab13e6_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dropdown[data-v-2dab13e6]{background:#fff;display:flex;flex-direction:column;height:0;justify-content:space-between;left:0;overflow:hidden;overflow-y:scroll;padding:0 28px;position:fixed;top:0;transition:all .5s;width:100%;z-index:1}@media screen and (min-width:1440px){.dropdown[data-v-2dab13e6]{height:100%;padding:36px 28px 76px;position:fixed;width:306px}}.dropdown__logo[data-v-2dab13e6]{align-items:center;display:none;justify-content:center}.dropdown__logo img[data-v-2dab13e6]{height:37px;margin-right:8px;width:37px}.dropdown__logo h1[data-v-2dab13e6]{font-size:26px}.dropdown__logo h1 span[data-v-2dab13e6]{color:#838383;font-size:10px}@media screen and (min-width:1440px){.dropdown__logo[data-v-2dab13e6]{display:flex;justify-content:flex-start;margin-bottom:65px}}.dropdown__links--item[data-v-2dab13e6]{border-radius:8px;margin-bottom:16px;padding:10px;position:relative}.dropdown__links--item[data-v-2dab13e6]:after{background-image:url(/images/svg/Arrow.svg);background-size:contain;content:\"\";display:block;height:24px;position:absolute;right:8px;top:50%;transform:translateY(-50%);width:24px}@media screen and (min-width:1440px){.dropdown__links--item[data-v-2dab13e6]:after{height:16px;width:16px}}.dropdown__links--item-link[data-v-2dab13e6]{align-items:center;display:flex}.dropdown__links--item-link img[data-v-2dab13e6]{height:44px;margin-right:14px;width:44px}@media screen and (min-width:1440px){.dropdown__links--item-link img[data-v-2dab13e6]{height:24px;width:24px}}.dropdown__links--item-link p[data-v-2dab13e6]{color:#9197b3;font-size:24px}@media screen and (min-width:1440px){.dropdown__links--item-link p[data-v-2dab13e6]{font-size:14px;font-weight:300}}.dropdown__user[data-v-2dab13e6]{display:flex}.dropdown__user img[data-v-2dab13e6]{height:42px;margin-right:12px;width:42px}.dropdown__user--text-name[data-v-2dab13e6]{font-size:14px}.dropdown__user--text-position[data-v-2dab13e6]{color:#757575;font-size:12px}.open-dropdown[data-v-2dab13e6]{height:100vh;padding:100px 28px 28px;transition:padding height .5s}.acitve-link[data-v-2dab13e6]{background-color:#5932ea;border-radius:8px}.acitve-link p[data-v-2dab13e6]{color:#fff}.acitve-link[data-v-2dab13e6]:after{background-image:url(/images/svg/Arrow-active.svg);background-repeat:no-repeat;background-size:contain;content:\"\";display:block;height:15px;position:absolute;right:8px;top:50%;transform:translateY(-50%);width:15px}@media screen and (min-width:1440px){.acitve-link[data-v-2dab13e6]:after{height:11px;width:11px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dropdown.vue?vue&type=template&id=2dab13e6&scoped=true&lang=pug
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dropdown",
    class: {
      'open-dropdown': _vm.isShowBurger
    }
  }, [_vm._ssrNode("<div class=\"container\" data-v-2dab13e6>", "</div>", [_vm._ssrNode("<div class=\"dropdown__logo\" data-v-2dab13e6>", "</div>", [_vm._ssrNode("<img src=\"/images/svg/Logo.svg\" alt=\"Logo Dashboard\" class=\"header__logo\" data-v-2dab13e6>"), _c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('h1', [_vm._v("Dashboard "), _c('span', [_vm._v("v.01")])])])], 2), _vm._ssrNode("<ul class=\"dropdown__links\" data-v-2dab13e6>", "</ul>", _vm._l(_vm.sections, function (link) {
    return _vm._ssrNode("<li" + _vm._ssrClass("dropdown__links--item", {
      'acitve-link': !link.isNuxt
    }) + " data-v-2dab13e6>", "</li>", [_c('n-link', {
      staticClass: "dropdown__links--item-link",
      attrs: {
        "to": link.route
      }
    }, [_c('img', {
      attrs: {
        "src": link.logo
      }
    }), _c('p', [_vm._v(_vm._s(link.title))])])], 1);
  }), 0)]), _vm._ssrNode("<div class=\"dropdown__user\" data-v-2dab13e6><img src=\"/images/Avatar.png\" class=\"dropdown__user--img\" data-v-2dab13e6><div class=\"dropdown__user--text\" data-v-2dab13e6><p class=\"dropdown__user--text-name\" data-v-2dab13e6>" + _vm._ssrEscape(_vm._s(_vm.user.name)) + "</p><p class=\"dropdown__user--text-position\" data-v-2dab13e6>" + _vm._ssrEscape(_vm._s(_vm.user.position)) + "</p></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Dropdown.vue?vue&type=template&id=2dab13e6&scoped=true&lang=pug

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dropdown.vue?vue&type=script&lang=js

/* harmony default export */ var Dropdownvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      isShowBurger: "burger/getBurger",
      user: "user/getUser"
    })
  },
  data() {
    return {
      sections: [{
        id: 0,
        isNuxt: true,
        title: "Dashboard",
        route: "/",
        logo: "/images/svg/dashboard.svg"
      }, {
        id: 1,
        isNuxt: true,
        title: "Product",
        route: `/product`,
        logo: "/images/svg/product.svg"
      }, {
        id: 2,
        isNuxt: false,
        title: "Customers",
        route: "/customers",
        logo: "images/svg/user.svg"
      }, {
        id: 3,
        isNuxt: true,
        title: "Income",
        route: "/income",
        logo: "images/svg/income.svg"
      }, {
        id: 4,
        isNuxt: true,
        title: "Promote",
        route: "/promote",
        logo: "images/svg/promote.svg"
      }, {
        id: 5,
        isNuxt: true,
        title: "Help",
        route: "/help",
        logo: "images/svg/help.svg"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Dropdown.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Dropdownvue_type_script_lang_js = (Dropdownvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Dropdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dropdownvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2dab13e6",
  "0dbb7c90"
  
)

/* harmony default export */ var Dropdown = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dropdown.js.map