<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="底部弹出层"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      基本类型
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value"
        :callback="clickFun"
      ></k-switch>
      <span>基本类型 {{value}}</span>
    </div>

    <k-actionsheet 
      :value="value"
      :actions="list"
      title="基本类型"
      :hide="hide"
      :list_click="list_click"
    >
    </k-actionsheet>


    <div class="comp-con-title">
      多条数据
    </div>
    <div class="k-switch-list">
      <k-switch
        :value="value1"
        :callback="clickFun1"
      ></k-switch>
      <span>多条数据 {{value1}}</span>
    </div>

    <k-actionsheet 
      :value="value1"
      :actions="list1"
      title="多条数据"
      :hide="hide1"
      :list_click="list_click1"
    >
    </k-actionsheet>

  </div>
</template>

<script>

export default {
  name:"actionsheet",
  data () {
    return {
      value:false,
      list:[
        {
          "title":"test001",
          "id":"1",
        },{
          "title":"test002",
          "id":"2",
        },{
          "title":"test003",
          "id":"3",
        },{
          "title":"test004",
          "id":"4",
        },{
          "title":"test005",
          "id":"5",
        }
      ],
      value1:false,
      list1:[
        {
          "title":"test001",
          "id":"1",
        },{
          "title":"test002",
          "id":"2",
        },{
          "title":"test003",
          "id":"3",
        },{
          "title":"test004",
          "id":"4",
        },{
          "title":"test005",
          "id":"5",
        },{
          "title":"test006",
          "id":"6",
        },{
          "title":"test007",
          "id":"7",
        },{
          "title":"test008",
          "id":"8",
        },{
          "title":"test009",
          "id":"9",
        }
      ]
    }
  },
  methods: {
    licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
    clickFun(val){
      this.value=val;
    },
    clickFun1(val){
      this.value1=val;
    },
    hide(val){
      this.value=val;
    },
    hide1(val){
      this.value1=val;
    },
    list_click(index){
      console.log(index);
    },
    list_click1(index){
      console.log(index);
    }
  },
  watch: {
   
  }
}
</script>

<style lang="less" scoped>
.k-switch-list{
  width:calc(100% - 24px);
  margin:14px 12px;
  height:42px;
  line-height:42px;
  float: left;
  span{
    display:inline-block;
    float:right;
  }
}
</style>