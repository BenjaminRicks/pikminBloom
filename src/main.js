import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pikmin from './pikminData.js'

Vue.config.productionTip = false

let data = {
  pikmins: pikmin,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
