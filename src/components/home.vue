
<template>
  <div class="home_xm">
    <div class="home-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { verification } from '../api/verification'
import { Grid, GridItem } from 'vux'
export default {
   name: 'home',
   components: {
    Grid,
    GridItem,
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  },
  mounted(){
    
  },
}
</script>


