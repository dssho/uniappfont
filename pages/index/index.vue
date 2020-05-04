<template>
	<view class="content">
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
			<!-- <view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view> -->
		</view>
		<!-- 推荐商品 已做成组件直接调用-->
		
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
			<!-- <view class="goods_list">
			<view class="goods_item" v-for="item in goods" :key="item.id">
				<image :src="item.img_url"></image>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="name">{{item.title}}</view>
			</view> -->
			<!-- 	<view class="goods_item">
					<image src="../../static/logo.png"></image>
					<view class="price">
						<text>￥3477</text>
						<text>￥3499</text>
					</view>
					<view class="name">苹果超高中运行速度快内存大体验感强</view>
				</view>
				<view class="goods_item">
					<image src="../../static/logo.png"></image>
					<view class="price">
						<text>￥3477</text>
						<text>￥3499</text>
					</view>
					<view class="name">苹果超高中运行速度快内存大体验感强</view>
				</view> -->
			<!-- </view> -->
		</view>
	</view>
</template>

<script>
	import goosList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				swipers:[],
				goods:[],
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:'un超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
           this.getSwipers(),
		   this.getHotGoods()
		},
		components:{
			'goods-list':goosList
		},
		methods: {
			// 获取轮播图
     //       getSwipers(){
			  //  console.log("获取轮播图")
			  //  uni.request({
				 //   url:"http://localhost:8082/api/getlunbo",
				 //   success:res=>{
					//    console.log(res);
					//    if(res.data.status!==0){ 
					// 	  return uni.showToast({
					// 		   title:"请求失败"
					// 	   })
					//    }
					//    this.swipers=res.data.message;
				 //   }
			  //  })
		   // }
		   async getSwipers(){
			   const  res=await this.$myRequest({
				   url:'/api/getlunbo'
			   })
			   // console.log(res);
			   this.swipers=res.data.message;
		   },
		   // 获取热门商品列表
		   async getHotGoods(){
			   const res=await this.$myRequest({
				   url:'/api/getgoods?pageindex=1'
			   })
			   // console.log(res);
			   this.goods=res.data.message;
		   },
		   // 导航点击跳转
		   navItemClick(url){
			   // console.log(url);
			   uni.navigateTo({
				   url
			   })
		   },
		   // 导航中到商品详情页
		   goGoodsDetail(id){
			   uni.navigateTo({
			   	url:"/pages/goods-detail/goods-detail?id="+id
			   })
		   }
		}
	}
</script>

<style lang="scss">
	.content{
		swiper{
			width:750rpx;
			height:380rpx;
			image{
				height:100%;
				width:100%;
			}
		}
		.nav{
			display:flex;
			.nav_item{
				width:25%;
				text-align: center;
				text{
					font-size: 30rpx;
				}
				view{
					width:120rpx;
					height:120rpx;
					background:$shop-color;
					border-radius:50%;
					margin:20rpx auto;
					line-height: 120rpx;
					color:#fff;
					font-size: 50rpx; 
					.icon-tupian{
						font-size: 45rpx;
					}
				}
			}
		}
		.hot_goods{
			background:#eee;
			overflow: hidden;
			margin-top:10px;
			.tit{
				letter-spacing: 20rpx;
				height:100rpx;
				line-height: 100rpx;
				color: $shop-color;
				text-align: center;
				background-color: #fff;
				margin:7rpx auto;
			}
		// 	.goods_list{
		// 		display: flex;
		// 		flex-wrap: wrap;
		// 		justify-content: space-between;
		// 		padding:0 15rpx;
		// 		.goods_item{
		// 			background-color: #fff;
		// 			width:355rpx;
		// 			margin:10rpx 0;
		// 			padding:15rpx;
		// 			box-sizing: border-box;
		// 			image{
		// 				width:80%;
		// 				height:150px;
		// 				display:block;
		// 				margin:auto;
		// 			}
		// 			.price{
		// 				color:$shop-color;
		// 				font-size:36rpx;
		// 				text:nth-child(2){
		// 					color:#ccc;
		// 					text-decoration: line-through;
		// 					padding-left:20rpx;
		// 				}
		// 			}
		// 			.name{
		// 				font-size: 30rpx;
		// 				line-height:50rpx;
		// 				padding-top:10rpx;
		// 				padding-bottom:15rpx;
		// 			}
		// 		}
		// 	}
		}
	}
</style>
