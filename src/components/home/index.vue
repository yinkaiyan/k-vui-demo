
<style scoped lang="less">
@import "../../assets/style.less";
@import "../../assets/iconfont.css";
</style>
<template>
  <div class="k-vui-index">
    <div class="comp-title">
      布局
    </div>
    <div class="comp-list" v-for="(list,index) in layout" @click="listClick(list.link)">
      <div class="comp-list-title">
        {{list.title}}
      </div>
      <div class="comp-list-icon">
        <i class="iconfont icon-CUI-icon-chevron-rig"></i>
      </div>
    </div>

    <div class="comp-title">
      基础组件
    </div>
    <div class="comp-list" v-for="(list,index) in basics">
      <div class="comp-list-title">
        {{list.title}}
      </div>
      <div class="comp-list-icon">
        <i class="iconfont icon-CUI-icon-chevron-rig"></i>
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
          "link":"",
          "icon":"",
          "title":"按钮"
        },{
          "link":"/icon",
          "icon":"",
          "title":"图标"
        },
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


