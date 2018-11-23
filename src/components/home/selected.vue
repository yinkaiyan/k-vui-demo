<style scoped lang="less">
  @import "./home.less";
</style>
<template>
  <div>
    <div class="selected-home">
      <div class="selected-title">
        <div class="selected-tab">
          <div class="selected-tab-list tabActive">推荐</div>
          <div class="selected-tab-list">电台</div>
        </div>
        <div class="selected-search">
          <search
            v-model="value"
            @on-focus="onFocus"
            ></search>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from 'vux'
export default {
  components: {
    Search,
    Group,
    Cell,
    XButton
  },

  data () {
    return {
      show1: true,
      results: [],
      value: ''
    }
  },
  methods: {
 
   
    onFocus () {
      console.log('on focus')
    },
  },
  watch: {
   
  }
}
</script>