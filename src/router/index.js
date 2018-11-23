import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index_ from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selected',
      redirect: 'selected'
    },
    //home
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          //我的
          path: '/my',
          name:"my",
          component: resolve => require(['@/components/home/my.vue'], resolve),
          meta: { title: '我的' }
        },{
          //精选
          path: '/selected',
          name:"selected",
          component: resolve => require(['@/components/home/selected.vue'], resolve),
          meta: { title: '精选' }
        },{
          //榜单
          path: '/list',
          name:"list",
          component: resolve => require(['@/components/home/list.vue'], resolve),
          meta: { title: '榜单' }
        },{
          //视频
          path: '/video',
          name:"video",
          component: resolve => require(['@/components/home/video.vue'], resolve),
          meta: { title: '视频' }
        }
      ]
    },
    {
      //主页我的播放
      path: '/play',
      name:"play",
      component: resolve => require(['@/components/home/play.vue'], resolve),
      meta: { title: 'play' }
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
