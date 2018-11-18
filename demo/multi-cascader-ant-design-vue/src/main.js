import Vue from 'vue'
import App from './App.vue'
import { Select, Cascader } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

Vue.use(Select)
Vue.use(Cascader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
