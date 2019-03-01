
<style scoped lang="less">
@import "../../assets/style.less";
.comp-in-input{
  width:100%;
  float: left;
  margin-top:0px;
  background: #fff;
}
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="input"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
      基本input表单
    </div>
    <div class="comp-in-input">
        <k-input
            title="姓名"
            :change="callback"
            placeholder="请输入姓名"
        >
        </k-input>
        <k-input
            title="联系电话"
            :change="callback"
            placeholder="请输入联系电话"
        >
        </k-input>
        <k-input
            title="邮箱地址"
            :change="callback"
            placeholder="邮箱"
        >
        </k-input>
        <k-input
            title="居住地址"
            :change="callback"
            placeholder="居住地址"
        >
        </k-input>
        <k-input
            title="出生年月"
            :change="callback"
            placeholder="出生年月"
        >
        </k-input>
        <k-input
            title="毕业院校"
            :change="callback"
            placeholder="毕业院校"
        >
        </k-input>
        <k-input
            :change="callback"
            placeholder="无标题input"
        >
        </k-input>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'input-',
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
    callback(val){
      console.log(val);
    },
  },
  mounted(){
    
  },
}
</script>


