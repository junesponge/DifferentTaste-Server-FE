// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import 'lib-flexible'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'

Vue.use(Mint)

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.Qs = Qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
