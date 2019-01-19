
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
      <div class="test-paper-content">
        <div class="test-paper-list">
          <single></single>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timePage from '../assembly/time';
import single from '../assembly/single';
import judge from '../assembly/judge';
export default {
  components:{
    timePage,
    single,
    judge
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


