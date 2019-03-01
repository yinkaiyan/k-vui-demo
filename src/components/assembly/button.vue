
<style scoped lang="less">
@import "../../assets/style.less";

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
    <!--dashed-->
    <div class="comp-con-title">
      按钮类型
    </div>
    <div class="btn-list">
      <k-button
        text="dashed"
        :disabled="disabled"
        type="dashed"
        :callback="dashedFun"
      >
      </k-button>
    </div>
    <!--info-->
    <div class="btn-list">
      <k-button
        text="info"
        :disabled="disabled"
        type="info"
        :callback="infoFun"
      >
      </k-button>
    </div>
    <!--success-->
    <div class="btn-list">
      <k-button
        text="success"
        :disabled="disabled"
        type="success"
        :callback="successFun"
      >
      </k-button>
    </div>
    <!--warning-->
    <div class="btn-list">
      <k-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :callback="warningFun"
      >
      </k-button>
    </div>
    <!--error-->
    <div class="btn-list">
      <k-button
        text="error"
        :disabled="disabled"
        type="error"
        :callback="errorFun"
      >
      </k-button>
    </div>
    <!--primary-->
    <div class="btn-list">
      <k-button
        text="primary"
        :disabled="disabled"
        type="primary"
        :callback="primaryFun"
      >
      </k-button>
    </div>
    <!--success mini-->
    <div class="comp-con-title">
      小型按钮
    </div>
    <div class="btn-list">
      <k-button
        text="success"
        :disabled="disabled"
        type="success"
        :callback="successFun"
        mini
      >
      </k-button>
    </div>
    <div class="btn-list">
        <k-button
          text="error"
          :disabled="disabled"
          type="error"
          :callback="errorFun"
          mini
        >
        </k-button>
    </div>
    <div class="btn-list">
      <k-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :callback="warningFun"
        mini
      >
      </k-button>
    </div>
    <div class="btn-list">
      <k-button
        text="primary"
        :disabled="disabled"
        type="primary"
        :callback="primaryFun"
        mini
      >
      </k-button>
    </div>
    <div class="btn-list">
      <k-button
        text="dashed"
        :disabled="disabled"
        type="dashed"
        :callback="dashedFun"
        mini
      >
      </k-button>
    </div>
    <div class="btn-list">
      <k-button
        text="info"
        :disabled="disabled"
        type="info"
        :callback="infoFun"
        mini
      >
      </k-button>
    </div>
    <!--一般按钮-->
    <div class="comp-con-title">
      一般按钮
    </div>
    <div class="btn-list">
      <k-button
        text="dashed"
        :disabled="disabled"
        type="dashed"
        :callback="dashedFun"
        plain
      >
      </k-button>
    </div>
    <!--info-->
    <div class="btn-list">
      <k-button
        text="info"
        :disabled="disabled"
        type="info"
        :callback="infoFun"
        plain
      >
      </k-button>
    </div>
    <!--success-->
    <div class="btn-list">
      <k-button
        text="success"
        :disabled="disabled"
        type="success"
        :callback="successFun"
        plain
      >
      </k-button>
    </div>
    <!--warning-->
    <div class="btn-list">
      <k-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :callback="warningFun"
        plain
      >
      </k-button>
    </div>
    <!--error-->
    <div class="btn-list">
      <k-button
        text="error"
        :disabled="disabled"
        type="error"
        :callback="errorFun"
        plain
      >
      </k-button>
    </div>
    <!--primary-->
    <div class="btn-list">
      <k-button
        text="primary"
        :disabled="disabled"
        type="primary"
        :callback="primaryFun"
        plain
      >
      </k-button>
    </div>
    <!--圆形按钮-->
    <div class="comp-con-title">
      圆形按钮
    </div>
    <div class="btn-list">
      <k-button
        text="dashed"
        :disabled="disabled"
        type="dashed"
        :callback="dashedFun"
        circular
      >
      </k-button>
    </div>
    <!--info-->
    <div class="btn-list">
      <k-button
        text="info"
        :disabled="disabled"
        type="info"
        :callback="infoFun"
        circular
      >
      </k-button>
    </div>
    <!--success-->
    <div class="btn-list">
      <k-button
        text="success"
        :disabled="disabled"
        type="success"
        :callback="successFun"
        circular
      >
      </k-button>
    </div>
    <!--warning-->
    <div class="btn-list">
      <k-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :callback="warningFun"
        circular
      >
      </k-button>
    </div>
    <!--error-->
    <div class="btn-list">
      <k-button
        text="error"
        :disabled="disabled"
        type="error"
        :callback="errorFun"
        circular
      >
      </k-button>
    </div>
    <!--primary-->
    <div class="btn-list">
      <k-button
        text="primary"
        :disabled="disabled"
        type="primary"
        :callback="primaryFun"
        circular
      >
      </k-button>
    </div>
    <!--大按钮-->
    <div class="comp-con-title">
      大按钮
    </div>
    <div class="btn-list btn-max">
      <k-button
        text="dashed"
        :disabled="disabled"
        type="dashed"
        :callback="dashedFun"
        max
      >
      </k-button>
    </div>
    <!--info-->
    <div class="btn-list btn-max">
      <k-button
        text="info"
        :disabled="disabled"
        type="info"
        :callback="infoFun"
        max
      >
      </k-button>
    </div>
    <!--success-->
    <div class="btn-list btn-max">
      <k-button
        text="success"
        :disabled="disabled"
        type="success"
        :callback="successFun"
        max
      >
      </k-button>
    </div>
    <!--warning-->
    <div class="btn-list btn-max">
      <k-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :callback="warningFun"
        max
      >
      </k-button>
    </div>
    <!--error-->
    <div class="btn-list btn-max">
      <k-button
        text="error"
        :disabled="disabled"
        type="error"
        :callback="errorFun"
        max
      >
      </k-button>
    </div>
    <!--primary-->
    <div class="btn-list btn-max">
      <k-button
        text="primary"
        :disabled="disabled"
        type="primary"
        :callback="primaryFun"
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
  name: 'Kbutton',
  data () {
    return {
      disabled:false,
    }
  },
  methods:{
    dashedFun(){
      console.log("dashed");
    },
    primaryFun(){
      console.log("primary");
    },
    errorFun(){
      console.log("error");
    },
    warningFun(){
      console.log("warning");
    },
    successFun(){
      console.log("success");
    },
    infoFun(){
      console.log("info");
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


