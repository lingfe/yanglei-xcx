 <template>
 	<view class="collection">
 		<view class="collect-list" v-if="type === 1">
 			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 0)">
				<view class="item-body">
					<view class="collect-itemc loading-bg">
						<image :src="item.img_thumb" mode="scaleToFill" :style="{height: windowWidth*.313/.6+'px'}"></image>
					</view>
				<!-- <view class="label-gif" v-if="item.is_gif === 1">GIF</view> -->
 				<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				</view>
				<text v-if="item.self_name">{{item.self_name}}</text>
 			</view>
 		</view>
 		<view class="collect-list" v-else-if="type === 2">
 			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 1)">
				<view class="item-body">
					<view class="collect-itemc loading-bg">
						<image :src="item.img_thumb" mode="scaleToFill"  :style="{height: windowWidth*.313/.6+'px'}"></image>
					</view>
					<image class="play" src="../../static/images/icon-play2.png" mode="widthFix"></image>
				<!-- <image class="index-block-play" src="../../static/images/icon-play2.png" mode="widthFix"></image> -->
				<!-- <view class="label-gif" v-if="item.is_gif === 1">GIF</view> -->
 				<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				</view>
				<text v-if="item.self_name">{{item.self_name}}</text>
 			</view>
 		</view>
 		<view class="collect-list row2" v-else-if="type === 3">
 			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 2)">
				<view class="item-body">
					<view class="collect-itemc loading-bg">
						<image :src="item.img_thumb" mode="scaleToFill" :style="{height: windowWidth * .455 + 'px'}"></image>
					</view>
					<!-- <view class="label-gif" v-if="item.is_gif === 1">GIF</view> -->
					<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				</view>
				<text v-if="item.self_name">{{item.self_name}}</text>
 			</view>
 		</view>
 		<view class="collect-list" v-else>
 			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 3,item.expression_show_video,item.expression_video_url)">
				<view class="item-body">
					<view class="collect-itemc loading-bg">
						<image :src="item.img_thumb" mode="scaleToFill" :style="{height: windowWidth * .313 + 'px'}"></image>
					</view>
					<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
					<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				</view>
				<text v-if="item.self_name">{{item.self_name}}</text>
 			</view>
 		</view>
 		<text class="loading">{{ loadOver ? '没有更多数据～' : '数据加载中...' }}</text>
 	</view>
 </template>
 
 <script>
 	import config from '../../utils/config.js';
 	import request from '../../utils/request.js';
 	import utils from '../../utils/utils.js';
 	
 	const app = getApp();
 	
 	export default {
 		data() {
 			return {
 				windowWidth: utils.systemInfo().windowWidth,
 				list: [],
 				isLoading: false,
 				loadOver: false,
 				page: 1,
				type: 1, // 1-手机壁纸 2-动态壁纸 3-背景图 4-头像 5-表情包
 			}
 		},
 		onLoad(options) {
			console.log(options)
			this.type = options.type ? Number(options.type) : 1;
			console.log(this.type)
 			this.getData();
 		},
 		methods: {
 			async getData() {
 				const r = await request({
 					url: `${config.API}api/w/index/wapplaper/list`,
 					method: 'post',
 					data: {
 						type: this.type,
 						page: this.page
 					}
 				});
 				this.isLoading = false;
 				
 				if (r.error_code === 0) {
 					this.list = this.list.concat(r.data.data || []);
 					if (r.data.current_page >= r.data.last_page) {
 						this.loadOver = true;
 					}
 				}
 			},
 			loadMore() {
 				this.page ++;
 				this.getData();
 			},
 			/**
 			 * 跳转详情
 			 * @param {string} imgSrc 图片地址
 			  * @param {number} id 图片id
 			 * @param {number} imgType 图片类型,系统的
 			  * @param {string} imgSrc2 图片缩略图地址
 			 * @param {number} type 图片类型
 			 */
 			navigateToDetail(imgSrc,id,imgType,imgSrc2, type,expression_show_video,expression_video_url) {
				if(type < 3){
					uni.navigateTo({
						url: `/pages/detail/index?src=${imgSrc}&type=${type}&id=${id}&img_type=${imgType}&src2=${imgSrc2}`
					});
				}else{
					//头像 表情包换新的页面
					uni.navigateTo({
						url: `/pages/detail/layout2?src=${imgSrc}&type=${type}&id=${id}&img_type=${imgType}&src2=${imgSrc2}&e_show_v=${expression_show_video}&e_video=${expression_video_url}`
					});
				}
 				
 			}
 		},
 		onReachBottom() {
 			if (this.isLoading || this.loadOver) return;
 			this.isLoading = true;
 			this.loadMore();
 		},
 	}
 </script>
 
 <style lang="scss" scoped>
	 .collection{
		 margin:20rpx 10rpx;
	 }
 	.collect-tab {
 		display: flex;
 		align-items: center;
 		position: fixed;
 		z-index: 1;
 		top: 0;
 		left: 0;
 		right: 0;
 		width: 100%;
 		background-color: white;
 		.collect-tabitem {
 			font-size: 28rpx;
 			color: #999;
 			flex: 1;
 			text-align: center;
 			position: relative;
 			padding: 20rpx 0;
 			&.active {
 				font-weight: bold;
 				color: #027aff;
 				&:after {
 					content: '';
 					display: block;
 					position: absolute;
 					left: 50%;
 					bottom: 0;
 					width: 80rpx;
 					margin-left: -40rpx;
 					height: 6rpx;
 					border-radius: 10rpx;
 					background-color: #027aff;
 				}
 			}
 		}
 	}
 	.collect-list {
 		display: flex;
 		flex-wrap: wrap;
 		&.row2 {
 			.collect-item {
 				width: 47.75%;
 			}
 		}
 		.collect-item {
 			width: 31.3%;
 			margin-left: 1.5%;
 			margin-bottom: 10rpx;
 			position: relative;
 			display: flex;
			flex-direction: column;
 			align-items: center;
			.item-body {
				width: 100%;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			&>text {
				font-size: 24rpx;
				margin-top: 20rpx;
				display: block;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				width: 100%;
				text-align: center;
				margin-bottom: 10rpx;
			}
 			.collect-itemc {
 				width: 100%;
 				image {
 					display: block;
 					width: 100%;
 					height: 100%;
 					border-radius: 8rpx;
 				}
				.label-gif {
					border-bottom-right-radius: 8rpx;
				}
 			}
 			.play {
 				position: absolute;
				z-index: 1;
 				display: block;
 				width: 60rpx;
 				height: 60rpx;
				.index-block-play {
					position: absolute;
					width: 60rpx;
					height: 60rpx;
				}
 			}
 		}
 	}
	.collect-label {
		position: absolute;
		z-index: 1;
		top: 10rpx;
		left: 10rpx;
		font-size: 24rpx;
		color: white;
		background-color: #ffbc00;
		border-radius: 6rpx;
		padding: 2rpx 8rpx;
	}
 </style>
 