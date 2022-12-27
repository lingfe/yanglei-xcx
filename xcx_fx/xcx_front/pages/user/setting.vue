<template>
	<view class="user">
		<view class="user-list">
			<button @click="cleanSession" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-clean.png" mode="widthFix" />
				<text>清除缓存</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
			<button @click="normalQuestion" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-person.png" mode="widthFix" />
				<text>用户隐私保护指引</text>
				<image class="user-item-arrow" src="../../static/images/ic-arrow-right.png" mode="widthFix" />
			</button>
		</view>
		<view class="user-list" v-if="hasUserInfo">
			<button @click="logout" hover-class="none" class="user-item">
				<image class="user-item-ic" src="../../static/images/u-logout.png" mode="widthFix" />
				<text>退出登录</text>
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
			
			this.hasUserInfo = app.globalData.hasLogin
		},
		methods: {
			logout(){
				uni.showModal({
				    content: '确定要退出登录吗？',
				    success: (res) => {
				        if (res.confirm) {
							app.globalData.hasLogin = false
							uni.removeStorage({
								key: 'userLogin',
							})
							
							uni.switchTab({
								url: '/pages/user/index'
							})
				        } 
				    }
				});
			},
			cleanSession(){
				uni.showToast({
					title:'清除成功'
				})
			},
			normalQuestion(){
				uni.navigateTo({
					url: '/pages/user/richtext?id=2'
				});
			},
			
			
		},
		
	}
</script>

<style>
	page {
		background-color: #ffffff;
	}
</style>
<style lang="scss" scoped>
.user {
	// display: none;
	&.active {
		display: block;
	}
}
.user-top {
	background-color: #fff;
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
		}
		.user-default {
			width: 140rpx;
			height: 140rpx;
			background-color: #f1f1f1;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				display: block;
				width: 50%;
				height: 50%;
				border-radius: 50%;
			}
		}
		.user-name {
			display: block;
			font-size: 36rpx;
			color: #000;
			margin-left: 20rpx;
			flex: 1;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			min-width: 2rpx;
		}
		.user-btn {
			font-size: 28rpx;
			color: #01adff;
		}
	}
	button {
		display: block;
		color: #01adff;
		border: 1px solid #01adff;
		border-radius: 10rpx;
		font-size: 26rpx;
		padding: 0 50rpx;
		width: 200rpx;
		&:after {
			border: 0;
			background: none;
		}
	}
}
.user-list {
	background-color: #fff;
	padding-left: 40rpx;
	padding-right: 40rpx;
	margin-bottom: 30rpx;
	border-radius: 30rpx;
	border: 1px solid #f4f4f4;
	.user-item {
		display: flex;
		align-items: center;
		border: 0;
		border-bottom: 1px solid #f1f1f1;
		background-color: #fff;
		border-radius: 0;
		padding: 30rpx 0;
		box-shadow: none;
		&:after {
			border: none;
		}
		&:last-child {
			border-bottom: 0;
		}
		.user-item-ic {
			display: block;
			width: 35rpx;
			height: 35rpx;
			margin-right: 10rpx;
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
			background-color: #01adff;
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
					border: 1px solid #01adff;
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
				background: linear-gradient(#01adff, #01adff);
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
</style>
