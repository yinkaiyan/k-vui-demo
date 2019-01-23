
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
      表单组件
    </div>
    <div class="comp-list" v-for="(list,index) in form" @click="listClick(list.link)">
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

    <div class="comp-title">
      tabs切换
    </div>
    <div class="comp-list" v-for="(list,index) in tabs" @click="listClick(list.link)">
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
      弹出层
    </div>
    <div class="comp-list" v-for="(list,index) in alert" @click="listClick(list.link)">
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
      tabs:[
        {
          "link":"/tabbar",
          "icon":"",
          "title":"tabs切换"
        },
      ],
      form:[
        {
          "link":"/radio",
          "icon":"",
          "title":"radio单选框"
        },{
          "link":"/checkbox",
          "icon":"",
          "title":"checkbox复选框"
        },{
          "link":"/switch",
          "icon":"",
          "title":"switch开关"
        },
      ],
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
      alert:[
        {
          "link":"/loading",
          "icon":"",
          "title":"loading加载"
        }
        ,{
          "link":"/popup",
          "icon":"",
          "title":"popup弹出层"
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


