
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="k-vui-index">

    <div class="comp-title">
      基础组件
    </div>
    <div class="comp-list" v-for="list in basics" @click="listClick(list.link)" :key="list.link">
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
    <div class="comp-list" v-for="list in form" @click="listClick(list.link)" :key="list.link">
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
      滑动组件
    </div>
    <div class="comp-list" v-for="list in imgs" @click="listClick(list.link)" :key="list.link">
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
      切换组件
    </div>
    <div class="comp-list" v-for="list in tabs" @click="listClick(list.link)" :key="list.link">
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
    <div class="comp-list" v-for="list in alert" @click="listClick(list.link)" :key="list.link">
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
      其他组件
    </div>
    <div class="comp-list" v-for="list in other" @click="listClick(list.link)" :key="list.link">
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
      other:[
        {
          "link":"/time",
          "icon":"",
          "title":"倒计时"
        }
      ],
      tabs:[
        {
          "link":"/tabbar",
          "icon":"",
          "title":"tabs切换"
        }
        ,{
          "link":"/collapse",
          "icon":"",
          "title":"折叠面板"
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
        },{
          "link":"/swipecell",
          "icon":"",
          "title":"滑动单元格"
        }
      ],
      alert:[
        {
          "link":"/loading",
          "icon":"",
          "title":"loading加载"
        },{
          "link":"/popup",
          "icon":"",
          "title":"popup弹出层"
        },{
          "link":"/actionsheet",
          "icon":"",
          "title":"底部弹出层"
        },{
          "link":"/prompt",
          "icon":"",
          "title":"轻提示"
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


