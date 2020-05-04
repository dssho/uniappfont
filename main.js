import Vue from 'vue'
import App from './App'
import {myRequest} from './until/app.js'

// 全局配置时间过滤器
Vue.filter('formatDate',(date)=>{
	const nDate=new Date(date);
	const year=nDate.getFullYear(nDate);
	const month=nDate.getMonth(nDate).toString().padStart(2,0);
	const day=nDate.getDay(nDate).toString().padStart(2,0);
	// console.log(year,month,day);
	return year+"-"+month+"-"+day
})

Vue.prototype.$myRequest=myRequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
