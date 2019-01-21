
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
          >
          </k-radio>
          <k-radio
            label="test002"
          >
          </k-radio>
          <k-radio
            label="test003"
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
  props:{
    
  },
  data () {
    return {
      
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


