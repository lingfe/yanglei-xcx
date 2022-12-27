<template>
	<view class="index-block">
		<view class="index-block-t">
			<view class="index-block-text">
				<view class="index-block-textstr" :class="{red: type === 4, blue: type === 5, pink: type === 2, green: type === 1, orange: type === 3}">{{ title }}</view>
			</view>
			<view class="index-block-flex"></view>
			<!-- <navigator class="index-block-more" :url="`/pages/search/result`">查看更多></image></navigator> -->
			<!-- <navigator class="index-block-more" :url="`/pages/list/index?type=${type}`">查看更多<image src="../../static/images/view-more.png" mode="widthFix"></image></navigator> -->
		</view>
		<view class="index-block-c" :class="{'layout-2': type === 4 || type === 5, 'layout-1': type === 1 || type === 2, 'layout-3': type === 3}">
			<navigator class="loading-bg label-rel" :url="(type === 4 || type === 5) ? `/pages/detail/layout2?src=${item.img}&id=${item.id}&img_type=${item.type}&src2=${item.img2}&type=${minType}&e_show_v=${item.expression_show_video}&e_video=${item.expression_video_url}` :`/pages/detail/index?src=${item.img}&id=${item.id}&img_type=${item.type}&src2=${item.img2}&type=${minType}`" v-for="item in list" :key="item.id">
				<view class="item-body">
					<image v-if="type === 4 || type === 5" :src="item.img_thumb" mode="scaleToFill" :style="{height: (windowWidth-10)*.3+'px'}"></image>
					<image v-if="type === 2" :src="item.img_thumb" mode="scaleToFill" :style="{height: (windowWidth-60)*.315/.6+'px'}"></image>
					<image v-if="type === 2" class="index-block-play" src="../../static/images/icon-play2.png" mode="widthFix"></image>
					<image v-if="type === 1" :src="item.img_thumb" mode="scaleToFill" :style="{height: (windowWidth-60)*.315/.6+'px'}"></image>
					<image v-if="type === 3" :src="item.img_thumb" mode="scaleToFill" :style="{height: (windowWidth-60)*.455+'px'}"></image>
					<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
				</view>
				
			</navigator>
		</view>
	</view>
</template>

<script>
	import utils from '../../utils/utils.js';
	export default {
		props: {
			list: {
				type: Array,
				default: []
			},
			type: {
				type: Number,
				default: 1
			},
			minType: {
				type: Number,
				default: 0
			},
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				windowWidth: utils.systemInfo().windowWidth,
			}
		}
	}
</script>

<style lang="scss" scoped>
.index-block {
	margin: 0 10rpx 0;
	background-color: center;
	border-radius: 30rpx;
	// padding-top: 30rpx;
	.index-block-t {
		display: flex;
		align-items: center;
	}
	.index-block-text {
		flex: 1;
		.index-block-textstr {
			display: flex;
			align-items: center;
			color: #FFFFFF;
			font-size: 40rpx;
			font-weight: bold;

		}
	}
	.index-block-more {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #808080;
		margin-right: 30rpx;
		image {
			display: block;
			width: 30rpx;
			margin-left: 10rpx;
		}
	}
}
.item-body {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
}
.layout-1 {
    display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 30rpx 30rpx;
	navigator {
		border-radius: 20rpx;
		border: 2px solid #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 31.5%;
		margin-top: 30rpx;
		position: relative;
		image {
			display: block;
			width: 100%;
			border-radius: 14rpx;
		}
		text {
			font-size: 24rpx;
			margin-top: 20rpx;
			display: block;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			width: 100%;
			text-align: center;
			color: #FFFFFF;
		}
		.label-gif {
			border-bottom-right-radius: 14rpx;
		}
		.index-block-play {
			position: absolute;
			width: 60rpx;
			height: 60rpx;
		}
	}
	&:after {
		content: '';
		width: 31.5%;
	}
}
.layout-2 {
	
	display: flex;
	flex-wrap: wrap;
	padding: 0 0 30rpx;
	navigator {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 30%;
		margin-left: 2.5%;
		margin-top: 20rpx;
		image {
			border-radius: 20rpx;
			border: 2px solid #ffffff;
			display: block;
			width: 100%;
			border-radius: 20rpx;
		}
		text {
			font-size: 24rpx;
			margin-top: 20rpx;
			display: block;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			width: 100%;
			text-align: center;
			color: #FFFFFF;
		}
		.label-gif {
			border-bottom-right-radius: 20rpx;
		}
	}
}
.layout-3 {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 30rpx 30rpx;
	navigator {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 47.75%;
		margin-top: 30rpx;
		position: relative;
		image {
			border-radius: 20rpx;
			border: 2px solid #ffffff;
			display: block;
			width: 100%;
			border-radius: 14rpx;
		}
		text {
			font-size: 24rpx;
			margin-top: 20rpx;
			display: block;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			width: 100%;
			text-align: center;
			color: #FFFFFF;
		}
		.index-block-play {
			position: absolute;
			width: 60rpx;
			height: 60rpx;
		}
	}
	&:after {
		content: '';
		width: 31.5%;
	}
}
</style>
