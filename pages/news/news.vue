<template>
	<view class="news">
		<!-- <view class="news_item" v-for="item in newsList" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">{{item.title}}</view>
				<view class="info">
					<text>发表时间: {{item.add_time}}</text>
					<text>浏览: {{item.click}}</text>
				</view>
			</view>
		</view> -->
		<news-list @itemClick="goDetail" :list="newsList"></news-list>
	</view> 
</template>

<script>
	import newsList from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			async getNews(){
				const res=await this.$myRequest({
					url:'/api/getnewslist'
				})
				// console.log(res);
				this.newsList=res.data.message;
			},
			goDetail(id){
				uni.navigateTo({
					url:"/pages/news-detail/news-detail?id="+id
				})
			}
		},
		components:{
			"news-list":newsList
		},
		onLoad(){
			this.getNews();
		}
	}
</script>

<style lang="scss">
.news{
	
}
</style>
