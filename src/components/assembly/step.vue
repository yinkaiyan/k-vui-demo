
<style scoped lang="less">
@import "../../assets/style.less";
.step-list{
  float: left;
  width:100%;
  margin:12px 0;
}
.step-list-z{
  float: left;
  width:calc(100% - 64px);
  margin-left: 32px;
  margin-top: 32px;
}
.btn{
  float: left;
  width:100%;
  margin-bottom: 12px;
}
</style>
<template>
  <div class="demo-box">
    <k-navbar
        l-icon="icon-CUI-icon-chevron-lef"
        title="步骤条"
        :theme="['#5c6b77', '#fff']"
        :l-click="licon"
        type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      横向
    </div>
    <div class="step-list">
      <k-steps>
        <k-step
          label="1"
          title="第一步"
          content="第一步内容"
        ></k-step>
        <k-step
          label="2"
          title="第二步"
          content="第二步内容"
        ></k-step>
        <k-step 
          label="3"
          title="第三步"
          content="第三步内容"
        ></k-step>
      </k-steps>
    </div>
    <div class="comp-con-title">
      横向选中
    </div>
    <div class="step-list">
      <k-steps
          :current="2"
        >
        <k-step
          label="1"
          title="第一步"
          content="第一步内容"
        ></k-step>
        <k-step
          label="2"
          title="第二步"
          content="第二步内容"
        ></k-step>
        <k-step 
          label="3"
          title="第三步"
          content="第三步内容"
        ></k-step>
      </k-steps>
    </div>

    <div class="comp-con-title">
      纵向
    </div>
    <div class="step-list-z">
      <k-steps
        vertical
      >
        <k-step
          label="1"
          title="第一步"
          content="第一步内容"
        ></k-step>
        <k-step
          label="2"
          title="第二步"
          content="第二步内容"
        ></k-step>
        <k-step 
          label="3"
          title="第三步"
          content="第三步内容"
        ></k-step>
        <k-step 
          label="4"
          title="第四步"
          content="第四步内容"
        ></k-step>
      </k-steps>
    </div>
    <div class="comp-con-title">
      纵向选中
    </div>
    <div class="step-list-z">
      <k-steps
        vertical
        :current="2"
      >
        <k-step
          label="1"
          title="第一步"
          content="第一步内容"
        ></k-step>
        <k-step
          label="2"
          title="第二步"
          content="第二步内容"
        ></k-step>
        <k-step 
          label="3"
          title="第三步"
          content="第三步内容"
        ></k-step>
        <k-step 
          label="4"
          title="第四步"
          content="第四步内容"
        ></k-step>
      </k-steps>
    </div>
    <div class="comp-con-title">
      字母
    </div>
    <div class="step-list-z">
      <k-steps
        vertical
        :current="num"
      >
        <k-step
          label="A"
          title="第一步"
          content="第一步内容"
        ></k-step>
        <k-step
          label="B"
          title="第二步"
          content="第二步内容"
        ></k-step>
        <k-step 
          label="C"
          title="第三步"
          content="第三步内容"
        ></k-step>
        <k-step 
          label="D"
          title="第四步"
          content="第四步内容"
        ></k-step>
      </k-steps>
    </div>
    <div class="btn">
      <k-button
        text="success"
        type="success"
        :callback="successFun"
        max
      >
      </k-button>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'loading',
  data () {
    return {
        num:1
    }
  },
  methods:{
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    successFun(){
      this.num++;
    },
    fun(val){
      console.log(val);
    }
  },
  mounted(){
    
  },
}
</script>


