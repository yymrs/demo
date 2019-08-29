import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入font-awsome图标库
import '@fortawesome/fontawesome-free/css/all.css'

// 引入vant
// 注意：配置 babel-plugin-import 插件后，将不允许以这种方式导入组件

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)


// 导入请求axios
// 在vue的原型上添加一个axios 全局可以访问 不需要在一个一个导入
import axios from 'axios'
Vue.prototype.axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
