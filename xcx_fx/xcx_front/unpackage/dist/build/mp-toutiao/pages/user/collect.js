(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/collect"],{"08ca":function(t,a,e){"use strict";e.r(a);var n=e("6584"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"188f":function(t,a,e){"use strict";var n=e("86df"),o=e.n(n);o.a},"40ce":function(t,a,e){"use strict";e.r(a);var n=e("b29f"),o=e("08ca");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("188f");var c,r=e("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"12143a6c",null,!1,n["a"],c);a["default"]=u.exports},6584:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(e("a34a")),o=r(e("1f5d")),i=r(e("253c")),c=r(e("22d0"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,a,e,n,o,i,c){try{var r=t[i](c),u=r.value}catch(d){return void e(d)}r.done?a(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var a=this,e=arguments;return new Promise((function(n,o){var i=t.apply(a,e);function c(t){u(i,n,o,c,r,"next",t)}function r(t){u(i,n,o,c,r,"throw",t)}c(void 0)}))}}var s=getApp(),f={data:function(){return{windowWidth:c.default.systemInfo().windowWidth,list:[],isLoading:!1,loadOver:!1,page:1,tabIndex:0}},onLoad:function(){this.getData(0)},methods:{getData:function(t){var a=this;return d(n.default.mark((function e(){var c;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.isLoading){e.next=2;break}return e.abrupt("return");case 2:return a.isLoading=!0,e.next=5,(0,i.default)({url:"".concat(o.default.API,"api/w/getCollection"),method:"post",data:{openid:s.globalData.openid,platform:s.globalData.projectId,type:a.tabIndex+1,page:a.page}});case 5:if(c=e.sent,a.isLoading=!1,t===a.tabIndex){e.next=9;break}return e.abrupt("return");case 9:0===c.error_code&&(a.list=a.list.concat(c.data.data||[]),c.data.current_page>=c.data.last_page&&(a.loadOver=!0));case 10:case"end":return e.stop()}}),e)})))()},loadMore:function(){this.page++,this.getData(this.tabIndex)},tabAction:function(t){this.tabIndex!==t&&(this.tabIndex=t,this.page=1,this.isLoading=!1,this.loadOver=!1,this.list=[],this.getData(this.tabIndex))},navigateToDetail:function(a,e,n,o,i){i<3?t.navigateTo({url:"/pages/detail/index?src=".concat(a,"&type=").concat(i,"&id=").concat(e,"&img_type=").concat(n,"&src2=").concat(o)}):t.navigateTo({url:"/pages/detail/layout2?src=".concat(a,"&type=").concat(i,"&id=").concat(e,"&img_type=").concat(n,"&src2=").concat(o)})}},onReachBottom:function(){this.isLoading||this.loadOver||this.loadMore()}};a.default=f}).call(this,e("f266")["default"])},"836e":function(t,a,e){"use strict";(function(t,a){e("5d6c");o(e("66fd"));var n=o(e("40ce"));function o(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=e,a(n.default)}).call(this,e("f266")["default"],e("f266")["createPage"])},"86df":function(t,a,e){},b29f:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]}},[["836e","common/runtime","common/vendor"]]]);