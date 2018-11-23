<style scoped lang="less">
  @import "./home";
</style>
<template>
  <div>
      <popup v-model="group" height="100%">
        <div class="play-content">
          <div class="play-tab-nav">
            <div class="play-fh" @click="playFh">
              <i class="icon iconfont icon-xiala"></i>
            </div>
            <div class="play-xx">
              <div>做个有学问的人</div>
              <div>
                <span>郭德纲&&于谦</span> 
                <i class="icon iconfont icon-weibiaoti34"></i></div>
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
    <!--分享-->
      <popup v-model="groupfx" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
         <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
         </group>
         <div style="padding:20px 15px;">
          <x-button type="primary">Pay</x-button>
          <x-button @click.native="groupfx = false">Cancel</x-button>
         </div>
        </div>
      </popup>
  </div>
</template>

<script>
import { TransferDom, Popup ,Group,XButton,Cell} from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    XButton,
    Cell
  },
  data () {
    return {
      group: true,
      groupfx:false,
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
      this.groupfx=true
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
