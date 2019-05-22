import Vue from 'vue'
import axios from 'axios'

import AtUI from 'at-ui'
import 'at-ui-style/css/at.min.css'

import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'

import 'xel/themes/vanilla.css'
import 'xel/xel.min'

import App from './App'
import router from './router'
import store from './store'

Vue.use(AtUI)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// window.$ = window.jQuery = require('jquery')

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
