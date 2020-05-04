<template>
	<view>
		<view class="news_item" @click="toDetail(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">{{item.title}}</view>
				<view class="info">
					<text>发表时间: {{item.add_time | formatDate}}</text>
					<text>浏览: {{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['list'],
		filters:{
			formatDate (date) {
				const nDate=new Date(date);
				const year=nDate.getFullYear(nDate);
				const month=nDate.getMonth(nDate).toString().padStart(2,0);
				const day=nDate.getDay(nDate).toString().padStart(2,0);
				// console.log(year,month,day);
				return year+"-"+month+"-"+day
			}
		},
		methods:{
			toDetail(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item{
		display: flex;
		padding:10rpx 20rpx;
		border-bottom:1px solid $shop-color;
		image{
			min-width:200rpx;
			max-width:200rpx;
			height:150rpx;
		}
		.right{
			display: flex;
			margin-left: 15rpx;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left:17px;
				}
			}
		}
	}
</style>
