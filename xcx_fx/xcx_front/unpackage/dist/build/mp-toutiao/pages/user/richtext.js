(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/richtext"],{"0334":function(t,e,n){"use strict";var r=n("0a1f"),a=n.n(r);a.a},"0a1f":function(t,e,n){},"1aad":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),a=o(n("1f5d")),u=o(n("253c"));o(n("22d0"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,a,u,o){try{var c=t[u](o),i=c.value}catch(f){return void n(f)}c.done?e(i):Promise.resolve(i).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function o(t){c(u,r,a,o,i,"next",t)}function i(t){c(u,r,a,o,i,"throw",t)}o(void 0)}))}}getApp();var f={data:function(){return{id:0,content:""}},onLoad:function(t){this.id=t.id,console.log(t),this.getData()},methods:{getData:function(){var t=this;return i(r.default.mark((function e(){var n,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)({url:"".concat(a.default.API,"api/w/getSiteContent"),data:{id:t.id}});case 2:n=e.sent,0===n.error_code&&(o=n.data,t.content=t.formatRichText(o));case 4:case"end":return e.stop()}}),e)})))()},formatRichText:function(t){var e=t.replace(/\<img/gi,'<img style="width:100%;height:auto"');return e}}};e.default=f},"2d57":function(t,e,n){"use strict";n.r(e);var r=n("6548"),a=n("b1e2");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("0334");var o,c=n("f0c5"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"1dbf4f2b",null,!1,r["a"],o);e["default"]=i.exports},6548:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},a87e:function(t,e,n){"use strict";(function(t,e){n("5d6c");a(n("66fd"));var r=a(n("2d57"));function a(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("f266")["default"],n("f266")["createPage"])},b1e2:function(t,e,n){"use strict";n.r(e);var r=n("1aad"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a}},[["a87e","common/runtime","common/vendor"]]]);