<template>
  <div class="chart_xm">
    <div class="chart-content">
      <router-view></router-view>
    </div>
    <bottom-Menu
      :menu-list="menuList"
      type="chart"
    >
    </bottom-Menu>
  </div>
</template>

<script>
import bottomMenu from '../components/menu/bottomMenu'
import { VChart, VTooltip, VLine, VScale } from 'vux'
export default {
  name: 'index',
  components: {
    bottomMenu
  },
  data () {
    return {
      activeTab:0,
      menuList:[
        {
          name:"折线图",
          link:"/chart/line",
          icon:"icon iconfont icon-tubiaozhexiantu",
        },{
          name:"环形图",
          link:"/chart/graph",
          icon:"icon iconfont icon-icon-test",
        },{
          name:"柱状图",
          link:"/chart/columnar",
          icon:"icon iconfont icon-pillar",
        },{
          name:"面积图",
          link:"/chart/area",
          icon:"icon iconfont icon-mianjitu",
        },{
          name:"对比图",
          link:"/chart/gradual",
          icon:"icon iconfont icon-zhexiantu",
        }
      ],
    }
  },
  methods:{
   
  },

}
</script>

<style scoped>

</style>
