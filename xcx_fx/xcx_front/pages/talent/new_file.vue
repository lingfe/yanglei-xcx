<template>
	<view>
	<image  @click="creator" class="bg-img" mode="widthFix" src="../../static/images/ruzhuhb21.jpg"></image>
	</view>
</template>

<script>
	import config from '../../utils/config.js';
	import request from '../../utils/request.js';
	const app = getApp()
	export default {
		data() {
			return {
				bodyShow: true, // 页面显示
				userInfo: null, // 用户信息
				
				hasUserInfo: false,
			}
		},
		onLoad(options) {
			const that = this;

			this.getUserSystemInfo()
		},
		onShow() {
			console.log(124)
			console.log(app.globalData.hasLogin)
			if(!app.globalData.hasLogin){
				this.userInfo = null;
			}
		},
		methods: {
			settingRedirect(){
				uni.navigateTo({
					url: '/pages/user/setting'
				});
			},
			normalQuestion(){
				uni.navigateTo({
					url: '/pages/user/richtext?id=1'
				});
			},
			creator() {
				uni.navigateTo({
					url: '/pages/index/webview?url=https://rtj.darexian.com'
				});
			},
			redirectKefu(){
				//跳转抖音号
				// #ifdef MP-TOUTIAO
				tt.openAwemeUserProfile({
				  success: (res) => {
				    console.log(res);
				  },
				});
				// #endif
				// #ifdef MP-KUAISHOU||MP-QQ
				uni.navigateTo({
					url: '/pages/user/richtext?id=4'
				});
				// #endif
			},
			async getUserSystemInfo() {
				let _this = this
				const r = await request({
					url: `${config.API}api/user/getInfo`,
					method: 'post',
					data: {
						openid: app.globalData.openid,
						platform:app.globalData.projectId
					}
				});
				
				if(r.error_code === 0 && app.globalData.hasLogin){
					_this.hasUserInfo = true
					_this.userInfo = r.data
				}
			},
			
			// #ifdef MP-QQ||MP-KUAISHOU
			// 用户信息回调
			userInfoAction(r) {
				// 如果用户拒绝授权
				if (r.detail.errMsg === 'getUserInfo:fail auth deny' || r.detail.errMsg === 'getUserInfo:fail authorize deny') {
					return uni.showToast({
						title: '请允许授权',
						icon: 'none'
					});
				}
				
				this.dealLoginCallback(r.detail.userInfo)
				
			},
			// #endif
			
			// #ifdef MP-WEIXIN || MP-TOUTIAO
			getUserProfile(e) {
				let that = this
			    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
			    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
			    uni.getUserProfile({
			      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			      success: (res) => {
					that.dealLoginCallback(res.userInfo)
			      },
				  fail() {
				  	return uni.showToast({
				  		title: '请允许授权',
				  		icon: 'none'
				  	});
				  }
			    })
			  },
			// #endif
			
			// #ifdef MP-TOUTIAO
			//头条获取用户信息
			getTtUserInfo() {
				const that = this;
				tt.authorize({
					scope: "scope.userInfo",
					success(r) {
						console.log(r)
						tt.getUserInfo({
							success(res) {
								that.dealLoginCallback(res.userInfo)
							},
							fail(res) {
								return uni.showToast({
									title: '请允许授权',
									icon: 'none'
								});
							}
						});
					},
					fail(rr) {
						if(rr.errMsg == 'authorize:fail auth deny'){
							return uni.showToast({
								title: '请在设置里打开用户信息',
								icon: 'none'
							});
						}else{
							return uni.showToast({
								title: '请允许授权',
								icon: 'none'
							});
						}
						
					}
				});
			},
			// #endif
			
			dealLoginCallback(res){
				// 登录
				this.userInfo = res;
				this.hasUserInfo = true
				uni.setStorage({
					key: 'userLogin',
					data: 1
				});
				app.globalData.hasLogin = true
				app.saveUserInfo(res.avatarUrl,res.nickName)
			}
		},
		// onShareAppMessage(r) {
		// 	let _path = `/pages/index/index`
		// 	// #ifdef MP-TOUTIAO
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
		// 	// #endif
		// 	// #ifdef MP-QQ||MP-WEIXIN||MP-KUAISHOU
		// 	return {
		// 		title: app.globalData.shareInfo.share_title,
		// 		desc: app.globalData.shareInfo.share_desc,
		// 		path: _path,
		// 	}
		// 	// #endif
		// },
	}
</script>

<style>
	.bg-img{
		margin-top:0rpx;
	    width: 100%;
	    height: 100%;   
	}


</style>
