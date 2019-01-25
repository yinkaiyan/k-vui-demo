
<style scoped lang="less">
@import "../../assets/style.less";
.comp-in{
  margin:12px 0px;
}
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="radio单选框"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      横向排列
    </div>
    <div class="comp-in">
      <k-radiogroup 
        :value="2"
        :callBack="callbackFun"
      >
          <k-radio
            label="橘子"
          >
          </k-radio>
          <k-radio
            label="苹果"
          >
          </k-radio>
          <k-radio
            label="馒头"
          >
          </k-radio>
          <k-radio
            label="西瓜"
          >
          </k-radio>
      </k-radiogroup>
    </div>
    <div class="comp-con-title">
      纵向排列
    </div>
    <div class="comp-in">
      <k-radiogroup 
        :value="2"
        :callBack="callbackFun"
        column
      >
          <k-radio
            label="橘子"
          >
          </k-radio>
          <k-radio
            label="苹果"
          >
          </k-radio>
          <k-radio
            label="馒头"
          >
          </k-radio>
          <k-radio
            label="西瓜"
          >
          </k-radio>
      </k-radiogroup>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'Kradio',
  data () {
    return {

    }
  },
  methods:{
    callbackFun(val){
      console.log(val)
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


