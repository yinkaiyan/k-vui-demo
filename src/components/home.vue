<style scoped lang="less">
  @import "./home/home.less";
</style>
<template>
  <div class="home_xm">
    <div class="home-content">
      <router-view></router-view>
    </div>
    <bottom-Menu
      :menu-list="menuList"
    >
    </bottom-Menu>
    <div class="home_xm_head" @click="myClick">
      <img :src="head">
    </div>
  </div>
</template>

<script>
import "../icon/icon.css";
import { verification } from '../api/verification'
import data  from '../components/home/data/data'
import bottomMenu  from '../components/menu/bottomMenu'
import { Grid, GridItem } from 'vux'
export default {
   name: 'index',
   components: {
    Grid,
    GridItem,
    bottomMenu,
  },
  data () {
    return {
      show1: false,
      activeTab:1,
      head:"http://www.yinkaiyan.cn/images/head/head11.jpg",
      menuList:[
        {
          name:"我的",
          link:"/home/my",
          icon:"icon iconfont icon-wode",
        },{
          name:"精选",
          link:"/home/selected",
          icon:"icon iconfont icon-jingxuanbiao",
        },{
          name:"视频",
          link:"/home/video",
          icon:"icon iconfont icon-shipin",
        },{
          name:"榜单",
          link:"/home/list",
          icon:"icon iconfont icon-huangguan",
        }
      ],
    }
  },
  methods:{
    myClick(){
      this.$router.push({
        name:'play',
      });
    },
  },
  mounted(){
    console.log(verification.isMailbox("12545"));
    console.log(data);
  },
}
</script>


