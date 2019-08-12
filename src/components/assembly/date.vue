
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="时间日期"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
        基本样式
    </div>
    <k-calendar
        :callback="fun"
        :value-year="2019"
        :value-month="3"
    >
    </k-calendar>
    <div class="comp-con-title">
        默认选中
    </div>
    <k-calendar
        :callback="fun"
        :active-data="['2019-03-23','2019-03-14','2019-04-24']"
        :value-year="2019"
        :value-month="3"
    >
    </k-calendar>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'date',
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
    fun(val){
      console.log(val);
    }
  },
  mounted(){
    
  },
}
</script>


