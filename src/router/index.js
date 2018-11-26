import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import chart from '@/components/chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/home/my',
      redirect: '/home/my'
    },
    //home
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          //我的
          path: '/home/my',
          name:"/home/my",
          component: resolve => require(['@/components/home/my.vue'], resolve),
          meta: { title: '我的' }
        },{
          //精选
          path: '/home/selected',
          name:"/home/selected",
          component: resolve => require(['@/components/home/selected.vue'], resolve),
          meta: { title: '精选' }
        },{
          //榜单
          path: '/home/list',
          name:"/home/list",
          component: resolve => require(['@/components/home/list.vue'], resolve),
          meta: { title: '榜单' }
        },{
          //视频
          path: '/home/video',
          name:"/home/video",
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
      path: '/chart',
      name: 'chart',
      component: chart,
      children: [
        {
          //折线图
          path: '/chart/line',
          name:"/chart/line",
          component: resolve => require(['@/components/chart/line.vue'], resolve),
          meta: { title: 'line' }
        },
        {
          //面积
          path: '/chart/area',
          name:"/chart/area",
          component: resolve => require(['@/components/chart/area.vue'], resolve),
          meta: { title: 'area' }
        },
        {
          //渐变
          path: '/chart/gradual',
          name:"/chart/gradual",
          component: resolve => require(['@/components/chart/gradual.vue'], resolve),
          meta: { title: 'gradual' }
        },
        {
          //柱状
          path: '/chart/columnar',
          name:"/chart/columnar",
          component: resolve => require(['@/components/chart/columnar.vue'], resolve),
          meta: { title: 'columnar' }
        },
        {
          //环形
          path: '/chart/graph',
          name:"/chart/graph",
          component: resolve => require(['@/components/chart/graph.vue'], resolve),
          meta: { title: 'graph' }
        },
      ]
    },
  ]
})
