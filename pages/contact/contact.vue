<template>
	<view class="content">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：99999 （点击拨打）</view>
			<view>地址：山西省吕梁市离石区吕梁学院</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:111.154173,
				latitude:37.588502,
				scale:14,
				markers:[
					{
						longitude:111.154173,
						latitude:37.588502,
						iconPath:"../../static/code/ly.png",
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'9999'
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	.img{
		width:750rpx;
		height:360rpx;
	}
	.info{
		padding:10rpx 15rpx;
		font-size:36rpx;
		view{
		  line-height:80rpx;
		  border-bottom:1px solid #eee;
		}
	}
	.map{
		width:750rpx;
		height:750rpx;
	}
}
</style>
