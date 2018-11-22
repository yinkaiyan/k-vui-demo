import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index_ from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'index'
    },
    //home
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/index',
          name:"index",
          component: resolve => require(['@/components/home/index.vue'], resolve),
          meta: { title: '首页' }
        },
      ]
    },
    //index
    {
      path: '/',
      name: 'index_',
      component: index_,
      children: [
        {
          path: '/index',
          name:"index",
          component: resolve => require(['@/components/index/index.vue'], resolve),
          meta: { title: '子页' }
        },
      ]
    },
  ]
})
