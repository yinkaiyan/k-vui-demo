<style scoped lang="less">
  @import "./home.less";
</style>
<template>
  <div>
    <div class="selected-home">
      <div class="selected-title">
        <div class="selected-tab">
          <div :class="{ 'selected-tab-list':public, 'tabActive': Aactive}" @click="tabClick(1)">推荐</div>
          <div :class="{ 'selected-tab-list':public, 'tabActive': Bactive}" @click="tabClick(2)">电台</div>
        </div>
        <div class="selected-search">
          <search
            v-model="value"
            @on-focus="onFocus"
            ></search>
        </div>
      </div>
      <div class="selected-content">
        <div class="selected-banner">
          <swiper :list="banner_list" v-model="index" dots-position="center" auto ></swiper>
        </div>
        <div class="selected-popular">
          <div class="selected-popular-list" v-for="(name,index) in popular" :key="index">
            <router-link 
              :to="{
                  name:name.link,
                  query:{
                    type: name.name,
                  }
              }" tag="div">
              <div class="selected-popular-icon">
                <i :class="name.icon"></i>
              </div>
              <span>{{name.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search,Swiper,SwiperItem} from 'vux'

const baseList = [{
  url: 'javascript:;',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '一朵'
}, {
  url: 'javascript:;',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '一辆车'
}, {
  url: 'javascript:;',
  title: '一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}];

const tabs=[{
  name:"排行棒",
  link:"my",
  icon:"icon iconfont icon-wode",
},{
  name:"歌手馆",
  link:"selected",
  icon:"icon iconfont icon-jingxuanbiao",
},{
  name:"分类歌单",
  link:"video",
  icon:"icon iconfont icon-shipin",
},{
  name:"私人电台",
  link:"list",
  icon:"icon iconfont icon-huangguan",
},{
  name:"福利专区",
  link:"list",
  icon:"icon iconfont icon-huangguan",
}];
export default {
  components: {
    Search,
    Swiper,
    SwiperItem,
  },
  data () {
    return {
      public:true,
      Aactive:true,
      Bactive:false,
      value: '',
      banner_list: baseList,
      index:0,
      popular:tabs,
    }
  },
  methods: {
    onFocus () {
      
    },
    tabClick(type){
      if(type==1){
        this.Aactive=true;
        this.Bactive=false;
      }else{
        this.Aactive=false;
        this.Bactive=true;
      };
    },
  },
  watch: {
   
  }
}
</script>
