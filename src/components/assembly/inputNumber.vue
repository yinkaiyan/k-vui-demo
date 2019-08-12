<template>
  <div class="k-alert">
    <k-navbar
        l-icon="icon-CUI-icon-chevron-lef"
        title="数字输入"
        :theme="['#5c6b77', '#fff']"
        :l-click="licon"
        type="text"
        >
    </k-navbar>
    <div class="comp-con-title">
       左浮动
    </div>
    <div class="k-switch-list">
      <k-input-number
        title="title"
        :model="2"
      >
      </k-input-number>
    </div>
    <div class="comp-con-title">
        右浮动
    </div>
    <div class="k-switch-list">
      <k-input-number
        title="title"
        :model="2"
        float
      >
      </k-input-number>
    </div>
    <div class="comp-con-title">
        允许为负值
    </div>
    <div class="k-switch-list">
      <k-input-number
        title="title"
        :model="2"
        negative
      >
      </k-input-number>
    </div>
    <div class="comp-con-title">
        小数
    </div>
    <div class="k-switch-list">
      <k-input-number
        title="title"
        :model="2"
        decimal
      >
      </k-input-number>
    </div>
    <div class="comp-con-title">
      小数负
    </div>
    <div class="k-switch-list">
      <k-input-number
        title="title"
        :model="2"
        float
        negative
        decimal
      >
      </k-input-number>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
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

<style lang="less" scoped>
@import "../../assets/style.less";
.k-alert{
  width:100%;
  float: left;
}

</style>