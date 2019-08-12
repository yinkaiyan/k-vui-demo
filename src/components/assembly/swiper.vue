
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="demo-box">
      <k-navbar
          l-icon="icon-CUI-icon-chevron-lef"
          title="轮播图"
          :theme="['#5c6b77', '#fff']"
          :l-click="licon"
          type="text"
      >
      </k-navbar>
      <div class="comp-con-title">
        基本轮播图
      </div>
      <k-swiper 
        :value="1"
        height="232px"
      >
        <k-swiper-item 
          title="美女001美女"
          img="http://www.yinkaiyan.cn/images/bannd01.jpg"
          src=""
        >
        </k-swiper-item>
        <k-swiper-item 
          title="美女002美女"
          img="http://www.yinkaiyan.cn/images/bannd02.jpg"
          src=""
        >
        </k-swiper-item>
        <k-swiper-item 
          title="美女003美女"
          img="http://www.yinkaiyan.cn/images/bannd03.jpg"
          src=""
        >
        </k-swiper-item>
        <k-swiper-item 
          title="美女004美女"
          img="http://www.yinkaiyan.cn/images/bannd04.jpg"
          src=""
        >
        </k-swiper-item>
        <k-swiper-item 
          title="美女005美女"
          img="http://www.yinkaiyan.cn/images/bannd05.jpg"
          src=""
        >
        </k-swiper-item>
      </k-swiper>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'swiper',
  data () {
    return {

    }
  },
  methods:{
    licon:function(){
      console.log(1)
      this.$router.push({
        name:'/home/index',
      });
    }
  },
  mounted(){
    
  },
}
</script>


