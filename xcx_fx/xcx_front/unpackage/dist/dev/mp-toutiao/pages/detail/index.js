(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/index"],{

/***/ 88:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/main.js?{"page":"pages%2Fdetail%2Findex"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/index.vue */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 89:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=12dbf08d&scoped=true& */ 90);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 92);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ 94);
/* harmony import */ var _index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=12dbf08d&lang=scss&scoped=true& */ 96);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12dbf08d",
  null,
  false,
  _index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=template&id=12dbf08d&scoped=true& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=12dbf08d&scoped=true& */ 91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_12dbf08d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 91:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=template&id=12dbf08d&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 92:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 93);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));


















































































































var _config = _interopRequireDefault(__webpack_require__(/*! ../../utils/config.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ../../utils/request.js */ 13));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var app = getApp();
var rewardedVideoAd = null; //快手激励广告组件

// 在页面中定义激励视频广告 微信、qq、抖音平台
var videoAd = null;


// 在页面中定义插屏广告
var interstitialAd = null;var _default =

{
  data: function data() {
    return {
      id: 0,
      btnsShow: true,
      src: '', //看广告保存的图片路径
      src2: '', //普通下载的图片路径
      type: 0, // 类型 0 手机壁纸 1 动态壁纸 2 背景图 3 头像 5 表情包
      downloadVisible: false,
      img_type: 1, //素材类型 1-手机壁纸、2-动态壁纸、3-背景图、4-头像、5-表情包

      selfnterval: null, //定义循环实例插屏对象的逻辑
      hasShowChaping: null, //定义第一次展示插屏内容的逻辑
      selfntervalJili: null, //定义循环实例激励对象的逻辑

      userInfo: {},
      hasUserInfo: false,

      dealCollection: 0, //0-系统状态未正常  1-收藏 2-取消收藏
      canZan: true, //是否能点赞，默认可以

      localAdType: 1, //当前下载是普通下载还是看广告下载 默认普通下载

      ad_number: 3,
      free_ad_num: 10,

      openidNeterval: null, //定义循环获取openid的逻辑
      adNeterval: null //定义循环获取广告的逻辑
    };
  },
  onLoad: function onLoad(options) {
    this.src = options.src || '';
    this.src2 = options.src2 || '';
    this.id = options.id || 0;
    this.type = options.type || 0;
    this.img_type = options.img_type || 1;

    app.saveAnalysisInfo(2, this.id);
    console.log(options);

    var _this = this;

    this.openidNeterval = setInterval(function () {
      if (app.globalData.openid) {
        //根据openid判断当前用户是否授权过，是的话就无需再授权
        _this.getUserSystemInfo();

        //查询当前用户是否有收藏素材
        _this.checkCollection();

        //查询当前用户是否有点赞过
        _this.checkZan();

        clearInterval(_this.openidNeterval);
      }
    }, 10);


    ////////////////////////////////////
    //激励、插屏广告组件实例
    this.selfnterval = setInterval(function () {
      if (app.globalData.adInfo != null && app.globalData.adInfo.chaping != '') {
        if (app.globalData.canShowAd) {


















          interstitialAd = tt.createInterstitialAd({
            adUnitId: app.globalData.adInfo.chaping });


        }

        clearInterval(_this.selfnterval);
      }
    }, 200);

    this.selfntervalJili = setInterval(function () {
      if (app.globalData.adInfo != null && app.globalData.adInfo.jili != '') {
        if (app.globalData.canShowAd) {
          //能实例广告组件的情况下才处理















































          var info = uni.getSystemInfoSync();
          if (info.appName.toUpperCase() === 'DOUYIN') {
            rewardedVideoAd = uni.createRewardedVideoAd({
              adUnitId: app.globalData.adInfo.jili });

            //可以看激励广告
            try {
              if (rewardedVideoAd.closeFunc) {
                rewardedVideoAd.offClose(rewardedVideoAd.closeFunc);
              }
            } catch (e) {
              uni.showToast({
                title: '保存失败！！',
                icon: 'none' });

            }
            rewardedVideoAd.closeFunc = function (res) {
              // 用户点击了【关闭广告】按钮
              // 小于基础库版本，res 是一个 undefined
              if (res && res.isEnded || res === undefined) {// 正常播放结束，可以下发游戏奖励

                _this.afterAdOperate();

              } else {
                _this.stopAdOperate();
              }
            };
            rewardedVideoAd.onClose(rewardedVideoAd.closeFunc);
          } else {
            app.globalData.canShowAd = false;
          }

        }
        clearInterval(_this.selfntervalJili);
      }
    }, 200);

    ////////////////////////////////////	

    this.adNeterval = setInterval(function () {
      if (app.globalData.adRequestRes) {
        _this.ad_number = app.globalData.de_ad_number;
        _this.free_ad_num = app.globalData.free_ad_num;
        clearInterval(_this.adNeterval);
      }
    }, 10);


  },
  onUnload: function onUnload() {




  },
  onShow: function onShow() {
    var _this = this;












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
  methods: {
    //看完广告后的操作函数
    afterAdOperate: function afterAdOperate() {
      this.downloadStart();
      //走分销处理
      app.dealPp(this.id, this.userInfo.nickName, this.userInfo.avatarUrl);
      //增加看广告记录
      app.addAdLog();
      //数据统计
      app.saveAnalysisInfo(5, this.id);
    },
    //中途退出看广告的操作函数
    stopAdOperate: function stopAdOperate() {
      //数据统计
      app.saveAnalysisInfo(6, this.id);
      uni.showToast({
        title: '请看完广告才能下载',
        icon: 'none' });

    },

    getUserProfile: function getUserProfile(e) {
      var that = this;
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      uni.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: function success(res) {
          console.log(res.userInfo);
          that.userInfo = res.userInfo;
          that.hasUserInfo = true;
          //存储用户信息
          app.saveUserInfo(res.userInfo.avatarUrl, res.userInfo.nickName);
          console.log(that.userInfo);
          that.downloadShow();
        },
        fail: function fail() {
          uni.showToast({
            title: '请授权更好体验小程序',
            icon: 'none' });

        } });

    },


    getUserSystemInfo: function getUserSystemInfo() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this, r;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this = _this2;_context.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/user/getInfo"),
                    method: 'POST',
                    data: {
                      openid: app.globalData.openid,
                      platform: app.globalData.projectId } }));case 3:r = _context.sent;



                if (r.error_code === 0) {
                  _this.hasUserInfo = true;
                  _this.userInfo = r.data;
                } else {




















                }case 5:case "end":return _context.stop();}}}, _callee);}))();
    },
    //处理下载统计功能
    addDownCount: function addDownCount() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var r;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/addDownCount"),
                    method: 'POST',
                    data: {
                      id: _this3.id } }));case 2:r = _context2.sent;case 3:case "end":return _context2.stop();}}}, _callee2);}))();


    },

    //处理收藏功能
    checkCollection: function checkCollection() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var r;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!
                app.globalData.openid) {_context3.next = 5;break;}_context3.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/checkCollection"),
                    method: 'POST',
                    data: {
                      id: _this4.id,
                      openid: app.globalData.openid,
                      platform: app.globalData.projectId } }));case 3:r = _context3.sent;



                if (r.error_code === 0) {
                  _this4.dealCollection = 2; //已经收藏了，改成取消收藏
                } else {
                  _this4.dealCollection = 1; //待收藏
                }case 5:case "end":return _context3.stop();}}}, _callee3);}))();

    },
    doCollection: function doCollection() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var r;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!(
                app.globalData.openid && _this5.dealCollection != 0)) {_context4.next = 12;break;}_context4.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/doCollection"),
                    method: 'POST',
                    data: {
                      id: _this5.id,
                      openid: app.globalData.openid,
                      platform: app.globalData.projectId,
                      status: _this5.dealCollection,
                      type: _this5.img_type } }));case 3:r = _context4.sent;if (!(


                r.error_code == 0)) {_context4.next = 9;break;}
                _this5.dealCollection = _this5.dealCollection == 1 ? 2 : 1; //成功后将当前处理状态改变
                return _context4.abrupt("return", uni.showToast({
                  title: '操作成功',
                  icon: 'none' }));case 9:return _context4.abrupt("return",


                uni.showToast({
                  title: '操作失败',
                  icon: 'none' }));case 10:_context4.next = 13;break;case 12:return _context4.abrupt("return",



                uni.showToast({
                  title: '请稍后再试',
                  icon: 'none' }));case 13:case "end":return _context4.stop();}}}, _callee4);}))();


    },
    //处理点赞功能
    checkZan: function checkZan() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var r;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:if (!
                app.globalData.openid) {_context5.next = 5;break;}_context5.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/checkZan"),
                    method: 'POST',
                    data: {
                      id: _this6.id,
                      openid: app.globalData.openid,
                      platform: app.globalData.projectId } }));case 3:r = _context5.sent;



                if (r.error_code !== 0) {
                  _this6.canZan = true; //能点赞
                } else {_this6.canZan = false;} //不能点赞
              case 5:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    doZan: function doZan() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var r;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:if (!(
                app.globalData.openid && _this7.dealCollection != 0)) {_context6.next = 12;break;}_context6.next = 3;return (
                  (0, _request.default)({
                    url: "".concat(_config.default.API, "api/w/doZan"),
                    method: 'POST',
                    data: {
                      id: _this7.id,
                      openid: app.globalData.openid,
                      platform: app.globalData.projectId,
                      status: _this7.dealCollection } }));case 3:r = _context6.sent;if (!(


                r.error_code == 0)) {_context6.next = 9;break;}
                _this7.canZan = false; //成功后将当前处理状态改变
                return _context6.abrupt("return", uni.showToast({
                  title: '操作成功',
                  icon: 'none' }));case 9:return _context6.abrupt("return",


                uni.showToast({
                  title: '操作失败',
                  icon: 'none' }));case 10:_context6.next = 13;break;case 12:return _context6.abrupt("return",



                uni.showToast({
                  title: '请稍后再试',
                  icon: 'none' }));case 13:case "end":return _context6.stop();}}}, _callee6);}))();


    },
    showRewardedVideoAd: function showRewardedVideoAd() {
      var _this = this;
      rewardedVideoAd.show().
      catch(function () {
        rewardedVideoAd.load().
        then(function () {return rewardedVideoAd.show();}).
        catch(function (err) {
          app.saveAnalysisInfo(7, _this.id);
          uni.showToast({
            title: '广告显示失败',
            icon: 'none' });

        });
      });
    },
    get_openSetting: function get_openSetting() {
      var _this = this;
      uni.showModal({
        title: "温馨提示",
        content: "为了更好的体验小程序,请先授权~",
        showCancel: false,
        success: function success(res) {
          uni.openSetting({
            success: function success(e) {
              if (e.authSetting['scope.userInfo']) {
                uni.login({
                  success: function success(res) {
                    _this.code = res.code;
                    uni.getUserInfo({
                      withCredentials: true,
                      success: function success(e) {
                        //存储用户信息
                        _this.downloadShow();
                        _this.hasUserInfo = true;
                        _this.userInfo = e.userInfo;
                        app.saveUserInfo(e.userInfo.
                        avatarUrl, e.userInfo.
                        nickName);
                      } });

                  } });

              } else {//设置中未打开个人信息则继续调取打开设置授权
                uni.showToast({
                  title: '请授权更好体验小程序',
                  icon: 'none' });

              }
            } });

        } });


    },
    toggleBtns: function toggleBtns() {
      this.btnsShow = !this.btnsShow;
    },
    backAction: function backAction() {
      uni.navigateBack({
        fail: function fail(res) {
          console.log(res);
          console.log("navigateBack调用失败");
          uni.switchTab({
            url: '/pages/index/index' });

        } });

    },
    downloadShow: function downloadShow() {
      var _this = this;
      //在点击下载的时候判断用户是否授权相册，没有的话需授权相册权限后才能做正常操作
      this.authPhoto(function () {

        _this.downloadVisible = true;





        console.log('授权相册处理');
      });
    },
    downloadHide: function downloadHide() {
      this.downloadVisible = false;
    },
    downloadAction: function downloadAction(type) {
      var that = this;
      if (type == 1) {
        this.localAdType = 1;
        uni.showLoading({
          title: '正在下载中...' });

        setTimeout(function () {
          that.downloadStart();
        }, 1500);
        app.saveAnalysisInfo(4, that.id);
      } else {
        //系统能正常看广告且满足在看广告次数范围内
        if (app.globalData.canShowAd && app.globalData.illegal_ad_number < app.globalData.ad_number) {
          that.localAdType = 0;
          that.showRewardedVideoAd();
          app.saveAnalysisInfo(3, that.id);
        } else {
          //如果原始次数看完，走免费次数判断是否能免费下载
          if (app.globalData.illfree_ad_num < app.globalData.free_ad_num) {
            that.localAdType = 0;
            that.downloadStart();
            app.addFreeAdLog();
          } else {
            return uni.showToast({
              title: '今日可下载次数用完',
              icon: 'none' });

          }
        }
      }


    },
    downloadStart: function downloadStart() {
      uni.showLoading({
        title: '正在下载中...' });

      //看广告的走原图原视频下载
      console.log(this.localAdType);
      var that = this;
      that.downloadHide(); //隐藏弹窗然后下载 
      if (this.type == 1 && this.localAdType == 0) {
        uni.downloadFile({
          url: this.src,
          success: function success(r) {
            console.log(r);
            if (r.statusCode === 200) {
              uni.saveVideoToPhotosAlbum({
                filePath: r.tempFilePath,
                success: function success() {
                  //总下载统计
                  app.saveAnalysisInfo(8, that.id);
                  uni.hideLoading();
                  uni.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 1000 });

                },
                fail: function fail(e) {
                  uni.hideLoading();
                  console.log(e);
                  if (e.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || e.errMsg ===
                  "saveImageToPhotosAlbum:fail auth deny" || e.errMsg ===
                  "saveImageToPhotosAlbum:fail authorize no response") {
                    uni.showToast({
                      title: '需要开启相册权限',
                      icon: 'success',
                      duration: 1000 });

                    that.authPhoto(function () {return that.downloadAction(that.localAdType);});
                  } else {
                    uni.showToast({
                      title: '怎么不保存啦',
                      icon: 'success',
                      duration: 1000 });

                  }
                } });

            }
          },
          fail: function fail(err) {
            uni.showToast('保存失败！');
          } });

      } else {
        uni.getImageInfo({
          src: this.localAdType == 0 ? this.src : this.src2,
          success: function success(r) {
            uni.saveImageToPhotosAlbum({
              filePath: r.path,
              success: function success() {
                //总下载统计
                app.saveAnalysisInfo(8, that.id);
                uni.hideLoading();
                uni.showToast({
                  title: '保存成功',
                  icon: 'success',
                  duration: 1000 });

              },
              fail: function fail(e) {
                uni.hideLoading();
                if (e.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || e.
                errMsg === "saveImageToPhotosAlbum:fail auth deny" || e.
                errMsg === "saveImageToPhotosAlbum:fail authorize no response")
                {
                  uni.showToast({
                    title: '需要开启相册权限',
                    icon: 'success',
                    duration: 1000 });

                  that.authPhoto(function () {return that.downloadAction(that.localAdType);});
                } else {
                  uni.showToast({
                    title: '怎么不保存啦',
                    icon: 'success',
                    duration: 1000 });

                }
              } });

          },
          fail: function fail(err) {
            uni.hideLoading();
            uni.showModal({
              title: "提示",
              content: "当前客户端版本过低，无法使用该功能，请升级客户端" });

          } });

      }
    },
    // 授权相册
    authPhoto: function authPhoto(callback) {
      var that = this;
      uni.getSetting({
        success: function success(res) {
          console.log(res);
          //区分环境下的权限授权问题

          if (!res.authSetting['scope.album']) {




            uni.authorize({

              scope: "scope.album",




              success: function success() {
                callback && callback();
              },
              fail: function fail(err) {
                console.log(err);
                uni.openSetting({
                  success: function success(s) {

                    if (s.authSetting['scope.album'] == true) {





                      callback && callback();
                    } else {
                      uni.showToast({
                        title: '授权权限才能下载',
                        icon: 'none' });

                    }
                  },
                  fail: function fail(f) {
                    console.log(f);
                    uni.showToast({
                      title: '请到设置里开启相册权限',
                      icon: 'none' });

                  } });

              } });

          } else {
            callback && callback();
          }
        },
        fail: function fail(err) {
          uni.showModal({
            title: "提示",
            content:
            "授权权限才能下载！" });

        } });

    } },


  onShareAppMessage: function onShareAppMessage(r) {
    console.log("src=".concat(this.src, "&src2=").concat(this.src2, "&id=").concat(this.id, "&type=").concat(this.type, "&img_type=").concat(this.img_type));
    var _path = "/pages/detail/index?src=".concat(this.src, "&src2=").concat(this.src2, "&id=").concat(this.id, "&type=").concat(this.type, "&img_type=").concat(this.img_type);

    if (app.globalData.shareInfo.share_id != '') {
      return {
        templateId: app.globalData.shareInfo.share_id,
        path: _path };

    } else {
      return {
        title: app.globalData.shareInfo.share_title,
        desc: app.globalData.shareInfo.share_desc,
        path: _path };

    }








  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 94:
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */ 95);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 96:
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=style&index=1&id=12dbf08d&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=1&id=12dbf08d&lang=scss&scoped=true& */ 97);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_1_id_12dbf08d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/黄一峰2.0/Desktop/T/dyym/新版UI取图演示源码备份（新增达人入驻）/C新版UI取图演示源码备份（新增达人入驻）/搜图君前端 - 演示/pages/detail/index.vue?vue&type=style&index=1&id=12dbf08d&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[88,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvZGV0YWlsL2luZGV4LnZ1ZT9kZjRjIiwid2VicGFjazovLy9DOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9UL2R5eW0v5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkvQ+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL+aQnOWbvuWQm+WJjeerryAtIOa8lOekui9wYWdlcy9kZXRhaWwvaW5kZXgudnVlP2Y0NjIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L3BhZ2VzL2RldGFpbC9pbmRleC52dWU/MTQ5NiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvZGV0YWlsL2luZGV4LnZ1ZT84MmVhIiwidW5pLWFwcDovLy9wYWdlcy9kZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9UL2R5eW0v5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkvQ+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL+aQnOWbvuWQm+WJjeerryAtIOa8lOekui9wYWdlcy9kZXRhaWwvaW5kZXgudnVlP2IwY2YiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL1QvZHl5bS/mlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS9D5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkv5pCc5Zu+5ZCb5YmN56uvIC0g5ryU56S6L3BhZ2VzL2RldGFpbC9pbmRleC52dWU/ODQ2NiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv6buE5LiA5bOwMi4wL0Rlc2t0b3AvVC9keXltL+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL0PmlrDniYhVSeWPluWbvua8lOekuua6kOeggeWkh+S7ve+8iOaWsOWinui+vuS6uuWFpempu++8iS/mkJzlm77lkJvliY3nq68gLSDmvJTnpLovcGFnZXMvZGV0YWlsL2luZGV4LnZ1ZT8xOTI4Iiwid2VicGFjazovLy9DOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9UL2R5eW0v5paw54mIVUnlj5blm77mvJTnpLrmupDnoIHlpIfku73vvIjmlrDlop7ovr7kurrlhaXpqbvvvIkvQ+aWsOeJiFVJ5Y+W5Zu+5ryU56S65rqQ56CB5aSH5Lu977yI5paw5aKe6L6+5Lq65YWl6am777yJL+aQnOWbvuWQm+WJjeerryAtIOa8lOekui9wYWdlcy9kZXRhaWwvaW5kZXgudnVlP2VkMGEiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLDZGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGNBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDeUQ7QUFDTDtBQUNhO0FBQ3lCOzs7QUFHMUY7QUFDNEs7QUFDNUssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUErb0IsQ0FBZ0IsK21CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21IbnFCO0FBQ0E7QUFDQSx5RjtBQUNBO0FBQ0EsMkIsQ0FBQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLDBCOztBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsV0FEQTtBQUVBLG9CQUZB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YUEsRUFnYUE7QUFDQTtBQUNBO0FBQ0EsZUFEQSxtQkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBLGtDQUZBOzs7OztBQU9BLHFCQVBBLHFCQU9BO0FBQ0E7QUFDQSxlQVRBO0FBVUEsa0JBVkEsZ0JBVUEsR0FWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBLHlCQURBLG1CQUNBLENBREEsRUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQSxxQkFQQSxNQU9BO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLG9DQUZBOztBQUlBO0FBQ0EsbUJBaEJBO0FBaUJBLHNCQWpCQSxnQkFpQkEsQ0FqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0EsMENBREE7QUFFQSxrQ0FGQTs7QUFJQSxtQkF2QkE7O0FBeUJBLGVBckNBOztBQXVDQSxXQTVDQSxNQTRDQTtBQUNBO0FBQ0E7QUFDQSxTQXBEQTtBQXFEQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLHVCQUhBOztBQUtBLFNBM0RBOztBQTZEQSxLQS9kQSxFQWxPQTs7O0FBb3NCQSxtQkFwc0JBLDZCQW9zQkEsQ0Fwc0JBLEVBb3NCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQURBO0FBRUEsbUJBRkE7O0FBSUEsS0FMQSxNQUtBO0FBQ0E7QUFDQSxtREFEQTtBQUVBLGlEQUZBO0FBR0EsbUJBSEE7O0FBS0E7Ozs7Ozs7OztBQVNBLEdBNXRCQSxFOzs7Ozs7Ozs7Ozs7O0FDaElBO0FBQUE7QUFBQTtBQUFBO0FBQW83QixDQUFnQixvMkJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F4OEI7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ05MO0FBQUE7QUFBQTtBQUFBO0FBQXN2QyxDQUFnQixzbkNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0Exd0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9kZXRhaWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9kZXRhaWwvaW5kZXgudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEyZGJmMDhkJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MTJkYmYwOGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTJkYmYwOGRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZGV0YWlsL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEyZGJmMDhkJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHRcclxuXHQ8dmlldyBjbGFzcz1cInZpZXcgbG9hZGluZy1iZyB3aGl0ZVwiPlxyXG5cclxuXHRcdDxpbWFnZSBjbGFzcz1cInZpZXctaW1nXCIgOnNyYz1cInNyY1wiIG1vZGU9XCJ3aWR0aEZpeFwiICB2LWlmPVwidHlwZSA9PSAwXCI+PC9pbWFnZT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidmlldy1pbWdcIiB2LWVsc2UtaWY9XCJ0eXBlID09IDFcIj5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLUtVQUlTSE9VIC0tPlxyXG5cdFx0XHQ8dmlkZW8gY2xhc3M9XCJ2aWV3LWltZ1wiXHJcblx0XHRcdHN0eWxlPVwiaGVpZ2h0OiA4MCU7XCJcclxuXHRcdFx0OnNyYz1cInNyY1wiIFxyXG5cdFx0XHQ6Y29udHJvbHM9XCJ0cnVlXCIgXHJcblx0XHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cInRydWVcIlxyXG5cdFx0XHQ6YXV0by1wYXVzZS1pZi1uYXZpZ2F0ZT1cInRydWVcIlxyXG5cdFx0XHQ6c2hvdy1wcm9ncmVzcz1cInRydWVcIiBcclxuXHRcdFx0OnNob3ctcGxheS1idG49XCJ0cnVlXCIgXHJcblx0XHRcdCBcclxuXHRcdFx0cGxheS1idG4tcG9zaXRpb249XCJjZW50ZXJcIiBcclxuXHRcdFx0ZW5hYmxlLXBsYXktZ2VzdHVyZT1cInRydWVcIj48L3ZpZGVvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwhLS0gI2lmbmRlZiBNUC1LVUFJU0hPVS0tPlxyXG5cdFx0XHQ8dmlkZW8gY2xhc3M9XCJ2aWV3LWltZ1wiXHJcblx0XHRcdDpzcmM9XCJzcmNcIiBcclxuXHRcdFx0OmNvbnRyb2xzPVwidHJ1ZVwiIFxyXG5cdFx0XHQ6c2hvdy1jZW50ZXItcGxheS1idG49XCJ0cnVlXCJcclxuXHRcdFx0OmF1dG8tcGF1c2UtaWYtbmF2aWdhdGU9XCJ0cnVlXCJcclxuXHRcdFx0OnNob3ctcHJvZ3Jlc3M9XCJ0cnVlXCIgXHJcblx0XHRcdDpzaG93LXBsYXktYnRuPVwidHJ1ZVwiIFxyXG5cdFx0XHQgXHJcblx0XHRcdHBsYXktYnRuLXBvc2l0aW9uPVwiY2VudGVyXCIgXHJcblx0XHRcdGVuYWJsZS1wbGF5LWdlc3R1cmU9XCJ0cnVlXCI+PC92aWRlbz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcclxuXHRcdDxpbWFnZSBjbGFzcz1cInZpZXctaW1nLW5vcm1hbFwiIDpzcmM9XCJzcmNcIiBtb2RlPVwid2lkdGhGaXhcIiAgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHQ8IS0tICNpZmRlZiBNUC1LVUFJU0hPVSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidmlldy1idG5zIGt1YWlzaG91XCIgOmNsYXNzPVwie3Nob3c6IGJ0bnNTaG93fVwiPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8IS0tICNpZm5kZWYgTVAtS1VBSVNIT1UgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInZpZXctYnRuc1wiIDpjbGFzcz1cIntzaG93OiBidG5zU2hvd31cIj5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidmlldy1idG5cIiBAY2xpY2s9XCJiYWNrQWN0aW9uXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1iYWNrLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+6L+U5ZuePC90ZXh0PlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PCEtLSAjaWZkZWYgTVAtUVF8fE1QLUtVQUlTSE9VIC0tPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidmlldy1idG5cIiBAY2xpY2s9XCJkb3dubG9hZFNob3dcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLWRvd25sb2FkLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+5LiL6L29PC90ZXh0PlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTnx8TVAtVE9VVElBTyAtLT5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInZpZXctYnRuXCIgQGNsaWNrPVwiZG93bmxvYWRTaG93XCIgdi1pZj1cImhhc1VzZXJJbmZvXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1kb3dubG9hZC5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0PuS4i+i9vTwvdGV4dD5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ2aWV3LWJ0blwiIEBjbGljaz1cImdldFVzZXJQcm9maWxlXCIgdi1lbHNlPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tZG93bmxvYWQucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dD7kuIvovb08L3RleHQ+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInZpZXctYnRuXCIgb3Blbi10eXBlPVwic2hhcmVcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLXNoYXJlLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+5YiG5LqrPC90ZXh0PlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInZpZXctYnRuXCIgQGNsaWNrPVwiZG9Db2xsZWN0aW9uXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1jb2xsZWN0LnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtaWY9XCJkZWFsQ29sbGVjdGlvbiAhPSAyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLWNvbGxlY3QyLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHYtZWxzZT48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0PuaUtuiXjzwvdGV4dD5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ2aWV3LWJ0blwiIEBjbGljaz1cImRvWmFuXCIgdi1pZj1cImNhblphblwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tbGlrZS5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0PueCuei1njwvdGV4dD5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ2aWV3LWJ0blwiIHYtZWxzZT5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLWxpa2UyLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQ+54K56LWePC90ZXh0PlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZG93bmxvYWQtcGFuZWxcIiB2LWlmPVwiZG93bmxvYWRWaXNpYmxlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkb3dubG9hZC1wYW5lbGNcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLWNsb3NlLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIEBjbGljaz1cImRvd25sb2FkSGlkZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dubG9hZC1pdGVtXCIgQGNsaWNrPVwiZG93bmxvYWRBY3Rpb24oMClcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bmxvYWQtaXRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dubG9hZC1pdGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd25sb2FkLXRpdGxlXCI+6LaF5riF5peg5rC05Y2w5Y6f5Zu+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bmxvYWQtZGVzY1wiPueci+WujOW5v+WRiu+8jOWNs+WPr+iOt+WPljwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd25sb2FkLWJ0biBhY3RpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uLXBsYXkucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHTotoXmuIXkuIvovb1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dubG9hZC1pYlwiPlxyXG5cdFx0XHRcdFx0XHTnnIt7e2FkX251bWJlcn195qyh5bm/5ZGK77yM5Y+v6aKd5aSW6I636LWge3tmcmVlX2FkX251bX195qyh5YWN5bm/5ZGK6LaF5riF5LiL6L29XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJkb3dubG9hZC1pdGVtXCIgQGNsaWNrPVwiZG93bmxvYWRBY3Rpb24oMSlcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bmxvYWQtaXRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dubG9hZC1pdGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd25sb2FkLXRpdGxlXCI+5pmu6YCa5Zu+54mHPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bmxvYWQtZGVzY1wiPuaZrumAmueUu+i0qO+8jOWFjeW5v+WRiuS4i+i9vTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd25sb2FkLWJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tY2xvdWQtZG93bmxvYWQucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHTmma7pgJrkuIvovb1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnO1xyXG5cdGltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QuanMnO1xyXG5cdGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcyc7XHJcblx0Y29uc3QgYXBwID0gZ2V0QXBwKClcclxuXHRsZXQgcmV3YXJkZWRWaWRlb0FkID0gbnVsbDsgLy/lv6vmiYvmv4DlirHlub/lkYrnu4Tku7ZcclxuXHJcblx0Ly8g5Zyo6aG16Z2i5Lit5a6a5LmJ5r+A5Yqx6KeG6aKR5bm/5ZGKIOW+ruS/oeOAgXFx44CB5oqW6Z+z5bmz5Y+wXHJcblx0bGV0IHZpZGVvQWQgPSBudWxsXHJcblxyXG5cdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtUVEgfHwgTVAtVE9VVElBT1xyXG5cdC8vIOWcqOmhtemdouS4reWumuS5ieaPkuWxj+W5v+WRilxyXG5cdGxldCBpbnRlcnN0aXRpYWxBZCA9IG51bGxcclxuXHQvLyAjZW5kaWZcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdGJ0bnNTaG93OiB0cnVlLFxyXG5cdFx0XHRcdHNyYzogJycsLy/nnIvlub/lkYrkv53lrZjnmoTlm77niYfot6/lvoRcclxuXHRcdFx0XHRzcmMyOicnLC8v5pmu6YCa5LiL6L2955qE5Zu+54mH6Lev5b6EXHJcblx0XHRcdFx0dHlwZTogMCwgLy8g57G75Z6LIDAg5omL5py65aOB57q4IDEg5Yqo5oCB5aOB57q4IDIg6IOM5pmv5Zu+IDMg5aS05YOPIDUg6KGo5oOF5YyFXHJcblx0XHRcdFx0ZG93bmxvYWRWaXNpYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRpbWdfdHlwZTogMSwgLy/ntKDmnZDnsbvlnosgMS3miYvmnLrlo4HnurjjgIEyLeWKqOaAgeWjgee6uOOAgTMt6IOM5pmv5Zu+44CBNC3lpLTlg4/jgIE1LeihqOaDheWMhVxyXG5cclxuXHRcdFx0XHRzZWxmbnRlcnZhbDogbnVsbCwgLy/lrprkuYnlvqrnjq/lrp7kvovmj5LlsY/lr7nosaHnmoTpgLvovpFcclxuXHRcdFx0XHRoYXNTaG93Q2hhcGluZzogbnVsbCwgLy/lrprkuYnnrKzkuIDmrKHlsZXnpLrmj5LlsY/lhoXlrrnnmoTpgLvovpFcclxuXHRcdFx0XHRzZWxmbnRlcnZhbEppbGk6IG51bGwsIC8v5a6a5LmJ5b6q546v5a6e5L6L5r+A5Yqx5a+56LGh55qE6YC76L6RXHJcblxyXG5cdFx0XHRcdHVzZXJJbmZvOiB7fSxcclxuXHRcdFx0XHRoYXNVc2VySW5mbzogZmFsc2UsXHJcblxyXG5cdFx0XHRcdGRlYWxDb2xsZWN0aW9uOiAwLCAvLzAt57O757uf54q25oCB5pyq5q2j5bi4ICAxLeaUtuiXjyAyLeWPlua2iOaUtuiXj1xyXG5cdFx0XHRcdGNhblphbjogdHJ1ZSwgLy/mmK/lkKbog73ngrnotZ7vvIzpu5jorqTlj6/ku6VcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsb2NhbEFkVHlwZToxLC8v5b2T5YmN5LiL6L295piv5pmu6YCa5LiL6L296L+Y5piv55yL5bm/5ZGK5LiL6L29IOm7mOiupOaZrumAmuS4i+i9vVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFkX251bWJlcjozLFxyXG5cdFx0XHRcdGZyZWVfYWRfbnVtOjEwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG9wZW5pZE5ldGVydmFsOm51bGwsLy/lrprkuYnlvqrnjq/ojrflj5ZvcGVuaWTnmoTpgLvovpFcclxuXHRcdFx0XHRhZE5ldGVydmFsOm51bGwsLy/lrprkuYnlvqrnjq/ojrflj5blub/lkYrnmoTpgLvovpFcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHRcdHRoaXMuc3JjID0gb3B0aW9ucy5zcmMgfHwgJyc7XHJcblx0XHRcdHRoaXMuc3JjMiA9IG9wdGlvbnMuc3JjMiB8fCAnJztcclxuXHRcdFx0dGhpcy5pZCA9IG9wdGlvbnMuaWQgfHwgMDtcclxuXHRcdFx0dGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8IDA7XHJcblx0XHRcdHRoaXMuaW1nX3R5cGUgPSBvcHRpb25zLmltZ190eXBlIHx8IDE7XHJcblxyXG5cdFx0XHRhcHAuc2F2ZUFuYWx5c2lzSW5mbygyLHRoaXMuaWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcblxyXG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm9wZW5pZE5ldGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZihhcHAuZ2xvYmFsRGF0YS5vcGVuaWQpe1xyXG5cdFx0XHRcdFx0Ly/moLnmja5vcGVuaWTliKTmlq3lvZPliY3nlKjmiLfmmK/lkKbmjojmnYPov4fvvIzmmK/nmoTor53lsLHml6DpnIDlho3mjojmnYNcclxuXHRcdFx0XHRcdF90aGlzLmdldFVzZXJTeXN0ZW1JbmZvKCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8v5p+l6K+i5b2T5YmN55So5oi35piv5ZCm5pyJ5pS26JeP57Sg5p2QXHJcblx0XHRcdFx0XHRfdGhpcy5jaGVja0NvbGxlY3Rpb24oKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly/mn6Xor6LlvZPliY3nlKjmiLfmmK/lkKbmnInngrnotZ7ov4dcclxuXHRcdFx0XHRcdF90aGlzLmNoZWNrWmFuKCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX3RoaXMub3BlbmlkTmV0ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwxMClcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0Ly/mv4DlirHjgIHmj5LlsY/lub/lkYrnu4Tku7blrp7kvotcclxuXHRcdFx0dGhpcy5zZWxmbnRlcnZhbCA9ICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKGFwcC5nbG9iYWxEYXRhLmFkSW5mbyAhPSBudWxsICYmIGFwcC5nbG9iYWxEYXRhLmFkSW5mby5jaGFwaW5nICE9ICcnKXtcclxuXHRcdFx0XHRcdGlmKGFwcC5nbG9iYWxEYXRhLmNhblNob3dBZCl7XHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHxNUC1RUVxyXG5cdFx0XHRcdFx0XHRpZiAodW5pLmNyZWF0ZUludGVyc3RpdGlhbEFkKSB7XHJcblx0XHRcdFx0XHRcdCAgaW50ZXJzdGl0aWFsQWQgPSB1bmkuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG5cdFx0XHRcdFx0XHQgICAgYWRVbml0SWQ6IGFwcC5nbG9iYWxEYXRhLmFkSW5mby5jaGFwaW5nXHJcblx0XHRcdFx0XHRcdCAgfSlcclxuXHRcdFx0XHRcdFx0ICBpbnRlcnN0aXRpYWxBZC5vbkxvYWQoKCkgPT4ge30pXHJcblx0XHRcdFx0XHRcdCAgaW50ZXJzdGl0aWFsQWQub25FcnJvcigoZXJyKSA9PiB7fSlcclxuXHRcdFx0XHRcdFx0ICBpbnRlcnN0aXRpYWxBZC5vbkNsb3NlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgIC8v5b2T56ys5LiA5qyh5Ye6546w5ZCO5bCx5LiN5Lya5YaN6L+b6KGM6LCD55So5pi+56S677yM5aaC5p6c5oOz5b6q546v5pi+56S65o+S5bGP77yM5bCx5rOo6YeK6L+Z6KGM5Luj56CBXHJcblx0XHRcdFx0XHRcdFx0ICBjbGVhckludGVydmFsKF90aGlzLmhhc1Nob3dDaGFwaW5nKTtjb25zb2xlLmxvZygn5YWz6Zet5LqG5o+S5bGPJylcclxuXHRcdFx0XHRcdFx0XHQgIH0pXHJcblx0XHRcdFx0XHRcdCAgY29uc29sZS5sb2coJ+WunuS+i+WMluS6hicpXHJcblx0XHRcdFx0XHRcdCAgY29uc29sZS5sb2coaW50ZXJzdGl0aWFsQWQpXHJcblx0XHRcdFx0XHRcdCAgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0XHRpbnRlcnN0aXRpYWxBZCA9IHR0LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuXHRcdFx0XHRcdFx0ICBhZFVuaXRJZDogYXBwLmdsb2JhbERhdGEuYWRJbmZvLmNoYXBpbmcsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfdGhpcy5zZWxmbnRlcnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LDIwMClcclxuXHJcblx0XHRcdHRoaXMuc2VsZm50ZXJ2YWxKaWxpID0gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYgKGFwcC5nbG9iYWxEYXRhLmFkSW5mbyAhPSBudWxsICYmIGFwcC5nbG9iYWxEYXRhLmFkSW5mby5qaWxpICE9ICcnKSB7XHJcblx0XHRcdFx0XHRpZiAoYXBwLmdsb2JhbERhdGEuY2FuU2hvd0FkKSB7XHJcblx0XHRcdFx0XHRcdC8v6IO95a6e5L6L5bm/5ZGK57uE5Lu255qE5oOF5Ya15LiL5omN5aSE55CGXHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1LVUFJU0hPVVxyXG5cdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQgPSBrcy5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IDEwMDAxMTA1NixcclxuXHRcdFx0XHRcdFx0XHR1bml0SWQ6IHBhcnNlSW50KGFwcC5nbG9iYWxEYXRhLmFkSW5mby5qaWxpKSxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHJld2FyZGVkVmlkZW9BZC5vbkxvYWQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbkxvYWQgZXZlbnQgZW1pdCcpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmV3YXJkZWRWaWRlb0FkLm9uRXJyb3IoKHtcclxuXHRcdFx0XHRcdFx0XHRlcnJDb2RlXHJcblx0XHRcdFx0XHRcdH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb25FcnJvciBldmVudCBlbWl0JywgZXJyQ29kZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQub25DbG9zZSgoe1xyXG5cdFx0XHRcdFx0XHRcdGlzRW5kZWRcclxuXHRcdFx0XHRcdFx0fSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbkNsb3NlIGV2ZW50IGVtaXQnLCBpc0VuZGVkKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXNFbmRlZCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5hZnRlckFkT3BlcmF0ZSgpXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuc3RvcEFkT3BlcmF0ZSgpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHxNUC1RUVxyXG5cdFx0XHRcdFx0XHRpZiAodW5pLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFwcC5nbG9iYWxEYXRhLmFkSW5mby5qaWxpKVxyXG5cdFx0XHRcdFx0XHRcdHJld2FyZGVkVmlkZW9BZCA9IHVuaS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0XHRcdFx0YWRVbml0SWQ6IGFwcC5nbG9iYWxEYXRhLmFkSW5mby5qaWxpLFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0cmV3YXJkZWRWaWRlb0FkLm9uTG9hZCgoKSA9PiB7fSlcclxuXHRcdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQub25FcnJvcigoZXJyKSA9PiB7fSlcclxuXHRcdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQub25DbG9zZSgocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygndmlkZW9BZCBvbkNsb3NlJywgcmVzKVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5pc0VuZGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmFmdGVyQWRPcGVyYXRlKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5zdG9wQWRPcGVyYXRlKClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0XHRjb25zdCBpbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdFx0XHRcdGlmIChpbmZvLmFwcE5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0RPVVlJTicpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQgPSB1bmkuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuXHRcdFx0XHRcdFx0XHRcdGFkVW5pdElkOiBhcHAuZ2xvYmFsRGF0YS5hZEluZm8uamlsaSxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHQvL+WPr+S7peeci+a/gOWKseW5v+WRilxyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmV3YXJkZWRWaWRlb0FkLmNsb3NlRnVuYykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQub2ZmQ2xvc2UocmV3YXJkZWRWaWRlb0FkLmNsb3NlRnVuYyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5L+d5a2Y5aSx6LSl77yB77yBJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXdhcmRlZFZpZGVvQWQuY2xvc2VGdW5jID0gZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIOWwj+S6juWfuuehgOW6k+eJiOacrO+8jHJlcyDmmK/kuIDkuKogdW5kZWZpbmVkXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7IC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuYWZ0ZXJBZE9wZXJhdGUoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLnN0b3BBZE9wZXJhdGUoKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0cmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UocmV3YXJkZWRWaWRlb0FkLmNsb3NlRnVuYyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEuY2FuU2hvd0FkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX3RoaXMuc2VsZm50ZXJ2YWxKaWxpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sMjAwKVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHRcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuYWROZXRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYoYXBwLmdsb2JhbERhdGEuYWRSZXF1ZXN0UmVzKXtcclxuXHRcdFx0XHRcdF90aGlzLmFkX251bWJlciA9IGFwcC5nbG9iYWxEYXRhLmRlX2FkX251bWJlclxyXG5cdFx0XHRcdFx0X3RoaXMuZnJlZV9hZF9udW0gPSBhcHAuZ2xvYmFsRGF0YS5mcmVlX2FkX251bVxyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfdGhpcy5hZE5ldGVydmFsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwxMClcclxuXHRcdFx0XHJcblxyXG5cdFx0fSxcclxuXHRcdG9uVW5sb2FkKCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgTVAtS1VBSVNIT1VcclxuXHRcdFx0cmV3YXJkZWRWaWRlb0FkLmRlc3Ryb3koKTtcclxuXHRcdFx0cmV3YXJkZWRWaWRlb0FkID0gbnVsbDtcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHxNUC1RUVxyXG5cdFx0XHQvLyDlnKjpgILlkIjnmoTlnLrmma/mmL7npLrmj5LlsY/lub/lkYpcclxuXHRcdFx0dGhpcy5oYXNTaG93Q2hhcGluZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChpbnRlcnN0aXRpYWxBZCkge1xyXG5cdFx0XHRcdFx0aW50ZXJzdGl0aWFsQWQuc2hvdygpLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMzAwKVxyXG5cclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdGlmKGludGVyc3RpdGlhbEFkKXtcclxuXHRcdFx0XHRpbnRlcnN0aXRpYWxBZFxyXG5cdFx0XHRcdCAgLmxvYWQoKVxyXG5cdFx0XHRcdCAgLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdCAgICBpbnRlcnN0aXRpYWxBZC5zaG93KCk7XHJcblx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdCAgLnRoZW4oKCk9PntcclxuXHRcdFx0XHRcdCAgXHJcblx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdCAgLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHQgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHQgIH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly/nnIvlrozlub/lkYrlkI7nmoTmk43kvZzlh73mlbBcclxuXHRcdFx0YWZ0ZXJBZE9wZXJhdGUoKXtcclxuXHRcdFx0XHR0aGlzLmRvd25sb2FkU3RhcnQoKTtcclxuXHRcdFx0XHQvL+i1sOWIhumUgOWkhOeQhlxyXG5cdFx0XHRcdGFwcC5kZWFsUHAodGhpcy5pZCx0aGlzLnVzZXJJbmZvLm5pY2tOYW1lLHRoaXMudXNlckluZm8uYXZhdGFyVXJsKTtcclxuXHRcdFx0XHQvL+WinuWKoOeci+W5v+WRiuiusOW9lVxyXG5cdFx0XHRcdGFwcC5hZGRBZExvZygpXHJcblx0XHRcdFx0Ly/mlbDmja7nu5/orqFcclxuXHRcdFx0XHRhcHAuc2F2ZUFuYWx5c2lzSW5mbyg1LHRoaXMuaWQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5Lit6YCU6YCA5Ye655yL5bm/5ZGK55qE5pON5L2c5Ye95pWwXHJcblx0XHRcdHN0b3BBZE9wZXJhdGUoKXtcclxuXHRcdFx0XHQvL+aVsOaNrue7n+iuoVxyXG5cdFx0XHRcdGFwcC5zYXZlQW5hbHlzaXNJbmZvKDYsdGhpcy5pZClcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+355yL5a6M5bm/5ZGK5omN6IO95LiL6L29JyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtVE9VVElBT1xyXG5cdFx0XHRnZXRVc2VyUHJvZmlsZShlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8g5o6o6I2Q5L2/55Sod3guZ2V0VXNlclByb2ZpbGXojrflj5bnlKjmiLfkv6Hmga/vvIzlvIDlj5HogIXmr4/mrKHpgJrov4for6XmjqXlj6Pojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lnYfpnIDnlKjmiLfnoa7orqRcclxuXHRcdFx0XHQvLyDlvIDlj5HogIXlpqXlloTkv53nrqHnlKjmiLflv6vpgJ/loavlhpnnmoTlpLTlg4/mmLXnp7DvvIzpgb/lhY3ph43lpI3lvLnnqpdcclxuXHRcdFx0XHR1bmkuZ2V0VXNlclByb2ZpbGUoe1xyXG5cdFx0XHRcdFx0ZGVzYzogJ+eUqOS6juWujOWWhOS8muWRmOi1hOaWmScsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdHRoYXQudXNlckluZm8gPSByZXMudXNlckluZm9cclxuXHRcdFx0XHRcdFx0dGhhdC5oYXNVc2VySW5mbyA9IHRydWVcclxuXHRcdFx0XHRcdFx0Ly/lrZjlgqjnlKjmiLfkv6Hmga9cclxuXHRcdFx0XHRcdFx0YXBwLnNhdmVVc2VySW5mbyhyZXMudXNlckluZm8uYXZhdGFyVXJsLCByZXMudXNlckluZm8ubmlja05hbWUpXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoYXQudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdHRoYXQuZG93bmxvYWRTaG93KClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTon6K+35o6I5p2D5pu05aW95L2T6aqM5bCP56iL5bqPJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0YXN5bmMgZ2V0VXNlclN5c3RlbUluZm8oKSB7XHJcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpc1xyXG5cdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdXNlci9nZXRJbmZvYCxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRvcGVuaWQ6IGFwcC5nbG9iYWxEYXRhLm9wZW5pZCxcclxuXHRcdFx0XHRcdFx0cGxhdGZvcm06IGFwcC5nbG9iYWxEYXRhLnByb2plY3RJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAoci5lcnJvcl9jb2RlID09PSAwKSB7XHJcblx0XHRcdFx0XHRfdGhpcy5oYXNVc2VySW5mbyA9IHRydWVcclxuXHRcdFx0XHRcdF90aGlzLnVzZXJJbmZvID0gci5kYXRhXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1LVUFJU0hPVVxyXG5cdFx0XHRcdFx0Ly/ov5vmnaXlsLHmjojmnYMs5b6u5L+h6ZyA6KaB54K55Ye75LiL6L2955qE5pe25YCZ6Kem5Y+R55So5oi35o6I5p2DXHJcblx0XHRcdFx0XHR1bmkubG9naW4oe1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLmNvZGUgPSByZXMuY29kZTtcclxuXHRcdFx0XHRcdFx0XHR1bmkuZ2V0VXNlckluZm8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8v5a2Y5YKo55So5oi35L+h5oGvXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFwcC5zYXZlVXNlckluZm8oZS51c2VySW5mby5hdmF0YXJVcmwsIGUudXNlckluZm8ubmlja05hbWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLnVzZXJJbmZvID0gZS51c2VySW5mb1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5oYXNVc2VySW5mbyA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRmYWlsKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuZ2V0X29wZW5TZXR0aW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/lpITnkIbkuIvovb3nu5/orqHlip/og71cclxuXHRcdFx0YXN5bmMgYWRkRG93bkNvdW50KCkge1xyXG5cdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdy9hZGREb3duQ291bnRgLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGlkOiB0aGlzLmlkLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly/lpITnkIbmlLbol4/lip/og71cclxuXHRcdFx0YXN5bmMgY2hlY2tDb2xsZWN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChhcHAuZ2xvYmFsRGF0YS5vcGVuaWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHIgPSBhd2FpdCByZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgJHtjb25maWcuQVBJfWFwaS93L2NoZWNrQ29sbGVjdGlvbmAsXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMuaWQsXHJcblx0XHRcdFx0XHRcdFx0b3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS5vcGVuaWQsXHJcblx0XHRcdFx0XHRcdFx0cGxhdGZvcm06IGFwcC5nbG9iYWxEYXRhLnByb2plY3RJZCxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHIuZXJyb3JfY29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRlYWxDb2xsZWN0aW9uID0gMjsgLy/lt7Lnu4/mlLbol4/kuobvvIzmlLnmiJDlj5bmtojmlLbol49cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVhbENvbGxlY3Rpb24gPSAxOyAvL+W+heaUtuiXj1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZG9Db2xsZWN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChhcHAuZ2xvYmFsRGF0YS5vcGVuaWQgJiYgdGhpcy5kZWFsQ29sbGVjdGlvbiAhPSAwKSB7XHJcblx0XHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdy9kb0NvbGxlY3Rpb25gLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGlkOiB0aGlzLmlkLFxyXG5cdFx0XHRcdFx0XHRcdG9wZW5pZDogYXBwLmdsb2JhbERhdGEub3BlbmlkLFxyXG5cdFx0XHRcdFx0XHRcdHBsYXRmb3JtOiBhcHAuZ2xvYmFsRGF0YS5wcm9qZWN0SWQsXHJcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiB0aGlzLmRlYWxDb2xsZWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuaW1nX3R5cGUsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0aWYgKHIuZXJyb3JfY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVhbENvbGxlY3Rpb24gPSB0aGlzLmRlYWxDb2xsZWN0aW9uID09IDEgPyAyIDogMTsgLy/miJDlip/lkI7lsIblvZPliY3lpITnkIbnirbmgIHmlLnlj5hcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7fnqI3lkI7lho3or5UnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WkhOeQhueCuei1nuWKn+iDvVxyXG5cdFx0XHRhc3luYyBjaGVja1phbigpIHtcclxuXHRcdFx0XHRpZiAoYXBwLmdsb2JhbERhdGEub3BlbmlkKSB7XHJcblx0XHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdy9jaGVja1phbmAsXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMuaWQsXHJcblx0XHRcdFx0XHRcdFx0b3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS5vcGVuaWQsXHJcblx0XHRcdFx0XHRcdFx0cGxhdGZvcm06IGFwcC5nbG9iYWxEYXRhLnByb2plY3RJZCxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHIuZXJyb3JfY29kZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhblphbiA9IHRydWU7IC8v6IO954K56LWeXHJcblx0XHRcdFx0XHR9ZWxzZXt0aGlzLmNhblphbiA9IGZhbHNlO30gLy/kuI3og73ngrnotZ5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGRvWmFuKCkge1xyXG5cdFx0XHRcdGlmIChhcHAuZ2xvYmFsRGF0YS5vcGVuaWQgJiYgdGhpcy5kZWFsQ29sbGVjdGlvbiAhPSAwKSB7XHJcblx0XHRcdFx0XHRjb25zdCByID0gYXdhaXQgcmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogYCR7Y29uZmlnLkFQSX1hcGkvdy9kb1phbmAsXHJcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHRoaXMuaWQsXHJcblx0XHRcdFx0XHRcdFx0b3BlbmlkOiBhcHAuZ2xvYmFsRGF0YS5vcGVuaWQsXHJcblx0XHRcdFx0XHRcdFx0cGxhdGZvcm06IGFwcC5nbG9iYWxEYXRhLnByb2plY3RJZCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6IHRoaXMuZGVhbENvbGxlY3Rpb24sXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0aWYgKHIuZXJyb3JfY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FuWmFuID0gZmFsc2U7IC8v5oiQ5Yqf5ZCO5bCG5b2T5YmN5aSE55CG54q25oCB5pS55Y+YXHJcblx0XHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmk43kvZzlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356iN5ZCO5YaN6K+VJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1Jld2FyZGVkVmlkZW9BZCgpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0cmV3YXJkZWRWaWRlb0FkLnNob3coKVxyXG5cdFx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV3YXJkZWRWaWRlb0FkLmxvYWQoKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkpXHJcblx0XHRcdFx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRhcHAuc2F2ZUFuYWx5c2lzSW5mbyg3LF90aGlzLmlkKVxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5bm/5ZGK5pi+56S65aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldF9vcGVuU2V0dGluZygpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogXCLmuKnppqjmj5DnpLpcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi5Li65LqG5pu05aW955qE5L2T6aqM5bCP56iL5bqPLOivt+WFiOaOiOadg35cIixcclxuXHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkub3BlblNldHRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLmxvZ2luKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuY29kZSA9IHJlcy5jb2RlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLmdldFVzZXJJbmZvKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+WtmOWCqOeUqOaIt+S/oeaBr1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmRvd25sb2FkU2hvdygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuaGFzVXNlckluZm8gPSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMudXNlckluZm8gPSBlLnVzZXJJbmZvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXBwLnNhdmVVc2VySW5mbyhlLnVzZXJJbmZvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYXZhdGFyVXJsLCBlLnVzZXJJbmZvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubmlja05hbWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7IC8v6K6+572u5Lit5pyq5omT5byA5Liq5Lq65L+h5oGv5YiZ57un57ut6LCD5Y+W5omT5byA6K6+572u5o6I5p2DXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOifor7fmjojmnYPmm7Tlpb3kvZPpqozlsI/nqIvluo8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9nZ2xlQnRucygpIHtcclxuXHRcdFx0XHR0aGlzLmJ0bnNTaG93ID0gIXRoaXMuYnRuc1Nob3c7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tBY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRmYWlsKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibmF2aWdhdGVCYWNr6LCD55So5aSx6LSlXCIpO1xyXG5cdFx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQgIH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvd25sb2FkU2hvdygpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0Ly/lnKjngrnlh7vkuIvovb3nmoTml7blgJnliKTmlq3nlKjmiLfmmK/lkKbmjojmnYPnm7jlhozvvIzmsqHmnInnmoTor53pnIDmjojmnYPnm7jlhozmnYPpmZDlkI7miY3og73lgZrmraPluLjmk43kvZxcclxuXHRcdFx0XHR0aGlzLmF1dGhQaG90byhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgTVAtS1VBSVNIT1VcclxuXHRcdFx0XHRcdF90aGlzLmRvd25sb2FkVmlzaWJsZSA9IHRydWVcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLUtVQUlTSE9VXHJcblx0XHRcdFx0XHQvL+W/q+aJi+WboOS4uuinhumikeWbvuWxgumXrumimO+8jOebtOaOpei1sOeci+W5v+WRiuaooeW8j1xyXG5cdFx0XHRcdFx0X3RoaXMuZG93bmxvYWRBY3Rpb24oMClcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aOiOadg+ebuOWGjOWkhOeQhicpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG93bmxvYWRIaWRlKCkge1xyXG5cdFx0XHRcdHRoaXMuZG93bmxvYWRWaXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvd25sb2FkQWN0aW9uKHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvY2FsQWRUeXBlID0gMVxyXG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjkuIvovb3kuK0uLi4nXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5kb3dubG9hZFN0YXJ0KCk7XHJcblx0XHRcdFx0XHR9LDE1MDApXHJcblx0XHRcdFx0XHRhcHAuc2F2ZUFuYWx5c2lzSW5mbyg0LHRoYXQuaWQpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8v57O757uf6IO95q2j5bi455yL5bm/5ZGK5LiU5ruh6Laz5Zyo55yL5bm/5ZGK5qyh5pWw6IyD5Zu05YaFXHJcblx0XHRcdFx0XHRpZiAoYXBwLmdsb2JhbERhdGEuY2FuU2hvd0FkICYmIGFwcC5nbG9iYWxEYXRhLmlsbGVnYWxfYWRfbnVtYmVyIDwgYXBwLmdsb2JhbERhdGEuYWRfbnVtYmVyKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQubG9jYWxBZFR5cGUgPSAwXHJcblx0XHRcdFx0XHRcdHRoYXQuc2hvd1Jld2FyZGVkVmlkZW9BZCgpO1xyXG5cdFx0XHRcdFx0XHRhcHAuc2F2ZUFuYWx5c2lzSW5mbygzLHRoYXQuaWQpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvL+WmguaenOWOn+Wni+asoeaVsOeci+WujO+8jOi1sOWFjei0ueasoeaVsOWIpOaWreaYr+WQpuiDveWFjei0ueS4i+i9vVxyXG5cdFx0XHRcdFx0XHRpZihhcHAuZ2xvYmFsRGF0YS5pbGxmcmVlX2FkX251bSA8IGFwcC5nbG9iYWxEYXRhLmZyZWVfYWRfbnVtKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmxvY2FsQWRUeXBlID0gMFxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuZG93bmxvYWRTdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5hZGRGcmVlQWRMb2coKVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5LuK5pel5Y+v5LiL6L295qyh5pWw55So5a6MJyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb3dubG9hZFN0YXJ0KCkge1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOS4i+i9veS4rS4uLidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvL+eci+W5v+WRiueahOi1sOWOn+WbvuWOn+inhumikeS4i+i9vVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMubG9jYWxBZFR5cGUpXHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5kb3dubG9hZEhpZGUoKTsgLy/pmpDol4/lvLnnqpfnhLblkI7kuIvovb0gXHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PSAxICYmIHRoaXMubG9jYWxBZFR5cGU9PTApIHtcclxuXHRcdFx0XHRcdHVuaS5kb3dubG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHRoaXMuc3JjLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoci5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IHIudGVtcEZpbGVQYXRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvL+aAu+S4i+i9vee7n+iuoVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFwcC5zYXZlQW5hbHlzaXNJbmZvKDgsdGhhdC5pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS5lcnJNc2cgPT09IFwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bTpmYWlsOmF1dGggZGVuaWVkXCIgfHwgZS5lcnJNc2cgPT09XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInNhdmVJbWFnZVRvUGhvdG9zQWxidW06ZmFpbCBhdXRoIGRlbnlcIiB8fCBlLmVyck1zZyA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bTpmYWlsIGF1dGhvcml6ZSBubyByZXNwb25zZVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfpnIDopoHlvIDlkK/nm7jlhozmnYPpmZAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXV0aFBob3RvKCgpID0+IHRoYXQuZG93bmxvYWRBY3Rpb24odGhhdC5sb2NhbEFkVHlwZSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmgI7kuYjkuI3kv53lrZjllaYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbDogZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KCfkv53lrZjlpLHotKXvvIEnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRcdHNyYzogdGhpcy5sb2NhbEFkVHlwZT09MD90aGlzLnNyYzp0aGlzLnNyYzIsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHIgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiByLnBhdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly/mgLvkuIvovb3nu5/orqFcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwLnNhdmVBbmFseXNpc0luZm8oOCx0aGF0LmlkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkv53lrZjmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLmVyck1zZyA9PT0gXCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOmZhaWw6YXV0aCBkZW5pZWRcIiB8fCBlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmVyck1zZyA9PT0gXCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOmZhaWwgYXV0aCBkZW55XCIgfHwgZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5lcnJNc2cgPT09IFwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bTpmYWlsIGF1dGhvcml6ZSBubyByZXNwb25zZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+mcgOimgeW8gOWQr+ebuOWGjOadg+mZkCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXV0aFBob3RvKCgpID0+IHRoYXQuZG93bmxvYWRBY3Rpb24odGhhdC5sb2NhbEFkVHlwZSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmgI7kuYjkuI3kv53lrZjllaYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLmj5DnpLpcIixcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwi5b2T5YmN5a6i5oi356uv54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5a6i5oi356uvXCIsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5o6I5p2D55u45YaMXHJcblx0XHRcdGF1dGhQaG90byhjYWxsYmFjaykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuZ2V0U2V0dGluZyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdC8v5Yy65YiG546v5aKD5LiL55qE5p2D6ZmQ5o6I5p2D6Zeu6aKYXHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHRcdGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS5hbGJ1bSddKSB7XHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtUVF8fE1QLVdFSVhJTnx8TVAtS1VBSVNIT1VcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLndyaXRlUGhvdG9zQWxidW0nXSkge1xyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHR1bmkuYXV0aG9yaXplKHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHRcdFx0XHRzY29wZTogXCJzY29wZS5hbGJ1bVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtUVF8fE1QLVdFSVhJTnx8TVAtS1VBSVNIT1VcclxuXHRcdFx0XHRcdFx0XHRcdHNjb3BlOiBcInNjb3BlLndyaXRlUGhvdG9zQWxidW1cIixcclxuXHRcdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5vcGVuU2V0dGluZyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHMuYXV0aFNldHRpbmdbJ3Njb3BlLmFsYnVtJ10gPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtUVF8fE1QLVdFSVhJTnx8TVAtS1VBSVNIT1VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChzLmF1dGhTZXR0aW5nWydzY29wZS53cml0ZVBob3Rvc0FsYnVtJ10gPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5o6I5p2D5p2D6ZmQ5omN6IO95LiL6L29JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmYWlsKGYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGYpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfor7fliLDorr7nva7ph4zlvIDlkK/nm7jlhozmnYPpmZAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0ICAgIHRpdGxlOiBcIuaPkOekulwiLFxyXG5cdFx0XHRcdFx0XHQgICAgY29udGVudDpcclxuXHRcdFx0XHRcdFx0ICAgICAgXCLmjojmnYPmnYPpmZDmiY3og73kuIvovb3vvIFcIixcclxuXHRcdFx0XHRcdFx0ICB9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uU2hhcmVBcHBNZXNzYWdlKHIpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coYHNyYz0ke3RoaXMuc3JjfSZzcmMyPSR7dGhpcy5zcmMyfSZpZD0ke3RoaXMuaWR9JnR5cGU9JHt0aGlzLnR5cGV9JmltZ190eXBlPSR7dGhpcy5pbWdfdHlwZX1gKVxyXG5cdFx0XHRsZXQgX3BhdGggPSBgL3BhZ2VzL2RldGFpbC9pbmRleD9zcmM9JHt0aGlzLnNyY30mc3JjMj0ke3RoaXMuc3JjMn0maWQ9JHt0aGlzLmlkfSZ0eXBlPSR7dGhpcy50eXBlfSZpbWdfdHlwZT0ke3RoaXMuaW1nX3R5cGV9YFxyXG5cdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRpZiAoYXBwLmdsb2JhbERhdGEuc2hhcmVJbmZvLnNoYXJlX2lkICE9ICcnKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHRlbXBsYXRlSWQ6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV9pZCxcclxuXHRcdFx0XHRcdHBhdGg6IF9wYXRoLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dGl0bGU6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV90aXRsZSxcclxuXHRcdFx0XHRcdGRlc2M6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV9kZXNjLFxyXG5cdFx0XHRcdFx0cGF0aDogX3BhdGgsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHQvLyAjaWZkZWYgTVAtUVF8fE1QLVdFSVhJTnx8TVAtS1VBSVNIT1VcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTogYXBwLmdsb2JhbERhdGEuc2hhcmVJbmZvLnNoYXJlX3RpdGxlLFxyXG5cdFx0XHRcdGRlc2M6IGFwcC5nbG9iYWxEYXRhLnNoYXJlSW5mby5zaGFyZV9kZXNjLFxyXG5cdFx0XHRcdHBhdGg6IF9wYXRoLFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdHBhZ2Uge1xyXG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC52aWV3IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHQudmlldy1pbWcge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnZpZXctYnRucyB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRwYWRkaW5nOiAzMHJweCAyMHJweCAyMHJweCAyMHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdGJvdHRvbTogNDBycHg7XHJcblx0XHRcdHJpZ2h0OiA0MHJweDtcclxuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XHJcblx0XHRcdCYuc2hvdyB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLmt1YWlzaG91IHtcclxuXHRcdFx0XHRsZWZ0OiA0MHJweDtcclxuXHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHQmLnNob3cge1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnZpZXctYnRuIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC52aWV3LWJ0biB7XHJcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRcdGJvcmRlcjogMDtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luOiAzMHJweCAwO1xyXG5cdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHRleHQge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRcdH1cclxuXHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LmRvd25sb2FkLXBhbmVsIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDM7XHJcblxyXG5cdFx0LmRvd25sb2FkLXBhbmVsYyB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDYwcnB4O1xyXG5cdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG5cdFx0XHQmPmltYWdlIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRcdFx0bWFyZ2luOiAyMHJweCAyMHJweCAwIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5kb3dubG9hZC1pdGVtIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAzMHJweCA1MHJweCAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0XHRcdFx0LmRvd25sb2FkLWl0IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmRvd25sb2FkLWl0bCB7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZG93bmxvYWQtYnRuIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTJycHggMjBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcblxyXG5cdFx0XHRcdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhZGZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5kb3dubG9hZC10aXRsZSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmRvd25sb2FkLWRlc2Mge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5kb3dubG9hZC1pYiB7XHJcblx0XHRcdFx0XHRjb2xvcjogb3JhbmdlO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudmlldy1pbWctbm9ybWFsIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5iZy1pbWd7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdCAgICB3aWR0aDogMTAwJTtcclxuXHQgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdCAgICB0b3A6IDA7XHJcblx0ICAgIGxlZnQ6IDA7XHJcblx0ICAgIFxyXG5cdH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjY2Njk5NzczMjYzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL+m7hOS4gOWzsDIuMC9EZXNrdG9wL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xMmRiZjA4ZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MTJkYmYwOGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2NjY5OTc3MzUxMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy/pu4TkuIDls7AyLjAvRGVza3RvcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=