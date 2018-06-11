import Vue from 'vue'
import plugin from '@utils/plugins'
import App from './app/index.vue'
import router from './router'
import store from './store'

Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
