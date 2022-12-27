(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/talent/new_file"],{

/***/ 46:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/main.js?{"page":"pages%2Ftalent%2Fnew_file"} ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _new_file = _interopRequireDefault(__webpack_require__(/*! ./pages/talent/new_file.vue */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_new_file.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 47:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_file.vue?vue&type=template&id=b4b687d6& */ 48);
/* harmony import */ var _new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_file.vue?vue&type=script&lang=js& */ 50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new_file.vue?vue&type=style&index=0&lang=css& */ 52);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/talent/new_file.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue?vue&type=template&id=b4b687d6& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./new_file.vue?vue&type=template&id=b4b687d6& */ 49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_template_id_b4b687d6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 49:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue?vue&type=template&id=b4b687d6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 50:
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./new_file.vue?vue&type=script&lang=js& */ 51);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));






var _config = _interopRequireDefault(__webpack_require__(/*! ../../utils/config.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ../../utils/request.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var app = getApp();var _default =
{
  data: function data() {
    return {
      bodyShow: true, // 页面显示
      userInfo: null, // 用户信息

      hasUserInfo: false };

  },
  onLoad: function onLoad(options) {
    var that = this;

    this.getUserSystemInfo();
  },
  onShow: function onShow() {
    console.log(124);
    console.log(app.globalData.hasLogin);
    if (!app.globalData.hasLogin) {
      this.userInfo = null;
    }
  },
  methods: {
    settingRedirect: function settingRedirect() {
      uni.navigateTo({
        url: '/pages/user/setting' });

    },
    normalQuestion: function normalQuestion() {
      uni.navigateTo({
        url: '/pages/user/richtext?id=1' });

    },
    creator: function creator() {
      uni.navigateTo({
        url: '/pages/index/webview?url=https://xuntu.hmazx.cn' });

    },
    redirectKefu: function redirectKefu() {
      //跳转抖音号

      tt.openAwemeUserProfile({
        success: function success(res) {
          console.log(res);
        } });







    },
    getUserSystemInfo: function getUserSystemInfo() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this, r;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this = _this2;_context.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/user/getInfo"),
                    method: 'post',
                    data: {
                      openid: app.globalData.openid,
                      platform: app.globalData.projectId } }));case 3:r = _context.sent;



                if (r.error_code === 0 && app.globalData.hasLogin) {
                  _this.hasUserInfo = true;
                  _this.userInfo = r.data;
                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },


















    getUserProfile: function getUserProfile(e) {
      var that = this;
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      uni.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: function success(res) {
          that.dealLoginCallback(res.userInfo);
        },
        fail: function fail() {
          return uni.showToast({
            title: '请允许授权',
            icon: 'none' });

        } });

    },



    //头条获取用户信息
    getTtUserInfo: function getTtUserInfo() {
      var that = this;
      tt.authorize({
        scope: "scope.userInfo",
        success: function success(r) {
          console.log(r);
          tt.getUserInfo({
            success: function success(res) {
              that.dealLoginCallback(res.userInfo);
            },
            fail: function fail(res) {
              return uni.showToast({
                title: '请允许授权',
                icon: 'none' });

            } });

        },
        fail: function fail(rr) {
          if (rr.errMsg == 'authorize:fail auth deny') {
            return uni.showToast({
              title: '请在设置里打开用户信息',
              icon: 'none' });

          } else {
            return uni.showToast({
              title: '请允许授权',
              icon: 'none' });

          }

        } });

    },


    dealLoginCallback: function dealLoginCallback(res) {
      // 登录
      this.userInfo = res;
      this.hasUserInfo = true;
      uni.setStorage({
        key: 'userLogin',
        data: 1 });

      app.globalData.hasLogin = true;
      app.saveUserInfo(res.avatarUrl, res.nickName);
    } }

  // onShareAppMessage(r) {
  // 	let _path = `/pages/index/index`
  //
  // 	if (app.globalData.shareInfo.share_id != '') {
  // 		return {
  // 			templateId: app.globalData.shareInfo.share_id,
  // 			path: _path,
  // 		}
  // 	} else {
  // 		return {
  // 			title: app.globalData.shareInfo.share_title,
  // 			desc: app.globalData.shareInfo.share_desc,
  // 			path: _path,
  // 		}
  // 	}
  //
  //






  // },
};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 52:
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./new_file.vue?vue&type=style&index=0&lang=css& */ 53);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_new_file_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/talent/new_file.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[46,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvdGFsZW50L25ld19maWxlLnZ1ZT8wODg5Iiwid2VicGFjazovLy9DOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9UL2R5eW0v5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkvQ+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL+aQnOWbvuWQm+WJjeerryAtIOa8lOekui9wYWdlcy90YWxlbnQvbmV3X2ZpbGUudnVlPzYyMWEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L3BhZ2VzL3RhbGVudC9uZXdfZmlsZS52dWU/OTc0MCIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvdGFsZW50L25ld19maWxlLnZ1ZT9iOWYyIiwidW5pLWFwcDovLy9wYWdlcy90YWxlbnQvbmV3X2ZpbGUudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9UL2R5eW0v5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkvQ+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL+aQnOWbvuWQm+WJjeerryAtIOa8lOekui9wYWdlcy90YWxlbnQvbmV3X2ZpbGUudnVlPzE1MGMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L3BhZ2VzL3RhbGVudC9uZXdfZmlsZS52dWU/ZGFlZCJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzREFBQTtBQUNBO0FBQ0EsbUcsNkZBRm1CQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkM7QUFHbkJDLFVBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFIO0FBQ3JIO0FBQzREO0FBQ0w7QUFDYTs7O0FBR3BFO0FBQzRLO0FBQzVLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBa3BCLENBQWdCLGtuQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPdHFCO0FBQ0EsNkY7QUFDQSxtQjtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esb0JBREEsRUFDQTtBQUNBLG9CQUZBLEVBRUE7O0FBRUEsd0JBSkE7O0FBTUEsR0FSQTtBQVNBLFFBVEEsa0JBU0EsT0FUQSxFQVNBO0FBQ0E7O0FBRUE7QUFDQSxHQWJBO0FBY0EsUUFkQSxvQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXBCQTtBQXFCQTtBQUNBLG1CQURBLDZCQUNBO0FBQ0E7QUFDQSxrQ0FEQTs7QUFHQSxLQUxBO0FBTUEsa0JBTkEsNEJBTUE7QUFDQTtBQUNBLHdDQURBOztBQUdBLEtBVkE7QUFXQSxXQVhBLHFCQVdBO0FBQ0E7QUFDQSw4REFEQTs7QUFHQSxLQWZBO0FBZ0JBLGdCQWhCQSwwQkFnQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOzs7Ozs7OztBQVdBLEtBOUJBO0FBK0JBLHFCQS9CQSwrQkErQkE7QUFDQSxxQkFEQSxHQUNBLE1BREE7QUFFQTtBQUNBLDJFQURBO0FBRUEsa0NBRkE7QUFHQTtBQUNBLG1EQURBO0FBRUEsd0RBRkEsRUFIQSxHQUZBLFNBRUEsQ0FGQTs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLGlCQWRBO0FBZUEsS0E5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUEsa0JBakVBLDBCQWlFQSxDQWpFQSxFQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsWUFMQSxrQkFLQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx3QkFGQTs7QUFJQSxTQVZBOztBQVlBLEtBakZBOzs7O0FBcUZBO0FBQ0EsaUJBdEZBLDJCQXNGQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLGVBRkEsbUJBRUEsQ0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQURBLG1CQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0EsYUFIQTtBQUlBLGdCQUpBLGdCQUlBLEdBSkEsRUFJQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw0QkFGQTs7QUFJQSxhQVRBOztBQVdBLFNBZkE7QUFnQkEsWUFoQkEsZ0JBZ0JBLEVBaEJBLEVBZ0JBO0FBQ0E7QUFDQTtBQUNBLGtDQURBO0FBRUEsMEJBRkE7O0FBSUEsV0FMQSxNQUtBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDBCQUZBOztBQUlBOztBQUVBLFNBN0JBOztBQStCQSxLQXZIQTs7O0FBMEhBLHFCQTFIQSw2QkEwSEEsR0ExSEEsRUEwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsZUFGQTs7QUFJQTtBQUNBO0FBQ0EsS0FwSUE7O0FBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQWxMQSxDOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBdTdCLENBQWdCLHUyQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTM4QjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3RhbGVudC9uZXdfZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJzt3eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3RhbGVudC9uZXdfZmlsZS52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9uZXdfZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjRiNjg3ZDYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uZXdfZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL25ld19maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9uZXdfZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90YWxlbnQvbmV3X2ZpbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdfZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjRiNjg3ZDYmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9uZXdfZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbmV3X2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdDxpbWFnZSAgQGNsaWNrPVwiY3JlYXRvclwiIGNsYXNzPVwiYmctaW1nXCIgbW9kZT1cIndpZHRoRml4XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9ydXpodWhiMjEuanBnXCI+PC9pbWFnZT5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZy5qcyc7XG5cdGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QuanMnO1xuXHRjb25zdCBhcHAgPSBnZXRBcHAoKVxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGJvZHlTaG93OiB0cnVlLCAvLyDpobXpnaLmmL7npLpcblx0XHRcdFx0dXNlckluZm86IG51bGwsIC8vIOeUqOaIt+S/oeaBr1xuXHRcdFx0XHRcblx0XHRcdFx0aGFzVXNlckluZm86IGZhbHNlLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKG9wdGlvbnMpIHtcblx0XHRcdGNvbnN0IHRoYXQgPSB0aGlzO1xuXG5cdFx0XHR0aGlzLmdldFVzZXJTeXN0ZW1JbmZvKClcblx0XHR9LFxuXHRcdG9uU2hvdygpIHtcblx0XHRcdGNvbnNvbGUubG9nKDEyNClcblx0XHRcdGNvbnNvbGUubG9nKGFwcC5nbG9iYWxEYXRhLmhhc0xvZ2luKVxuXHRcdFx0aWYoIWFwcC5nbG9iYWxEYXRhLmhhc0xvZ2luKXtcblx0XHRcdFx0dGhpcy51c2VySW5mbyA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRzZXR0aW5nUmVkaXJlY3QoKXtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogJy9wYWdlcy91c2VyL3NldHRpbmcnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdG5vcm1hbFF1ZXN0aW9uKCl7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdXNlci9yaWNodGV4dD9pZD0xJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXHJcblx0XHRcdGNyZWF0b3IoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L3dlYnZpZXc/dXJsPWh0dHBzOi8veHVudHUuaG1henguY24nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXG5cdFx0XHRyZWRpcmVjdEtlZnUoKXtcblx0XHRcdFx0Ly/ot7Povazmipbpn7Plj7dcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cblx0XHRcdFx0dHQub3BlbkF3ZW1lVXNlclByb2ZpbGUoe1xuXHRcdFx0XHQgIHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0ICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdCAgfSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtS1VBSVNIT1V8fE1QLVFRXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdXNlci9yaWNodGV4dD9pZD00J1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgZ2V0VXNlclN5c3RlbUluZm8oKSB7XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdXNlci9nZXRJbmZvYCxcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdHBsYXRmb3JtOmFwcC5nbG9iYWxEYXRhLnByb2plY3RJZFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihyLmVycm9yX2NvZGUgPT09IDAgJiYgYXBwLmdsb2JhbERhdGEuaGFzTG9naW4pe1xuXHRcdFx0XHRcdF90aGlzLmhhc1VzZXJJbmZvID0gdHJ1ZVxuXHRcdFx0XHRcdF90aGlzLnVzZXJJbmZvID0gci5kYXRhXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vICNpZmRlZiBNUC1RUXx8TVAtS1VBSVNIT1Vcblx0XHRcdC8vIOeUqOaIt+S/oeaBr+Wbnuiwg1xuXHRcdFx0dXNlckluZm9BY3Rpb24ocikge1xuXHRcdFx0XHQvLyDlpoLmnpznlKjmiLfmi5Lnu53mjojmnYNcblx0XHRcdFx0aWYgKHIuZGV0YWlsLmVyck1zZyA9PT0gJ2dldFVzZXJJbmZvOmZhaWwgYXV0aCBkZW55JyB8fCByLmRldGFpbC5lcnJNc2cgPT09ICdnZXRVc2VySW5mbzpmYWlsIGF1dGhvcml6ZSBkZW55Jykge1xuXHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35YWB6K645o6I5p2DJyxcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmRlYWxMb2dpbkNhbGxiYWNrKHIuZGV0YWlsLnVzZXJJbmZvKVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHQvLyAjZW5kaWZcblx0XHRcdFxuXHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTiB8fCBNUC1UT1VUSUFPXG5cdFx0XHRnZXRVc2VyUHJvZmlsZShlKSB7XG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdFx0ICAgIC8vIOaOqOiNkOS9v+eUqHd4LmdldFVzZXJQcm9maWxl6I635Y+W55So5oi35L+h5oGv77yM5byA5Y+R6ICF5q+P5qyh6YCa6L+H6K+l5o6l5Y+j6I635Y+W55So5oi35Liq5Lq65L+h5oGv5Z2H6ZyA55So5oi356Gu6K6kXG5cdFx0XHQgICAgLy8g5byA5Y+R6ICF5aal5ZaE5L+d566h55So5oi35b+r6YCf5aGr5YaZ55qE5aS05YOP5pi156ew77yM6YG/5YWN6YeN5aSN5by556qXXG5cdFx0XHQgICAgdW5pLmdldFVzZXJQcm9maWxlKHtcblx0XHRcdCAgICAgIGRlc2M6ICfnlKjkuo7lrozlloTkvJrlkZjotYTmlpknLCAvLyDlo7DmmI7ojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lkI7nmoTnlKjpgJTvvIzlkI7nu63kvJrlsZXnpLrlnKjlvLnnqpfkuK3vvIzor7fosKjmhY7loavlhplcblx0XHRcdCAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHR0aGF0LmRlYWxMb2dpbkNhbGxiYWNrKHJlcy51c2VySW5mbylcblx0XHRcdCAgICAgIH0sXG5cdFx0XHRcdCAgZmFpbCgpIHtcblx0XHRcdFx0ICBcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0ICBcdFx0dGl0bGU6ICfor7flhYHorrjmjojmnYMnLFxuXHRcdFx0XHQgIFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0ICBcdH0pO1xuXHRcdFx0XHQgIH1cblx0XHRcdCAgICB9KVxuXHRcdFx0ICB9LFxuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcblx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXG5cdFx0XHQvL+WktOadoeiOt+WPlueUqOaIt+S/oeaBr1xuXHRcdFx0Z2V0VHRVc2VySW5mbygpIHtcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHR0LmF1dGhvcml6ZSh7XG5cdFx0XHRcdFx0c2NvcGU6IFwic2NvcGUudXNlckluZm9cIixcblx0XHRcdFx0XHRzdWNjZXNzKHIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHIpXG5cdFx0XHRcdFx0XHR0dC5nZXRVc2VySW5mbyh7XG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5kZWFsTG9naW5DYWxsYmFjayhyZXMudXNlckluZm8pXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGZhaWwocmVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfor7flhYHorrjmjojmnYMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbChycikge1xuXHRcdFx0XHRcdFx0aWYocnIuZXJyTXNnID09ICdhdXRob3JpemU6ZmFpbCBhdXRoIGRlbnknKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35Zyo6K6+572u6YeM5omT5byA55So5oi35L+h5oGvJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35YWB6K645o6I5p2DJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XG5cdFx0XHRkZWFsTG9naW5DYWxsYmFjayhyZXMpe1xuXHRcdFx0XHQvLyDnmbvlvZVcblx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcztcblx0XHRcdFx0dGhpcy5oYXNVc2VySW5mbyA9IHRydWVcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdGtleTogJ3VzZXJMb2dpbicsXG5cdFx0XHRcdFx0ZGF0YTogMVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YXBwLmdsb2JhbERhdGEuaGFzTG9naW4gPSB0cnVlXG5cdFx0XHRcdGFwcC5zYXZlVXNlckluZm8ocmVzLmF2YXRhclVybCxyZXMubmlja05hbWUpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyBvblNoYXJlQXBwTWVzc2FnZShyKSB7XG5cdFx0Ly8gXHRsZXQgX3BhdGggPSBgL3BhZ2VzL2luZGV4L2luZGV4YFxuXHRcdC8vIFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cblx0XHQvLyBcdGlmIChhcHAuZ2xvYmFsRGF0YS5zaGFyZUluZm8uc2hhcmVfaWQgIT0gJycpIHtcblx0XHQvLyBcdFx0cmV0dXJuIHtcblx0XHQvLyBcdFx0XHR0ZW1wbGF0ZUlkOiBhcHAuZ2xvYmFsRGF0YS5zaGFyZUluZm8uc2hhcmVfaWQsXG5cdFx0Ly8gXHRcdFx0cGF0aDogX3BhdGgsXG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdHJldHVybiB7XG5cdFx0Ly8gXHRcdFx0dGl0bGU6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV90aXRsZSxcblx0XHQvLyBcdFx0XHRkZXNjOiBhcHAuZ2xvYmFsRGF0YS5zaGFyZUluZm8uc2hhcmVfZGVzYyxcblx0XHQvLyBcdFx0XHRwYXRoOiBfcGF0aCxcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0Ly8gI2VuZGlmXG5cdFx0Ly8gXHQvLyAjaWZkZWYgTVAtUVF8fE1QLVdFSVhJTnx8TVAtS1VBSVNIT1Vcblx0XHQvLyBcdHJldHVybiB7XG5cdFx0Ly8gXHRcdHRpdGxlOiBhcHAuZ2xvYmFsRGF0YS5zaGFyZUluZm8uc2hhcmVfdGl0bGUsXG5cdFx0Ly8gXHRcdGRlc2M6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV9kZXNjLFxuXHRcdC8vIFx0XHRwYXRoOiBfcGF0aCxcblx0XHQvLyBcdH1cblx0XHQvLyBcdC8vICNlbmRpZlxuXHRcdC8vIH0sXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XHJcblx0LmJnLWltZ3tcclxuXHRcdG1hcmdpbi10b3A6MHJweDtcclxuXHQgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgIGhlaWdodDogMTAwJTsgICBcclxuXHR9XHJcblxyXG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25ld19maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL25ld19maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2NjY5OTc3MzI1OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=