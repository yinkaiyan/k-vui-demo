<template>
  <div>
    <div class="home_xm_bottom">
        <div class="home_xm_list" @click="tabClick(index)" :class="{ active:activeTab == index}" v-for="(name,index) in menuList" :key="index">
            <router-link 
                :to="{
                  name:name.link
                }" tag="div">
                <i :class="name.icon"></i>
                <span>{{name.name}}</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    menuList: Array,
  },
  data () {
    return {
      activeTab:0,
    }
  },
  mounted(){
    
  },
  methods: {
    tabClick(index){
      this.activeTab=index;
    },
  },
  watch: {
   
  },
  created(){
    let path=this.$route.path;
    switch(path){
      case "/my":
        this.activeTab=0;
        break;
      case "/selected":
        this.activeTab=1;
        break;
      case "/list":
        this.activeTab=3;
        break;
      case "/video":
        this.activeTab=2;
        break;
    };
  }
}
</script>

<style lang="less" scoped>
@color:#5e5c5c;
.home_xm_bottom{
    width:100%;
    position: fixed;
    background:#fff;
    height:50px;
    bottom: 0px;
    z-index: 99;
    left:0px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    .home_xm_list{
        float: left;
        width:20%;
        color:@color;
        margin-bottom:4px;
        i,
        span{
          width:100%;
          float: left;
          display:block;
          text-align:center;
        };
        i{
          height:30px;
          line-height:32px;
          font-size:20px;
        };
        span{
          height:16px;
          line-height:16px;
          font-size:12px;
        }
    }
    .home_xm_list:nth-of-type(3),
    .home_xm_list:nth-of-type(4){
      float: right;
    }
    .active{
      color:#ff3366;
    }
}
</style>