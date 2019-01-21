
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="single">
    <k-radiogroup 
        :value="2"
        :callBack="callbackFun"
        :max="2"
      >
          <k-radio
            label="sdgfdgfhfhdg"
            :v-img="img01"
          >
          </k-radio>
          <k-radio
            label="test002"
            :v-img="img02"
          >
          </k-radio>
          <k-radio
            label="test002"
            :v-img="img01"
          >
          </k-radio>
          <k-radio
            label="test002"
            :v-img="img02"
          >
          </k-radio>
      </k-radiogroup>
  </div>
</template>

<script>
import KRadio from "./radio/radio.vue"
import KRadiogroup from "./radio/radioGroup.vue"
export default {
  components: {
    KRadio,
    KRadiogroup
  },
  name: 'single',
  data () {
    return {
      img01:"https://cdn.3vshow.com/upload/image/site/web/blackLogo.png",
      img02:"https://cdn.3vshow.com/upload/image/site/web/al-1.png",
    }
  },
  methods:{
    callbackFun(val) {
      console.log(val)
    },
  },
  mounted(){
   
  },
}
</script>


