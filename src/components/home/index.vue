
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="dt-index">
    <time-page
      :time="10"
      :callback="callbackFun"
    ></time-page>
    <div class="test-paper">
      <div class="test-paper-title">
        试卷标题
      </div>
    </div>
  </div>
</template>
<script>
import timePage from '../assembly/time';
export default {
  components:{
    timePage,
  },
  name: 'index',
  data () {
    return {
      
    }
  },
  methods:{
    callbackFun(val){
      console.log(val);
    },
  },
  mounted(){
    this.callbackFun();
  },
}
</script>


