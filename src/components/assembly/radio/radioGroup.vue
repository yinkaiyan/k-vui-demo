<template>
  <div class="k-checkboxgroup">
    <div class="tm-title">
      {{title}}
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { parentMix } from "./index"
export default {
  mixins: [parentMix],
  name:"k-radiogroup",
  props: {
   value:Number,
   callBack:Function,
   vImg:Boolean,
   max:Number,
   title:String,
  },
  data () {
    return {
      Arr:[],
    }
  },
  methods:{
    
  },
  computed: {
   
  },
  mounted(){
   //this.List();
  },
}
</script>
<style scoped lang="less">
@import "../../../assets/style.less";
</style>