<template>
	<view class="alert" v-if="visible">
		<view class="alert-content">
			<view class="alert-title">{{ title }}</view>
			<view class="alert-body"><slot></slot></view>
			<view class="alert-btn" @click="confirmAction">确认</view>
		</view>
		<view class="alert-mask"></view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '提示'
			},
			text: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				visible: false
			}
		},
		methods: {
			show() {
				this.visible = true;
			},
			confirmAction() {
				this.visible = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alert {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		animation: alertAnimation .5s;
		.alert-content {
			background-color: white;
			border-radius: 10rpx;
			position: fixed;
			width: 70%;
			.alert-title {
				text-align: center;
				font-size: 28rpx;
				padding: 20rpx;
			}
			.alert-body {
				padding: 30rpx;
				font-size: 24rpx;
				color: #333;
			}
			.alert-btn {
				color: #3e78d8;
				font-size: 24rpx;
				padding: 20rpx 0;
				text-align: center;
				border-top: 1px solid #eee;
			}
		}
		.alert-mask {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .7);
		}
	}
	
	@keyframes alertAnimation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
