import Vue, { h } from 'vue';
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/js/globalEvent'
// import '../src/assets/js/mobileLayout.js'
import './styles/index.less'

// use mock instead of real http request when in development

import '@shared/mock/index'

Vue.config.productionTip = false
Vue.prototype.window = window

new Vue({
  router,
  store,
  render: () => h(App)
}).$mount('#app')
