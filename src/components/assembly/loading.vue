
<style scoped lang="less">
@import "../../assets/style.less";
.k-switch-list{
  width:90%;
  margin:36px 5%;
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
        title="按钮"
        :theme="['#5c6b77', '#fff']"
        :l-click="licon"
        type="text"
    >
    </k-navbar>
    <div class="k-switch-list">
      <div class="title">有标题</div>
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span>Loding {{value1}}</span>
    </div>

    <div class="k-switch-list">
      <k-button
        text="Loding"
        type="success"
        :callback="success"
      >
      </k-button>
    </div>

    <k-loading
      :value="value1"
      text="Loding"
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
    success(){
      this.value1=true;
      var self=this;
      setTimeout(function(){
          self.value1=false;
      },2000)
    },
  },
  mounted(){
    
  },
}
</script>


