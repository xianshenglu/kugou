import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
// import '../src/assets/js/mobileLayout.js'
import './assets/css/reset.css'
import './assets/css/base.less'
import './assets/css/iconfont.css'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
