(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting"],{2380:function(n,t,e){"use strict";e.r(t);var u=e("39e5"),o=e("7c9f");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("ce92"),e("c305");var c=e("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,"53fa7a88",null,!1,u["a"],void 0);t["default"]=i.exports},"39e5":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){}));var u=function(){var n=this.$createElement;this._self._c},o=[]},6094:function(n,t,e){},"625f":function(n,t,e){},"649a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(e("3841")),u(e("39da"));function u(n){return n&&n.__esModule?n:{default:n}}var o=getApp(),a={data:function(){return{bodyShow:!0,userInfo:null,hasUserInfo:!1}},onLoad:function(n){this.hasUserInfo=o.globalData.hasLogin},methods:{logout:function(){n.showModal({content:"确定要退出登录吗？",success:function(t){t.confirm&&(o.globalData.hasLogin=!1,n.removeStorage({key:"userLogin"}),n.switchTab({url:"/pages/user/index"}))}})},cleanSession:function(){n.showToast({title:"清除成功"})},normalQuestion:function(){n.navigateTo({url:"/pages/user/richtext?id=2"})}}};t.default=a}).call(this,e("c5f9")["default"])},"7c9f":function(n,t,e){"use strict";e.r(t);var u=e("649a"),o=e.n(u);for(var a in u)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=o.a},ba94:function(n,t,e){"use strict";(function(n,t){e("2943");o(e("66fd"));var u=o(e("2380"));function o(n){return n&&n.__esModule?n:{default:n}}n.__webpack_require_UNI_MP_PLUGIN__=e,t(u.default)}).call(this,e("c5f9")["default"],e("c5f9")["createPage"])},c305:function(n,t,e){"use strict";var u=e("6094"),o=e.n(u);o.a},ce92:function(n,t,e){"use strict";var u=e("625f"),o=e.n(u);o.a}},[["ba94","common/runtime","common/vendor"]]]);