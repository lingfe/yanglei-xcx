<template>
	<view class="collection">
		<view class="collect-tab">
			<view class="collect-tabitem" :class="{active: tabIndex === 0}" @click="tabAction(0)">手机壁纸</view>
			<view class="collect-tabitem" :class="{active: tabIndex === 1}" @click="tabAction(1)">动态壁纸</view>
			<view class="collect-tabitem" :class="{active: tabIndex === 2}" @click="tabAction(2)">背景图</view>
			<view class="collect-tabitem" :class="{active: tabIndex === 3}" @click="tabAction(3)">头像</view>
			<view class="collect-tabitem" :class="{active: tabIndex === 4}" @click="tabAction(4)">表情包</view>
		</view>
		<view class="collect-list" v-if="tabIndex === 0">
			<view class="collect-item" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 0)">
				<view class="collect-itemc loading-bg">
					<image :src="item.img_thumb" mode="scaleToFill" :style="{height: windowWidth*.313/.6+'px'}"></image>
				</view>
				<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
			</view>
		</view>
		<view class="collect-list" v-else-if="tabIndex === 1">
			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 1)">
				<view class="collect-itemc loading-bg">
					<image :src="item.img_thumb" mode="scaleToFill"  :style="{height: windowWidth*.313/.6+'px'}"></image>
				</view>
				<image class="play" src="../../static/images/icon-play2.png" mode="widthFix"></image>
				<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
			</view>
		</view>
		<view class="collect-list row2" v-else-if="tabIndex === 2">
			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 2)">
				<view class="collect-itemc loading-bg">
					<image :src="item.img_thumb" mode="scaleToFill" :style="{height: windowWidth * .455 + 'px'}"></image>
				</view>
				<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
			</view>
		</view>
		<view class="collect-list" v-else>
			<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 3)">
				<view class="collect-itemc loading-bg">
					<image :src="item.img_thumb" mode="scaleToFill" :style="{height: windowWidth * .313 + 'px'}"></image>
				</view>
				<!-- <view class="collect-label" v-if="item.is_recommend === 1">置顶</view> -->
				<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
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
				tabIndex: 0
			}
		},
		onLoad() {
			this.getData(0);
		},
		methods: {
			async getData(type) {
				if (this.isLoading) return;
				this.isLoading = true;
				
				const r = await request({
					url: `${config.API}api/w/getCollection`,
					method: 'post',
					data: {
						openid: app.globalData.openid,
						platform: app.globalData.projectId,
						type: this.tabIndex + 1,
						page: this.page
					}
				});
				this.isLoading = false;
				if (type !== this.tabIndex) return;
				if (r.error_code === 0) {
					this.list = this.list.concat(r.data.data || []);
					if (r.data.current_page >= r.data.last_page) {
						this.loadOver = true;
					}
				}
			},
			loadMore() {
				this.page ++;
				this.getData(this.tabIndex);
			},
			/**
			 * tab切换
			 * @param {number} index
			 */
			tabAction(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				this.page = 1;
				this.isLoading = false;
				this.loadOver = false;
				this.list = [];
				this.getData(this.tabIndex);
			},
			/**
			 * 跳转详情
			 * @param {string} imgSrc 图片地址
			  * @param {number} id 图片id
			 * @param {number} imgType 图片类型,系统的
			  * @param {string} imgSrc2 图片缩略图地址
			 * @param {number} type 图片类型
			 */
			navigateToDetail(imgSrc,id,imgType,imgSrc2, type) {
				if(type < 3){
					uni.navigateTo({
						url: `/pages/detail/index?src=${imgSrc}&type=${type}&id=${id}&img_type=${imgType}&src2=${imgSrc2}`
					});
				}else{
					//头像 表情包换新的页面
					uni.navigateTo({
						url: `/pages/detail/layout2?src=${imgSrc}&type=${type}&id=${id}&img_type=${imgType}&src2=${imgSrc2}`
					});
				}
			}
		},
		onReachBottom() {
			if (this.isLoading || this.loadOver) return;
			this.loadMore();
		},
	}
</script>

<style lang="scss" scoped>
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
				color: #5547f7;
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
					background-color: #5547f7;
				}
			}
		}
	}
	.collect-list {
		display: flex;
		flex-wrap: wrap;
		padding-top: 100rpx;
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
			align-items: center;
			justify-content: center;
			.collect-itemc {
				width: 100%;
				image {
					display: block;
					width: 100%;
					height: 100%;
					border-radius: 8rpx;
				}
			}
			.label-gif {
				border-bottom-right-radius: 8rpx;
			}
			.play {
				position: absolute;
				display: block;
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
	.collect-label {
		position: absolute;
		top: 10rpx;
		left: 10rpx;
		font-size: 24rpx;
		color: white;
		background-color: #ffbc00;
		border-radius: 6rpx;
		padding: 2rpx 8rpx;
	}
</style>
