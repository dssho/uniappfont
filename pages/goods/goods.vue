<template>
	<view>
		<goods-list @goodsItemClick="goGoodsDetail"  :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">---我是有底线的---</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		components:{
			"goods-list":goodsList
		},
		onLoad(){
			this.getHotGoods()
		},
		methods: {
			async getHotGoods(callBack){
				const res=await this.$myRequest({
					url:"/api/getgoods?pageindex="+this.pageindex
				})
				this.goods=[...this.goods,...res.data.message];
				// 传参时才调用参数，不传不调参
				callBack && callBack()
			},
			onReachBottom(){
				if(this.goods.length<this.pageindex*10)  return  this.flag=true
				this.pageindex++;
				this.getHotGoods();
			},
			onPullDownRefresh(){
				this.pageindex=1;
				this.goods=[];
				this.flag=false;
				setInterval(()=>{
				   this.getHotGoods(()=>{
					   uni.stopPullDownRefresh()
				   });	
				},1000)
			},
			goGoodsDetail(id){
						   uni.navigateTo({
						   	url:"/pages/goods-detail/goods-detail?id="+id
						   })
			}
		}
	}
</script>

<style>

.isOver{
	width:100%;
	height:50px;
	font-size:28rpx;
	line-height: 50px;
	text-align: center;
	background-color: #eee;
}
</style>
