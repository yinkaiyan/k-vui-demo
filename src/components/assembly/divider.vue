
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="分割线"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      一般样式
    </div>
    <k-divider
      title="数据加载完毕"
    >
    </k-divider>
    
    <div class="comp-con-title">
      设置颜色
    </div>
    <k-divider
      title="到底了"
      :theme="['red']"
    >
    </k-divider>

    <div class="comp-con-title">
      设置颜色
    </div>
    <k-divider
      title="到底了"
      :theme="['red','']"
    >
    </k-divider>

    <div class="comp-con-title">
      设置颜色
    </div>
    <k-divider
      title="到底了"
      :theme="['red','red']"
    >
    </k-divider>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'divider',
  data () {
    return {
        value1:false,
        value:true,
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    
  },
  mounted(){
    
  },
}
</script>


