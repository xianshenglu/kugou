import { h, createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/js/globalEvent'
// import '../src/assets/js/mobileLayout.js'
import './styles/index.less'

const app = createApp({
  render: () => h(App)
})
app.use(store)
app.use(router)
app.mount('#app')
