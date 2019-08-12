<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body{
  // background: $title;
  padding: 0px;
  margin:0px;
  width:100%;
  float: left;
}
</style>
