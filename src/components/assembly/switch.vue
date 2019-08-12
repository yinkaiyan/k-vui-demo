
<style scoped lang="less">
@import "../../assets/style.less";
.k-switch-list{
  float: left;
  width:98%;
  margin-left:1%;
  margin-top:12px;
}
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="switch开关"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
        默认关闭
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="false"
        :callback="clickFun"
      ></k-switch>
    </div>
    <div class="comp-con-title">
        默认打开
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="true"
      ></k-switch>
    </div>
    <div class="comp-con-title">
        禁用
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="true"
        disabled
      ></k-switch>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'Kswitch',
  data () {
    return {

    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    clickFun(val){
      console.log(val);
    },
  },
  mounted(){
    
  },
}
</script>


