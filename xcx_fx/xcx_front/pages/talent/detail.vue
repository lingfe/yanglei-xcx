<template>
	
	<view class="detail">
		
		<view class="detail-t">
			<view class="detail-data">
				<view class="detail-data-content">
					<view class="detail-user">
						
						<image :src="info.user_headimg" mode="scaleToFill" ></image>
						<view class="android-tips">所有作品均在下方，请仔细查找，超清无水印原图下载为原画超清，感谢支持！</view>
						
						
					</view>
					
					<view class="detail-user-data">
						<view class="detail-uditem">
							作品<text>{{ info.img_num }}</text>
						</view>
						<view class="detail-uditem">
							点赞<text>{{ info.user_zan }}</text>
						</view>
						<view class="detail-uditem">
							收藏<text>{{ info.user_collection }}</text>
						</view>
					</view>
				</view>
				<button open-type="share" hover-class="none" class="user-item">
					<image class="detail-data-label2" src="../../static/images/share.png" mode="widthFix" ></image>
				</button>
				<view class="detail-data-label" @click="openStatement" src="../../static/images/share2.png" mode="widthFix">声明</view>
				
				<view class="detail-data-label3" >
					<text>{{ info.user_nickname }}</text>
					<!-- <image class="user-gif" src="../../static/images/talent.gif" mode="widthFix" ></image>-->
				</view>
				
				<image class="detail-data-bg" src="../../static/images/BGt.png" mode="scaleToFill" :style="{height: windowWidth / 1.76 + 'px'}"></image>
			</view>
			<view class="collect-tab">
				<view class="collect-tabitem" :class="{active: tabIndex === -1}" @click="tabAction(-1)">全部</view>
				<!-- 按当前创作者已有的素材类型展现 -->
				<view class="collect-tabitem" v-for="(item,index) in typeList" :class="{active: tabIndex === item.id}" @click="tabAction(item.id)">{{item.name}}</view>
			</view>
		</view>
		
		<view v-if="layout === 1">
			<view class="collect-list waterfall-flow" :class="waterfallFlowVisible ? 'show' : ''" v-if="tabIndex === -1" :style="{height: Math.max(...colHeights) + 'px'}">
				<view class="collect-item label-rel"
				 v-for="(item, index) in list" 
				 :key="item.id" 
				 @click="navigateToDetail(item.img,item.id,item.type,item.img2, item.type-1,item.expression_show_video,item.expression_video_url)" 
				 :style="{width: waterfallFlowWidth+'px', left: (ip[index] ? ip[index].left : 0) + 'px', top: (ip[index] ? ip[index].top : 0) + 'px'}">
					<view class="item-body">
						<view class="collect-itemc loading-bg">
							<image :src="item.img_thumb" mode="widthFix" @load="e => imgLoad(index, e)"></image>
						</view>
						<image class="play" src="../../static/images/icon-play2.png" mode="widthFix" v-if="item.type === 2"></image>
						<view class="collect-label" v-if="item.is_recommend === 1">置顶</view>
						<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
					</view>
					<!-- <text v-if="item.self_name">{{item.self_name}}</text> -->
				</view>
			</view>
			<view class="collect-list" v-else-if="tabIndex === 0">
				<view class="collect-item" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 0)">
					<view class="item-body">
						<view class="collect-itemc loading-bg">
							<image :src="item.img_thumb" mode="widthFix"  :style="{height: windowWidth*.313/.6+'px'}"></image>
						</view>
						<view class="collect-label" v-if="item.is_recommend === 1">置顶</view>
					</view>
					<text v-if="item.self_name">{{item.self_name}}</text>
				</view>
			</view>
			<view class="collect-list" v-else-if="tabIndex === 1">
				<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 1)">
					<view class="item-body">
						<view class="collect-itemc loading-bg">
							<image :src="item.img_thumb" mode="widthFix"  :style="{height: windowWidth*.313/.6+'px'}"></image>
						</view>
						<image class="play" src="../../static/images/icon-play2.png" mode="widthFix"></image>
						<view class="collect-label" v-if="item.is_recommend === 1">置顶</view>
						<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
					</view>
					<text v-if="item.self_name">{{item.self_name}}</text>
					
				</view>
			</view>
			<view class="collect-list row2" v-else-if="tabIndex === 2">
				<view class="collect-item label-rel" v-for="item in list" :key="item.id" @click="navigateToDetail(item.img,item.id,item.type,item.img2, 2)">
					<view class="item-body">
						<view class="collect-itemc loading-bg">
							<image :src="item.img_thumb" mode="widthFix" :style="{height: windowWidth * .455 + 'px'}"></image>
						</view>
						<view class="collect-label" v-if="item.is_recommend === 1">置顶</view>
						<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
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
						<view class="collect-label" v-if="item.is_recommend === 1">置顶</view>
						<view class="label-gif" v-if="item.is_gif === 1">GIF</view>
					</view>
					<text v-if="item.self_name">{{item.self_name}}</text>
				</view>
			</view>
		</view>
		
		<view v-else>
			<view class="list2" :class="{row2: tabIndex === 2}">
				<view class="item" v-for="item in list">
					<view class="item-line"></view>
					<view class="item-data">
						<view class="item-time">{{ item.date }}</view>
						<view class="item-imgs">
							<view class="item-img label-ref" v-for="citem in item.imgs" :key="citem.id" @click="navigateToDetail(citem.img,citem.id,citem.type,citem.img2, tabIndex,citem.expression_show_video,citem.expression_video_url)">
								<view class="item-body">
									<image :src="citem.img_thumb" mode="scaleToFill"  :style="{height: (windowWidth-30) * (tabIndex < 2 ? (.313/.6) : (tabIndex === 2 ? (.4775 / 1.6) : .313 ))+'px'}"></image>
									<image class="play" src="../../static/images/icon-play2.png" mode="widthFix" v-if="tabIndex === 1"></image>
									<view class="collect-label" v-if="citem.is_recommend === 1">置顶</view>
									<view class="label-gif" v-if="citem.is_gif === 1">GIF</view>
								</view>
								<text v-if="citem.self_name">{{citem.self_name}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<text class="loading">{{ loadOver ? '已加载全部数据~' : '数据加载中...'}}</text>
		<!-- <view class="layout-change" v-if="tabIndex > -1">
			<view class="layout-c" :class="{active: layout === 1}" @click="layoutChange(1)">
				<image src="../../static/images/show-type1.png" mode="widthFix" v-if="layout === 1"></image>
				<image src="../../static/images/show-type1.png" mode="widthFix" v-else></image>
			</view>
			
			<view class="layout-c layout-item2" :class="{active: layout === 2}" @click="layoutChange(2)">
				<image src="../../static/images/show-type2.png" mode="widthFix" v-if="layout === 2"></image>
				<image src="../../static/images/show-type2.png" mode="widthFix" v-else></image>
			</view>
		</view>-->
		
		
		<view class="pailie" v-if="tabIndex > -1">
		<view class="pailie-c" :class="{active: layout === 1}" @click="layoutChange(1)">
			<image src="../../static/images/show-type1.png" mode="widthFix" v-if="layout === 1"></image>
			<image src="../../static/images/show-type1.png" mode="widthFix" v-else></image>
			</view>
			
			<view class="shijian" :class="{active: layout === 2}" @click="layoutChange(2)">
					<image src="../../static/images/show-type2.png" mode="widthFix" v-if="layout === 2"></image>
					<image src="../../static/images/show-type2.png" mode="widthFix" v-else></image>
				</view>
		</view>
			
			
		<Alert title="声明" @confirm="confirmAction" ref="alert">
			<view>创作者上传的素材内容由创作者负责，部分来源于网络，如有侵权，请联系小程序官方进行删除处理！</view>
		</Alert>
	</view>
</template>

<script>
	import config from '../../utils/config.js';
	import request from '../../utils/request.js';
	import utils from '../../utils/utils.js';
	import Alert from '../../components/alert.vue';
	const app = getApp()
	
	// #ifdef MP-WEIXIN || MP-QQ || MP-TOUTIAO
	// 在页面中定义插屏广告
	let interstitialAd = null
	// #endif
	export default {
		data() {
			return {
				code : '',
				id: '',
				windowWidth: utils.systemInfo().windowWidth,
				
				list: [],
				isLoading: false,
				loadOver: false,
				page: 1,
				tabIndex: -1,
				layout: 1,
				layoutRecord:1,//记录创作者自己所选择的展示形式
				info: {}, // 信息
				typeList:[],//显示当前创作者有上传的素材类型
				// 瀑布流
				waterfallFlowWidth: (utils.systemInfo().windowWidth-20) / 3,
				colHeights: [0, 0, 0],
				ip: [],
				stackList: [], // 队列
				currentLoad: 0, // 当前加载到第几张图片
				waterfallFlowVisible: false, // 瀑布流显示，处理一开始排版错乱
			}
		},
		onLoad(options) {
			this.id = options.id || '';
			this.code = options.code || '';
			this.getData();
			this.getList();
			// #ifdef MP-TOUTIAO
			if (app.globalData.adInfo != null && app.globalData.adInfo.chaping != '' && app.globalData.canShowAd) {
				interstitialAd = tt.createInterstitialAd({
				  adUnitId: app.globalData.adInfo.chaping,
				});
				
			}
			// #endif
		},
		onShow() {
			// #ifdef MP-TOUTIAO
			if(interstitialAd){
				interstitialAd
				  .load()
				  .then(() => {
				    interstitialAd.show();
				  })
				  .then(()=>{
					  
				  })
				  .catch((err) => {
				    console.log(err);
				  });
			}
			// #endif
		},
		components: {
			Alert
		},
		methods: {
			async getData() {
				const r = await request({
					url: `${config.API}api/w/index/expertList`,//换新接口查询
					method: 'post',
					data: {
						user_id: this.id,
						code : this.code
					}
				});
				if (r.error_code === 0) {
					this.info = r.data;
					this.typeList = r.data.type_list
					this.layout = r.data.type_wallpaper;//从后台获取当前默认要渲染的排版是瀑布流还是时间轴 
					this.layoutRecord = r.data.type_wallpaper;//从后台获取当前默认要渲染的排版是瀑布流还是时间轴 
					
					if(this.tabIndex === -1){
						this.layout = 1;
					}
					// if(this.typeList.length > 0){
					// 	this.tabIndex = this.typeList[0]['id'];//获取当前要查询的素材第一个类型
					// 	this.getList();
					// }
				}
			},
			async getList() {
				this.isLoading = true;
				const r = await request({
					url: `${config.API}api/w/index/list`,
					method: 'post',
					data: {
						user_id: this.id,
						type: this.tabIndex + 1,
						page: this.page,
						show: this.tabIndex === -1 ?1:this.layout,
						code: this.code,
					}
				});
				this.isLoading = false;
				if (r.error_code === 0) {
					if (this.layout === 1) {
						this.list = [...this.list, ...r.data.data];
					} else {
						this.list = r.data;
						console.log(this.list);
					}
					if (r.data.current_page >= r.data.last_page) {
						this.loadOver = true;
					}
				}
				
				if (this.tabIndex === -1) {
					setTimeout(() => {
						this.waterfallFlowVisible = true;
					}, 500);
				}
			},
			/**
			 * 更改布局
			 * @param {number} index
			 */
			layoutChange(index) {
				if (this.layout === index) return;
				this.layout = index;
				this.layoutRecord = index;
				this.list = [];
				this.isLoading = false;
				this.loadOver = false;
				this.page = 1;
				this.getList();
			},
			openStatement() {
				this.$refs.alert.show();
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
				this.colHeights = [0, 0, 0];
				this.ip = [];
				this.stackList = [];
				this.currentLoad = 0;
				this.waterfallFlowVisible = false;
				
				//增加判断，如果所选择全部，则显示方式改为瀑布流，否则改回默认的形式
				if(index === -1){this.layout = 1;}
				else{this.layout = this.layoutRecord}
				
				this.getList();
			},
			loadMore() {
				if (this.layout > 1) return;
				this.page ++;
				this.getList();
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
				
			},
			imgLoad(index, event) {
				if(event) {
					var s = this.stackList;
					s[index] = event.detail;
					this.stackList = s;
				}
				if (this.currentLoad !== index) {
					return;
				}
				let minIndex = -1,
					minValue = Math.min(...this.colHeights);
				for(let i=0,l=this.colHeights.length; i<l; i++) {
					if (this.colHeights[i] === minValue) {
						minIndex = i;
						break;
					}
				};
				const t = this.ip;
				const i = this.colHeights;
				t[index] = {
					left: minIndex * this.waterfallFlowWidth + (minIndex+1) * 5,
					top: this.colHeights[minIndex]
				}
	
				i[minIndex] += this.waterfallFlowWidth / (this.stackList[index].width / this.stackList[index].height) + 10;
				this.ip = t;
				this.colHeights = i;
				this.currentLoad ++;
				
				if (this.stackList[index+1]) {
					this.imgLoad(index+1, null);
				}
			}
		},
		onReachBottom() {
			if (this.isLoading || this.loadOver) return;
			this.isLoading = true;
			this.loadMore();
		},
		onShareAppMessage(r) {
			let _path = `pages/talent/detail?id=`+this.id+'&code='+this.code,
			_desc = '给你推荐了【'+this.info.user_nickname+'】，Ta有好多漂亮的壁纸头像，快看看呀~';
			return {
				title: app.globalData.shareInfo.share_title,
				desc: app.globalData.shareInfo.share_desc,
				path: _path,
			}
		},
		
		
	}
</script>

<style lang="scss" scoped>
.detail-data {
	
	position: relative;;
	.detail-data-content {
		margin-top: 90rpx;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding: 15rpx 80rpx;
		color: #FFFFFF;
	}
	.detail-data-label {
		height: 30rpx;
		position: absolute;
		top: 240rpx;
		right: 25rpx;
		font-size: 26rpx;
		color:black;
		padding: 10rpx 30rpx 10rpx;
		background-color: #ffffff;
		border-radius: 40rpx;
	}
	.detail-data-label2 {
		
		position: absolute;
		top: 240rpx;
		right: 150rpx;
		width: 30rpx;
		height: 25rpx;
		color: white;
		padding: 10rpx 30rpx 10rpx;
		background-color: #FFFFFF;
		border-radius: 40rpx;
	}
	.detail-data-label3 {
		font-weight: bold;
		color: #000000;
		position: fixed;
		top: 200rpx;
		left: 135rpx;
		width: 35rpx;
		height: 35rpx;
		font-size: 28rpx;
		
		padding: 10rpx 30rpx 10rpx;
		border-radius: 40rpx;
	}
	.detail-data-bg {
		display: flex;
		width: 100%;

	}
}
.user-gif {
	padding-right: 210rpx;
	width: 45rpx;
	height: 45rpx;
}
.pailie{
	overflow: hidden;
	bottom: 15%;
	z-index: 101;
	position: fixed;
	top: 175rpx;
	right: 25rpx;
	width: 370rpx;
	height: 50rpx;
	background-color: #ffffff;
	border-radius: 40rpx;
	
	.pailie-c {
		margin-left: 5rpx;
		margin-top: 8rpx;
		width: 185rpx;
		&.active {
			background-color: rgba(1, 173, 255, 0.6);
			border-radius: 40rpx;
			
		}
		image {
			display: block;
			height: 48rpx;
			width: 165rpx;
			margin-left: 8rpx;
			margin-top: 4rpx;
			
		}
	}
	.shijian {
		margin-left: 182rpx;
		margin-top: 10rpx;
		width: 185rpx;
		
		&.active {
			background-color:rgba(1, 173, 255, 0.6);
			border-radius: 40rpx;
		}
		image {
			margin-top: -46rpx;
			margin-left: 13rpx;
			display: block;
			height: 48rpx;
			width: 165rpx;
		}
	}
}
.detail-user {
	
	margin-top: 65rpx;
	image {
		margin-left: -55rpx;
		display: block;
		width: 110rpx;
		height: 110rpx;
		border: 3px solid #FFFFFF;
		border-radius: 50%;

	}
	text {
		
		margin-left: 35rpx;
		font-weight: bold;
		font-size: 28rpx;
		padding: 10rpx 10rpx 110rpx;
		left: -20rpx;
		color: #000000;
	}
}
.detail-user-data {
	color: #000000;
	display: flex;
	align-items: center;
	margin-top: 10rpx;
	.detail-uditem {
		text-align: center;
		font-size: 24rpx;
		&:nth-child(2) {
			flex: 1;
		}
		text {
			color: #000000;
			font-size: 3rpx;
			font-weight: bold;
			margin-left: 20rpx;
		}
	}
}
.collect-tab {
	
	display: flex;
	align-items: center;
	width: 100%;
	background-color: white;
	.collect-tabitem {
		font-weight: bold;
		font-size: 28rpx;
		color: #000000;
		width: 20%;
		text-align: center;
		position: relative;
		padding: 20rpx 0;
		&.active {
			font-weight: bold;
			color: #01adff;
			&:after {
				
				content: '';
				display: block;
				position: absolute;
				left: 50%;
				bottom: 0;
				width: 80rpx;
				margin-left: -40rpx;
				height: 7rpx;
				border-radius: 10rpx;
				background-color: #01adff;
			}
		}
	}
}
.collect-list {
	display: flex;
	flex-wrap: wrap;
	padding-top: 520rpx;
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
		z-index: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		.item-body {
			width: 100%;
			position: relative;
			z-index: 0;
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
		}
		.play {
			position: absolute;
			z-index: 1;
			display: block;
			width: 60rpx;
			height: 60rpx;
		}
		.label-gif {
			border-bottom-right-radius: 8rpx;
		}
	}
	&.waterfall-flow {
		position: relative;
		padding: 0;
		margin-top: 520rpx;
		opacity: 0;
		transition: all .5s;
		&.show {
			opacity: 1;
		}
		.collect-item {
			position: absolute;
			margin: 0;
			.collect-itemc {
				image {
					width: 100%;
				}
			}
		}
	}
}
.collect-label {
	position: absolute;
	z-index: 1;
	display: block;
	top: 10rpx;
	right: 10rpx;
	background-color: #e1a63f;
	color: white;
	border-radius: 6rpx;
	padding: 2rpx 10rpx;
	font-size: 24rpx;
}
.detail-t {
    position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
}
.layout-change {
	position: fixed;
	right: 20rpx;
	bottom: 15%;
	z-index: 101;
	border-radius: 40rpx;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.6);
	.layout-c {
		padding: 10rpx 40rpx 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		&.active {
			background-color: #F23B43;
		}
	}
	image {
		display: block;
		width: 160rpx;
	}
	.layout-item2 {
		padding: 10rpx 40rpx 10rpx;
		image {
			display: block;
			width: 160rpx;
		}
	}
}
.android-tips {
		margin-left: -50rpx; 
		text-align: left;
		width: 700rpx;
		margin-top: 15rpx; 
		color: #191919;
		font-size: 24.5rpx;
		
		
	}
