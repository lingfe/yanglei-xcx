<template>
	<view class="list">
		<view class="item" v-for="item in list" :key="item.id" :style="{height: windowWidth*.455+'px'}" @click="navigateToList(item.id)">
			<image :src="item.img" mode="scaleToFill"></image>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	import config from '../../utils/config.js';
	import request from '../../utils/request.js';
	import utils from '../../utils/utils.js';
	const app = getApp()
	export default {
		data() {
			return {
				windowWidth: utils.systemInfo().windowWidth,
				list: []
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				const r = await request({
					url: `${config.API}api/w/getCateList`,
					method: 'post'
				});
				
				if (r.error_code === 0) {
					this.list = r.data;
				}
			},
			
			navigateToList(id) {
				uni.navigateTo({
					url: '/pages/list/index?cid=' + id
				});
			}
		},
		onShareAppMessage(r) {
			let _path = `/pages/index/index`
			// #ifdef MP-TOUTIAO
			if (app.globalData.shareInfo.share_id != '') {
				return {
					templateId: app.globalData.shareInfo.share_id,
					path: _path,
				}
			} else {
				return {
					title: app.globalData.shareInfo.share_title,
					desc: app.globalData.shareInfo.share_desc,
					path: _path,
				}
			}
			// #endif
			// #ifdef MP-QQ||MP-WEIXIN||MP-KUAISHOU
			return {
				title: app.globalData.shareInfo.share_title,
				desc: app.globalData.shareInfo.share_desc,
				path: _path,
			}
			// #endif
		},
	}
</script>

<style lang="scss" scoped>
.list {
	padding: 30rpx 0;
	.item {
		float: left;
		width: 45.5%;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
		border-radius: 20rpx;
		margin: 20rpx 0 0 3%;
		image {
			display: block;
			width: 100%;
			height: 100%;
		}
		text {
			position: absolute;
			left: 0;
			bottom: 0;
			color: white;
			right: 0;
			background-color: rgba(0, 0, 0, .6);
			display: block;
			font-size: 24rpx;
			padding: 10rpx 0;
			text-align: center;
		}
	}
}
</style>
