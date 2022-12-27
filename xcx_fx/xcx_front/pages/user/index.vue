<template>
	
	<view class="user">
		
		<view class="user-top">
			<view class="user-head">
				<image class="bg-img" src="../../static/images/BGt.png"></image>
				<image class="user-headicon" :src="userInfo.avatarUrl" v-if="userInfo" mode="widthFix" />
				<view class="user-default" v-else>
					<image src="../../static/images/man.png" mode="widthFix"/>
					
				</view>

				<text  class="user-name">{{userInfo ? userInfo.nickName : ''}}</text>
				
			</view>
			
			<!-- #ifdef MP-QQ||MP-KUAISHOU -->
			<button open-type="getUserInfo" hover-class="none" @getuserinfo="userInfoAction" v-if="!userInfo">注册/登录</button>
			<!-- #endif -->
			
			<!-- #ifdef MP-WEIXIN||MP-TOUTIAO -->
			<button open-type="getUserInfo" hover-class="none" @click="getUserProfile" v-if="!userInfo">注册/登录</button>
			<!-- #endif -->
			
			
			
		</view>


		<view class="user-list">
					<button @click="creator" hover-class="none" class="user-item">
						<image class="user-item-ic2" src="../../static/images/creator.png" mode="widthFix" />
						<text>创作者入口</text>
						<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
					</button>
		</view>
		<view class="user-list">
			<navigator url="/pages/user/collect" class="user-item" v-if="userInfo">
				<image class="user-item-ic" src="../../static/images/uic-fav.png" mode="widthFix" />
				<text>我的收藏</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</navigator>
			<!-- #ifdef MP-QQ||MP-KUAISHOU -->
			<button open-type="getUserInfo" hover-class="none" @getuserinfo="userInfoAction" class="user-item" v-else>
				<image class="user-item-ic" src="../../static/images/uic-fav.png" mode="widthFix" />
				<text>我的收藏</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN||MP-TOUTIAO -->
			<button open-type="getUserInfo" hover-class="none" @click="getUserProfile" class="user-item" v-else>
				<image class="user-item-ic" src="../../static/images/uic-fav.png" mode="widthFix" />
				<text>我的收藏</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
			<!-- #endif -->
			
			
			<button @click="normalQuestion" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-question.png" mode="widthFix" />
				<text>常见问题</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
			
			<!-- #ifdef MP-TOUTIAO|| MP-KUAISHOU||MP-QQ -->
			<button @click="redirectKefu" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-contact.png" mode="widthFix" />
				<text>联系我们</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<button open-type="contact" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-contact.png" mode="widthFix" />
				<text>联系我们</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
			<!-- #endif -->
			<button @click="settingRedirect" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-setting.png" mode="widthFix" />
				<text>设置中心</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
		</view>
		<view class="user-list">
			
			<button open-type="share" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/share.png" mode="widthFix" />
				<text>分享给好友</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
		</view>
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
	page {
		background-color: #ffffff;
	}
