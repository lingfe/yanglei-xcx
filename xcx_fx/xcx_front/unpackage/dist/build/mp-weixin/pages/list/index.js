(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/index"],{"3b9e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),o=r(n("3841")),c=r(n("39da")),i=r(n("610d"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,o,c,i){try{var r=t[c](i),u=r.value}catch(d){return void n(d)}r.done?e(u):Promise.resolve(u).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var c=t.apply(e,n);function i(t){u(c,a,o,i,r,"next",t)}function r(t){u(c,a,o,i,r,"throw",t)}i(void 0)}))}}getApp();var s={data:function(){return{windowWidth:i.default.systemInfo().windowWidth,list:[],isLoading:!1,loadOver:!1,page:1,type:1}},onLoad:function(t){console.log(t),this.type=t.type?Number(t.type):1,console.log(this.type),this.getData()},methods:{getData:function(){var t=this;return d(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.default)({url:"".concat(o.default.API,"api/w/index/wapplaper/list"),method:"post",data:{type:t.type,page:t.page}});case 2:n=e.sent,t.isLoading=!1,0===n.error_code&&(t.list=t.list.concat(n.data.data||[]),n.data.current_page>=n.data.last_page&&(t.loadOver=!0));case 5:case"end":return e.stop()}}),e)})))()},loadMore:function(){this.page++,this.getData()},navigateToDetail:function(e,n,a,o,c,i,r){c<3?t.navigateTo({url:"/pages/detail/index?src=".concat(e,"&type=").concat(c,"&id=").concat(n,"&img_type=").concat(a,"&src2=").concat(o)}):t.navigateTo({url:"/pages/detail/layout2?src=".concat(e,"&type=").concat(c,"&id=").concat(n,"&img_type=").concat(a,"&src2=").concat(o,"&e_show_v=").concat(i,"&e_video=").concat(r)})}},onReachBottom:function(){this.isLoading||this.loadOver||(this.isLoading=!0,this.loadMore())}};e.default=s}).call(this,n("543d")["default"])},"501e":function(t,e,n){"use strict";n.r(e);var a=n("c0e2"),o=n("c686");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("dd3c");var i,r=n("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"5d2ee8c6",null,!1,a["a"],i);e["default"]=u.exports},"816f":function(t,e,n){"use strict";(function(t){n("2943");a(n("66fd"));var e=a(n("501e"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c0e2:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},c686:function(t,e,n){"use strict";n.r(e);var a=n("3b9e"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=o.a},dd3c:function(t,e,n){"use strict";var a=n("de61"),o=n.n(a);o.a},de61:function(t,e,n){}},[["816f","common/runtime","common/vendor"]]]);