<template>
	<view>
		<view class="form">
			<view class="form-input">
				<image src="../../static/images/icon-search.png" mode="widthFix"></image>
				<input type="text" value="" placeholder="搜索" v-model="keyword" @confirm="searchAction" />
				<image src="../../static/images/long-arrow-right.png" mode="widthFix" @click="searchAction"></image>
			</view>
			<view class="cancel" @click="navigateBack">取消</view>
		</view>
		<view class="history">
			<view class="history-head">
				<text>搜索历史</text>
				<image src="../../static/images/icon-trash.png" mode="widthFix" @click="cleanHistory"></image>
			</view>
			<view class="history-list">
				<navigator v-for="item in historyList" :url="'/pages/search/result?keyword=' + item">
					{{ item }}
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				keyword: '',
				historyList: []
			}
		},
		onLoad() {
			let storageHistory = uni.getStorageSync('wallpaper_search_history');
			console.log(storageHistory);
			if (storageHistory) {
				storageHistory = storageHistory = JSON.parse(storageHistory);
			} else {
				storageHistory = [];
			}
			this.historyList = storageHistory;
		},
		methods: {
			searchAction(e) {
				// 保存历史记录
				if (this.keyword !== '') {
					// 判断数据是否存在历史记录中
					const currentIndex = this.historyList.indexOf(this.keyword);
					if (currentIndex > -1) {
						this.historyList.splice(currentIndex, 1);
						
					} 
					
					this.historyList.unshift(this.keyword);
					uni.setStorageSync('wallpaper_search_history', JSON.stringify(this.historyList));
					
					uni.navigateTo({
						url: '/pages/search/result?keyword=' + this.keyword
					});
				} else {
					return uni.showToast({
						title: '请输入你要搜索的创作者',
						icon: 'none'
					});
				}
			},
			cleanHistory() {
				uni.removeStorageSync('wallpaper_search_history');
				this.historyList = [];
			},
			navigateBack() {
				uni.navigateBack();
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

<style>
	page {
		background: #f1f1f1;
	}
</style>
<style lang="scss" scoped>
	.form {
		background: white;
		display: flex;
		align-items: center;
		padding: 30rpx;
		.cancel {
			color: #666;
			margin-left: 20rpx;
			font-size: 28rpx;
		}
	}
	.form-input {
		display: flex;
		align-items: center;
		flex: 1;
		background-color: #f5f5f5;
		border-radius: 80rpx;
		padding: 0 10rpx;
		
		image {
			display: block;
			width: 36rpx;
			margin: 0 20rpx;
			flex-shrink: 0;
		}
		input {
			display: block;
			flex: 1;
			font-size: 28rpx;
			color: black;
			height: 70rpx;
			line-height: 70rpx;
		}
	}
	.history {
		background: white;
		padding: 30rpx;
		.history-head {
			display: flex;
			align-items: center;
			text {
				display: block;
				flex: 1;
				font-size: 32rpx;
				font-weight: bold;
				color: black;
			}
			image {
				display: block;
				width: 40rpx;
			}
		}
	}
	.history-list {
		navigator {
			display: inline-block;
			vertical-align: top;
			background-color: #f1f1f1;
			color: #333;
			font-size: 24rpx;
			padding: 10rpx 20rpx;
			border-radius: 40rpx;
			margin: 20rpx 20rpx 0 0;
		}
	}
</style>