.list2 {
	
	padding-top: 530rpx;
	.item {
		display: flex;
		padding: 0 20rpx;
		&.row2 {
			.item-data {
				.item-imgs {
					.item-img {
						width: 47.75%;
					}
				}
			}
		}
		.item-line {
			flex-shrink: 0;
			width: 1px;
			background-color: #01adff;
			position: relative;
			&:before {
				content: '';
				width: 10rpx;
				height: 10rpx;
				display: block;
				position: absolute;
				transform: translate(-50%, -50%);
				background-color: #01adff;
				border-radius: 50%;
			}
			&:after {
				content: '';
				width: 22rpx;
				height: 22rpx;
				display: block;
				position: absolute;
				transform: translate(-50%, -50%);
				background-color: rgba(1, 173, 255, 0.5);
				border-radius: 50%;
			}
		}
		.item-time {
			font-size: 28rpx;
			font-weight: bold;
			margin: -20rpx 0 20rpx 10rpx;
		}
		.item-data {
			flex: 1;
			margin-left: 20rpx;
			padding-bottom: 40rpx;
			.item-imgs {
				display: flex;
				flex-wrap: wrap;
				.item-img {
					display: block;
					width: 31.3%;
					margin-left: 1.5%;
					margin-bottom: 10rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					position: relative;
					.item-body {
						display: block;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						overflow: hidden;
						position: relative;
					}
					image {
						display: block;
						width: 100%;
						border-radius: 10rpx;
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
					.play {
						position: absolute;
						z-index: 1;
						display: block;
						width: 60rpx;
						height: 60rpx;
					}
					.label-gif {
						border-bottom-right-radius: 10rpx;
					}
				}
			}
		}
		
	}
}
</style>
