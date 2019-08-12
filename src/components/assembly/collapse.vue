
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="折叠面板"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
        默认关闭
    </div>
    <k-collapse
      label="标签一"
      :value="value1"
    >
      <div style="margin-left:4px">
        标签一内容<br/>
        标签一内容<br/>
        标签一内容<br/>
        标签一内容<br/>
        标签一内容<br/>
        标签一内容<br/>
        标签一内容<br/>
        标签一内容<br/>
      </div>
    </k-collapse>
    <div class="comp-con-title">
        默认展开
    </div>
    <k-collapse
      label="标签二"
      :value="value"
    >
      <div style="margin-left:4px">
        标签二内容<br/>
        标签二内容<br/>
        标签二内容<br/>
        标签二内容<br/>
        标签二内容<br/>
        标签二内容<br/>
        标签二内容<br/>
        标签二内容<br/>
      </div>
    </k-collapse>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'collapse',
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


