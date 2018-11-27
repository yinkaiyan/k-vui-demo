<template>
  <div>
    <!--dashed-->
    <div class="btn-list">
      <y-button
        text="dashed"
        :disabled="disabled"
        type="dashed"
        :on-click="dashed"
      >
      </y-button>
    </div>
    <!--info-->
    <div class="btn-list">
      <y-button
        text="info"
        :disabled="disabled"
        type="info"
        :on-click="info"
      >
      </y-button>
    </div>
    <!--success-->
    <div class="btn-list">
      <y-button
        text="success"
        :disabled="disabled"
        type="success"
        :on-click="success"
      >
      </y-button>
    </div>
    <!--warning-->
    <div class="btn-list">
      <y-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :on-click="warning"
      >
      </y-button>
    </div>
    <!--error-->
    <div class="btn-list">
      <y-button
        text="error"
        :disabled="disabled"
        type="error"
        :on-click="error"
      >
      </y-button>
    </div>
    <!--primary-->
    <div class="btn-list">
      <y-button
        text="primary"
        :disabled="disabled"
        type="primary"
        :on-click="primary"
      >
      </y-button>
    </div>
    <!--success mini-->
    <div class="btn-list">
      <div>
        <y-button
          text="success"
          :disabled="disabled"
          type="success"
          :on-click="success"
          mini
        >
        </y-button>
      </div>
      <div>
        <y-button
          text="error"
          :disabled="disabled"
          type="error"
          :on-click="error"
          mini
        >
        </y-button>
      </div>
    </div>
    <div class="btn-list">
      <y-button
        text="warning"
        :disabled="disabled"
        type="warning"
        :on-click="warning"
        mini
      >
      </y-button>
    </div>
  </div>
</template>

<script>
import YButton from "../assembly/y-button"
export default {
  components:{
    YButton,
  },
  data () {
    return {
      disabled:false,
    }
  },
  methods: {
    dashed(){
      console.log("dashed");
    },
    primary(){
      console.log("primary");
    },
    error(){
      console.log("error");
    },
    warning(){
      console.log("warning");
    },
    success(){
      console.log("success");
    },
    info(){
      console.log("info");
    }
  },
  watch: {
   
  }
}
</script>

<style lang="less" scoped>
.btn-list{
  width:92%;
  margin:6px 4%;
  float: left;
  div{
    width:50%;
    float: left;
    padding:0px 4px;
    box-sizing:border-box;
  }
}
</style>