
import Vue from 'vue'
import App from './App'
import router from './router'

import KVui from 'k-vui-y'

//import "k-vui-y/src/styles/icon/iconfont.css";
import "k-vui-y/src/styles/icon/iconfont.css";

Vue.use(KVui);

Vue.config.productionTip = false

router.afterEach((to, from) => {
  if(to.name=="indexpage")return;
  window.scrollTo(0,0);
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
