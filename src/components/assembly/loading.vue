
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
        l-icon="icon-CUI-icon-chevron-lef"
        title="loading"
        :theme="['#5c6b77', '#fff']"
        :l-click="licon"
        type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      样式一
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span>Loding {{value1}}</span>
    </div>

    <k-loading
      :value="value1"
      text="Loding"
      type="1"
    >

    </k-loading>

    <div class="comp-con-title">
      样式二
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value2"
        :callback="clickFun2"
      ></k-switch>
      <span>Loding {{value2}}</span>
    </div>

    <k-loading
      :value="value2"
      text="Loding"
      type="2"
    >

    </k-loading>

    <div class="comp-con-title">
      样式三
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value3"
        :callback="clickFun3"
      ></k-switch>
      <span>Loding {{value3}}</span>
    </div>

    <k-loading
      :value="value3"
      text="Loding"
      type="3"
    >

    </k-loading>
    <div class="comp-con-title">
      样式四
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value4"
        :callback="clickFun4"
      ></k-switch>
      <span>Loding {{value4}}</span>
    </div>

    <k-loading
      :value="value4"
      text="Loding"
      type="4"
    >

    </k-loading>

    <div class="comp-con-title">
      样式五
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value5"
        :callback="clickFun5"
      ></k-switch>
      <span>Loding {{value5}}</span>
    </div>

    <k-loading
      :value="value5"
      text="Loding"
      type="5"
    >

    </k-loading>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'loading',
  data () {
    return {
        value1:false,
        value2:false,
        value3:false,
        value4:false,
        value5:false,
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
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
    clickFun4(){
      this.value4=true;
      var self=this;
      setTimeout(function(){
          self.value4=false;
      },2000)
    },
    clickFun5(){
      this.value5=true;
      var self=this;
      setTimeout(function(){
          self.value5=false;
      },2000)
    },
  },
  mounted(){
    
  },
}
</script>


