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
.k-radio{
  float: left;
  margin: 6px 0;
  padding: 12px;
  box-sizing: border-box;
  border: solid 1px gainsboro;
  .magic-radio{
    display:none;
    
  }
  .k-radio-img{
    max-width: 100%;
    display: block;
    border: none;
    margin-top: 12px;
    float: left;
  }
  .k-ra-radio{
    width:20px;
    height:20px;
    background:#fff;
    display:inline-block;
    box-sizing:border-box;
    border-radius:4px;
    line-height:20px;
    text-align:center;
    position: relative;
    float: left;
    border-radius:50%;
    border:solid 1px gainsboro;
    i{
      font-size: 20px;
      position:absolute;
      left: -5px;
      top: -1px;
    }
  }
  .k-ra-text{
    float: left;
    width:calc(100% - 26px);
    line-height:20px;
    margin-left:4px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}

</style>