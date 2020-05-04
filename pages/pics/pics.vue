<template>
	<view class="pics">
	  <scroll-view class="left" scroll-y>
			<view 
			:class="active===index?'active':''"
			 v-for="(item,index) in cates" 
			 :key="index"
			 @click="leftClickHandle(index,item.id)"
			 >
			  {{item.title}}
			 </view>
	  </scroll-view>
	  <scroll-view class="right" scroll-y>
		  <view class="item" v-for="(item,index) in secondData" :key="index">
			  <image @click="prevViewImage(item.img_url)" :src="item.img_url"></image>
			  <text>{{item.title}}</text>
		  </view>
		  <view v-if="secondData.length===0">暂无数据</view>
	  </scroll-view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
					cates:[],
					active:2,
					secondData:[]
				}
		},
		methods: {
			// 获取图片分类
			async getPicsCate(){
				const res=await this.$myRequest({
					url:'/api/getimgcategory'
				})
				this.cates=res.data.message
				// 如果没有数据则表示暂无数据
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				// console.log(index);
				this.active=index;
				const res=await this.$myRequest({
					url:'/api/getimages/'+id
				})
				// console.log(res);
				this.secondData=res.data.message;
			},
			// 点击图片只显示图片
			prevViewImage(current){
				const urls=this.secondData.map(item=>{
					return item.img_url
				});
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad(){
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page{
	height:100%;
}
.pics{
	height:100%;
	display:flex;
	.left{
		height:100%;
		width:200rpx;
		border-right:1px solid #eee;
		view{
			height:60px;
			line-height: 60px;
			text-align:center;
			font-size:30rpx;
			color:#333;
			border-top:1px solid #eee;
		}
		.active{
			background-color: $shop-color;
			color:#fff;
		}
	}
	.right{
		height: 100%;
		width:530rpx;
		margin:10rpx auto;
		.item{
			image{
				width:520rpx;
				height:520rpx;
				border-radius:5px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
