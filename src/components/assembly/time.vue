
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="倒计时"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
        基本数字
    </div>
    <div style="text-indent: 12px;float:left;width:100%;margin:12px 0;">
        <k-time
        :time="time1"
        :callback="callbackFun"
        type="number"
        ></k-time>
    </div>
    <div class="comp-con-title">
        自定义字体颜色大小
    </div>
    <div style="text-indent: 12px;float:left;width:100%;margin:12px 0;">
        <k-time
        :time="time2"
        :callback="callbackFun"
        type="number"
        :theme="['32px', 'red']"
        ></k-time>
    </div>

    <div class="comp-con-title">
        日期
    </div>
    <div style="text-indent: 12px;float:left;width:100%;margin:12px 0;">
        <k-time
        :time="time3"
        :callback="callbackFun"
        ></k-time>
    </div>

    <div class="comp-con-title">
        自定义颜色大小
    </div>
    <div style="text-indent: 12px;margin:12px 0;float:left;width:100%">
        <k-time
        :time="time4"
        :callback="callbackFun"
        :theme="['32px', 'red']"
        ></k-time>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'ktime',
  data () {
    return {
      time1:10,
      time2:200,
      time3:2000,
      time4:20000,
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    callbackFun(val){
      //console.log(val);
    },
    callbackFun1(val){
      //console.log(val);
    },
  },
  mounted(){
    
  },
}
</script>


