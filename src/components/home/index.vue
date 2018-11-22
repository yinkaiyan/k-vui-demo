<style scoped lang="less">
  @import "./home.less";
</style>
<template>
  <div class="home">
    <divider>我是有底线的</divider>
    <div class="home1">
        1
        <div class="home2">
            2
        </div>
    </div>
     <router-link 
        :to="{
            name:'index_',
            query:{
                id:'10'
            }
        }" tag="div">
        index
    </router-link>
  </div>
</template>

<script>
import {
  login
} from "@/api/index";
import { Divider } from 'vux'
import homedata from "./data/data.js"
export default {
  name: 'index',
   components: {
    Divider
  },
  data () {
    return {

    }
  },
  mounted(){
    console.log(homedata);
    login({
      phone:"123456",
      password:"123456"
    }).then(data => {
      console.log(data);
    })
  }
}
</script>
<style scoped>

</style>
