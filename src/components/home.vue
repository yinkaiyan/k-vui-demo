<style scoped lang="less">
  @import "./home/home.less";
</style>
<template>
  <div class="home_xm">
    <div class="home-content">
       <router-view></router-view>
    </div>
    <div class="home_xm_bottom">
      <div class="home_xm_list" @click="tabClick(index)" :class="{ active:activeTab == index}" v-for="(name,index) in tabs" :key="index">
        <router-link 
            :to="{
                name:name.link,
                query:{
                  type: name.name,
                }
            }" tag="div">
            <i :class="name.icon"></i>
            <span>{{name.name}}</span>
        </router-link>
      </div>
      <div class="home_xm_head" @click="myClick">
        <img :src="head">
      </div>
    </div>
  </div>
</template>

<script>
import "../icon/icon.css";
import { Grid, GridItem } from 'vux'
export default {
  name: 'index',
   components: {
    Grid,
    GridItem,
  },
  data () {
    return {
      show1: false,
      activeTab:1,
      head:"http://www.yinkaiyan.cn/images/head/head11.jpg",
      tabs:[
        {
          name:"我的",
          link:"my",
          icon:"icon iconfont icon-wode",
        },{
          name:"精选",
          link:"selected",
          icon:"icon iconfont icon-jingxuanbiao",
        },{
          name:"视频",
          link:"video",
          icon:"icon iconfont icon-shipin",
        },{
          name:"榜单",
          link:"list",
          icon:"icon iconfont icon-huangguan",
        }
      ],
    }
  },
  methods:{
    tabClick(index){
      this.activeTab=index;
    },
    myClick(){
      this.$router.push({
        name:'play',
      });
    }
  }
}
</script>


