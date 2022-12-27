<template>
	<view>
		<!-- <view class="form">
			<view class="form-input">
				<image src="../../static/images/icon-search.png" mode="widthFix"></image>
				<input type="text" value="" placeholder="输入创作者口令" v-model="keyword" @confirm="searchAction" />
				<image src="../../static/images/long-arrow-right.png" mode="widthFix" @click="searchAction"></image>
			</view>
		</view> -->
		
		<view class="form">
			<view class="form-input" >
				<input type="text"  placeholder="请输入口令搜索" focus="true" v-model="keyword" @confirm="searchAction"/>
				<button @click="searchAction">搜索</button>
			</view>
		</view>
		<view class="talent-list" v-if="list.length > 0">
			<view class="talent-item" v-for="item in list" :key="item.user_id" @click="navigateToDetail(item.user_id)">
				<view class="talent-user">
					<view class="talent-userl">
						<image :src="item.user_headimg"
							mode="scaleToFill"></image>
					</view>
					<view class="talent-userr">
						<view class="talent-name">{{ item.user_nickname }}</view>
						<view class="talent-data">
							<view class="talent-dataitem">
								<image src="../../static/images/icon-img.png" mode="widthFix"></image>
								{{ item.img_num }}
							</view>
							<view class="talent-dataitem">
								<image src="../../static/images/icon-love.png" mode="widthFix"></image>
								{{ item.user_zan }}
							</view>
							<view class="talent-dataitem">
								<image src="../../static/images/icon-fav.png" mode="widthFix"></image>
								{{ item.user_collection }}
							</view>
						</view>
					</view>
				</view>
				<view class="talent-thumbs label-ref">
					<image :src="citem.img" mode="scaleToFit"
						:style="{height: (windowWidth-20)*.32 + 'px'}" 
						v-for="citem in item.img" 
						:key="citem.id"></image>
					<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
				</view>
				<!-- <view class="search-none">点击进入查看所有作品>></view> -->
			</view>
		</view>
		<view v-else>
			
		</view>
	</view>
</template>

<script>
	import config from '../../utils/config.js';
	import request from '../../utils/request.js';
	import utils from '../../utils/utils.js';
	export default {
		data() {
			return {
				windowWidth: utils.systemInfo().windowWidth,
				list: [],
				recommendList: [],
				keyword: '',
				searchText: ''
			}
		},
		onLoad(options) {
			this.keyword = options.keyword;
			// this.getData();
		},
		methods: {
			
			
			searchAction(e) {
				// 保存历史记录
				if (this.keyword !== '') {
					//查询是否有口令，直接跳到创作者详情页
					this.codeSearch()
					
				} else {
					return uni.showToast({
						title: '请输入你要搜索的创作者',
						icon: 'none'
					});
				}
			},
			async codeSearch() {
				uni.showLoading({
					title: '正在查询中...'
				});
				let _this  = this
				const r = await request({
					url:  `${config.API}api/w/index/code/search`,
					method: 'POST',
					data:{
						code : this.keyword
					}
				});
				uni.hideLoading();
				if (r.error_code === 0) {
					uni.navigateTo({
						url: '/pages/talent/detail?id=' + r.data.user_id +'&code='+r.data.user_code
					});
				}else{
					return uni.showToast({
						title: r.msg,
						icon: 'none'
					});
				}
			},
			
			async getData() {
				const r = await request({
					url: `${config.API}api/w/index/expertList`,
					method: 'post',
					data: {
						code: this.keyword
					}
				});
				if (r.error_code === 0) {
					//判断是否为精准搜索，有数据的话直接跳到创作者详情页
					if(r.data.list.user_id > 0){
						uni.navigateTo({
							url: '/pages/talent/detail?id=' + r.data.list.user_id
						});
					}
					this.list = r.data.list.data;
					if (r.data.list.data.length === 0) {
						this.searchText = this.keyword;
						this.getRecommend();
					}
					
					
				}
			},
			async getRecommend() {
				const r = await request({
					url: `${config.API}api/w/index/expertList`,
					method: 'post'
				});
				if (r.error_code === 0) {
					this.recommendList = r.data.list.data;
				}
			},
			/**
			 * 跳转详情
			 * @param {number} userId 用户id
			 */
			navigateToDetail(userId) {
				uni.navigateTo({
					url: '/pages/talent/detail?id=' + userId
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.talent-list {
		padding: 20rpx;
	}

	.talent-item {
		margin-top: 50rpx;

		&:first-child {
			margin-top: 20rpx;
		}
	}

	.talent-user {
		display: flex;
		align-items: center;

		.talent-userl {
			flex-shrink: 0;
			border: 1px solid #aaa;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			overflow: hidden;

			image {
				display: block;
				width: 100%;
				height: 100%;
			}
		}

		.talent-userr {
			flex: 1;
			margin-left: 20rpx;
		}

		.talent-name {
			font-size: 28rpx;
		}

		.talent-data {
			display: flex;
			align-items: center;
			font-size: 24rpx;
			margin-top: 15rpx;
		}

		.talent-dataitem {
			margin-right: 40rpx;
			display: flex;
			align-items: center;

			image {
				display: block;
				width: 30rpx;
				margin-right: 10rpx;
			}
		}
	}

	.talent-thumbs {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 30rpx;
		&:after {
			content: '';
			width: 32%;
		}
		image {
			display: block;
			width: 32%;
			border-radius: 8rpx;
		}
		.label-gif {
			border-bottom-right-radius: 20rpx;
		}
	}

	// .form {
	// 	background: white;
	// 	display: flex;
	// 	align-items: center;
	// 	padding: 30rpx 30rpx 0;

	// 	.cancel {
	// 		color: #666;
	// 		margin-left: 20rpx;
	// 		font-size: 28rpx;
	// 	}
	// }

	// .form-input {
	// 	display: flex;
	// 	align-items: center;
	// 	flex: 1;
	// 	background-color: #f5f5f5;
	// 	border-radius: 80rpx;
	// 	padding: 0 10rpx;

	// 	image {
	// 		display: block;
	// 		width: 36rpx;
	// 		margin: 0 20rpx;
	// 		flex-shrink: 0;
	// 	}

	// 	input {
	// 		display: block;
	// 		flex: 1;
	// 		font-size: 28rpx;
	// 		color: black;
	// 		height: 70rpx;
	// 		line-height: 70rpx;
	// 	}
	// }
	.form {
		background: white;
		display: flex;
		align-items: center;
		padding: 20rpx 20rpx;
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
		background-color: #f3f3f5;
		border-radius: 80rpx;
		padding: 0 0 0 20rpx;
		
		input {
			display: block;
			flex: 1;
			font-size: 26rpx;
			color: black;
			height: 85rpx;
			line-height: 85rpx;
			margin: 0 24rpx;
		}
		
		button {
			background: #3D88FE;
			color: white;
			border-radius: 0;
			border-top-right-radius: 80rpx;
			border-bottom-right-radius: 80rpx;
			height: 85rpx;
			line-height: 85rpx;
			border: 0;
			font-size: 26rpx;
			width: 25%;
			height: 85rpx;
			line-height: 85rpx;
			&:after {
				border: 0;
			}
		}
		
	}

	.search-none {
		font-size: 28rpx;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40rpx;

		image {
			display: block;
			width: 40rpx;
			margin-right: 10rpx;
		}
	}

	.search-title {
		margin-top: 40rpx;
		font-size: 36rpx;
		color: black;
		padding: 0 30rpx;
	}
</style>
