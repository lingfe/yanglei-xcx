(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!****************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/main.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createApp) {__webpack_require__(/*! uni-pages */ 5);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 6));


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
_vue.default.config.productionTip = false;
_App.default.mpType = 'app';
var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!****************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/App.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 14);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));
var _config = _interopRequireDefault(__webpack_require__(/*! ./utils/config.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ./utils/request.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  onLaunch: function onLaunch() {var _this2 = this;
    var _this = this;
    uni.getStorage({
      key: 'userLogin',
      success: function success(r) {
        _this.globalData.hasLogin = true;
      } });


    this.getAdInfo();
    this.getShareId(); //获取分享信息-kkkgogogo
    this.checkSession(function (openid) {//获取用户openid-gogokkk
      _this2.globalData.openid = openid;
      //获取当前用户可看广告的数据
      _this2.getAdLogInfo();
      _this2.saveAnalysisInfo(1);
    }, this.globalData.projectId);


  },
  onShow: function onShow() {

  },
  onHide: function onHide() {

  },
  methods: {
    // 获取分享信息
    getShareId: function getShareId() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this, r;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this = _this3;_context.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/getShareInfo"),
                    method: 'POST' }));case 3:r = _context.sent;

                if (r.error_code === 0) {
                  _this.globalData.shareInfo = r.data;
                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },

    //检查openid
    checkSession: function checkSession(callback, projectId) {
      var _this = this;
      uni.checkSession({
        success: function success(r) {
          uni.getStorage({
            key: 'openid',
            success: function success(r) {
              if (!r.data) {
                _this.loginAction(callback, projectId);
              } else {
                callback && callback(r.data);
              }
            },
            fail: function fail(err) {
              _this.loginAction(callback, projectId);
            } });

        },
        fail: function fail(err) {
          _this.loginAction(callback, projectId);
        } });

      // _this.loginAction(callback,projectId);
    },
    //获取openid
    loginAction: function loginAction(callback, projectId) {
      uni.login({
        success: function success(r) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                    uni.request({
                      url: "".concat(_config.default.API, "api/user/openid/bind"),
                      data: {
                        code: r.code,
                        projectId: projectId },

                      success: function success(r2) {
                        if (r2.data.error_code === 0) {
                          uni.setStorage({
                            key: 'openid',
                            data: r2.data.data.openid });

                          callback && callback(r2.data.data.openid);
                        } else {
                          uni.showToast({
                            title: '获取openid失败',
                            icon: 'none' });

                        }
                      },
                      fail: function fail(err) {
                        console.log(err);
                      } });case 1:case "end":return _context2.stop();}}}, _callee2);}))();

        } });

    },
    //存储用户信息
    saveUserInfo: function saveUserInfo(avatarUrl, nickName) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var r;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/user/saveInfo"),
                    method: 'POST',
                    data: {
                      openid: _this4.globalData.openid,
                      avatarUrl: avatarUrl,
                      nickName: nickName,
                      platform: _this4.globalData.projectId } }));case 2:r = _context3.sent;


                console.log(r);case 4:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    //获取广告
    getAdInfo: function getAdInfo() {
      var _this = this;
      uni.request({
        url: "".concat(_config.default.API, "api/w/getAdInfo"),
        data: {
          projectId: this.globalData.projectId },

        method: 'POST',
        success: function success(res) {
          _this.globalData.adInfo = res.data.data;
          _this.globalData.canShowAd = res.data.data.open_ad == 1 ? true : false;
          console.log(_this.globalData.adInfo);
        } });

    },

    // 获取看广告信息
    getAdLogInfo: function getAdLogInfo() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _this, r;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                _this = _this5;_context4.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/ad/logSearch"),
                    method: 'POST',
                    data: {
                      openid: _this5.globalData.openid,
                      platform: _this5.globalData.projectId } }));case 3:r = _context4.sent;


                _this.globalData.ad_number = r.data.ad_number;
                _this.globalData.illegal_ad_number = r.data.illegal_ad_number;
                _this.globalData.free_ad_num = r.data.free_ad_num;
                _this.globalData.illfree_ad_num = r.data.illfree_ad_num;
                _this.globalData.de_ad_number = r.data.de_ad_number;
                _this.globalData.adRequestRes = true;case 10:case "end":return _context4.stop();}}}, _callee4);}))();

    },

    // 增加看广告信息
    addAdLog: function addAdLog() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this, r;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                _this = _this6;_context5.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/ad/logAdd"),
                    method: 'POST',
                    data: {
                      openid: _this6.globalData.openid,
                      platform: _this6.globalData.projectId } }));case 3:r = _context5.sent;



                _this.globalData.illegal_ad_number++;case 5:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    // 增加免费不看广告信息
    addFreeAdLog: function addFreeAdLog() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this, r;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                _this = _this7;_context6.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/ad/logAdd"),
                    method: 'POST',
                    data: {
                      openid: _this7.globalData.openid,
                      platform: _this7.globalData.projectId,
                      type: 2 } }));case 3:r = _context6.sent;



                _this.globalData.illfree_ad_num++;case 5:case "end":return _context6.stop();}}}, _callee6);}))();
    },


    //存储数据埋点分析内容
    //type : 具体埋点位置内容
    // 1=>'进入小程序',2=>'进入素材详情页',3=>'点击看广告下载的次数',4=>'点击普通下载的次数'
    //        ,5=>'真实看完广告的次数',6=>'未正常看完广告的次数',7=>'广告加载异常次数',
    saveAnalysisInfo: function saveAnalysisInfo(analysis_type) {var _arguments = arguments,_this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var wallpaperId, r;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:wallpaperId = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;_context7.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/data/analysis/save"),
                    method: 'POST',
                    data: {
                      openid: _this8.globalData.openid,
                      platform: _this8.globalData.projectId,
                      type: analysis_type,
                      wallpaper_id: wallpaperId } }));case 3:r = _context7.sent;


                console.log(r);case 5:case "end":return _context7.stop();}}}, _callee7);}))();
    },

    //处理看广告分销功能
    dealPp: function dealPp(id, nickName, avatarUrl) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var r;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/dealPp"),
                    method: 'POST',
                    data: {
                      id: id,
                      platform: _this9.globalData.projectId,
                      openid: _this9.globalData.openid,
                      nickname: nickName,
                      avatar_url: avatarUrl } }));case 2:r = _context8.sent;case 3:case "end":return _context8.stop();}}}, _callee8);}))();



    } },

  globalData: {
    //环境区分类型







    projectId: 'dy',




    canShowAd: false, //是否能显示广告组件



    shareInfo: null, //分享信息
    adInfo: null, //广告信息
    openid: '', //用户openid
    hasLogin: false, //是否登录了

    ad_number: 0, //记录可看广告次数
    illegal_ad_number: 0, //记录已看广告次数
    free_ad_num: 0, //免费赠送的广告下载次数
    illfree_ad_num: 0, //已使用免费下载次数
    de_ad_number: 0, //原始可看广告次数
    adRequestRes: false //请求当前用户看广告的响应
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovQXBwLnZ1ZT81NWJjIiwid2VicGFjazovLy9DOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9UL2R5eW0v5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkvQ+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL+aQnOWbvuWQm+WJjeerryAtIOa8lOekui9BcHAudnVlPzQyYjYiLCJ1bmktYXBwOi8vL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L0FwcC52dWU/MmU5MSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovQXBwLnZ1ZT8xZTQ0Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIlZ1ZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxREFBQSx3Q0FBOEU7OztBQUc5RSxxRSx3bkNBSG1CQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkM7QUFJbkJDLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjtBQUNBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFKO0FBQ0xHLFlBREssRUFBWjs7QUFHQSxVQUFBRSxHQUFHLEVBQUNDLE1BQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMO0FBQ2E7OztBQUcvRDtBQUNzSztBQUN0SyxnQkFBZ0IsNktBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQSttQixDQUFnQiw2bUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNDbm9CO0FBQ0EseUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsYUFGQSxtQkFFQSxDQUZBLEVBRUE7QUFDQTtBQUNBLE9BSkE7OztBQU9BO0FBQ0Esc0JBVkEsQ0FVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBS0EseUJBTEE7OztBQVFBLEdBcEJBO0FBcUJBOztBQUVBLEdBdkJBO0FBd0JBOztBQUVBLEdBMUJBO0FBMkJBO0FBQ0E7QUFDQSxjQUZBLHdCQUVBO0FBQ0EscUJBREEsR0FDQSxNQURBO0FBRUE7QUFDQSw2RUFEQTtBQUVBLGtDQUZBLEdBRkEsU0FFQSxDQUZBOztBQU1BO0FBQ0E7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Ozs7O0FBUUEsbUJBVEE7Ozs7O0FBY0Esb0JBZEEsRUFjQTs7OztBQUlBLG1CQWxCQSxFQWtCQTtBQUNBLGdCQW5CQSxFQW1CQTtBQUNBLGNBcEJBLEVBb0JBO0FBQ0EsbUJBckJBLEVBcUJBOztBQUVBLGdCQXZCQSxFQXVCQTtBQUNBLHdCQXhCQSxFQXdCQTtBQUNBLGtCQXpCQSxFQXlCQTtBQUNBLHFCQTFCQSxFQTBCQTtBQUNBLG1CQTNCQSxFQTJCQTtBQUNBLHVCQTVCQSxDQTRCQTtBQTVCQSxHQXBOQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQXc0QixDQUFnQixrMkJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQTU1QjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6ImNvbW1vbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBjb25maWcgZnJvbSAnLi91dGlscy9jb25maWcuanMnO1xuXHRpbXBvcnQgcmVxdWVzdCBmcm9tICcuL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRcdGxldCBfdGhpcyAgPSB0aGlzXG5cdFx0XHR1bmkuZ2V0U3RvcmFnZSh7XG5cdFx0XHRcdGtleTogJ3VzZXJMb2dpbicsXG5cdFx0XHRcdHN1Y2Nlc3Mocikge1xuXHRcdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuaGFzTG9naW4gPSB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0fSlcblx0XHRcdHRoaXMuZ2V0QWRJbmZvKClcclxuXHRcdFx0dGhpcy5nZXRTaGFyZUlkKCk7Ly/ojrflj5bliIbkuqvkv6Hmga8ta2trZ29nb2dvXG5cdFx0XHR0aGlzLmNoZWNrU2Vzc2lvbihvcGVuaWQgPT4gey8v6I635Y+W55So5oi3b3BlbmlkLWdvZ29ra2tcblx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLm9wZW5pZCA9IG9wZW5pZDtcblx0XHRcdFx0Ly/ojrflj5blvZPliY3nlKjmiLflj6/nnIvlub/lkYrnmoTmlbDmja5cblx0XHRcdFx0dGhpcy5nZXRBZExvZ0luZm8oKVxuXHRcdFx0XHR0aGlzLnNhdmVBbmFseXNpc0luZm8oMSlcblx0XHRcdH0sdGhpcy5nbG9iYWxEYXRhLnByb2plY3RJZCk7XG5cdFx0XHRcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uSGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0fSxcblx0XHRtZXRob2RzOntcblx0XHRcdC8vIOiOt+WPluWIhuS6q+S/oeaBr1xuXHRcdFx0YXN5bmMgZ2V0U2hhcmVJZCgpIHtcblx0XHRcdFx0bGV0IF90aGlzICA9IHRoaXNcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogIGAke2NvbmZpZy5BUEl9YXBpL3cvZ2V0U2hhcmVJbmZvYCxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKHIuZXJyb3JfY29kZSA9PT0gMCkge1xuXHRcdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuc2hhcmVJbmZvID0gci5kYXRhXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8v5qOA5p+lb3BlbmlkXG5cdFx0XHRjaGVja1Nlc3Npb24oY2FsbGJhY2sscHJvamVjdElkKXtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpc1xuXHRcdFx0XHR1bmkuY2hlY2tTZXNzaW9uKHtcblx0XHRcdFx0XHRzdWNjZXNzKHIpIHtcblx0XHRcdFx0XHRcdHVuaS5nZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFyLmRhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmxvZ2luQWN0aW9uKGNhbGxiYWNrLHByb2plY3RJZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHIuZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmxvZ2luQWN0aW9uKGNhbGxiYWNrLHByb2plY3RJZCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmYWlsKGVycikge1xuXHRcdFx0XHRcdFx0X3RoaXMubG9naW5BY3Rpb24oY2FsbGJhY2sscHJvamVjdElkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBfdGhpcy5sb2dpbkFjdGlvbihjYWxsYmFjayxwcm9qZWN0SWQpO1xuXHRcdFx0fSxcblx0XHRcdC8v6I635Y+Wb3BlbmlkXG5cdFx0XHRsb2dpbkFjdGlvbihjYWxsYmFjayxwcm9qZWN0SWQpIHtcblx0XHRcdFx0dW5pLmxvZ2luKHtcblx0XHRcdFx0XHRhc3luYyBzdWNjZXNzKHIpIHtcblx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdFx0dXJsOiBgJHtjb25maWcuQVBJfWFwaS91c2VyL29wZW5pZC9iaW5kYCxcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdGNvZGU6IHIuY29kZSxcblx0XHRcdFx0XHRcdFx0XHRwcm9qZWN0SWQ6cHJvamVjdElkXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocjIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocjIuZGF0YS5lcnJvcl9jb2RlID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogJ29wZW5pZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHIyLmRhdGEuZGF0YS5vcGVuaWRcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2socjIuZGF0YS5kYXRhLm9wZW5pZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+iOt+WPlm9wZW5pZOWksei0pScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Ly/lrZjlgqjnlKjmiLfkv6Hmga9cblx0XHRcdGFzeW5jIHNhdmVVc2VySW5mbyhhdmF0YXJVcmwsbmlja05hbWUpIHtcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdXNlci9zYXZlSW5mb2AsXG5cdFx0XHRcdFx0bWV0aG9kOidQT1NUJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRvcGVuaWQ6IHRoaXMuZ2xvYmFsRGF0YS5vcGVuaWQsXG5cdFx0XHRcdFx0XHRhdmF0YXJVcmw6YXZhdGFyVXJsLFxuXHRcdFx0XHRcdFx0bmlja05hbWU6bmlja05hbWUsXG5cdFx0XHRcdFx0XHRwbGF0Zm9ybTp0aGlzLmdsb2JhbERhdGEucHJvamVjdElkXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHIpIFxuXHRcdFx0fSxcblx0XHRcdC8v6I635Y+W5bm/5ZGKXG5cdFx0XHRnZXRBZEluZm8oKXtcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpc1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiBgJHtjb25maWcuQVBJfWFwaS93L2dldEFkSW5mb2AsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cHJvamVjdElkOnRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1ldGhvZDonUE9TVCcsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuYWRJbmZvID0gcmVzLmRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5jYW5TaG93QWQgPSByZXMuZGF0YS5kYXRhLm9wZW5fYWQgPT0gMT90cnVlOmZhbHNlXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhfdGhpcy5nbG9iYWxEYXRhLmFkSW5mbylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDojrflj5bnnIvlub/lkYrkv6Hmga9cblx0XHRcdGFzeW5jIGdldEFkTG9nSW5mbygpIHtcblx0XHRcdFx0bGV0IF90aGlzICA9IHRoaXNcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogIGAke2NvbmZpZy5BUEl9YXBpL2FkL2xvZ1NlYXJjaGAsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YTp7XG5cdFx0XHRcdFx0XHRvcGVuaWQ6dGhpcy5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdHBsYXRmb3JtOnRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmFkX251bWJlciA9IHIuZGF0YS5hZF9udW1iZXJcblx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5pbGxlZ2FsX2FkX251bWJlciA9IHIuZGF0YS5pbGxlZ2FsX2FkX251bWJlclxuXHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmZyZWVfYWRfbnVtID0gci5kYXRhLmZyZWVfYWRfbnVtXG5cdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuaWxsZnJlZV9hZF9udW0gPSByLmRhdGEuaWxsZnJlZV9hZF9udW1cblx0XHRcdFx0X3RoaXMuZ2xvYmFsRGF0YS5kZV9hZF9udW1iZXIgPSByLmRhdGEuZGVfYWRfbnVtYmVyXG5cdFx0XHRcdF90aGlzLmdsb2JhbERhdGEuYWRSZXF1ZXN0UmVzID0gdHJ1ZVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOWinuWKoOeci+W5v+WRiuS/oeaBr1xuXHRcdFx0YXN5bmMgYWRkQWRMb2coKSB7XG5cdFx0XHRcdGxldCBfdGhpcyAgPSB0aGlzXG5cdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6ICBgJHtjb25maWcuQVBJfWFwaS9hZC9sb2dBZGRgLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6e1xuXHRcdFx0XHRcdFx0b3BlbmlkOnRoaXMuZ2xvYmFsRGF0YS5vcGVuaWQsXG5cdFx0XHRcdFx0XHRwbGF0Zm9ybTp0aGlzLmdsb2JhbERhdGEucHJvamVjdElkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmlsbGVnYWxfYWRfbnVtYmVyKytcblx0XHRcdH0sXG5cdFx0XHQvLyDlop7liqDlhY3otLnkuI3nnIvlub/lkYrkv6Hmga9cblx0XHRcdGFzeW5jIGFkZEZyZWVBZExvZygpIHtcblx0XHRcdFx0bGV0IF90aGlzICA9IHRoaXNcblx0XHRcdFx0Y29uc3QgciA9IGF3YWl0IHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogIGAke2NvbmZpZy5BUEl9YXBpL2FkL2xvZ0FkZGAsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YTp7XG5cdFx0XHRcdFx0XHRvcGVuaWQ6dGhpcy5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdHBsYXRmb3JtOnRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWQsXG5cdFx0XHRcdFx0XHR0eXBlOjIsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0XHRfdGhpcy5nbG9iYWxEYXRhLmlsbGZyZWVfYWRfbnVtKytcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly/lrZjlgqjmlbDmja7ln4vngrnliIbmnpDlhoXlrrlcblx0XHRcdC8vdHlwZSA6IOWFt+S9k+Wfi+eCueS9jee9ruWGheWuuVxuXHRcdFx0IC8vIDE9Pifov5vlhaXlsI/nqIvluo8nLDI9Pifov5vlhaXntKDmnZDor6bmg4XpobUnLDM9Pifngrnlh7vnnIvlub/lkYrkuIvovb3nmoTmrKHmlbAnLDQ9Pifngrnlh7vmma7pgJrkuIvovb3nmoTmrKHmlbAnXG5cdFx0XHQgLy8gICAgICAgICw1PT4n55yf5a6e55yL5a6M5bm/5ZGK55qE5qyh5pWwJyw2PT4n5pyq5q2j5bi455yL5a6M5bm/5ZGK55qE5qyh5pWwJyw3PT4n5bm/5ZGK5Yqg6L295byC5bi45qyh5pWwJyxcblx0XHRcdGFzeW5jIHNhdmVBbmFseXNpc0luZm8oYW5hbHlzaXNfdHlwZSx3YWxscGFwZXJJZD0wKSB7XG5cdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6IGAke2NvbmZpZy5BUEl9YXBpL3cvZGF0YS9hbmFseXNpcy9zYXZlYCxcblx0XHRcdFx0XHRtZXRob2Q6J1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdG9wZW5pZDogdGhpcy5nbG9iYWxEYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdHBsYXRmb3JtOnRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWQsXG5cdFx0XHRcdFx0XHR0eXBlOmFuYWx5c2lzX3R5cGUsXG5cdFx0XHRcdFx0XHR3YWxscGFwZXJfaWQ6d2FsbHBhcGVySWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2cocikgXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvL+WkhOeQhueci+W5v+WRiuWIhumUgOWKn+iDvVxuXHRcdFx0YXN5bmMgZGVhbFBwKGlkLG5pY2tOYW1lLGF2YXRhclVybCkge1xuXHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiBgJHtjb25maWcuQVBJfWFwaS93L2RlYWxQcGAsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0aWQ6IGlkLFxuXHRcdFx0XHRcdFx0cGxhdGZvcm06IHRoaXMuZ2xvYmFsRGF0YS5wcm9qZWN0SWQsXG5cdFx0XHRcdFx0XHRvcGVuaWQ6IHRoaXMuZ2xvYmFsRGF0YS5vcGVuaWQsXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogbmlja05hbWUsXG5cdFx0XHRcdFx0XHRhdmF0YXJfdXJsOiBhdmF0YXJVcmwsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGdsb2JhbERhdGE6e1xuXHRcdFx0Ly/njq/looPljLrliIbnsbvlnotcblx0XHRcdC8vICNpZmRlZiBNUC1RUVxuXHRcdFx0cHJvamVjdElkOidxcScsXG5cdFx0XHQvLyAjZW5kaWZcblx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cblx0XHRcdHByb2plY3RJZDond3gnLFxuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xuXHRcdFx0cHJvamVjdElkOidkeScsXG5cdFx0XHQvLyAjZW5kaWZcblx0XHRcdC8vICNpZmRlZiBNUC1LVUFJU0hPVVxuXHRcdFx0cHJvamVjdElkOidrcycsXG5cdFx0XHQvLyAjZW5kaWZcblx0XHRcdGNhblNob3dBZCA6IGZhbHNlLC8v5piv5ZCm6IO95pi+56S65bm/5ZGK57uE5Lu2XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRzaGFyZUluZm86bnVsbCwvL+WIhuS6q+S/oeaBr1xuXHRcdFx0YWRJbmZvOm51bGwsLy/lub/lkYrkv6Hmga9cblx0XHRcdG9wZW5pZDonJywvL+eUqOaIt29wZW5pZFxuXHRcdFx0aGFzTG9naW46ZmFsc2UsLy/mmK/lkKbnmbvlvZXkuoZcblx0XHRcdFxuXHRcdFx0YWRfbnVtYmVyOjAsLy/orrDlvZXlj6/nnIvlub/lkYrmrKHmlbBcblx0XHRcdGlsbGVnYWxfYWRfbnVtYmVyOjAsLy/orrDlvZXlt7LnnIvlub/lkYrmrKHmlbBcblx0XHRcdGZyZWVfYWRfbnVtOjAsLy/lhY3otLnotaDpgIHnmoTlub/lkYrkuIvovb3mrKHmlbBcblx0XHRcdGlsbGZyZWVfYWRfbnVtOjAsLy/lt7Lkvb/nlKjlhY3otLnkuIvovb3mrKHmlbBcblx0XHRcdGRlX2FkX251bWJlcjowLC8v5Y6f5aeL5Y+v55yL5bm/5ZGK5qyh5pWwXG5cdFx0XHRhZFJlcXVlc3RSZXM6ZmFsc2UsLy/or7fmsYLlvZPliY3nlKjmiLfnnIvlub/lkYrnmoTlk43lupRcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRpbWFnZSB7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cdFxuXHQubG9hZGluZyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0cGFkZGluZzogMjBycHggMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICM5OTk7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0fVxuXHRcblx0LmxvYWRpbmctYmcge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXHQubG9hZGluZy1iZyBpbWFnZSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHotaW5kZXg6IDE7XG5cdH1cblx0LmxvYWRpbmctYmc6YmVmb3JlIHtcblx0XHRhbmltYXRpb246IGxvYWRpbmdBbmltYXRpb24gaW5maW5pdGUgMXM7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0d2lkdGg6IDYwcnB4O1xuXHRcdGhlaWdodDogNjBycHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR6LWluZGV4OiAwO1xuXHRcdG1hcmdpbjogLTMwcnB4IDAgMCAtMzBycHg7XG5cdFx0Ly8gYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUJiZEpSRUZVZUY3dG12OVAyMFlVd08rZDR4Q2dVVHBnbGRhcGxHMjBTUnhqV0NOVm82TVNXN1g5c1BYUDNRK1Qxa2wwWldxN0tpdkZqa05ZMUxHeVVYV1UwZ0pMWXp1K202NUtxdURhOUM2NUVDTGlIOG56Ky9LNTk5NmQzd0hvbEQ5d3l1TkhBd0NERERqbEJBWWxjTW9UWU5BRUJ5VXdLSUVlRXpBTVkzUnNiTXhaV2xxcTk4S1ZucGVBcnVzM200RlRTdi9ER05kODMvK25XcTMrdTdHeFVlczJsQk1GSUJnc3BmU1pxcXJicnV0dTJiYnRkZ1BHaVFiUWtobFZWVlVmcjZ5c2JNaUcwQmNBV29KKzRmdituNlZTNmFrc0VQMEc0RTNjaXFLc1AzcjBhRjBHaEo0RG1KK2ZIOTdkM1IySngrUERBRERpZWQ0NWpQSFo5d1VuQzBMUEFZUUZ5clpHaE5BNVFzaEZoTkNaS0JneUlKeElBTTJBOC9tODZubmVwNVRTenlpbE9Bd0VBTmltYVQ1K1g4WkUvWDZpQWJTQVNMbXVPMGNwVFlZRVF1djErcjIxdGJXZGRpRDBCUUFXV0RxZFRzYmo4U3RoRUFnaEw0ZUhoKzhYQ2dWUEZFSmJBSFJkdjJCWjFxYW9zVTdsajRJQUFIK1pwbW1LMmhBR01EYzNkN1plcnk4QXdJN25lZXZ0cHA2b28wMTV3ekJZYzd3YTBROStOVTF6VjBTM01BRERNSFJDeUZUTEtXMlRVbHJxMWxFMUxKaHNObnRKVVpSMDhEY0FxSmltdWRZMUFLd3JPNDd6RlVJb0hqUmlXZFlQSW9ZN2xkVTA3U3JHK0Z5ckhnRFlOMDN6dG9odW9ReklaREpUc1ZoTUR6SHd4TEtzVlJIRG5jcXlQb1FRbWczcXFkVnF2MVFxbFQxZS9VSUFkRjAzRUVLVFFlVkRRME4zQ29YQ0sxNmpNdVFhMmJpSUVCcHExU2Q2T0JJQ01ETXpNMDhwSFc4MVNBalp0bTM3dm95Z1JIVUUreEY3SHdDZW1xWlo0TlVsQkVEWDlXK0Q5UzlLbk5jeEhybHNObnRSVVpTWlR2b0FONERwNmVtaFJDTHhUZEF4VlZYdlAzejRjSnZIWWRreStYeCt3bkdjTHpwcHlOd0FNcG5NZUN3V213OGFtNWlZK0xGWDh6ejJKYm0vdjM4ajZKUG5lYmZMNWZJK0QzQnVBUGw4UHVVNHp2V1RCSUNWdks3cjM0ZWNCN2dQUk53QTJDY3FJWVNkQVE0OXlXVHk1N3QzNzc3bW9TMWJKcW9zdTVJQm1xYkZNY2FzQ1I1NmVyRUZOaDNRTk8wTXhwaHRoWWVlZzRPRFc3d1RaZTRNUUFoaFhkZS9DMW5GQjVabFBaTzl1ano2Y3JuY0dBQmM2NlFzUlFBZ3d6QnVFRUtHV3czMmNodWNuWjI5N1B2KzVXUFpCWmdSVGRNK3h4aC8zR3FRemU2THhlSURuaFdUTFpQTDViNEVnQTlhOVdLTW42K3VydDdqdFNXYUFaOFFRbkt0eWdHZ1pwcm1MVjZEc3VTaTZwOVN1bFlzRml1OGRvUUFSTlVjSVdUVnR1MG52RVpseUVXbGZ5d1dXMTVaV1huSmEwTUl3T0xpWW14bloyZVJVcHBvTlVBSWVXWGI5aDFlbzUzS1RVMU5KWkxKNUVMUUQ0VFFnV1ZaU3lMNmhRQXd4YmxjYmhvQU1rRWp4NWtGVWF2diszNjVWQ3I5MFZVQUxBdTJ0N2V2QXdDYjNiOTlBSUE0anZQYit2cjZjeEVIUkdYWlNNNzMvV3ZCTVRtN1dVNGtFc3VpZzFIaERHQU9HNGJ4VGpOc0JPSllsdldUYUZBQzhtQVl4dGZCclppOTMrNzlRRnNBbUQzRE1CWUlJYW1RVW5ocDIvYXlRRkRjb3BxbUxZUmRtd0hBbm1tYXpDYmhWdFlRYkJjQXk0TEk2U3hDeUFXQUI2SVQyaWpuMCtuMCtYZzhQa3NwVmNKa1BNLzd2Vnd1YjRrRy95Wnoybm1wK1U1VU0ycit6azZKSXlNam0rMStMRFc2L1NWS0tic2pESDA2YmI0ZEFXajBneXVFa1BOUkRsSktQVXJwMzY3cmJ2SU9LMW5ncVZScWtoQXlHYkxWdlRVbGV1Z0o4N0ZqQUV4cDFMQTBhSkJkcG1DTWQycTEydFBnd0lKMWQ4ZHhVcXpHTWNZZkhoVTQweXRyRmlrRlFDTVRqdW9KblZUYU8rOVNTaDhYaTBWYmhsSnBBQm9RUnV2MWVpNTRZU0hEVWFhRFVsb2xoSlJPL0wvSU5DNHQyTVhGbUtUZ1hZengxdDdlWG9WMzBNRnJWMm9HQkkxbXM5bVBBT0JDdXhsQktkMVZGR1dyV3ExdVZTb1ZoemNvRWJtdUFtZzZ3Z2FxcnV1Tys3NC9vU2pLZU5SK3pqNnRBZUFGKzdoU1ZYWHZPTWJ0eHdJZ3VDSnN4Qjc4MitqbzZPdENvVkFWV1QwWnNqMEJJTU54V1RvR0FHU1I3RmM5Z3d6bzE1V1Q1ZmNnQTJTUjdGYzlnd3pvMTVXVDVmZXB6NEQvQWFiZGlWOWd5R0hxQUFBQUFFbEZUa1N1UW1DQycpIG5vLXJlcGVhdCAxMDAlLzEwMCU7XG5cdH1cblx0XG5cdC5sb2FkaW5nLWJnLndoaXRlOmJlZm9yZSB7XG5cdFx0d2lkdGg6IDEwMHJweDtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0XHRtYXJnaW46IC01MHJweCAwIDAgLTUwcnB4O1xuXHRcdC8vIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElBcnM0YzZRQUFCSHhKUkVGVWVGN3RtdG1ySEVVVXhyL1BmY1ZkVUhHUEM3ajdJSzVnRkgxUS8xd2ZoRVJJVElURW9BOFJZb3doYXFJSk1WR3phUklWUC9td0JpWkY5OXc2UFRYZGZaaytNTndMVTNPV1g1MDZWWDJxaVRVWHJubjhtQUJNR2JEbUJLWWxzT1lKTUJYQmFRbE1TMkJnQXBKdUJuQ1o1RDlEdURMNEVwRDAwVnpnZndDNEJPQm5BTCtROVA4cmxiRUJ5SU05Q2VBVWdPTWsvMW9GaWJFRG1NWDhKNEFqSkgrb0RXR3pBSmpGL1J1QTcwbWVxQVZpc3dHWXhYMkk1S0VhRU1ZQTRFWUFOd0dZL2IwWHdPMEZ3VldCTURpQXBrRFQxbWdRRHdPNFpRR01wU0dNRXNBc1lFblhBbmdNd09NQXJtb0JjWURra1lLTWFSd3lhZ0J6SUc0RDhDS0FXeHVpRUlBOUpIL3RBbUZUQUhCZ2toejh5eTBRemdEWVMvTHZLSVJPQUNROVNQSlkxTml5NHplQThDUEpyNk0yd2dBa3VVSy9DY0FwNXlMVUtmV2lqczR0QnhmSFYxcCsvem5KM3lPNnV3QjRGc0FqYzBhY0NkK3M2cWphc2tzOEFlQ3BodThPa3p5NE1nQ3BLbThGY0YxdWhPVEhFY1BManBYa0xIQTJ6TXQ1a2pzanVrTVpJTWt6N3d6STVTakovUkhEeTQ1MUhRTHdRb09lejBpZUs5VWZCZkE4Z0ljYWxPOGllYmJVYUkxeEtSdmZCbkI5cGk5ME9Jb0NlQTNBWFpuQlV5VDMxZ2dxcWtOU1hvK3M0Z1RKTDB0MVJRRzgzN0QrUThSTEhTc1pKOGxINWVlV3FRUEZBQ1E1MWQ1cmNNd0hFRGN0ZWhkSmR3TjROVGNjS2NnUkFFNTlMNEZjUGhtcW55ZkpUNUR2TnZpMGsrVDVraG1KQVBCNS9LMlJBYkQvSHpiNFZId2dpZ0J3OTlabmdGdytKWG14aEhidE1RdVc1VW95d0ljZkY4RmNldDhDWnc1SWNxL0FXMkV1MjBzN3lwRU04UFA0QnczRzlwRjA5N1oza1hRbmdOZVhXWmJGQUd4RWtndU9DOCs4RExrTlBnbkFueXRrSmJ0QUF2QVNnQWN5ZXlkSjd1dDkrditma0RjQTNKSFpQazF5VDZrLzBReDRGTUF6bWZKTEpMZVhHcXcxYnNINlAwanljS21kS0lDMk5iZWY1TkZTb3pYR1NXcE1md0M3U2JwRFZDUlJBTmVrcW50RHB2MHN5VjFGRmlzTWttVDdic3JrZmx3Z3VTTmlJZ1FnMVlFdEFKNXVNTkpiRml5WS9XOUpmcmRxQU00Q253aDlNSnFYZndGOFFmSjB4SUhvMk5TUzg5YVh0OGw5cyt6MER6Vkd3eG1Rc3FDcEdQb3IzL052aXdaVk9sNlMvWDJuWVN1MmlrNzNBMTBCK0hkZWczNCt5T1VNeWQybFFVWEdTYkxOcG1zemQ0QTgrODdDa0hRQ2tMSmdVWGZXZC9rK0lZWTZ0RzJlUzdvL3RiK3ViaG56RmNuam9jalQ0TTRBRW9TMnJXam1pMjl3ajNWOVdFclYzaDFnTno3YVpLbml1eFNBQk1HM05aNmhObkZSK2ltQktHcFdwc0RkZS9RbjMrcm03WVFPUFUwT0xnMGdRV2hybHVZMmZZbmlqL3QyVnpRc1VuVjNUZkVhdjJlRHdLMjNTaSt5Q29DQ210QmxlUzc2alYrWE9WQkRhVFVBQ1lMUEJuNVd5QzhzYXZocUhYNVh5TGRRNDM1RkpsMWErT0xDenc0MXhMdUtxN3l2dnFxK09sYzFBL0pJSmQwSHdDQzZab1MzVVFmdTErUXUxeUNaNjFncGdKa3hTUzV1N2lxN2plMi9iZnU1Wjlkdmd2bVc2VndmN2ZaZUFEUmtSbjY3NUNFWFNYcU45eXFEQU9nMXdnMk1UUURHTkJ0RCtESmx3QkRVeDJSenlvQXh6Y1lRdmt3Wk1BVDFNZGxjK3d6NEQ2VnllMUFoMlVveUFBQUFBRWxGVGtTdVFtQ0MnKSBuby1yZXBlYXQgMTAwJS8xMDAlO1xuXHR9XG5cdFxuXHRAa2V5ZnJhbWVzIGxvYWRpbmdBbmltYXRpb257XG5cdFx0ZnJvbSB7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcblx0XHR9XG5cdFx0dG8ge1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHR9XG5cdH1cblx0XG5cdC5sYWJlbC1yZWwge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXHQubGFiZWwtZ2lmIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ei1pbmRleDogOTtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC42KTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAyNHJweDtcblx0XHRyaWdodDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0cGFkZGluZzogMCAxNHJweDtcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnJweDtcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJycHg7XG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NjY2OTk3NzMyNTRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9