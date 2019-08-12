<template>
    <div>
        <k-navbar
            l-icon="icon-CUI-icon-chevron-lef"
            title="评分"
            :theme="['#5c6b77', '#fff']"
            :l-click="licon"
            type="text"
            >
        </k-navbar>
        <div class="comp-con-title">
            心型
        </div>
        <div class="k-score">
            <k-score
                :max="4"
                icon="icon-aixin"
                :active="2"
            ></k-score>
        </div>
        <div class="comp-con-title">
            星星
        </div>
        <div class="k-score">
            <k-score
                :max="3"
                icon="icon-shoucang1"
                :active="1"
            ></k-score>
        </div>
        <div class="comp-con-title">
            笑脸
        </div>
        <div class="k-score">
            <k-score
                :max="5"
                icon="icon-icon_xiaolian-xian"
                :active="2"
            ></k-score>
        </div>
        <div class="comp-con-title">
            点赞
        </div>
        <div class="k-score">
            <k-score
                :max="7"
                icon="icon-dianzan"
                :active="6"
                :callback="fun"
            ></k-score>
        </div>
    </div>
</template>
<script>
export default {
  name:"k-score-s",
  props: {
    
  },
  data () {
    return {
      
    }
  },
  methods:{
     fun(val){
         console.log(val);
     },
     licon:function(){
      this.$router.push({
        name:'/home/index',
      });
    },
  },
}
</script>
<style scoped lang="less">
@import "../../assets/style.less";
.k-score{
   float: left;
   width: 100%;
   margin: 2px 0px; 
}
</style>