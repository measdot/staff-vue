import Vue from 'vue'
import axios from 'axios'

import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'

import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'

import App from './App'
import router from './router'
import store from './store'
import Vuebar from 'vuebar'

Vue.use(Vuebar)
Vue.use(Antd)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
