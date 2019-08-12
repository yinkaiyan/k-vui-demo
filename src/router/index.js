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
          name:"indexpage",
          component: resolve => require(['@/components/home/index.vue'], resolve),
          meta: { 
            title: 'index'
          }
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
    },{
      //button
      path: '/button',
      name:"/button",
      component: resolve => require(['@/components/assembly/button.vue'], resolve),
      meta: { title: 'button' }
    },{
      //radio
      path: '/radio',
      name:"/radio",
      component: resolve => require(['@/components/assembly/radio.vue'], resolve),
      meta: { title: 'radio' }
    },{
      //checkbox
      path: '/checkbox',
      name:"/checkbox",
      component: resolve => require(['@/components/assembly/checkbox.vue'], resolve),
      meta: { title: 'checkbox' }
    },{
      //switch
      path: '/switch',
      name:"/switch",
      component: resolve => require(['@/components/assembly/switch.vue'], resolve),
      meta: { title: 'switch' }
    },{
      //tabbar
      path: '/tabbar',
      name:"/tabbar",
      component: resolve => require(['@/components/assembly/tabbar.vue'], resolve),
      meta: { title: 'tabbar' }
    },{
      //loading
      path: '/loading',
      name:"/loading",
      component: resolve => require(['@/components/assembly/loading.vue'], resolve),
      meta: { title: 'loading' }
    },{
      //popup
      path: '/popup',
      name:"/popup",
      component: resolve => require(['@/components/assembly/popup.vue'], resolve),
      meta: { title: 'popup' }
    },{
      //collapse
      path: '/collapse',
      name:"/collapse",
      component: resolve => require(['@/components/assembly/collapse.vue'], resolve),
      meta: { title: 'collapse' }
    },{
      //actionsheet
      path: '/actionsheet',
      name:"/actionsheet",
      component: resolve => require(['@/components/assembly/actionsheet.vue'], resolve),
      meta: { title: 'actionsheet' }
    },{
      //swipecell
      path: '/swipecell',
      name:"/swipecell",
      component: resolve => require(['@/components/assembly/swipecell.vue'], resolve),
      meta: { title: 'swipecell' }
    },{
      //time
      path: '/time',
      name:"/time",
      component: resolve => require(['@/components/assembly/time.vue'], resolve),
      meta: { title: 'time' }
    },{
      //prompt
      path: '/prompt',
      name:"/prompt",
      component: resolve => require(['@/components/assembly/prompt.vue'], resolve),
      meta: { title: 'prompt' }
    },{
      //divider
      path: '/divider',
      name:"/divider",
      component: resolve => require(['@/components/assembly/divider.vue'], resolve),
      meta: { title: 'divider' }
    },{
      //inputNumber
      path: '/inputNumber',
      name:"/inputNumber",
      component: resolve => require(['@/components/assembly/inputNumber.vue'], resolve),
      meta: { title: 'inputNumber' }
    },{
      //keyBoard
      path: '/keyBoard',
      name:"/keyBoard",
      component: resolve => require(['@/components/assembly/keyBoard.vue'], resolve),
      meta: { title: 'keyBoard' }
    },{
      //score
      path: '/score',
      name:"/score",
      component: resolve => require(['@/components/assembly/score.vue'], resolve),
      meta: { title: 'score' }
    },{
      //input
      path: '/input',
      name:"/input",
      component: resolve => require(['@/components/assembly/input.vue'], resolve),
      meta: { title: 'input' }
    },{
      //notice
      path: '/notice',
      name:"/notice",
      component: resolve => require(['@/components/assembly/notice.vue'], resolve),
      meta: { title: 'notice' }
    },{
      //step
      path: '/step',
      name:"/step",
      component: resolve => require(['@/components/assembly/step.vue'], resolve),
      meta: { title: 'step' }
    },{
      //date
      path: '/date',
      name:"/date",
      component: resolve => require(['@/components/assembly/date.vue'], resolve),
      meta: { title: 'date' }
    }
  ]
})
