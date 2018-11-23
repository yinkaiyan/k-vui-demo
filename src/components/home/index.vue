<style scoped lang="less">
  @import "./home.less";
</style>
<template>
  <div class="home_page_home">
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     111<br/>
     222<br/>
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
