<style scoped>

</style>
<template>
  <div class="hello">
    <grid>
      <grid-item label="Grid" v-for="i in 9">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
    <router-view></router-view>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  name: 'index',
   components: {
    Grid,
    GridItem
  },
  data () {
    return {

    }
  }
}
</script>


