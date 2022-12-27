<template>

	<view class="talent-list">
		 <view>
		 <image @click="settingRedirect" class="framer" mode="widthFix" src="../../static/images/banner.png"></image>
		  </view>
          <image class="bg-img" src="../../static/images/b.png"></image>
		<view class="talent-item" v-for="item in list" :key="item.user_id" @click="navigateToDetail(item.user_id)">
			<view class="talent-user">
				<view class="talent-userl">
					<image :src="item.user_headimg" mode="scaleToFill"></image>
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
							{{ item.user_zan  }}
						</view>
						<view class="talent-dataitem">
							<image src="../../static/images/uic-fav.png" mode="widthFix"></image>
							{{ item.user_collection }}
						</view>
					</view>
				</view>
			</view>
			<view class="talent-thumbs label-rel">
				<image :src="citem.img" mode="scaleToFit" :style="{height: (windowWidth-20)*.32 + 'px'}" v-for="citem in item.img" :key="citem.id"></image>
				<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
			</view>
		</view>
		<text class="loading">{{ loadOver ? '已加载全部数据～' : '数据加载中...' }}</text>
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
				isLoading: false,
				loadOver: false,
				page: 1,
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				this.isLoading = true;
				const r = await request({
					url: `${config.API}api/w/index/expertList`,
					method: 'post',
					data: {
						page: this.page
					}
				});
				this.isLoading = false;
				if (r.error_code === 0) {
					this.list = [...this.list, ...r.data.list.data];
					if (r.data.list.current_page >= r.data.list.last_page) {
						this.loadOver = true;
					}
				}
			},
			creator2() {
				uni.navigateTo({
				url: '/pages/index/webview?url=https://rtj.darexian.com'	
				});
			},
			settingRedirect(){
				uni.navigateTo({
					url: '/pages/talent/new_file'
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
			loadMore() {
				this.page ++;
				this.getData();
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
		},
		
		navigateToList(id,type,miniUrl,wevviewUrl) {
			type = parseInt(type)
			if(type == 1){
				uni.navigateTo({
					url: miniUrl
				});
			}
			if(type == 2){
				uni.navigateTo({
					url: '/pages/index/webview?url='+wevviewUrl
				});
			}
			if(type == 3){
				uni.navigateTo({
					url: '/pages/index/richtext?id='+id
				});
			}
			if(type == 4){
				//跳转抖音号
				// #ifdef MP-TOUTIAO
				tt.openAwemeUserProfile({
				  success: (res) => {
				    console.log(res);
				  },
				});
				// #endif
			}
			
		},


		onReachBottom() {
			if (this.isLoading || this.loadOver) return;
			this.isLoading = true;
			this.loadMore();
		},
	}
	
</script>
<style>
	page {
		/* background-color: #e1e1e1; */
		background: #FFF;
	}
</style>
<style lang="scss" scoped>
.talent-list {
	margin-top: 150rpx;
	padding: 20rpx;

}
.talent-item {
	background-color: #ffffff;
	border-radius: 30rpx;
	margin-top: 50rpx;

}
.talent-user {
	
	display: flex;
	align-items: center;
	.talent-userl {
		flex-shrink: 0;
		/* border: 4px solid #aaa; */
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
		image {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.talent-userr{
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
			width: 26rpx;
			margin-right: 10rpx;
		}
	}
}
.talent-thumbs  {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 30rpx;
	&:after {
		content: '';
		width: 32%;
		height: 0;
	}
	image {
		display: block;
		width: 32%;
		border-radius: 14rpx;
	}
	.label-gif {
		border-bottom-right-radius: 20rpx;
	}
}
.top-image{
    margin-top: 0%;
	overflow: hidden;
	image{
		width: 100%;
		max-height: 100%;
		min-height: 200%;
	}

}

.bg-img{
position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
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
	.swiper {
		width: 100%;
		margin: 0 auto;
		swiper-item {
			height: 100%;
			.swiper-item {
				height: 100%;
				&.active {
					image {
						transform: scale(1);
					}
				}
			}
			image {
				display: block;
				width: 100%;
				height: 100%;
				transform: scale(.92);
				transition-duration: 500ms;
			}
		}
	}
	.framer {
	    width: 714rpx;
	    height: 180rpx;
	    display: block;
	    margin: 0rpx auto 0rpx;
	}
</style>
