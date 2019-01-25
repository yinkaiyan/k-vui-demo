
<style scoped lang="less">
@import "../../assets/style.less";
.k-switch-list{
  width:calc(100% - 24px);
  margin:12px 12px;
  height:38px;
  line-height:38px;
  float: left;
  .title{
    line-height:32px;
    width:100%;
    margin-left:4px;
    float: left;
    border-bottom: solid 1px gainsboro;
  }
  span{
      display:inline-block;
      float:right;
  }
}
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
      基本样式
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span>轻提示 {{value1}}</span>
    </div>
    <k-toast
        title="操作成功"
        :value="value1"
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
    success(){
      this.value1=true;
      var self=this;
      setTimeout(function(){
          self.value1=false;
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


