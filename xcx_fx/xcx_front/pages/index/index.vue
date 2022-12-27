<template>
	<view class="page">
	<!-- #ifdef MP-TOUTIAO -->
	<view @click="redirectKefu" class="complaint-view" >如何取图</view>
	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN -->
	<view>
		<button open-type="contact" class="complaint-view">
		如何取图
		</button>
	</view>
	<!-- #endif -->
    <view>
      	<view class="top-image">
      		<image  src="../../static/images/toutu.png" mode="widthFix"></image>
      	</view>
	</view>	
    <view class="swiper-comp" v-if="list.length > 0">
    </view>
    <view class="form">
    	<view class="form-input" >
			<image class="searchIco" mode="widthFix" src="../../static/images/home-active.png"></image>
    		<input type="text"  placeholder="请输入口令搜索创作者" v-model="keyword" @confirm="searchAction"/>
    		<button @click="searchAction">搜索</button>
			
    	</view>
    </view>
	
		<!-- #ifdef MP-WEIXIN||MP-QQ||MP-TOUTIAO -->
		<view class="ad-show" v-if="adInfo.banner"><ad :unit-id="adInfo.banner" ></ad></view>
		<!-- #endif -->
		<view class="dr" v-if="talentList.length > 0">
			<image class="dr-label" src="../../static/images/czztj.png" mode="widthFix"></image>
			<view class="talent-wrapper">
				<view class="talent" v-for="item in talentList" :key="item.user_id" @click="navigateToDetail(item.user_id)">
					<view class="talent-c">
						<image :src="item.user_headimg" mode="widthFix"></image>
					</view>
					<text>{{ item.user_nickname }}</text>
				</view>
				<view class="talent more" @click="navigateToTalent">
					<view class="talent-c">
						<view class="more-c">
							<view></view>
							<view></view>
							<view></view>
						</view>
					</view>
					<text>更多</text>
				</view>
			</view>
		</view>
		<view class="dr" v-if="talentList.length > 0">
		<image class="dr-label" src="../../static/images/jxbz.png" mode="widthFix"></image>
        </view>
		<block-comp :type="1" :minType="0"  :list="list_bz" v-if="list_bz.length > 0"></block-comp>
        <view class="dr" v-if="talentList.length > 0">
		<image class="dr-label" src="../../static/images/dtbz.png" mode="widthFix"></image>
        </view>
		<block-comp :type="2" :minType="1"  :list="list_dtbz" v-if="list_dtbz.length > 0"></block-comp>
		<view class="dr" v-if="talentList.length > 0">
		<image class="dr-label" src="../../static/images/bjt.png" mode="widthFix"></image>
		</view>
		<block-comp :type="3" :minType="2" :list="list_bj" v-if="list_bj.length > 0"></block-comp>
		<view class="dr" v-if="talentList.length > 0">
		<image class="dr-label" src="../../static/images/tx.png" mode="widthFix"></image>
		</view>
		<block-comp :type="4" :minType="3"  :list="list_tx" v-if="list_tx.length > 0"></block-comp>
		<view class="dr" v-if="talentList.length > 0">
		<image class="dr-label" src="../../static/images/bqb.png" mode="widthFix"></image>
		</view>
		<block-comp :type="5" :minType="3"  :list="list_bqb" v-if="list_bqb.length > 0"></block-comp>
	</view>
</template>

