import Vue from 'vue'
import plugin from '@utils/plugins'
import App from './app/index.vue'

Vue.use(plugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
