
<style scoped lang="less">
@import "../../assets/style.less";

</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="轻提示"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      操作错误
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span>操作错误 {{value1}}</span>
    </div>
    <k-toast
        title="操作错误"
        :value="value1"
        type="error"
    ></k-toast>

    <div class="comp-con-title">
      操作成功
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value2"
        :callback="clickFun2"
      ></k-switch>
      <span>操作成功 {{value2}}</span>
    </div>
    <k-toast
        title="操作成功"
        :value="value2"
        type="success"
    ></k-toast>

    <div class="comp-con-title">
      警告
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value3"
        :callback="clickFun3"
      ></k-switch>
      <span>警告 {{value3}}</span>
    </div>
    <k-toast
        title="警告"
        :value="value3"
        type="warning"
    ></k-toast>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'prompt',
  data () {
    return {
        value1:false,
        value2:false,
        value3:false,
    }
  },
  methods:{
    clickFun1(){
      this.value1=true;
      var self=this;
      setTimeout(function(){
          self.value1=false;
      },2000)
    },
    clickFun2(){
      this.value2=true;
      var self=this;
      setTimeout(function(){
          self.value2=false;
      },2000)
    },
    clickFun3(){
      this.value3=true;
      var self=this;
      setTimeout(function(){
          self.value3=false;
      },2000)
    },
    
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    }
  },
  mounted(){
    
  },
}
</script>