<script>
	import config from '../../utils/config.js';
	import request from '../../utils/request.js';
	import utils from '../../utils/utils.js';
	import BlockComp from './block.vue';
	const app = getApp()
	
	// #ifdef MP-WEIXIN || MP-QQ
	// 在页面中定义插屏广告
	let interstitialAd = null
	// #endif
	export default {
		data() {
			return {
				windowWidth: utils.systemInfo().windowWidth,
				swiperIndex: 0,
				list: [],
				talentList: [],
				list_bz: [],
				list_dtbz: [],
				list_bj: [],
				list_tx: [],
				list_bqb: [],
				selfnterval:null,//定义循环实例插屏对象的逻辑
				hasShowChaping:null,//定义第一次展示插屏内容的逻辑
				
				adInfo:null,//广告内容
				
				keyword:'',//搜索关键词
			}
		},
		onLoad() {
			setTimeout(() => {
				this.getBanner();
				this.getTalent();
				this.getList(1);
				this.getList(2);
				this.getList(3);
				this.getList(4);
				this.getList(5);
			}, 600)
			let _this = this
			///////////////////////////////
			setTimeout(function(){
				_this.adInfo = app.globalData.adInfo
			},500)
			//广告组件处理
			this.selfnterval =  setInterval(function(){
				if(app.globalData.adInfo != null && app.globalData.adInfo.chaping != ''){
					if(app.globalData.canShowAd){
						// #ifdef MP-WEIXIN ||MP-QQ
						if (uni.createInterstitialAd) {
						  interstitialAd = uni.createInterstitialAd({
						    adUnitId: app.globalData.adInfo.chaping
						  })
						  interstitialAd.onLoad(() => {})
						  interstitialAd.onError((err) => {})
						  interstitialAd.onClose(() => {
							  //当第一次出现后就不会再进行调用显示，如果想循环显示插屏，就注释这行代码
							  clearInterval(_this.hasShowChaping);console.log('关闭了插屏')
							  })
						  console.log('实例化了')
						  console.log(interstitialAd)
						  
						}
						// #endif
					}
					
					clearInterval(_this.selfnterval);
				}
			},200)
			///////////////////////////////
		},
		onShow() {
			let _this = this
			// #ifdef MP-WEIXIN ||MP-QQ
			// 在适合的场景显示插屏广告
			this.hasShowChaping = setInterval(function(){
				if (interstitialAd) {
				  interstitialAd.show().catch((err) => {
				    console.error(err)
				  })
				}
			},300)
			
			// #endif
		},
		components: {
			BlockComp
		},
		methods: {
			async getBanner() {
				const r = await request({
					url: `${config.API}api/w/getBanner`,
					method: 'POST',
					data:{
						platform:app.globalData.projectId
					}
				});
				
				if (r.error_code === 0) {
					this.list = r.data;
				}
			},
			async getTalent() {
				const r = await request({
					url: `${config.API}api/w/index/expert`,
					method: 'POST'
				});
				
				if (r.error_code === 0) {
					this.talentList = r.data;
				}
			},
			async getList(type) {
				const r = await request({
					url: `${config.API}api/w/index/wapplaper`,
					method: 'POST',
					data: {
						type
					}
				});
				
				if (r.error_code === 0) {
					switch(type) {
						case 1:
							this.list_bz = r.data;
						break;
						case 2:
							this.list_dtbz = r.data;
						break;
						case 3:
							this.list_bj = r.data;
						break;
						case 4:
							this.list_tx = r.data;
						break;
						case 5:
							this.list_bqb = r.data;
						break;
					}
				}
			},
			swiperChange(e) {
				this.swiperIndex = e.detail.current;
			},
			
			navigateToSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				});
			},
			navigateToTalent() {
				uni.switchTab({
					url: '/pages/talent/index'
				});
			},
			/**
			 * 跳转详情
			 * @param {number} userId 用户id
			 */
			navigateToDetail(userId) {
				uni.navigateTo({
					url: '/pages/talent/detail?id=' + userId
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
		/* background-color: #eee; */
		background-color: #01adff;
	}
</style>

<style lang="scss" scoped>
.index {
	padding-bottom: 1px
	
}
.container {
	padding-bottom: 1px
	

	
}

.dr {

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: -30rpx 20rpx 20rpx; 
	border-radius: 20rpx;
	padding: 30rpx 0 0 0;
	background-color: custom;
	.dr-label {
		
		display: block;
		flex-shrink: 0;
		width: 100%;
	}

}
.form {
    margin-top: -120rpx;
	background: custom;
	display: flex;
	align-items: center;
	padding: 20rpx 20rpx;
	.cancel {
		color: #666;
		margin-left: 20rpx;
		font-size: 36rpx;
	}
}
.form-input {
	margin-left: 2%;
	margin-right: 2%;
	display: flex;
	align-items: center;
	flex: 1;
	background-color: #f3f3f5;
	border-radius: 20rpx;
	padding: 0 0 0 20rpx;
	height: 110rpx;
	border: 1px solid #000000;
	input {
		
		display: block;
		flex: 1;
		font-size: 30rpx;
		color: black;
		height: 85rpx;
		line-height: 85rpx;
		margin: 0 24rpx;
	}
	
	button {
		left: -20rpx;
		background: #01adff;
		color: white;
		border-radius: 20;

		height: 67rpx;
		line-height: 85rpx;
		border: 0;
		font-size:30rpx;
		width: 20%;
		height: 67rpx;
		line-height: 65rpx;
		&:after {
			border: 0;
		}
	}
	

	
}
	.searchIco{
		width: 50rpx;
		height: 50rpx;
		margin: 0 10rpx;
	}
.search {

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f1f1f1;
	border: 1px solid #ddd;
	border-radius: 50rpx;
	padding: 16rpx 0;
	margin: 20rpx;
	color: #333;
	font-size: 28rpx;
	image {
		display: block;
		width: 30rpx;
		margin-right: 10rpx;
	}
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
.swiper-comp {
	position: relative;
}
.swiper-dot {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	view {
		border-radius: 14rpx;
		width: 12rpx;
		height: 12rpx;
		background-color: rgba(0, 0, 0, .6);
		margin: 0 5rpx;
		&.active {
			width: 45rpx;
			background: white;
		}
	}
}
.swiper-dot {
	bottom: 10px;
}

.loading {
	display: block;
	padding: 20rpx 0;
	text-align: center;
	color: #999;
	font-size: 28rpx;
}
.ad-show{
	margin-top:5px;
	margin-bottom: 10rpx;
}

.talent-wrapper {
	display: block;
	width: 100%;
	overflow: hidden;
	.talent {
		width: 12.8%;
		margin-top: 10rpx;
		margin-left: 6%;
		box-sizing: border-box;
		display: block;
		float: left;
		text-align: center;
		font-size: 24rpx;
		color: #ffffff;
		
		.talent-c {
			position: relative;
			padding-bottom: 100%;
			width: 100%;
			border: 2px solid #01d1ff;
			border-radius: 100%;
			margin-bottom: 10rpx;
			overflow: hidden;
			image {
				position: absolute;
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
		}
		
		text {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			display: block;
			
		}
	}
}
.more {
	margin-top: 40rpx;
	.talent-c {
		.more-c {
			display: flex !important;
			align-items: center;
			justify-content: center;
			position: absolute;
			width: 100%;
			height: 100%;
			view {
				content: '';
				display: block;
				width: 10rpx;
				height: 10rpx;
				border-radius: 50%;
				background-color: #ffffff;
				margin: 0 5rpx;
			}
		}
	}
}

.some-entry {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 20rpx 10rpx;
	navigator {
		display: block;
		width: 48%;
		image {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
}
.custom-head {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	right: 0;
	background-color: #01adff;
	display: flex;
	align-items: flex-end;
}
.custom-head-c {
	display: flex;
	align-items: center;
	margin-bottom: 26rpx;
}
.share {
	border: 0;
	outline: none;
	width: 50rpx;
	background: none;
	display: block;
	margin: 0 0 0 30rpx;
	padding: 0;
	&:after {
		border: 0;
		outline: none;
	}
	image {
		display: block;
		width: 40rpx;
		height: 40rpx;;
	}
}
.app-name {
	font-size: 40rpx;
	color: white;
	margin-left: 30rpx;
}
.bg-img{
position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
page{
	text-align: center;
}
.top-image{
    margin-top: 0%;
	overflow: hidden;
	image{
		width: 100%;
		max-height: 100%;
		min-height: 100%;
	}

}
.complaint-view {
    position: fixed;
    top: 360rpx;
    left: 0;
    width: 40rpx;
    line-height: 40rpx;
    z-index: 999;
    background-color: #01adff;
    color: #fff;
    font-size: 26rpx;
    font-weight: 900;
    border-radius: 0 24rpx 24rpx 0;
    box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.24);
    padding: 16rpx 0 16rpx 8rpx;
}
</style>
