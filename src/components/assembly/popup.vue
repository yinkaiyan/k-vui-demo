
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
      <k-navbar
        l-icon="icon-CUI-icon-chevron-lef"
        title="popup弹出层"
        :theme="['#5c6b77', '#fff']"
        :l-click="licon"
        type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      有标题
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span>有标题弹窗 {{value1}}</span>
    </div>
    <k-alert
        title="标题"
        content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        :value="value1"
        :yes-callback="yesCallback1"
        :no-callback="noCallback1"
    >
       
    </k-alert>

    <div class="comp-con-title">
      无标题
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value2"
        :callback="clickFun2"
      ></k-switch>
      <span>无标题弹窗 {{value2}}</span>
    </div>
    <k-alert
        content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        :value="value2"
        :yes-callback="yesCallback2"
        :no-callback="noCallback2"
    >
    </k-alert>


    <div class="comp-con-title">
      单个按钮
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value3"
        :callback="clickFun3"
      ></k-switch>
      <span>单个按钮 {{value3}}</span>
    </div>
    <k-alert
      title="标题"
      content="内容内容内容内容fdafregeygrth但是通过热狗 让他也让他以后他意图u而已业务员投入近yjuyi6eryeyqeyth内容内容内容内容内容内容内容内容内容内容宫粉雕痕附近的刚好是个很纠结好的风景更好就更符合规范健康合适的价格hoi过几天日哦胡锦涛和规范健康的规划日偶尔感觉很听话地方各级恢复健康和dfghofjhjsdgheru9thnjkfdnhsfdgjkalfngj"
      :value="value3"
      :yes-callback="yesCallback3"
      :no-callback="noCallback3"
      buttonS
    >
    </k-alert>


    <div class="comp-con-title">
      自定义文本
    </div>
    <div class="k-switch-list">
      <div class="title"></div>
      <k-switch
        :value="value4"
        :callback="clickFun4"
      ></k-switch>
      <span>自定义文本 {{value4}}</span>
    </div>
    <k-alert
      title="标题"
      :value="value4"
      :yes-callback="yesCallback4"
      :no-callback="noCallback4"
    >
      <p>内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容</p>
      <p>内容内容内容内容内容内容内容内容内容</p>
    </k-alert>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'popup',
  data () {
    return {
        value1:false,
        value2:false,
        value3:false,
        value4:false,
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    //001
    clickFun1(val){
        this.value1=val;
    },
    yesCallback1(val){
        this.value1=false;
    },
    noCallback1(val){
        this.value1=false;
    },
    //002
    clickFun2(val){
        this.value2=val;
    },
    yesCallback2(val){
        this.value2=false;
    },
    noCallback2(val){
        this.value2=false;
    },
    //003
    clickFun3(val){
        this.value3=val;
    },
    yesCallback3(val){
        this.value3=false;
    },
    noCallback3(val){
        this.value3=false;
    },
    clickFun4(val){
      this.value4=val;
    },
    yesCallback4(val){
      this.value4=false;
    },
    noCallback4(val){
      this.value4=false;
    }
  },
  mounted(){
    
  },
}
</script>


