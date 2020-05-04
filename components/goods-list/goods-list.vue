<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" @click="navigator(item.id)" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			 </view>
			<view class="name">{{item.title}}</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding:0 15rpx;
		background:#eee;
		margin-top:10rpx;
		.goods_item{
			background-color: #fff;
			width:355rpx;
			margin:10rpx 0;
			padding:15rpx;
			box-sizing: border-box;
			image{
				width:80%;
				height:150px;
				display:block;
				margin:auto;
			}
			.price{
				color:$shop-color;
				font-size:36rpx;
				text:nth-child(2){
					color:#ccc;
					text-decoration: line-through;
					padding-left:20rpx;
				}
			}
			.name{
				font-size: 30rpx;
				line-height:50rpx;
				padding-top:10rpx;
				padding-bottom:15rpx;
			}
		}
	}

</style>
