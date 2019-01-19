<template>
  <div class="k-radio" @click="radioClick">
    <input class="magic-radio" type='radio' name="test">
    <span class="k-ra-radio">
      <icon type="success" v-if="active"></icon>
    </span>
    <span class="k-ra-text">{{label}}</span>
  </div>
</template>
<script>
import { Icon } from 'vux'
import { childMix } from "./index"
export default {
  components:{
   Icon
  },
  name:"k-radio",
  mixins: [childMix],
  props: {
   label:String,
   value:Boolean,
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
   
  },
  mounted(){
    
  },
}
</script>
<style scoped lang="less">
.k-radio{
  float: left;
  margin-left:12px;
  .magic-radio{
    display:none;
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
      left: -6px;
      top: 0px;
    }
  }
  .k-ra-text{
    float: left;
    line-height:20px;
    margin-left:4px;
  }
}

</style>