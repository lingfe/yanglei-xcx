<template>
	<view>
		<!-- <view class="richtitle">版权声明</view> -->
		<view class="copyright">
			<rich-text  :nodes="content"></rich-text>
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
				id:0,
				content: ''
			}
		},
		onLoad(options) {
			this.id = options.id
			console.log(options)
			this.getData()
		},
		methods:{
			async getData() {
				const r = await request({
					url: `${config.API}api/w/getRichtext`,
					data: {
						id:this.id
					}
				});
				if(r.error_code === 0) {
					let _data = r.data
					this.content = this.formatRichText(_data);
				}
			},
			formatRichText(html){
			  let newContent= html.replace(/\<img/gi, '<img style="width:100%;height:auto"');
			  return newContent;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.richtitle{
		text-align: center;
	}
	.copyright{
		padding: 20rpx 5%;
	}
</style>
