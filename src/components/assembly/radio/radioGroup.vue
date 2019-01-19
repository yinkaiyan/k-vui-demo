<template>
  <div class="k-checkboxgroup">
    <slot></slot>
  </div>
</template>
<script>
import { parentMix } from "./index"
export default {
  mixins: [parentMix],
  name:"k-radiogroup",
  props: {
   value:Number,
   callBack:Function,
  },
  data () {
    return {
      Arr:[],
    }
  },
  methods:{
    
  },
  computed: {
   
  },
  mounted(){
   this.List();
  },
}
</script>
<style scoped>

</style>