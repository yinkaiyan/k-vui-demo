
<style scoped lang="less">
@import "../../assets/style.less";
.k-swipecell-box{
    float: left;
    width:100%;
}
</style>
<template>
  <div class="demo-box">
    <k-navbar
      l-icon="icon-CUI-icon-chevron-lef"
      title="滑动单元格"
      :theme="['#5c6b77', '#fff']"
      :l-click="licon"
      type="text"
    >
    </k-navbar>
    <div class="comp-con-title">
        基本样式
    </div>
        <div class="k-swipecell-box">
        <k-swipecell
            head="http://www.yinkaiyan.cn/images/head/head11.jpg"
            content="内容001内容内容内容001001"
            title="标题001"
        >

        </k-swipecell>
        
    </div>
    <div class="k-swipecell-box">
        <k-swipecell
            head="http://www.yinkaiyan.cn/images/head/head06.jpg"
            content="内容002内容内容内容001002"
            title="标题002"
        >

        </k-swipecell>
        
    </div>
    <div class="k-swipecell-box">
        <k-swipecell
            head="http://www.yinkaiyan.cn/images/head/head11.jpg"
            content="内容003内容内容内容001003"
            title="标题003"
        >

        </k-swipecell>
        
    </div>
    <div class="k-swipecell-box">
        <k-swipecell
            head="http://www.yinkaiyan.cn/images/head/head06.jpg"
            content="内容004内容内容内容001004"
            title="标题004"
        >

        </k-swipecell>
        
    </div>

  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'swipecell',
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


