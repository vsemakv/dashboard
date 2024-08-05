exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("76d45e49", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_id_7a5ef23a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_id_7a5ef23a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_id_7a5ef23a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_id_7a5ef23a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_id_7a5ef23a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".customers[data-v-7a5ef23a]{padding:12px 24px}@media screen and (min-width:1440px){.customers[data-v-7a5ef23a]{padding:41px 95px 0 377px}}.customers__header[data-v-7a5ef23a]{padding:16px}.customers__header--text[data-v-7a5ef23a]{margin-bottom:8px}.customers__header--text p[data-v-7a5ef23a]:first-child{font-size:24px;font-weight:500}@media screen and (min-width:1440px){.customers__header--text p[data-v-7a5ef23a]:first-child{font-size:22px}}.customers__header--text p[data-v-7a5ef23a]:last-child{color:#16c098;font-size:14px;font-weight:300}.customers__header--input[data-v-7a5ef23a]{align-items:center;background-color:#f9fbff;border-radius:8px;display:flex;padding:8px}.customers__header--input input[data-v-7a5ef23a]{background-color:transparent;border:none;height:100%;outline:none;width:100%}@media screen and (min-width:1440px){.customers__header--input img[data-v-7a5ef23a]{height:24px;margin-right:8px;width:24px}.customers__header--input[data-v-7a5ef23a]{border-radius:10px;height:38px;padding:7px 8px;width:216px}.customers__header[data-v-7a5ef23a]{align-items:center;display:flex;justify-content:space-between;padding:30px 50px 24px 38px}}.customers__table[data-v-7a5ef23a]{border-collapse:collapse;width:100%}.customers__table thead tr th[data-v-7a5ef23a]{background-color:#fff;border-bottom:1px solid #eee;color:#b5b7c0;font-weight:400;padding:10px;text-align:left}@media screen and (min-width:1440px){.customers__table thead tr th[data-v-7a5ef23a]:first-child{padding-left:38px}.customers__table thead tr th[data-v-7a5ef23a]:last-child{padding:14px 24px 14px 35px}.customers__table thead tr th[data-v-7a5ef23a]{font-size:14px;font-weight:300;padding:14px 24px}}.customers__table tbody tr td[data-v-7a5ef23a]{border-bottom:1px solid #eee;padding:10px;position:relative;white-space:nowrap}@media screen and (min-width:1440px){.customers__table tbody tr td[data-v-7a5ef23a]{border:none;font-size:14px;font-weight:300;padding:24px}.customers__table tbody tr td[data-v-7a5ef23a]:nth-child(n+2):nth-child(-n+5){border-bottom:1px solid #eee}}.customers__table tbody tr td .status-active[data-v-7a5ef23a]{background-color:rgba(22,192,152,.38);border:1px solid #00b087;border-radius:5px;color:#008767;display:block;font-size:14px;padding:4px 12px;text-align:center}.customers__table tbody tr td .status-inactive[data-v-7a5ef23a]{background-color:#ffc5c5;border:1px solid #df0404;border-radius:5px;color:#df0404;display:block;font-size:14px;padding:4px 12px;text-align:center}.customers__footer[data-v-7a5ef23a]{align-items:center;display:flex;flex-direction:column-reverse;padding:20px 10px 10px}@media screen and (min-width:1440px){.customers__footer[data-v-7a5ef23a]{flex-direction:row;justify-content:space-between;padding:32px 40px 40px 38px}}.customers__footer--text[data-v-7a5ef23a]{color:#b5b7c0;font-size:14px;font-weight:400}.customers__footer--pagination[data-v-7a5ef23a]{margin-bottom:8px}.customers__footer--pagination button[data-v-7a5ef23a]{background:none;background-color:#f5f5f5;border:none;cursor:pointer;margin:0 8px;padding:5px 10px}.customers__footer--pagination button .active[data-v-7a5ef23a]{color:blue;font-weight:700}.customers__footer--pagination button[data-v-7a5ef23a]:disabled{color:gray;cursor:not-allowed}.customers__user[data-v-7a5ef23a]{font-size:24px;margin-bottom:8px}@media screen and (min-width:1440px){.customers__user[data-v-7a5ef23a]{margin-bottom:51px}}.container[data-v-7a5ef23a]{background-color:#fff;border-radius:30px}.table-container[data-v-7a5ef23a]{height:100%;max-width:100%;min-height:460px;overflow-x:auto}.customers__footer[data-v-7a5ef23a]{text-align:center}.pagination button[data-v-7a5ef23a]{background:none;border:none;cursor:pointer;padding:5px 10px}.customers__footer--pagination button.active[data-v-7a5ef23a]{background-color:#5932ea;border-radius:4px;color:#fff}@media screen and (min-width:1440px){.customers__table tbody tr td[data-v-7a5ef23a]:first-child{padding-left:38px}.customers__table tbody tr td[data-v-7a5ef23a]:first-child:after{background-color:#eee;bottom:-.5px;content:\"\";height:1px;left:40px;position:absolute;right:0}.customers__table tbody tr td[data-v-7a5ef23a]:last-child{padding-right:44px}}.customers__table tbody tr td[data-v-7a5ef23a]:last-child:after{background-color:#eee;bottom:-.5px;content:\"\";height:1px;left:0;position:absolute;right:40px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Customers.vue?vue&type=template&id=7a5ef23a&scoped=true&lang=pug
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "customers"
  }, [_vm._ssrNode("<p class=\"customers__user\" data-v-7a5ef23a>" + _vm._ssrEscape("Hello " + _vm._s(_vm.user.name) + " 👋🏼,") + "</p><div class=\"container\" data-v-7a5ef23a><div class=\"customers__header\" data-v-7a5ef23a><div class=\"customers__header--text\" data-v-7a5ef23a><p data-v-7a5ef23a>All Customers</p><p data-v-7a5ef23a>Active Members</p></div><div class=\"customers__header--input\" data-v-7a5ef23a><img src=\"images/svg/Search.svg\" data-v-7a5ef23a><input placeholder=\"Search\" data-v-7a5ef23a></div></div><div class=\"table-container\" data-v-7a5ef23a><table class=\"customers__table\" data-v-7a5ef23a><thead data-v-7a5ef23a><tr data-v-7a5ef23a><th data-v-7a5ef23a>Customer Name</th><th data-v-7a5ef23a>Company</th><th data-v-7a5ef23a>Phone Number</th><th data-v-7a5ef23a>Email</th><th data-v-7a5ef23a>Country</th><th data-v-7a5ef23a>Status</th></tr></thead><tbody data-v-7a5ef23a>" + _vm._ssrList(_vm.paginatedCustomers, function (customer) {
    return "<tr data-v-7a5ef23a><td data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(customer.name)) + "</td><td data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(customer.company)) + "</td><td data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(customer.phone)) + "</td><td data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(customer.email)) + "</td><td data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(customer.country)) + "</td><td data-v-7a5ef23a><span" + _vm._ssrClass(null, {
      'status-active': customer.status === 'Active',
      'status-inactive': customer.status === 'Inactive'
    }) + " data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(customer.status)) + "</span></td></tr>";
  }) + "</tbody></table></div><div class=\"customers__footer\" data-v-7a5ef23a><div class=\"customers__footer--text\" data-v-7a5ef23a><p data-v-7a5ef23a>" + _vm._ssrEscape("Showing data " + _vm._s(_vm.startItem) + " to " + _vm._s(_vm.endItem) + " of " + _vm._s(_vm.customers.length) + " entries") + "</p></div><div class=\"customers__footer--pagination\" data-v-7a5ef23a><button" + _vm._ssrAttr("disabled", _vm.currentPage === 1) + " data-v-7a5ef23a>‹</button>" + _vm._ssrList(_vm.totalPages, function (page) {
    return "<button" + _vm._ssrClass(null, {
      'active': page === _vm.currentPage
    }) + " data-v-7a5ef23a>" + _vm._ssrEscape(_vm._s(page)) + "</button>";
  }) + "<button" + _vm._ssrAttr("disabled", _vm.currentPage === _vm.totalPages) + " data-v-7a5ef23a>›</button></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Customers.vue?vue&type=template&id=7a5ef23a&scoped=true&lang=pug

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Customers.vue?vue&type=script&lang=js

