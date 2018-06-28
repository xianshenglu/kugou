import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '../src/assets/js/mobileLayout.js'
import './assets/css/reset.css'
import './assets/css/base.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
