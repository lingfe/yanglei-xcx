(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/talent/detail"],{

/***/ 38:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/main.js?{"page":"pages%2Ftalent%2Fdetail"} ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/talent/detail.vue */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 39:
/*!********************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=0403b92b&scoped=true& */ 40);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 42);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=0403b92b&lang=scss&scoped=true& */ 44);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0403b92b",
  null,
  false,
  _detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/talent/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue?vue&type=template&id=0403b92b&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=0403b92b&scoped=true& */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_0403b92b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 41:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue?vue&type=template&id=0403b92b&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 =
    _vm.layout === 1 && _vm.tabIndex === -1
      ? Math.max.apply(Math, _vm.colHeights)
      : null

  if (!_vm._isMounted) {
    _vm.e0 = function(e, index) {
      var args = [],
        len = arguments.length - 2
      while (len-- > 0) args[len] = arguments[len + 2]

      var _temp = args[args.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        index = _temp2.index

      var _temp, _temp2

      return _vm.imgLoad(index, e)
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 42:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 43);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));










































































































































































var _config = _interopRequireDefault(__webpack_require__(/*! ../../utils/config.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ../../utils/request.js */ 13));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Alert = function Alert() {__webpack_require__.e(/*! require.ensure | components/alert */ "components/alert").then((function () {return resolve(__webpack_require__(/*! ../../components/alert.vue */ 165));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};

var app = getApp();


// 在页面中定义插屏广告
var interstitialAd = null;var _default =

{
  data: function data() {
    return {
      code: '',
      id: '',
      windowWidth: _utils.default.systemInfo().windowWidth,

      list: [],
      isLoading: false,
      loadOver: false,
      page: 1,
      tabIndex: -1,
      layout: 1,
      layoutRecord: 1, //记录创作者自己所选择的展示形式
      info: {}, // 信息
      typeList: [], //显示当前创作者有上传的素材类型
      // 瀑布流
      waterfallFlowWidth: (_utils.default.systemInfo().windowWidth - 20) / 3,
      colHeights: [0, 0, 0],
      ip: [],
      stackList: [], // 队列
      currentLoad: 0, // 当前加载到第几张图片
      waterfallFlowVisible: false // 瀑布流显示，处理一开始排版错乱
    };
  },
  onLoad: function onLoad(options) {
    this.id = options.id || '';
    this.code = options.code || '';
    this.getData();
    this.getList();

    if (app.globalData.adInfo != null && app.globalData.adInfo.chaping != '' && app.globalData.canShowAd) {
      interstitialAd = tt.createInterstitialAd({
        adUnitId: app.globalData.adInfo.chaping });


    }

  },
  onShow: function onShow() {

    if (interstitialAd) {
      interstitialAd.
      load().
      then(function () {
        interstitialAd.show();
      }).
      then(function () {

      }).
      catch(function (err) {
        console.log(err);
      });
    }

  },
  components: {
    Alert: Alert },

  methods: {
    getData: function getData() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var r;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/index/expertList"), //换新接口查询
                    method: 'post',
                    data: {
                      user_id: _this.id,
                      code: _this.code } }));case 2:r = _context.sent;


                if (r.error_code === 0) {
                  _this.info = r.data;
                  _this.typeList = r.data.type_list;
                  _this.layout = r.data.type_wallpaper; //从后台获取当前默认要渲染的排版是瀑布流还是时间轴 
                  _this.layoutRecord = r.data.type_wallpaper; //从后台获取当前默认要渲染的排版是瀑布流还是时间轴 

                  if (_this.tabIndex === -1) {
                    _this.layout = 1;
                  }
                  // if(this.typeList.length > 0){
                  // 	this.tabIndex = this.typeList[0]['id'];//获取当前要查询的素材第一个类型
                  // 	this.getList();
                  // }
                }case 4:case "end":return _context.stop();}}}, _callee);}))();
    },
    getList: function getList() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var r;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                _this2.isLoading = true;_context2.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/index/list"),
                    method: 'post',
                    data: {
                      user_id: _this2.id,
                      type: _this2.tabIndex + 1,
                      page: _this2.page,
                      show: _this2.tabIndex === -1 ? 1 : _this2.layout,
                      code: _this2.code } }));case 3:r = _context2.sent;


                _this2.isLoading = false;
                if (r.error_code === 0) {
                  if (_this2.layout === 1) {
                    _this2.list = [].concat(_toConsumableArray(_this2.list), _toConsumableArray(r.data.data));
                  } else {
                    _this2.list = r.data;
                    console.log(_this2.list);
                  }
                  if (r.data.current_page >= r.data.last_page) {
                    _this2.loadOver = true;
                  }
                }

                if (_this2.tabIndex === -1) {
                  setTimeout(function () {
                    _this2.waterfallFlowVisible = true;
                  }, 500);
                }case 7:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    /**
        * 更改布局
        * @param {number} index
        */
    layoutChange: function layoutChange(index) {
      if (this.layout === index) return;
      this.layout = index;
      this.layoutRecord = index;
      this.list = [];
      this.isLoading = false;
      this.loadOver = false;
      this.page = 1;
      this.getList();
    },
    openStatement: function openStatement() {
      this.$refs.alert.show();
    },
    /**
        * tab切换
        * @param {number} index
        */
    tabAction: function tabAction(index) {
      if (this.tabIndex === index) return;
      this.tabIndex = index;
      this.page = 1;
      this.isLoading = false;
      this.loadOver = false;
      this.list = [];
      this.colHeights = [0, 0, 0];
      this.ip = [];
      this.stackList = [];
      this.currentLoad = 0;
      this.waterfallFlowVisible = false;

      //增加判断，如果所选择全部，则显示方式改为瀑布流，否则改回默认的形式
      if (index === -1) {this.layout = 1;} else
      {this.layout = this.layoutRecord;}

      this.getList();
    },
    loadMore: function loadMore() {
      if (this.layout > 1) return;
      this.page++;
      this.getList();
    },
    /**
        * 跳转详情
        * @param {string} imgSrc 图片地址
         * @param {number} id 图片id
        * @param {number} imgType 图片类型,系统的
         * @param {string} imgSrc2 图片缩略图地址
        * @param {number} type 图片类型
        */
    navigateToDetail: function navigateToDetail(imgSrc, id, imgType, imgSrc2, type, expression_show_video, expression_video_url) {
      if (type < 3) {
        uni.navigateTo({
          url: "/pages/detail/index?src=".concat(imgSrc, "&type=").concat(type, "&id=").concat(id, "&img_type=").concat(imgType, "&src2=").concat(imgSrc2) });

      } else {
        //头像 表情包换新的页面
        uni.navigateTo({
          url: "/pages/detail/layout2?src=".concat(imgSrc, "&type=").concat(type, "&id=").concat(id, "&img_type=").concat(imgType, "&src2=").concat(imgSrc2, "&e_show_v=").concat(expression_show_video, "&e_video=").concat(expression_video_url) });

      }

    },
    imgLoad: function imgLoad(index, event) {
      if (event) {
        var s = this.stackList;
        s[index] = event.detail;
        this.stackList = s;
      }
      if (this.currentLoad !== index) {
        return;
      }
      var minIndex = -1,
      minValue = Math.min.apply(Math, _toConsumableArray(this.colHeights));
      for (var _i = 0, l = this.colHeights.length; _i < l; _i++) {
        if (this.colHeights[_i] === minValue) {
          minIndex = _i;
          break;
        }
      };
      var t = this.ip;
      var i = this.colHeights;
      t[index] = {
        left: minIndex * this.waterfallFlowWidth + (minIndex + 1) * 5,
        top: this.colHeights[minIndex] };


      i[minIndex] += this.waterfallFlowWidth / (this.stackList[index].width / this.stackList[index].height) + 10;
      this.ip = t;
      this.colHeights = i;
      this.currentLoad++;

      if (this.stackList[index + 1]) {
        this.imgLoad(index + 1, null);
      }
    } },

  onReachBottom: function onReachBottom() {
    if (this.isLoading || this.loadOver) return;
    this.isLoading = true;
    this.loadMore();
  },
  onShareAppMessage: function onShareAppMessage(r) {
    var _path = "pages/talent/detail?id=" + this.id + '&code=' + this.code,
    _desc = '给你推荐了【' + this.info.user_nickname + '】，Ta有好多漂亮的壁纸头像，快看看呀~';
    return {
      title: app.globalData.shareInfo.share_title,
      desc: app.globalData.shareInfo.share_desc,
      path: _path };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 44:
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue?vue&type=style&index=0&id=0403b92b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&id=0403b92b&lang=scss&scoped=true& */ 45);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_0403b92b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/detail.vue?vue&type=style&index=0&id=0403b92b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[38,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvdGFsZW50L2RldGFpbC52dWU/ODcxYSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvdGFsZW50L2RldGFpbC52dWU/YzQwNiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvdGFsZW50L2RldGFpbC52dWU/ZTI2MiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvdGFsZW50L2RldGFpbC52dWU/YTcxZSIsInVuaS1hcHA6Ly8vcGFnZXMvdGFsZW50L2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L3BhZ2VzL3RhbGVudC9kZXRhaWwudnVlP2IwNDIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L3BhZ2VzL3RhbGVudC9kZXRhaWwudnVlP2VhZDQiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLCtGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStIO0FBQy9IO0FBQzBEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUM0SztBQUM1SyxnQkFBZ0IsNktBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBZ3BCLENBQWdCLGduQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJLcHFCO0FBQ0E7QUFDQSx5Rjs7QUFFQTs7O0FBR0E7QUFDQSwwQjs7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxZQUZBO0FBR0EsMERBSEE7O0FBS0EsY0FMQTtBQU1BLHNCQU5BO0FBT0EscUJBUEE7QUFRQSxhQVJBO0FBU0Esa0JBVEE7QUFVQSxlQVZBO0FBV0EscUJBWEEsRUFXQTtBQUNBLGNBWkEsRUFZQTtBQUNBLGtCQWJBLEVBYUE7QUFDQTtBQUNBLDRFQWZBO0FBZ0JBLDJCQWhCQTtBQWlCQSxZQWpCQTtBQWtCQSxtQkFsQkEsRUFrQkE7QUFDQSxvQkFuQkEsRUFtQkE7QUFDQSxpQ0FwQkEsQ0FvQkE7QUFwQkE7QUFzQkEsR0F4QkE7QUF5QkEsUUF6QkEsa0JBeUJBLE9BekJBLEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQURBOzs7QUFJQTs7QUFFQSxHQXRDQTtBQXVDQSxRQXZDQSxvQkF1Q0E7O0FBRUE7QUFDQTtBQUNBLFVBREE7QUFFQSxVQUZBLENBRUE7QUFDQTtBQUNBLE9BSkE7QUFLQSxVQUxBLENBS0E7O0FBRUEsT0FQQTtBQVFBLFdBUkEsQ0FRQTtBQUNBO0FBQ0EsT0FWQTtBQVdBOztBQUVBLEdBdkRBO0FBd0RBO0FBQ0EsZ0JBREEsRUF4REE7O0FBMkRBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsaUZBREEsRUFDQTtBQUNBLGtDQUZBO0FBR0E7QUFDQSx1Q0FEQTtBQUVBLHNDQUZBLEVBSEEsR0FEQSxTQUNBLENBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBLHVEQUhBLENBR0E7QUFDQSw2REFKQSxDQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBdEJBO0FBdUJBLEtBeEJBO0FBeUJBLFdBekJBLHFCQXlCQTtBQUNBLHdDQURBO0FBRUE7QUFDQSwyRUFEQTtBQUVBLGtDQUZBO0FBR0E7QUFDQSx3Q0FEQTtBQUVBLCtDQUZBO0FBR0EsdUNBSEE7QUFJQSxzRUFKQTtBQUtBLHVDQUxBLEVBSEEsR0FGQSxTQUVBLENBRkE7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLEVBRUEsR0FGQTtBQUdBLGlCQTlCQTtBQStCQSxLQXhEQTtBQXlEQTs7OztBQUlBLGdCQTdEQSx3QkE2REEsS0E3REEsRUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0RUE7QUF1RUEsaUJBdkVBLDJCQXVFQTtBQUNBO0FBQ0EsS0F6RUE7QUEwRUE7Ozs7QUFJQSxhQTlFQSxxQkE4RUEsS0E5RUEsRUE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBaEdBO0FBaUdBLFlBakdBLHNCQWlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckdBO0FBc0dBOzs7Ozs7OztBQVFBLG9CQTlHQSw0QkE4R0EsTUE5R0EsRUE4R0EsRUE5R0EsRUE4R0EsT0E5R0EsRUE4R0EsT0E5R0EsRUE4R0EsSUE5R0EsRUE4R0EscUJBOUdBLEVBOEdBLG9CQTlHQSxFQThHQTtBQUNBO0FBQ0E7QUFDQSwwSkFEQTs7QUFHQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0Esa1BBREE7O0FBR0E7O0FBRUEsS0ExSEE7QUEySEEsV0EzSEEsbUJBMkhBLEtBM0hBLEVBMkhBLEtBM0hBLEVBMkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFEQTtBQUVBLHNDQUZBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTNKQSxFQTNEQTs7QUF3TkEsZUF4TkEsMkJBd05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E1TkE7QUE2TkEsbUJBN05BLDZCQTZOQSxDQTdOQSxFQTZOQTtBQUNBO0FBQ0EsdUVBREE7QUFFQTtBQUNBLGlEQURBO0FBRUEsK0NBRkE7QUFHQSxpQkFIQTs7QUFLQSxHQXJPQSxFOzs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFBQTtBQUFBO0FBQXV2QyxDQUFnQix1bkNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0Ezd0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy90YWxlbnQvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvdGFsZW50L2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0MDNiOTJiJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQwM2I5MmImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDQwM2I5MmJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFsZW50L2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQwM2I5MmImc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBnMCA9XG4gICAgX3ZtLmxheW91dCA9PT0gMSAmJiBfdm0udGFiSW5kZXggPT09IC0xXG4gICAgICA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIF92bS5jb2xIZWlnaHRzKVxuICAgICAgOiBudWxsXG5cbiAgaWYgKCFfdm0uX2lzTW91bnRlZCkge1xuICAgIF92bS5lMCA9IGZ1bmN0aW9uKGUsIGluZGV4KSB7XG4gICAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMlxuICAgICAgd2hpbGUgKGxlbi0tID4gMCkgYXJnc1tsZW5dID0gYXJndW1lbnRzW2xlbiArIDJdXG5cbiAgICAgIHZhciBfdGVtcCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQsXG4gICAgICAgIF90ZW1wMiA9IF90ZW1wLmV2ZW50UGFyYW1zIHx8IF90ZW1wW1wiZXZlbnQtcGFyYW1zXCJdLFxuICAgICAgICBpbmRleCA9IF90ZW1wMi5pbmRleFxuXG4gICAgICB2YXIgX3RlbXAsIF90ZW1wMlxuXG4gICAgICByZXR1cm4gX3ZtLmltZ0xvYWQoaW5kZXgsIGUpXG4gICAgfVxuICB9XG5cbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBnMDogZzBcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHRcblx0PHZpZXcgY2xhc3M9XCJkZXRhaWxcIj5cclxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLXRcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLWRhdGFcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWwtZGF0YS1jb250ZW50XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkZXRhaWwtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW5mby51c2VyX2hlYWRpbWdcIiBtb2RlPVwic2NhbGVUb0ZpbGxcIiA+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbmRyb2lkLXRpcHNcIj7miYDmnInkvZzlk4HlnYflnKjkuIvmlrnvvIzor7fku5Tnu4bmn6Xmib7vvIzotoXmuIXml6DmsLTljbDljp/lm77kuIvovb3kuLrljp/nlLvotoXmuIXvvIzmhJ/osKLmlK/mjIHvvIE8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbC11c2VyLWRhdGFcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLXVkaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHTkvZzlk4E8dGV4dD57eyBpbmZvLmltZ19udW0gfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRldGFpbC11ZGl0ZW1cIj5cblx0XHRcdFx0XHRcdFx054K56LWePHRleHQ+e3sgaW5mby51c2VyX3phbiB9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLXVkaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHTmlLbol488dGV4dD57eyBpbmZvLnVzZXJfY29sbGVjdGlvbiB9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8YnV0dG9uIG9wZW4tdHlwZT1cInNoYXJlXCIgaG92ZXItY2xhc3M9XCJub25lXCIgY2xhc3M9XCJ1c2VyLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImRldGFpbC1kYXRhLWxhYmVsMlwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2hhcmUucG5nXCIgbW9kZT1cIndpZHRoRml4XCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLWRhdGEtbGFiZWxcIiBAY2xpY2s9XCJvcGVuU3RhdGVtZW50XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaGFyZTIucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+5aOw5piOPC92aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGV0YWlsLWRhdGEtbGFiZWwzXCIgPlxyXG5cdFx0XHRcdFx0PHRleHQ+e3sgaW5mby51c2VyX25pY2tuYW1lIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSA8aW1hZ2UgY2xhc3M9XCJ1c2VyLWdpZlwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvdGFsZW50LmdpZlwiIG1vZGU9XCJ3aWR0aEZpeFwiID48L2ltYWdlPi0tPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiZGV0YWlsLWRhdGEtYmdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL0JHdC5wbmdcIiBtb2RlPVwic2NhbGVUb0ZpbGxcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dXaWR0aCAvIDEuNzYgKyAncHgnfVwiPjwvaW1hZ2U+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtdGFiXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC10YWJpdGVtXCIgOmNsYXNzPVwie2FjdGl2ZTogdGFiSW5kZXggPT09IC0xfVwiIEBjbGljaz1cInRhYkFjdGlvbigtMSlcIj7lhajpg6g8L3ZpZXc+XG5cdFx0XHRcdDwhLS0g5oyJ5b2T5YmN5Yib5L2c6ICF5bey5pyJ55qE57Sg5p2Q57G75Z6L5bGV546wIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtdGFiaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHR5cGVMaXN0XCIgOmNsYXNzPVwie2FjdGl2ZTogdGFiSW5kZXggPT09IGl0ZW0uaWR9XCIgQGNsaWNrPVwidGFiQWN0aW9uKGl0ZW0uaWQpXCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XHJcblx0XHRcblx0XHQ8dmlldyB2LWlmPVwibGF5b3V0ID09PSAxXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtbGlzdCB3YXRlcmZhbGwtZmxvd1wiIDpjbGFzcz1cIndhdGVyZmFsbEZsb3dWaXNpYmxlID8gJ3Nob3cnIDogJydcIiB2LWlmPVwidGFiSW5kZXggPT09IC0xXCIgOnN0eWxlPVwie2hlaWdodDogTWF0aC5tYXgoLi4uY29sSGVpZ2h0cykgKyAncHgnfVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtaXRlbSBsYWJlbC1yZWxcIlxuXHRcdFx0XHQgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGxpc3RcIiBcblx0XHRcdFx0IDprZXk9XCJpdGVtLmlkXCIgXG5cdFx0XHRcdCBAY2xpY2s9XCJuYXZpZ2F0ZVRvRGV0YWlsKGl0ZW0uaW1nLGl0ZW0uaWQsaXRlbS50eXBlLGl0ZW0uaW1nMiwgaXRlbS50eXBlLTEsaXRlbS5leHByZXNzaW9uX3Nob3dfdmlkZW8saXRlbS5leHByZXNzaW9uX3ZpZGVvX3VybClcIiBcblx0XHRcdFx0IDpzdHlsZT1cInt3aWR0aDogd2F0ZXJmYWxsRmxvd1dpZHRoKydweCcsIGxlZnQ6IChpcFtpbmRleF0gPyBpcFtpbmRleF0ubGVmdCA6IDApICsgJ3B4JywgdG9wOiAoaXBbaW5kZXhdID8gaXBbaW5kZXhdLnRvcCA6IDApICsgJ3B4J31cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tYm9keVwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWl0ZW1jIGxvYWRpbmctYmdcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmltZ190aHVtYlwiIG1vZGU9XCJ3aWR0aEZpeFwiIEBsb2FkPVwiZSA9PiBpbWdMb2FkKGluZGV4LCBlKVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJwbGF5XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLXBsYXkyLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtaWY9XCJpdGVtLnR5cGUgPT09IDJcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWxhYmVsXCIgdi1pZj1cIml0ZW0uaXNfcmVjb21tZW5kID09PSAxXCI+572u6aG2PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsYWJlbC1naWZcIiB2LWlmPVwiaXRlbS5pc19naWYgPT09IDFcIj5HSUY8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwhLS0gPHRleHQgdi1pZj1cIml0ZW0uc2VsZl9uYW1lXCI+e3tpdGVtLnNlbGZfbmFtZX19PC90ZXh0PiAtLT5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWxpc3RcIiB2LWVsc2UtaWY9XCJ0YWJJbmRleCA9PT0gMFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtaXRlbVwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0XCIgOmtleT1cIml0ZW0uaWRcIiBAY2xpY2s9XCJuYXZpZ2F0ZVRvRGV0YWlsKGl0ZW0uaW1nLGl0ZW0uaWQsaXRlbS50eXBlLGl0ZW0uaW1nMiwgMClcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tYm9keVwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWl0ZW1jIGxvYWRpbmctYmdcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmltZ190aHVtYlwiIG1vZGU9XCJ3aWR0aEZpeFwiICA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dXaWR0aCouMzEzLy42KydweCd9XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1sYWJlbFwiIHYtaWY9XCJpdGVtLmlzX3JlY29tbWVuZCA9PT0gMVwiPue9rumhtjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cIml0ZW0uc2VsZl9uYW1lXCI+e3tpdGVtLnNlbGZfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtbGlzdFwiIHYtZWxzZS1pZj1cInRhYkluZGV4ID09PSAxXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1pdGVtIGxhYmVsLXJlbFwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0XCIgOmtleT1cIml0ZW0uaWRcIiBAY2xpY2s9XCJuYXZpZ2F0ZVRvRGV0YWlsKGl0ZW0uaW1nLGl0ZW0uaWQsaXRlbS50eXBlLGl0ZW0uaW1nMiwgMSlcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tYm9keVwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWl0ZW1jIGxvYWRpbmctYmdcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmltZ190aHVtYlwiIG1vZGU9XCJ3aWR0aEZpeFwiICA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dXaWR0aCouMzEzLy42KydweCd9XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBsYXlcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tcGxheTIucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1sYWJlbFwiIHYtaWY9XCJpdGVtLmlzX3JlY29tbWVuZCA9PT0gMVwiPue9rumhtjwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGFiZWwtZ2lmXCIgdi1pZj1cIml0ZW0uaXNfZ2lmID09PSAxXCI+R0lGPC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwiaXRlbS5zZWxmX25hbWVcIj57e2l0ZW0uc2VsZl9uYW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1saXN0IHJvdzJcIiB2LWVsc2UtaWY9XCJ0YWJJbmRleCA9PT0gMlwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtaXRlbSBsYWJlbC1yZWxcIiB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiIDprZXk9XCJpdGVtLmlkXCIgQGNsaWNrPVwibmF2aWdhdGVUb0RldGFpbChpdGVtLmltZyxpdGVtLmlkLGl0ZW0udHlwZSxpdGVtLmltZzIsIDIpXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWJvZHlcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1pdGVtYyBsb2FkaW5nLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5pbWdfdGh1bWJcIiBtb2RlPVwid2lkdGhGaXhcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dXaWR0aCAqIC40NTUgKyAncHgnfVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtbGFiZWxcIiB2LWlmPVwiaXRlbS5pc19yZWNvbW1lbmQgPT09IDFcIj7nva7pobY8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxhYmVsLWdpZlwiIHYtaWY9XCJpdGVtLmlzX2dpZiA9PT0gMVwiPkdJRjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cIml0ZW0uc2VsZl9uYW1lXCI+e3tpdGVtLnNlbGZfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtbGlzdFwiIHYtZWxzZT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb2xsZWN0LWl0ZW0gbGFiZWwtcmVsXCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiA6a2V5PVwiaXRlbS5pZFwiIEBjbGljaz1cIm5hdmlnYXRlVG9EZXRhaWwoaXRlbS5pbWcsaXRlbS5pZCxpdGVtLnR5cGUsaXRlbS5pbWcyLCAzLGl0ZW0uZXhwcmVzc2lvbl9zaG93X3ZpZGVvLGl0ZW0uZXhwcmVzc2lvbl92aWRlb191cmwpXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWJvZHlcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1pdGVtYyBsb2FkaW5nLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5pbWdfdGh1bWJcIiBtb2RlPVwic2NhbGVUb0ZpbGxcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB3aW5kb3dXaWR0aCAqIC4zMTMgKyAncHgnfVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbGxlY3QtbGFiZWxcIiB2LWlmPVwiaXRlbS5pc19yZWNvbW1lbmQgPT09IDFcIj7nva7pobY8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxhYmVsLWdpZlwiIHYtaWY9XCJpdGVtLmlzX2dpZiA9PT0gMVwiPkdJRjwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cIml0ZW0uc2VsZl9uYW1lXCI+e3tpdGVtLnNlbGZfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3IHYtZWxzZT5cblx0XHRcdDx2aWV3IGNsYXNzPVwibGlzdDJcIiA6Y2xhc3M9XCJ7cm93MjogdGFiSW5kZXggPT09IDJ9XCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWxpbmVcIj48L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWRhdGFcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS10aW1lXCI+e3sgaXRlbS5kYXRlIH19PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWltZ3NcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLWltZyBsYWJlbC1yZWZcIiB2LWZvcj1cImNpdGVtIGluIGl0ZW0uaW1nc1wiIDprZXk9XCJjaXRlbS5pZFwiIEBjbGljaz1cIm5hdmlnYXRlVG9EZXRhaWwoY2l0ZW0uaW1nLGNpdGVtLmlkLGNpdGVtLnR5cGUsY2l0ZW0uaW1nMiwgdGFiSW5kZXgsY2l0ZW0uZXhwcmVzc2lvbl9zaG93X3ZpZGVvLGNpdGVtLmV4cHJlc3Npb25fdmlkZW9fdXJsKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImNpdGVtLmltZ190aHVtYlwiIG1vZGU9XCJzY2FsZVRvRmlsbFwiICA6c3R5bGU9XCJ7aGVpZ2h0OiAod2luZG93V2lkdGgtMzApICogKHRhYkluZGV4IDwgMiA/ICguMzEzLy42KSA6ICh0YWJJbmRleCA9PT0gMiA/ICguNDc3NSAvIDEuNikgOiAuMzEzICkpKydweCd9XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBsYXlcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tcGxheTIucG5nXCIgbW9kZT1cIndpZHRoRml4XCIgdi1pZj1cInRhYkluZGV4ID09PSAxXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29sbGVjdC1sYWJlbFwiIHYtaWY9XCJjaXRlbS5pc19yZWNvbW1lbmQgPT09IDFcIj7nva7pobY8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxhYmVsLWdpZlwiIHYtaWY9XCJjaXRlbS5pc19naWYgPT09IDFcIj5HSUY8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJjaXRlbS5zZWxmX25hbWVcIj57e2NpdGVtLnNlbGZfbmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx0ZXh0IGNsYXNzPVwibG9hZGluZ1wiPnt7IGxvYWRPdmVyID8gJ+W3suWKoOi9veWFqOmDqOaVsOaNrn4nIDogJ+aVsOaNruWKoOi9veS4rS4uLid9fTwvdGV4dD5cblx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwibGF5b3V0LWNoYW5nZVwiIHYtaWY9XCJ0YWJJbmRleCA+IC0xXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImxheW91dC1jXCIgOmNsYXNzPVwie2FjdGl2ZTogbGF5b3V0ID09PSAxfVwiIEBjbGljaz1cImxheW91dENoYW5nZSgxKVwiPlxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUxLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtaWY9XCJsYXlvdXQgPT09IDFcIj48L2ltYWdlPlxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUxLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtZWxzZT48L2ltYWdlPlxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcblx0XHRcdDx2aWV3IGNsYXNzPVwibGF5b3V0LWMgbGF5b3V0LWl0ZW0yXCIgOmNsYXNzPVwie2FjdGl2ZTogbGF5b3V0ID09PSAyfVwiIEBjbGljaz1cImxheW91dENoYW5nZSgyKVwiPlxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUyLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtaWY9XCJsYXlvdXQgPT09IDJcIj48L2ltYWdlPlxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUyLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtZWxzZT48L2ltYWdlPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz4tLT5cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInBhaWxpZVwiIHYtaWY9XCJ0YWJJbmRleCA+IC0xXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInBhaWxpZS1jXCIgOmNsYXNzPVwie2FjdGl2ZTogbGF5b3V0ID09PSAxfVwiIEBjbGljaz1cImxheW91dENoYW5nZSgxKVwiPlxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUxLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtaWY9XCJsYXlvdXQgPT09IDFcIj48L2ltYWdlPlxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUxLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtZWxzZT48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNoaWppYW5cIiA6Y2xhc3M9XCJ7YWN0aXZlOiBsYXlvdXQgPT09IDJ9XCIgQGNsaWNrPVwibGF5b3V0Q2hhbmdlKDIpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9zaG93LXR5cGUyLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtaWY9XCJsYXlvdXQgPT09IDJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvc2hvdy10eXBlMi5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHRcblx0XHQ8QWxlcnQgdGl0bGU9XCLlo7DmmI5cIiBAY29uZmlybT1cImNvbmZpcm1BY3Rpb25cIiByZWY9XCJhbGVydFwiPlxuXHRcdFx0PHZpZXc+5Yib5L2c6ICF5LiK5Lyg55qE57Sg5p2Q5YaF5a6555Sx5Yib5L2c6ICF6LSf6LSj77yM6YOo5YiG5p2l5rqQ5LqO572R57uc77yM5aaC5pyJ5L615p2D77yM6K+36IGU57O75bCP56iL5bqP5a6Y5pa56L+b6KGM5Yig6Zmk5aSE55CG77yBPC92aWV3PlxuXHRcdDwvQWxlcnQ+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnLmpzJztcblx0aW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdC5qcyc7XG5cdGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcyc7XG5cdGltcG9ydCBBbGVydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FsZXJ0LnZ1ZSc7XG5cdGNvbnN0IGFwcCA9IGdldEFwcCgpXG5cdFxuXHQvLyAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLVFRIHx8IE1QLVRPVVRJQU9cblx0Ly8g5Zyo6aG16Z2i5Lit5a6a5LmJ5o+S5bGP5bm/5ZGKXG5cdGxldCBpbnRlcnN0aXRpYWxBZCA9IG51bGxcblx0Ly8gI2VuZGlmXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y29kZSA6ICcnLFxuXHRcdFx0XHRpZDogJycsXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiB1dGlscy5zeXN0ZW1JbmZvKCkud2luZG93V2lkdGgsXG5cdFx0XHRcdFxuXHRcdFx0XHRsaXN0OiBbXSxcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0bG9hZE92ZXI6IGZhbHNlLFxuXHRcdFx0XHRwYWdlOiAxLFxuXHRcdFx0XHR0YWJJbmRleDogLTEsXG5cdFx0XHRcdGxheW91dDogMSxcblx0XHRcdFx0bGF5b3V0UmVjb3JkOjEsLy/orrDlvZXliJvkvZzogIXoh6rlt7HmiYDpgInmi6nnmoTlsZXnpLrlvaLlvI9cblx0XHRcdFx0aW5mbzoge30sIC8vIOS/oeaBr1xuXHRcdFx0XHR0eXBlTGlzdDpbXSwvL+aYvuekuuW9k+WJjeWIm+S9nOiAheacieS4iuS8oOeahOe0oOadkOexu+Wei1xuXHRcdFx0XHQvLyDngJHluIPmtYFcblx0XHRcdFx0d2F0ZXJmYWxsRmxvd1dpZHRoOiAodXRpbHMuc3lzdGVtSW5mbygpLndpbmRvd1dpZHRoLTIwKSAvIDMsXG5cdFx0XHRcdGNvbEhlaWdodHM6IFswLCAwLCAwXSxcblx0XHRcdFx0aXA6IFtdLFxuXHRcdFx0XHRzdGFja0xpc3Q6IFtdLCAvLyDpmJ/liJdcblx0XHRcdFx0Y3VycmVudExvYWQ6IDAsIC8vIOW9k+WJjeWKoOi9veWIsOesrOWHoOW8oOWbvueJh1xuXHRcdFx0XHR3YXRlcmZhbGxGbG93VmlzaWJsZTogZmFsc2UsIC8vIOeAkeW4g+a1geaYvuekuu+8jOWkhOeQhuS4gOW8gOWni+aOkueJiOmUmeS5sVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKG9wdGlvbnMpIHtcblx0XHRcdHRoaXMuaWQgPSBvcHRpb25zLmlkIHx8ICcnO1xuXHRcdFx0dGhpcy5jb2RlID0gb3B0aW9ucy5jb2RlIHx8ICcnO1xuXHRcdFx0dGhpcy5nZXREYXRhKCk7XG5cdFx0XHR0aGlzLmdldExpc3QoKTtcblx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXG5cdFx0XHRpZiAoYXBwLmdsb2JhbERhdGEuYWRJbmZvICE9IG51bGwgJiYgYXBwLmdsb2JhbERhdGEuYWRJbmZvLmNoYXBpbmcgIT0gJycgJiYgYXBwLmdsb2JhbERhdGEuY2FuU2hvd0FkKSB7XG5cdFx0XHRcdGludGVyc3RpdGlhbEFkID0gdHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xuXHRcdFx0XHQgIGFkVW5pdElkOiBhcHAuZ2xvYmFsRGF0YS5hZEluZm8uY2hhcGluZyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0fSxcblx0XHRvblNob3coKSB7XG5cdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xuXHRcdFx0aWYoaW50ZXJzdGl0aWFsQWQpe1xuXHRcdFx0XHRpbnRlcnN0aXRpYWxBZFxuXHRcdFx0XHQgIC5sb2FkKClcblx0XHRcdFx0ICAudGhlbigoKSA9PiB7XG5cdFx0XHRcdCAgICBpbnRlcnN0aXRpYWxBZC5zaG93KCk7XG5cdFx0XHRcdCAgfSlcblx0XHRcdFx0ICAudGhlbigoKT0+e1xuXHRcdFx0XHRcdCAgXG5cdFx0XHRcdCAgfSlcblx0XHRcdFx0ICAuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHQgICAgY29uc29sZS5sb2coZXJyKTtcblx0XHRcdFx0ICB9KTtcblx0XHRcdH1cblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0QWxlcnRcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFzeW5jIGdldERhdGEoKSB7XG5cdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6IGAke2NvbmZpZy5BUEl9YXBpL3cvaW5kZXgvZXhwZXJ0TGlzdGAsLy/mjaLmlrDmjqXlj6Pmn6Xor6Jcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLmlkLFxuXHRcdFx0XHRcdFx0Y29kZSA6IHRoaXMuY29kZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChyLmVycm9yX2NvZGUgPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmluZm8gPSByLmRhdGE7XG5cdFx0XHRcdFx0dGhpcy50eXBlTGlzdCA9IHIuZGF0YS50eXBlX2xpc3Rcblx0XHRcdFx0XHR0aGlzLmxheW91dCA9IHIuZGF0YS50eXBlX3dhbGxwYXBlcjsvL+S7juWQjuWPsOiOt+WPluW9k+WJjem7mOiupOimgea4suafk+eahOaOkueJiOaYr+eAkeW4g+a1gei/mOaYr+aXtumXtOi9tCBcblx0XHRcdFx0XHR0aGlzLmxheW91dFJlY29yZCA9IHIuZGF0YS50eXBlX3dhbGxwYXBlcjsvL+S7juWQjuWPsOiOt+WPluW9k+WJjem7mOiupOimgea4suafk+eahOaOkueJiOaYr+eAkeW4g+a1gei/mOaYr+aXtumXtOi9tCBcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0aGlzLnRhYkluZGV4ID09PSAtMSl7XG5cdFx0XHRcdFx0XHR0aGlzLmxheW91dCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGlmKHRoaXMudHlwZUxpc3QubGVuZ3RoID4gMCl7XG5cdFx0XHRcdFx0Ly8gXHR0aGlzLnRhYkluZGV4ID0gdGhpcy50eXBlTGlzdFswXVsnaWQnXTsvL+iOt+WPluW9k+WJjeimgeafpeivoueahOe0oOadkOesrOS4gOS4quexu+Wei1xuXHRcdFx0XHRcdC8vIFx0dGhpcy5nZXRMaXN0KCk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgZ2V0TGlzdCgpIHtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiBgJHtjb25maWcuQVBJfWFwaS93L2luZGV4L2xpc3RgLFxuXHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHVzZXJfaWQ6IHRoaXMuaWQsXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLnRhYkluZGV4ICsgMSxcblx0XHRcdFx0XHRcdHBhZ2U6IHRoaXMucGFnZSxcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMudGFiSW5kZXggPT09IC0xID8xOnRoaXMubGF5b3V0LFxuXHRcdFx0XHRcdFx0Y29kZTogdGhpcy5jb2RlLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGlmIChyLmVycm9yX2NvZGUgPT09IDApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5sYXlvdXQgPT09IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMubGlzdCA9IFsuLi50aGlzLmxpc3QsIC4uLnIuZGF0YS5kYXRhXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5saXN0ID0gci5kYXRhO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5saXN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHIuZGF0YS5jdXJyZW50X3BhZ2UgPj0gci5kYXRhLmxhc3RfcGFnZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkT3ZlciA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy50YWJJbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMud2F0ZXJmYWxsRmxvd1Zpc2libGUgPSB0cnVlO1xuXHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOabtOaUueW4g+WxgFxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdFx0XHQgKi9cblx0XHRcdGxheW91dENoYW5nZShpbmRleCkge1xuXHRcdFx0XHRpZiAodGhpcy5sYXlvdXQgPT09IGluZGV4KSByZXR1cm47XG5cdFx0XHRcdHRoaXMubGF5b3V0ID0gaW5kZXg7XG5cdFx0XHRcdHRoaXMubGF5b3V0UmVjb3JkID0gaW5kZXg7XG5cdFx0XHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmxvYWRPdmVyID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucGFnZSA9IDE7XG5cdFx0XHRcdHRoaXMuZ2V0TGlzdCgpO1xuXHRcdFx0fSxcblx0XHRcdG9wZW5TdGF0ZW1lbnQoKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuYWxlcnQuc2hvdygpO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogdGFi5YiH5o2iXG5cdFx0XHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0XHRcdCAqL1xuXHRcdFx0dGFiQWN0aW9uKGluZGV4KSB7XG5cdFx0XHRcdGlmICh0aGlzLnRhYkluZGV4ID09PSBpbmRleCkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdHRoaXMucGFnZSA9IDE7XG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubG9hZE92ZXIgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saXN0ID0gW107XG5cdFx0XHRcdHRoaXMuY29sSGVpZ2h0cyA9IFswLCAwLCAwXTtcblx0XHRcdFx0dGhpcy5pcCA9IFtdO1xuXHRcdFx0XHR0aGlzLnN0YWNrTGlzdCA9IFtdO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRMb2FkID0gMDtcblx0XHRcdFx0dGhpcy53YXRlcmZhbGxGbG93VmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly/lop7liqDliKTmlq3vvIzlpoLmnpzmiYDpgInmi6nlhajpg6jvvIzliJnmmL7npLrmlrnlvI/mlLnkuLrngJHluIPmtYHvvIzlkKbliJnmlLnlm57pu5jorqTnmoTlvaLlvI9cblx0XHRcdFx0aWYoaW5kZXggPT09IC0xKXt0aGlzLmxheW91dCA9IDE7fVxuXHRcdFx0XHRlbHNle3RoaXMubGF5b3V0ID0gdGhpcy5sYXlvdXRSZWNvcmR9XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmdldExpc3QoKTtcblx0XHRcdH0sXG5cdFx0XHRsb2FkTW9yZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMubGF5b3V0ID4gMSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnBhZ2UgKys7XG5cdFx0XHRcdHRoaXMuZ2V0TGlzdCgpO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog6Lez6L2s6K+m5oOFXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1nU3JjIOWbvueJh+WcsOWdgFxuXHRcdFx0ICAqIEBwYXJhbSB7bnVtYmVyfSBpZCDlm77niYdpZFxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXJ9IGltZ1R5cGUg5Zu+54mH57G75Z6LLOezu+e7n+eahFxuXHRcdFx0ICAqIEBwYXJhbSB7c3RyaW5nfSBpbWdTcmMyIOWbvueJh+e8qeeVpeWbvuWcsOWdgFxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXJ9IHR5cGUg5Zu+54mH57G75Z6LXG5cdFx0XHQgKi9cblx0XHRcdG5hdmlnYXRlVG9EZXRhaWwoaW1nU3JjLGlkLGltZ1R5cGUsaW1nU3JjMiwgdHlwZSxleHByZXNzaW9uX3Nob3dfdmlkZW8sZXhwcmVzc2lvbl92aWRlb191cmwpIHtcblx0XHRcdFx0aWYodHlwZSA8IDMpe1xuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9kZXRhaWwvaW5kZXg/c3JjPSR7aW1nU3JjfSZ0eXBlPSR7dHlwZX0maWQ9JHtpZH0maW1nX3R5cGU9JHtpbWdUeXBlfSZzcmMyPSR7aW1nU3JjMn1gXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdC8v5aS05YOPIOihqOaDheWMheaNouaWsOeahOmhtemdolxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9kZXRhaWwvbGF5b3V0Mj9zcmM9JHtpbWdTcmN9JnR5cGU9JHt0eXBlfSZpZD0ke2lkfSZpbWdfdHlwZT0ke2ltZ1R5cGV9JnNyYzI9JHtpbWdTcmMyfSZlX3Nob3dfdj0ke2V4cHJlc3Npb25fc2hvd192aWRlb30mZV92aWRlbz0ke2V4cHJlc3Npb25fdmlkZW9fdXJsfWBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRpbWdMb2FkKGluZGV4LCBldmVudCkge1xuXHRcdFx0XHRpZihldmVudCkge1xuXHRcdFx0XHRcdHZhciBzID0gdGhpcy5zdGFja0xpc3Q7XG5cdFx0XHRcdFx0c1tpbmRleF0gPSBldmVudC5kZXRhaWw7XG5cdFx0XHRcdFx0dGhpcy5zdGFja0xpc3QgPSBzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnRMb2FkICE9PSBpbmRleCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgbWluSW5kZXggPSAtMSxcblx0XHRcdFx0XHRtaW5WYWx1ZSA9IE1hdGgubWluKC4uLnRoaXMuY29sSGVpZ2h0cyk7XG5cdFx0XHRcdGZvcihsZXQgaT0wLGw9dGhpcy5jb2xIZWlnaHRzLmxlbmd0aDsgaTxsOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodGhpcy5jb2xIZWlnaHRzW2ldID09PSBtaW5WYWx1ZSkge1xuXHRcdFx0XHRcdFx0bWluSW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zdCB0ID0gdGhpcy5pcDtcblx0XHRcdFx0Y29uc3QgaSA9IHRoaXMuY29sSGVpZ2h0cztcblx0XHRcdFx0dFtpbmRleF0gPSB7XG5cdFx0XHRcdFx0bGVmdDogbWluSW5kZXggKiB0aGlzLndhdGVyZmFsbEZsb3dXaWR0aCArIChtaW5JbmRleCsxKSAqIDUsXG5cdFx0XHRcdFx0dG9wOiB0aGlzLmNvbEhlaWdodHNbbWluSW5kZXhdXG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGlbbWluSW5kZXhdICs9IHRoaXMud2F0ZXJmYWxsRmxvd1dpZHRoIC8gKHRoaXMuc3RhY2tMaXN0W2luZGV4XS53aWR0aCAvIHRoaXMuc3RhY2tMaXN0W2luZGV4XS5oZWlnaHQpICsgMTA7XG5cdFx0XHRcdHRoaXMuaXAgPSB0O1xuXHRcdFx0XHR0aGlzLmNvbEhlaWdodHMgPSBpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRMb2FkICsrO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMuc3RhY2tMaXN0W2luZGV4KzFdKSB7XG5cdFx0XHRcdFx0dGhpcy5pbWdMb2FkKGluZGV4KzEsIG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblJlYWNoQm90dG9tKCkge1xuXHRcdFx0aWYgKHRoaXMuaXNMb2FkaW5nIHx8IHRoaXMubG9hZE92ZXIpIHJldHVybjtcblx0XHRcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMubG9hZE1vcmUoKTtcblx0XHR9LFxuXHRcdG9uU2hhcmVBcHBNZXNzYWdlKHIpIHtcblx0XHRcdGxldCBfcGF0aCA9IGBwYWdlcy90YWxlbnQvZGV0YWlsP2lkPWArdGhpcy5pZCsnJmNvZGU9Jyt0aGlzLmNvZGUsXG5cdFx0XHRfZGVzYyA9ICfnu5nkvaDmjqjojZDkuobjgJAnK3RoaXMuaW5mby51c2VyX25pY2tuYW1lKyfjgJHvvIxUYeacieWlveWkmua8guS6rueahOWjgee6uOWktOWDj++8jOW/q+eci+eci+WRgH4nO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV90aXRsZSxcblx0XHRcdFx0ZGVzYzogYXBwLmdsb2JhbERhdGEuc2hhcmVJbmZvLnNoYXJlX2Rlc2MsXG5cdFx0XHRcdHBhdGg6IF9wYXRoLFxuXHRcdFx0fVxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmRldGFpbC1kYXRhIHtcclxuXHRcblx0cG9zaXRpb246IHJlbGF0aXZlOztcblx0LmRldGFpbC1kYXRhLWNvbnRlbnQge1xyXG5cdFx0bWFyZ2luLXRvcDogOTBycHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRyaWdodDogMDtcblx0XHRwYWRkaW5nOiAxNXJweCA4MHJweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0fVxuXHQuZGV0YWlsLWRhdGEtbGFiZWwge1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAyNDBycHg7XG5cdFx0cmlnaHQ6IDI1cnB4O1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdFx0Y29sb3I6YmxhY2s7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAzMHJweCAxMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcblx0fVxyXG5cdC5kZXRhaWwtZGF0YS1sYWJlbDIge1xyXG5cdFx0XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDI0MHJweDtcclxuXHRcdHJpZ2h0OiAxNTBycHg7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDI1cnB4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0cGFkZGluZzogMTBycHggMzBycHggMTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0fVxyXG5cdC5kZXRhaWwtZGF0YS1sYWJlbDMge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMjAwcnB4O1xyXG5cdFx0bGVmdDogMTM1cnB4O1xyXG5cdFx0d2lkdGg6IDM1cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNXJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDMwcnB4IDEwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0fVxuXHQuZGV0YWlsLWRhdGEtYmcge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IDEwMCU7XHJcblxuXHR9XG59XHJcbi51c2VyLWdpZiB7XHJcblx0cGFkZGluZy1yaWdodDogMjEwcnB4O1xyXG5cdHdpZHRoOiA0NXJweDtcclxuXHRoZWlnaHQ6IDQ1cnB4O1xyXG59XHJcbi5wYWlsaWV7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3R0b206IDE1JTtcclxuXHR6LWluZGV4OiAxMDE7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMTc1cnB4O1xyXG5cdHJpZ2h0OiAyNXJweDtcclxuXHR3aWR0aDogMzcwcnB4O1xyXG5cdGhlaWdodDogNTBycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcclxuXHQucGFpbGllLWMge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA4cnB4O1xyXG5cdFx0d2lkdGg6IDE4NXJweDtcclxuXHRcdCYuYWN0aXZlIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxNzMsIDI1NSwgMC42KTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0aW1hZ2Uge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0aGVpZ2h0OiA0OHJweDtcclxuXHRcdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDhycHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IDRycHg7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHQuc2hpamlhbiB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTgycnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHR3aWR0aDogMTg1cnB4O1xyXG5cdFx0XHJcblx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6cmdiYSgxLCAxNzMsIDI1NSwgMC42KTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0XHR9XHJcblx0XHRpbWFnZSB7XHJcblx0XHRcdG1hcmdpbi10b3A6IC00NnJweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDEzcnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0aGVpZ2h0OiA0OHJweDtcclxuXHRcdFx0d2lkdGg6IDE2NXJweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cbi5kZXRhaWwtdXNlciB7XHJcblx0XG5cdG1hcmdpbi10b3A6IDY1cnB4O1xuXHRpbWFnZSB7XHJcblx0XHRtYXJnaW4tbGVmdDogLTU1cnB4O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMTBycHg7XG5cdFx0aGVpZ2h0OiAxMTBycHg7XG5cdFx0Ym9yZGVyOiAzcHggc29saWQgI0ZGRkZGRjtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblxuXHR9XG5cdHRleHQge1xyXG5cdFx0XG5cdFx0bWFyZ2luLWxlZnQ6IDM1cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRwYWRkaW5nOiAxMHJweCAxMHJweCAxMTBycHg7XHJcblx0XHRsZWZ0OiAtMjBycHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuLmRldGFpbC11c2VyLWRhdGEge1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAxMHJweDtcblx0LmRldGFpbC11ZGl0ZW0ge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdCY6bnRoLWNoaWxkKDIpIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXHRcdHRleHQge1xyXG5cdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdGZvbnQtc2l6ZTogM3JweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xuXHRcdH1cblx0fVxufVxuLmNvbGxlY3QtdGFiIHtcclxuXHRcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHQuY29sbGVjdC10YWJpdGVtIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0d2lkdGg6IDIwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDIwcnB4IDA7XG5cdFx0Ji5hY3RpdmUge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRjb2xvcjogIzAxYWRmZjtcblx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFxuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdHdpZHRoOiA4MHJweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC00MHJweDtcblx0XHRcdFx0aGVpZ2h0OiA3cnB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxYWRmZjtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbi5jb2xsZWN0LWxpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdHBhZGRpbmctdG9wOiA1MjBycHg7XG5cdCYucm93MiB7XG5cdFx0LmNvbGxlY3QtaXRlbSB7XG5cdFx0XHR3aWR0aDogNDcuNzUlO1xuXHRcdH1cblx0fVxuXHQuY29sbGVjdC1pdGVtIHtcclxuXG5cdFx0d2lkdGg6IDMxLjMlO1xuXHRcdG1hcmdpbi1sZWZ0OiAxLjUlO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcnB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAwO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdC5pdGVtLWJvZHkge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR6LWluZGV4OiAwO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR9XG5cdFx0Jj50ZXh0IHtcblx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHJweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBycHg7XG5cdFx0fVxuXHRcdC5jb2xsZWN0LWl0ZW1jIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aW1hZ2Uge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnBsYXkge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDYwcnB4O1xuXHRcdFx0aGVpZ2h0OiA2MHJweDtcblx0XHR9XG5cdFx0LmxhYmVsLWdpZiB7XG5cdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHJweDtcblx0XHR9XG5cdH1cblx0Ji53YXRlcmZhbGwtZmxvdyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luLXRvcDogNTIwcnB4O1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC41cztcblx0XHQmLnNob3cge1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHR9XG5cdFx0LmNvbGxlY3QtaXRlbSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHQuY29sbGVjdC1pdGVtYyB7XG5cdFx0XHRcdGltYWdlIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLmNvbGxlY3QtbGFiZWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0b3A6IDEwcnB4O1xuXHRyaWdodDogMTBycHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlMWE2M2Y7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNnJweDtcblx0cGFkZGluZzogMnJweCAxMHJweDtcblx0Zm9udC1zaXplOiAyNHJweDtcbn1cbi5kZXRhaWwtdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHotaW5kZXg6IDEwMDtcbn1cbi5sYXlvdXQtY2hhbmdlIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRyaWdodDogMjBycHg7XG5cdGJvdHRvbTogMTUlO1xuXHR6LWluZGV4OiAxMDE7XG5cdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG5cdC5sYXlvdXQtYyB7XG5cdFx0cGFkZGluZzogMTBycHggNDBycHggMTBycHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdCYuYWN0aXZlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGMjNCNDM7XG5cdFx0fVxuXHR9XG5cdGltYWdlIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMTYwcnB4O1xuXHR9XG5cdC5sYXlvdXQtaXRlbTIge1xuXHRcdHBhZGRpbmc6IDEwcnB4IDQwcnB4IDEwcnB4O1xuXHRcdGltYWdlIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR3aWR0aDogMTYwcnB4O1xuXHRcdH1cblx0fVxufVxyXG4uYW5kcm9pZC10aXBzIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtNTBycHg7IFxyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdHdpZHRoOiA3MDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXJweDsgXG5cdFx0Y29sb3I6ICMxOTE5MTk7XG5cdFx0Zm9udC1zaXplOiAyNC41cnB4O1xuXHRcdFxuXHRcdFxuXHR9XG4ubGlzdDIge1xyXG5cdFxuXHRwYWRkaW5nLXRvcDogNTMwcnB4O1xuXHQuaXRlbSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwYWRkaW5nOiAwIDIwcnB4O1xuXHRcdCYucm93MiB7XG5cdFx0XHQuaXRlbS1kYXRhIHtcblx0XHRcdFx0Lml0ZW0taW1ncyB7XG5cdFx0XHRcdFx0Lml0ZW0taW1nIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0Ny43NSU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5pdGVtLWxpbmUge1xuXHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHR3aWR0aDogMXB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxYWRmZjtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdHdpZHRoOiAxMHJweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHJweDtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMWFkZmY7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdH1cblx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0d2lkdGg6IDIycnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDIycnB4O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxNzMsIDI1NSwgMC41KTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuaXRlbS10aW1lIHtcblx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdG1hcmdpbjogLTIwcnB4IDAgMjBycHggMTBycHg7XG5cdFx0fVxuXHRcdC5pdGVtLWRhdGEge1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiA0MHJweDtcblx0XHRcdC5pdGVtLWltZ3Mge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdC5pdGVtLWltZyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6IDMxLjMlO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxLjUlO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcnB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdC5pdGVtLWJvZHkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbWFnZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY+dGV4dCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMjBycHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucGxheSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogNjBycHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGFiZWwtZ2lmIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHJweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDAzYjkyYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MDNiOTJiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NjY2OTk3NzM0NTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9