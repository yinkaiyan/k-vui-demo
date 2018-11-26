<template>
  <div>
    <x-button type="primary" link="/chart/line">
      统计图表
    </x-button>
  </div>
</template>

<script>
import { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider } from 'vux'

export default {
   components: {
    XButton,
    Box,
    GroupTitle,
    Group,
    Flexbox,
    FlexboxItem,
    Divider
  },
  data () {
    return {
      show1: true,
    }
  },
  methods: {
    btnClick(){
     
    }
  },
  watch: {
   
  }
}
</script>

<style lang="less" scoped>

</style>