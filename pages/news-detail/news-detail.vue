<template>
	<view class="news_detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time | formatDate}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content">
			<!-- rich-text把内容中的标签语义化 -->
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		methods: {
			async getNewsDetail(){
				const res=await this.$myRequest({
					url:'/api/getnew/'+this.id
				})
				// console.log(res);
				this.detail=res.data.message[0];
			}
		},
		onLoad(options){
			this.id=options.id;
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
.news_detail{
	padding:20rpx;
	font-size: 36rpx;
	.title{
		width:710rpx;
		text-align:center;
		margin: 10rpx 0;
		display: block;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
