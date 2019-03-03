import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/js/globalEvent'
// import '../src/assets/js/mobileLayout.js'
import './assets/css/reset.css'
import './assets/css/base.less'
import './assets/css/iconfont.css'

// use mock instead of real http request
import './assets/mock/index'

Vue.config.productionTip = false
Vue.prototype.window = window

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
