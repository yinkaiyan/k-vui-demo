<style scoped lang="less">
  @import "./chart.less";
</style>
<template>
  <div class="line-box">
    <div class="line-list">
      <div class="line-list-title">折线对比图</div>
      <v-chart :data="dataone">
        <v-line series-field="type" />
      </v-chart>
    </div>
    <div class="line-list">
      <div class="line-list-title">柱状对比图</div>
      <v-chart
        ref="demo"
        :data="data">
        <v-scale x field="月份" />
        <v-scale y field="月均降雨量" />
        <v-bar series-field="name" :adjust="{
          type: 'dodge',
          marginRatio: 0.05 // 设置分组间柱子的间距
        }" />
        <v-tooltip show-value-in-legend />
      </v-chart>
    </div>
  </div>
</template>

<script>

import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VScale, VAxis} from 'vux'

export default {
  components: {
    VChart,
    VLine,
    VArea,
    VTooltip,
    VLegend,
    VBar,
    VScale,
    VAxis
  },
  data () {
    return {
      dataone:[
        {"date":"2010-01-10","type":"能源","value":99.9},
        {"date":"2010-01-10","type":"金属","value":96.6},
        {"date":"2010-01-10","type":"农副","value":96.6},
      ],
      data: [
        { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
        { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
        { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
        { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
        { name: 'London', 月份: 'May.', 月均降雨量: 47 },
        { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
        { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
        { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
        { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
        { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
        { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
        { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
        { name: 'Berlin', 月份: 'May.', 月均降雨量: 52.6 },
        { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
        { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
        { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
      ]
    }
  },
  methods: {
    
  },
  watch: {
   
  }
}
</script>
