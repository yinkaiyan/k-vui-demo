<style scoped lang="less">
  @import "./home";
</style>
<template>
  <div>
    <div v-transfer-dom>
      <popup v-model="group" height="100%">
        <div class="play-content">
          <div class="play-tab-nav">
            <div class="play-fh" @click="playFh">
              <i class="icon iconfont icon-xiala"></i>
            </div>
            <div class="play-xx">
              <div>做个有学问的人</div>
              <div>郭德纲&&于谦 <i class="icon iconfont icon-weibiaoti34"></i></div>
            </div>
            <div class="play-fx" @click="playFx">
              <i class="icon iconfont icon-fenxiang"></i>
            </div>
          </div>
          <div class="play-cover">
            <img :src="cover">
          </div>
          <div class="play-btn">
            <div class="play-btn-list">
              <i class="icon iconfont icon-guanzhu"></i>
            </div>
            <div class="play-btn-list">
              <i class="icon iconfont icon-xiazai"></i>
            </div>
            <div class="play-btn-list">
              <i class="icon iconfont icon-xinxi"></i>
            </div>
            <div class="play-btn-list">
              <i class="icon iconfont icon-gengduo1"></i>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
  },
  data () {
    return {
      group: true,
      cover:require("./images/geg.jpg")
    }
  },
  methods: {
    playFh () {
      this.group=false;
      this.$router.push({
        name:'selected',
      });
    },
    playFx(){

    },
  },
  watch: {
    show10 (val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>
