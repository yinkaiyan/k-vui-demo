
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
        l-icon="icon-CUI-icon-chevron-lef"
        title="全局提示"
        :theme="['#5c6b77', '#fff']"
        :l-click="licon"
        type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      一般样式
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value"
        :callback="dashedFun"
      ></k-switch>
      <span>全局提示 {{value}}</span>
    </div>

    <k-notice
      :theme="['rgb(0,0,0,0.7)', '#fff']"
      :value="value"
    >
      一般样式
    </k-notice>

    <div class="comp-con-title">
      有图标样式
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="dashedFun1"
      ></k-switch>
      <span>全局提示 {{value1}}</span>
    </div>
    <k-notice 
        :theme="['rgb(0,0,0,0.7)', '#fff']"
        :value="value1"
        icon="icon-right"
    >
      有图标样式
    </k-notice>

    <div class="comp-con-title">
      主题设置
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value2"
        :callback="dashedFun2"
      ></k-switch>
      <span>全局提示 {{value2}}</span>
    </div>
    <k-notice 
        :theme="['red', '#fff']"
        :value="value2"
    >
      主题设置
    </k-notice>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'notice',
  data () {
    return {
        value:false,
        value1:false,
        value2:false,
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    dashedFun(){
      var self=this;
      this.value=true;
      setTimeout(function(){
          self.value=false;
      },2000);
    },
    dashedFun1(){
      var self=this;
      this.value1=true;
      setTimeout(function(){
        self.value1=false;
      },2000);
    },
    dashedFun2(){
      var self=this;
      this.value2=true;
      setTimeout(function(){
        self.value2=false;
      },2000);
    },
  },
  mounted(){
    
  },
}
</script>


