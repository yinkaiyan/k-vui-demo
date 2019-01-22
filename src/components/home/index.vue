
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="k-vui-index">
    <!-- <div class="comp-title">
      布局
    </div>
    <div class="comp-list" v-for="(list,index) in layout" @click="listClick(list.link)">
      <div class="comp-list-title">
        {{list.title}}
      </div>
      <div class="comp-list-icon">
        <i class="iconfont icon-CUI-icon-chevron-rig"></i>
      </div>
    </div>  -->

    <div class="comp-title">
      基础组件
    </div>
    <div class="comp-list" v-for="(list,index) in basics" @click="listClick(list.link)">
      <div class="comp-list-title">
        {{list.title}}
      </div>
      <div class="comp-list-icon">
        <k-icon
          type="icon-CUI-icon-chevron-rig"
        > 
        </k-icon>
      </div>
    </div>
    
    <div class="comp-title">
      图片
    </div>
    <div class="comp-list" v-for="(list,index) in imgs" @click="listClick(list.link)">
      <div class="comp-list-title">
        {{list.title}}
      </div>
      <div class="comp-list-icon">
        <k-icon
          type="icon-CUI-icon-chevron-rig"
        > 
        </k-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
  name: 'index',
  data () {
    return {
      layout:[
        {
          "link":"",
          "icon":"",
          "title":"layout栅格布局"
        },{
          "link":"",
          "icon":"",
          "title":"九宫格布局"
        },{
          "link":"",
          "icon":"",
          "title":"面板"
        },{
          "link":"",
          "icon":"",
          "title":"列表"
        },{
          "link":"",
          "icon":"",
          "title":"卡片"
        },
      ],
      basics:[
        {
          "link":"/button",
          "icon":"",
          "title":"按钮"
        },{
          "link":"/icon",
          "icon":"",
          "title":"图标"
        },
      ],
      imgs:[
        {
          "link":"/swiper",
          "icon":"",
          "title":"图片轮播"
        }
        // ,{
        //   "link":"",
        //   "icon":"",
        //   "title":"图片查看"
        // },
      ],
    }
  },
  methods:{
    listClick(link){
      this.$router.push({
        name:link
      });
    },
  },
  mounted(){
    
  },
}
</script>


