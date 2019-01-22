import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/home/index',
      redirect: '/home/index'
    },
    //home
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          //index
          path: '/home/index',
          name:"/home/index",
          component: resolve => require(['@/components/home/index.vue'], resolve),
          meta: { title: 'index' }
        }
      ]
    },{
      //icon
      path: '/icon',
      name:"/icon",
      component: resolve => require(['@/components/assembly/icon.vue'], resolve),
      meta: { title: 'icon' }
    },{
      //swiper
      path: '/swiper',
      name:"/swiper",
      component: resolve => require(['@/components/assembly/swiper.vue'], resolve),
      meta: { title: 'swiper' }
    }
  ]
})
