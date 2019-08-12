
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
      title="checkbox复选框"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      横向排列
    </div>
    <div class="comp-in" style="width:calc(100% - 24px);margin-left:12px;">
      <k-checkboxgroup
        :callback="callbackFun"
        :value="active"
      >
          <k-checkbox
            label="西瓜"
          >
          </k-checkbox>
          <k-checkbox
            label="牛奶"
          >
          </k-checkbox>
          <k-checkbox
            label="橘子"
          >
          </k-checkbox>
          <k-checkbox
            label="苹果"
          >
          </k-checkbox>
      </k-checkboxgroup>
    </div>
    <div class="comp-con-title">
      纵向排列
    </div>
    <div class="comp-in">
      <k-checkboxgroup
        :callback="callbackFun"
        :value="active"
        column
      >
          <k-checkbox
            label="西瓜"
          >
          </k-checkbox>
          <k-checkbox
            label="牛奶"
          >
          </k-checkbox>
          <k-checkbox
            label="橘子"
          >
          </k-checkbox>
          <k-checkbox
            label="苹果"
          >
        </k-checkbox>
      </k-checkboxgroup>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'Kcheckbox',
  data () {
    return {
      active:["0","2","3"],
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    callbackFun(val){
      console.log(val);
    },
  },
  mounted(){
    
  },
}
</script>


