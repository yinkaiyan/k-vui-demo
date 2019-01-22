
<style scoped lang="less">
@import "../../assets/style.less";
.k-switch-list{
  float: left;
  width:98%;
  margin-left:1%;
  margin-top:12px;
}
p{
    text-indent: 12px;
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
        普通标签
    </div>
    <div class="tabbar-list">
      <k-tabs 
        type="line"
        :active-tab="0"
        :theme="['yellow','red']"
        :size="['42px']"
        :callback="callbackFun"
      >
        <k-tabs-pane label="标签一">
          <p>标签一内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签二">
          <p>标签二内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签三">
          <p>标签三内容</p>
        </k-tabs-pane>
      </k-tabs>
    </div>
    <div class="comp-con-title">
        加图标
    </div>
    <div class="tabbar-list">
      <k-tabs 
        type="line"
        :size="['42px']"
        :active-tab="1"
      >
        <k-tabs-pane label="标签一" icon="icon-guanliyuan">
          <p>标签一内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签二" icon="icon-shenfenxuanze">
          <p>标签二内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签三" icon="icon-gouwuche">
          <p>标签三内容</p>
        </k-tabs-pane>
      </k-tabs>
    </div>
    <div class="comp-con-title">
        多个标签
    </div>
    <div class="tabbar-list">
      <k-tabs 
        type="line"
        :size="['42px']"
        :active-tab="2"
      >
        <k-tabs-pane label="标签一">
          <p>标签一内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签二">
          <p>标签二内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签三">
          <p>标签三内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签四">
          <p>标签四内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签五">
          <p>标签五内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签六">
          <p>标签六内容</p>
        </k-tabs-pane>
        <k-tabs-pane label="标签七">
          <p>标签七内容</p>
        </k-tabs-pane>
      </k-tabs>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'tabbar',
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
    callbackFun(index,label){
      console.log(index);
    }
  },
  mounted(){
    
  },
}
</script>