</style>
<style lang="scss" scoped>
.user {
	position: fixed;
	width: 100%;
	// display: none;
	&.active {
		display: block;
		
	}
}
.user-top {
	
	margin-top:170rpx;
	background-color: none;
	display: flex;
	align-items: center;
	padding: 40rpx;
	
	.user-head {
		flex: 1;
		display: flex;
		align-items: center;
		.user-headicon {
			border-radius: 50%;
			width: 140rpx;
			height: 140rpx;
			margin-right: 20rpx;
			margin-left: 20rpx;
			border: 5px solid #FFFFFF;
			
		}
		.user-default {
			border: 4px solid #FFFFFF;
			width: 140rpx;
			height: 140rpx;
            margin-right: 20rpx;
			margin-left: 20rpx;
			border: 5px solid #FFFFFF;
			
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.user-name {
			display: block;
			font-size: 36rpx;
			color: #000000;
			margin-left: 20rpx;
			flex: 1;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			min-width: 2rpx;
		}
		
		.user-btn {
			
			font-size: 28rpx;
			color: #000000;
			
		}
	}
	button {
		display: block;
		color: #000000;
		border: none;
		background: center;
		border-radius: 30rpx;
		font-size: 36rpx;
		right: 215rpx;	
		width: 320rpx;
		&:after {
			border: 0;
			
			border-radius: 80rpx;
		}
		
	}
}
.user-gif {
	padding-right: 210rpx;
	width: 45rpx;
	height: 45rpx;
}
.user-list {
	border: 1px solid #f4f4f4;
	border-radius: 30rpx;
	background-color: #FFFFFF;
	padding-left: 40rpx;
	padding-right: 40rpx;
	margin-top: 20rpx;
	.user-item {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		border: 0;
		height: 102rpx;
		border-bottom: 1px solid #f1f1f1;
		background-color: #fff;
		border-radius: 40;
		padding: 0rpx 0;
		box-shadow: none;
		&:after {
			border: none;
		}
		&:last-child {
			border-bottom: 0;
		}
		.user-item-ic {
			display: block;
			width: 30rpx;
			height: 30px;
			margin-right: 25rpx;
			margin-left: 30rpx;
		}
		.user-item-ic2 {
			display: block;
			width: 35rpx;
			height: 35px;
			margin-right: 25rpx;
			margin-left: 30rpx;
		}
		.user-item-arrow {
			display: block;
			width: 35rpx;
			height: 35rpx;
			margin-right: 40rpx;
		}
		text {
			display: block;
			flex: 1;
			font-size: 32rpx;
			text-align: left;
		}
	}
}
.with-form {
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .8);
	display: none;
	align-items: center;
	justify-content: center;
	&.active {
		display: flex;
	}
	.with-formedit {
		width: 84%;
		background-color: #fff;
		border-radius: 30rpx;
		overflow: hidden;
		dt {
			background-color: #5547f7;
			font-size: 36rpx;
			color: #fff;
			padding: 30rpx 0;
			text-align: center;
		}
		dd {
			padding: 0 30rpx;
			.with-form-item {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				margin-top: 30rpx;
				label {
					display: block;
					width: 160rpx;
				}
				input {
					border: 1px solid #5547f7;
					padding: 2rpx 10rpx;
					flex: 1;
					font-size: 24rpx;
					border-radius: 40rpx;
				}
			}
			.with-form-select {
				overflow: hidden;
				padding: 20rpx 0;
				span {
					float: left;
					margin-top: 24rpx;
					font-size: 30rpx;
					text-align: center;
					padding: 20rpx 0;
					background-color: #f0f0f0;
					color: #666;
					width: 28%;
					border-radius: 6rpx;
					box-sizing: border-box;
					border: 1px solid #f0f0f0;
					&.active {
						border: 1px solid #01adff;
					}
					&:nth-child(3n-1) {
						margin: 24rpx 8% 0 8%;
					}
				}
			}
			.with-form-tips {
				font-size: 20rpx;
				color: #aaa;
				padding: 0 0 40rpx 0;
				color: red;
			}
			.with-form-submit {
				padding: 0;
				border: 0;
				border-radius: 60rpx;
				color: #fff;
				font-size: 30rpx;
				background: linear-gradient(#01adff, #6475fd);
				margin: 40rpx 0;
				&:after {
					border: 0;
				}
			}
		}
	}

	.custom-share-button{
		
		img{
			width: 32rpx;
			height: 32rpx;
			vertical-align: middle;
			margin-top: -2px;
			margin-right: 2px;
		}
		background-color: #01adff;
		border-radius: 40px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		line-height: 60rpx;
		text-align: right;
		padding-right: 26rpx;
		font-size: 24rpx;
		background-color: #fff;
		position: fixed;
	    right: 0;
	    bottom: 60%;
	    z-index:2000;
	}
	.custom-share-button::after{
		border: 0px solid red;
	}
}
.bg-img{
position: fixed;
    width: 100%;
    height: 450rpx;
    top: 0;
    left: 0;
    z-index: -1;
}
.menu{
	image{
	width: 38rpx;
	height: 38rpx;
	}
}
	.border-box{
		box-shadow: 0 0px 20px rgba(231, 231, 231, 0.6);
		border-radius: 16rpx;
	}
	.hover-class1{
		background-color: #F8F8F8;
	}
	.arror-right{
		width: 15rpx;
		height: 15rpx;
		border-top: 3rpx solid #a9acb3;
		border-right: 3rpx solid #a9acb3;
		transform: rotate(45deg);
	}
.dr-label2 {

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 0rpx;
	padding:135rpx 0 0 0;
	background-color: custom;
		
	display: block;
	flex-shrink: 0;
	width: 100%;
	
}
</style>
