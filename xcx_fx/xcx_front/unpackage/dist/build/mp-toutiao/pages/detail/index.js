(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/index"],{"0809":function(e,t,n){"use strict";n.r(t);var o=n("6dc7"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"1d11":function(e,t,n){},"2d5e":function(e,t,n){"use strict";(function(e,t){n("5d6c");a(n("66fd"));var o=a(n("7e91"));function a(e){return e&&e.__esModule?e:{default:e}}e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("f266")["default"],n("f266")["createPage"])},"6dc7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("a34a")),a=s(n("1f5d")),i=s(n("253c"));s(n("22d0"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,o,a,i,s){try{var l=e[i](s),c=l.value}catch(r){return void n(r)}l.done?t(c):Promise.resolve(c).then(o,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){l(i,o,a,s,c,"next",e)}function c(e){l(i,o,a,s,c,"throw",e)}s(void 0)}))}}var r=getApp(),u=null,d=null,f={data:function(){return{id:0,btnsShow:!0,src:"",src2:"",type:0,downloadVisible:!1,img_type:1,selfnterval:null,hasShowChaping:null,selfntervalJili:null,userInfo:{},hasUserInfo:!1,dealCollection:0,canZan:!0,localAdType:1,ad_number:3,free_ad_num:10,openidNeterval:null,adNeterval:null}},onLoad:function(t){this.src=t.src||"",this.src2=t.src2||"",this.id=t.id||0,this.type=t.type||0,this.img_type=t.img_type||1,r.saveAnalysisInfo(2,this.id),console.log(t);var n=this;this.openidNeterval=setInterval((function(){r.globalData.openid&&(n.getUserSystemInfo(),n.checkCollection(),n.checkZan(),clearInterval(n.openidNeterval))}),10),this.selfnterval=setInterval((function(){null!=r.globalData.adInfo&&""!=r.globalData.adInfo.chaping&&(r.globalData.canShowAd&&(d=tt.createInterstitialAd({adUnitId:r.globalData.adInfo.chaping})),clearInterval(n.selfnterval))}),200),this.selfntervalJili=setInterval((function(){if(null!=r.globalData.adInfo&&""!=r.globalData.adInfo.jili){if(r.globalData.canShowAd){e.getSystemInfoSync();u=e.createRewardedVideoAd({adUnitId:r.globalData.adInfo.jili});try{u.closeFunc&&u.offClose(u.closeFunc)}catch(t){e.showToast({title:"保存失败！！",icon:"none"})}u.closeFunc=function(e){e&&e.isEnded||void 0===e?n.afterAdOperate():n.stopAdOperate()},u.onClose(u.closeFunc)}clearInterval(n.selfntervalJili)}}),200),this.adNeterval=setInterval((function(){r.globalData.adRequestRes&&(n.ad_number=r.globalData.de_ad_number,n.free_ad_num=r.globalData.free_ad_num,clearInterval(n.adNeterval))}),10)},onUnload:function(){},onShow:function(){d&&d.load().then((function(){d.show()})).then((function(){})).catch((function(e){console.log(e)}))},methods:{afterAdOperate:function(){this.downloadStart(),r.dealPp(this.id,this.userInfo.nickName,this.userInfo.avatarUrl),r.addAdLog(),r.saveAnalysisInfo(5,this.id)},stopAdOperate:function(){r.saveAnalysisInfo(6,this.id),e.showToast({title:"请看完广告才能下载",icon:"none"})},getUserProfile:function(t){var n=this;e.getUserProfile({desc:"用于完善会员资料",success:function(e){console.log(e.userInfo),n.userInfo=e.userInfo,n.hasUserInfo=!0,r.saveUserInfo(e.userInfo.avatarUrl,e.userInfo.nickName),console.log(n.userInfo),n.downloadShow()},fail:function(){e.showToast({title:"请授权更好体验小程序",icon:"none"})}})},getUserSystemInfo:function(){var e=this;return c(o.default.mark((function t(){var n,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,(0,i.default)({url:"".concat(a.default.API,"api/user/getInfo"),method:"POST",data:{openid:r.globalData.openid,platform:r.globalData.projectId}});case 3:s=t.sent,0===s.error_code&&(n.hasUserInfo=!0,n.userInfo=s.data);case 5:case"end":return t.stop()}}),t)})))()},addDownCount:function(){var e=this;return c(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.default)({url:"".concat(a.default.API,"api/w/addDownCount"),method:"POST",data:{id:e.id}});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},checkCollection:function(){var e=this;return c(o.default.mark((function t(){var n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.globalData.openid){t.next=5;break}return t.next=3,(0,i.default)({url:"".concat(a.default.API,"api/w/checkCollection"),method:"POST",data:{id:e.id,openid:r.globalData.openid,platform:r.globalData.projectId}});case 3:n=t.sent,0===n.error_code?e.dealCollection=2:e.dealCollection=1;case 5:case"end":return t.stop()}}),t)})))()},doCollection:function(){var t=this;return c(o.default.mark((function n(){var s;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r.globalData.openid||0==t.dealCollection){n.next=12;break}return n.next=3,(0,i.default)({url:"".concat(a.default.API,"api/w/doCollection"),method:"POST",data:{id:t.id,openid:r.globalData.openid,platform:r.globalData.projectId,status:t.dealCollection,type:t.img_type}});case 3:if(s=n.sent,0!=s.error_code){n.next=9;break}return t.dealCollection=1==t.dealCollection?2:1,n.abrupt("return",e.showToast({title:"操作成功",icon:"none"}));case 9:return n.abrupt("return",e.showToast({title:"操作失败",icon:"none"}));case 10:n.next=13;break;case 12:return n.abrupt("return",e.showToast({title:"请稍后再试",icon:"none"}));case 13:case"end":return n.stop()}}),n)})))()},checkZan:function(){var e=this;return c(o.default.mark((function t(){var n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.globalData.openid){t.next=5;break}return t.next=3,(0,i.default)({url:"".concat(a.default.API,"api/w/checkZan"),method:"POST",data:{id:e.id,openid:r.globalData.openid,platform:r.globalData.projectId}});case 3:n=t.sent,0!==n.error_code?e.canZan=!0:e.canZan=!1;case 5:case"end":return t.stop()}}),t)})))()},doZan:function(){var t=this;return c(o.default.mark((function n(){var s;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r.globalData.openid||0==t.dealCollection){n.next=12;break}return n.next=3,(0,i.default)({url:"".concat(a.default.API,"api/w/doZan"),method:"POST",data:{id:t.id,openid:r.globalData.openid,platform:r.globalData.projectId,status:t.dealCollection}});case 3:if(s=n.sent,0!=s.error_code){n.next=9;break}return t.canZan=!1,n.abrupt("return",e.showToast({title:"操作成功",icon:"none"}));case 9:return n.abrupt("return",e.showToast({title:"操作失败",icon:"none"}));case 10:n.next=13;break;case 12:return n.abrupt("return",e.showToast({title:"请稍后再试",icon:"none"}));case 13:case"end":return n.stop()}}),n)})))()},showRewardedVideoAd:function(){var t=this;u.show().catch((function(){u.load().then((function(){return u.show()})).catch((function(n){r.saveAnalysisInfo(7,t.id),e.showToast({title:"广告显示失败",icon:"none"})}))}))},get_openSetting:function(){var t=this;e.showModal({title:"温馨提示",content:"为了更好的体验小程序,请先授权~",showCancel:!1,success:function(n){e.openSetting({success:function(n){n.authSetting["scope.userInfo"]?e.login({success:function(n){t.code=n.code,e.getUserInfo({withCredentials:!0,success:function(e){t.downloadShow(),t.hasUserInfo=!0,t.userInfo=e.userInfo,r.saveUserInfo(e.userInfo.avatarUrl,e.userInfo.nickName)}})}}):e.showToast({title:"请授权更好体验小程序",icon:"none"})}})}})},toggleBtns:function(){this.btnsShow=!this.btnsShow},backAction:function(){e.navigateBack({fail:function(t){console.log(t),console.log("navigateBack调用失败"),e.switchTab({url:"/pages/index/index"})}})},downloadShow:function(){var e=this;this.authPhoto((function(){e.downloadVisible=!0,console.log("授权相册处理")}))},downloadHide:function(){this.downloadVisible=!1},downloadAction:function(t){var n=this;if(1==t)this.localAdType=1,e.showLoading({title:"正在下载中..."}),setTimeout((function(){n.downloadStart()}),1500),r.saveAnalysisInfo(4,n.id);else if(r.globalData.canShowAd&&r.globalData.illegal_ad_number<r.globalData.ad_number)n.localAdType=0,n.showRewardedVideoAd(),r.saveAnalysisInfo(3,n.id);else{if(!(r.globalData.illfree_ad_num<r.globalData.free_ad_num))return e.showToast({title:"今日可下载次数用完",icon:"none"});n.localAdType=0,n.downloadStart(),r.addFreeAdLog()}},downloadStart:function(){e.showLoading({title:"正在下载中..."}),console.log(this.localAdType);var t=this;t.downloadHide(),1==this.type&&0==this.localAdType?e.downloadFile({url:this.src,success:function(n){console.log(n),200===n.statusCode&&e.saveVideoToPhotosAlbum({filePath:n.tempFilePath,success:function(){r.saveAnalysisInfo(8,t.id),e.hideLoading(),e.showToast({title:"保存成功",icon:"success",duration:1e3})},fail:function(n){e.hideLoading(),console.log(n),"saveImageToPhotosAlbum:fail:auth denied"===n.errMsg||"saveImageToPhotosAlbum:fail auth deny"===n.errMsg||"saveImageToPhotosAlbum:fail authorize no response"===n.errMsg?(e.showToast({title:"需要开启相册权限",icon:"success",duration:1e3}),t.authPhoto((function(){return t.downloadAction(t.localAdType)}))):e.showToast({title:"怎么不保存啦",icon:"success",duration:1e3})}})},fail:function(t){e.showToast("保存失败！")}}):e.getImageInfo({src:0==this.localAdType?this.src:this.src2,success:function(n){e.saveImageToPhotosAlbum({filePath:n.path,success:function(){r.saveAnalysisInfo(8,t.id),e.hideLoading(),e.showToast({title:"保存成功",icon:"success",duration:1e3})},fail:function(n){e.hideLoading(),"saveImageToPhotosAlbum:fail:auth denied"===n.errMsg||"saveImageToPhotosAlbum:fail auth deny"===n.errMsg||"saveImageToPhotosAlbum:fail authorize no response"===n.errMsg?(e.showToast({title:"需要开启相册权限",icon:"success",duration:1e3}),t.authPhoto((function(){return t.downloadAction(t.localAdType)}))):e.showToast({title:"怎么不保存啦",icon:"success",duration:1e3})}})},fail:function(t){e.hideLoading(),e.showModal({title:"提示",content:"当前客户端版本过低，无法使用该功能，请升级客户端"})}})},authPhoto:function(t){e.getSetting({success:function(n){console.log(n),n.authSetting["scope.album"]?t&&t():e.authorize({scope:"scope.album",success:function(){t&&t()},fail:function(n){console.log(n),e.openSetting({success:function(n){1==n.authSetting["scope.album"]?t&&t():e.showToast({title:"授权权限才能下载",icon:"none"})},fail:function(t){console.log(t),e.showToast({title:"请到设置里开启相册权限",icon:"none"})}})}})},fail:function(t){e.showModal({title:"提示",content:"授权权限才能下载！"})}})}},onShareAppMessage:function(e){console.log("src=".concat(this.src,"&src2=").concat(this.src2,"&id=").concat(this.id,"&type=").concat(this.type,"&img_type=").concat(this.img_type));var t="/pages/detail/index?src=".concat(this.src,"&src2=").concat(this.src2,"&id=").concat(this.id,"&type=").concat(this.type,"&img_type=").concat(this.img_type);return""!=r.globalData.shareInfo.share_id?{templateId:r.globalData.shareInfo.share_id,path:t}:{title:r.globalData.shareInfo.share_title,desc:r.globalData.shareInfo.share_desc,path:t}}};t.default=f}).call(this,n("f266")["default"])},"7e91":function(e,t,n){"use strict";n.r(t);var o=n("d0ac"),a=n("0809");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("aef3"),n("b515");var s,l=n("f0c5"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"ad648f8c",null,!1,o["a"],s);t["default"]=c.exports},aef3:function(e,t,n){"use strict";var o=n("e2b5"),a=n.n(o);a.a},b515:function(e,t,n){"use strict";var o=n("1d11"),a=n.n(o);a.a},d0ac:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},e2b5:function(e,t,n){}},[["2d5e","common/runtime","common/vendor"]]]);