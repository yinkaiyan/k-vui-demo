<template>
  <div class="k-alert">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="数字键盘"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      {{number}}
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span></span>
    </div>

    <key-board
      :callback="callbackFun"
      :model="value1"
      :hide="hideFun"
    >
    </key-board>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1:true,
      number:"数字键盘",
    }
  },
  methods: {
    clickFun1(val){
      this.value1=val;
    },
    callbackFun(val){
      this.number=val;
    },
    hideFun(type){
      this.value1=false;
    },
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
  },
  mounted(){
      
  },
  watch: {
   
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/style.less";
</style>