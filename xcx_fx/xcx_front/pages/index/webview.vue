<template>
	<view class="content">
		<web-view :src="webViewUrl"></web-view>
	</view>
</template>

<script>
	import config from '../../utils/config.js';
	import request from '../../utils/request.js';
	import utils from '../../utils/utils.js';
	
	// 在页面中定义插屏广告
	let interstitialAd = null 
	
	export default {
		data() {
			return {
				page: 1, // 页码
				isLoading: false, // 是否加载中
				loadOver: false, // 是否加载完成
				webViewUrl:""
				
			}
		},
		onLoad(options) {
			this.webViewUrl = options.url
		},
		onReady() {
			
		},
		
		onShow() {
			
		},
		methods: {
			
			
		},
		
	}
</script>

<style lang="scss" scoped>
	
.content{
	margin-top: -100rpx;
}
</style>