/* harmony default export */ var Customersvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      user: "user/getUser"
    }),
    paginatedCustomers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.customers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.customers.length / this.itemsPerPage);
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.currentPage * this.itemsPerPage, this.customers.length);
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
      customers: [{
        id: 0,
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active"
      }, {
        id: 1,
        name: "Floyd Miles",
        company: "Yahoo",
        phone: "(205) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive"
      }, {
        id: 2,
        name: "Ronald Richards",
        company: "Adobe",
        phone: "(302) 555-0107",
        email: "ronald@adobe.com",
        country: "Israel",
        status: "Inactive"
      }, {
        id: 3,
        name: "Marvin McKinney",
        company: "Tesla",
        phone: "(252) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active"
      }, {
        id: 4,
        name: "Jerome Bell",
        company: "Google",
        phone: "(629) 555-0129",
        email: "jerome@google.com",
        country: "Réunion",
        status: "Active"
      }, {
        id: 5,
        name: "Kathryn Murphy",
        company: "Microsoft",
        phone: "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active"
      }, {
        id: 6,
        name: "Jacob Jones",
        company: "Yahoo",
        phone: "(208) 555-0112",
        email: "jacob@yahoo.com",
        country: "Brazil",
        status: "Active"
      }, {
        id: 7,
        name: "Kristin Watson",
        company: "Facebook",
        phone: "(704) 555-0127",
        email: "kristin@facebook.com",
        country: "Åland Islands",
        status: "Inactive"
      }, {
        id: 0,
        name: "Vlad Semak",
        company: "Unicorn",
        phone: "(099) 222-1050",
        email: "vlad@semak.com",
        country: "Ukraininan States",
        status: "Active"
      }]
    };
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        console.log("yes");
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Customers.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Customersvue_type_script_lang_js = (Customersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Customers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Customersvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a5ef23a",
  "59edb2be"
  
)

/* harmony default export */ var Customers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=customers.js.map