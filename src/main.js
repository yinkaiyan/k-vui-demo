
import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import KVui from 'k-vui-y'

import "k-vui-y/src/style/iconfont.css";

Vue.use(KVui);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
