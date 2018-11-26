<style scoped lang="less">
  @import "./chart.less";
</style>
<template>
  <div class="line-box">
    <div class="line-list">
      <div class="line-list-title">基本折线图</div>
      <v-chart :data="data" prevent-default>
        <v-scale x :tick-count="3" />
        <v-tooltip :show-item-marker="false" show-x-value />
        <v-line />
      </v-chart>
    </div>
    <div class="line-list">
      <div class="line-list-title">平滑曲线</div>
      <v-chart :data="data1">
        <v-scale x type="timeCat" mask="MM/DD" :tick-count="3" />
        <v-scale y :min="0" alias="日均温度" :tick-count="5" />
        <v-point
          :style="{
            stroke: '#fff',
            lineWidth: 1
          }"
          shape="smooth" />
        <v-line shape="smooth" />
      </v-chart>
    </div>
  </div>
</template>

<script>
import { VChart, VTooltip, VLine, VScale, VPoint} from 'vux'
export default {
  components: {
    VChart,
    VTooltip,
    VLine,
    VScale,
    VPoint
  },
  data () {
    return {
      data: [
        { date: '2018-12-05', value: 116 },
        { date: '2018-12-06', value: 129 },
        { date: '2018-12-07', value: 135 },
        { date: '2018-12-08', value: 86 },
        { date: '2018-12-09', value: 73 },
        { date: '2018-12-10', value: 85 },
        { date: '2018-12-11', value: 73 },
        { date: '2018-12-12', value: 68 },
        { date: '2018-12-13', value: 92 },
        { date: '2018-12-14', value: 130 },
        { date: '2018-12-15', value: 245 },
        { date: '2018-12-16', value: 139 },
        { date: '2018-12-17', value: 115 },
        { date: '2018-12-18', value: 111 },
        { date: '2018-12-19', value: 309 },
        { date: '2018-12-20', value: 206 },
        { date: '2018-12-21', value: 137 },
        { date: '2018-12-22', value: 128 },
        { date: '2018-12-23', value: 85 },
        { date: '2018-12-24', value: 94 },
        { date: '2018-12-25', value: 71 },
        { date: '2018-12-26', value: 106 },
        { date: '2018-12-27', value: 84 },
        { date: '2018-12-28', value: 93 },
        { date: '2018-12-29', value: 85 },
        { date: '2018-12-30', value: 73 },
        { date: '2017-07-01', value: 83 },
        { date: '2017-07-02', value: 125 },
        { date: '2017-07-03', value: 107 },
        { date: '2017-07-04', value: 82 },
        { date: '2017-07-05', value: 44 },
        { date: '2017-07-06', value: 72 },
        { date: '2017-07-07', value: 106 },
        { date: '2017-07-08', value: 107 },
        { date: '2017-07-09', value: 66 },
        { date: '2017-07-10', value: 91 },
        { date: '2017-07-11', value: 92 },
        { date: '2017-07-12', value: 113 },
        { date: '2017-07-13', value: 107 },
        { date: '2017-07-14', value: 131 },
        { date: '2017-07-15', value: 111 },
        { date: '2017-07-16', value: 64 },
        { date: '2017-07-17', value: 69 },
        { date: '2017-07-18', value: 88 },
        { date: '2017-07-19', value: 77 },
        { date: '2017-07-20', value: 83 },
        { date: '2017-07-21', value: 111 },
        { date: '2017-07-22', value: 57 },
        { date: '2017-07-23', value: 55 },
        { date: '2017-07-24', value: 60 }
      ],
      data1: [
        { time: '2018-08-08 00:00:00', tem: 10 },
        { time: '2018-08-08 00:10:00', tem: 22 },
        { time: '2018-08-08 00:30:00', tem: 20 },
        { time: '2018-08-09 00:35:00', tem: 26 },
        { time: '2018-08-09 01:00:00', tem: 20 },
        { time: '2018-08-09 01:20:00', tem: 26 },
        { time: '2018-08-10 01:40:00', tem: 28 },
        { time: '2018-08-10 02:00:00', tem: 20 },
        { time: '2018-08-10 02:20:00', tem: 18 }
      ]
    }
  },
  methods: {
    
  },
  watch: {
   
  }
}
</script>

<style lang="less" scoped>

</style>