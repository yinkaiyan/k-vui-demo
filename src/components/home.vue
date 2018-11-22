<style scoped lang="less">
  @import "./home/home.less";
</style>
<template>
  <div class="home_xm">
    <router-view></router-view>
    <div class="home_xm_bottom">
      <i class="icon iconfont">&#xe600;</i>
      <div class="home_xm_list"></div>
    </div>
  </div>
</template>

<script>
import "../icon/icon.css";
import { Grid, GridItem } from 'vux'
export default {
  name: 'index',
   components: {
    Grid,
    GridItem
  },
  data () {
    return {

    }
  }
}
</script>


