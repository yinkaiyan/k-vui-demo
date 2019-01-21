<template>
  <div class="k-radio" :style="getStyle" @touchstart="radioClick" @touchend="radioClick_">
    <input class="magic-radio" type='radio' name="test">
    <span class="k-ra-radio">
      <icon type="success" v-if="active"></icon>
    </span>
    <span class="k-ra-text">{{label}}</span>
    <img v-if="vImg?true:false" class="k-radio-img" :src="vImg">
  </div>
</template>
<script>
import { Icon } from 'vux'
import { childMix } from "./index"
export default {
  components:{
   Icon
  },
  //
  //
  name:"k-radio",
  mixins: [childMix],
  props: {
   label:String,
   value:Boolean,
   vImg:String,
   id:String,
  },
  data () {
    return {
     active:false,
     index:0,
    }
  },
  methods:{
    
  },
  computed: {
    getStyle(){
      if(!this.$parent.max)return;
      console.log(this.$parent.max);
      let len=this.max?this.max:1;
      if(len==1){
        return {
          width:"100%",
        };
      };
    },
  },
  mounted(){
    
  },
}
</script>
<style scoped lang="less">
@import "../../../assets/style.less";
</style>