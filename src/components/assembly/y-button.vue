<template>
  <button
    :disabled="disabled"
    :class="setStyle"
    @click="onClick"
  >
    {{text}}
  </button>
</template>
<script>
export default {
  name:"y-button",
  props: {
    text:String,
    disabled:Boolean,
    type:String,
    onClick:Function,
    mini:Boolean,
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  mounted(){
    
  },
  computed: {
    setStyle:function(){
        let type=this.type;
        let mini=this.mini;
        let disabled=this.disabled;
        return [
            //type
            {
                "y-button y-button-dashed":type=="dashed",
                "y-button y-button-info":type=="info",
                "y-button y-button-success":type=="success",
                "y-button y-button-warning":type=="warning",
                "y-button y-button-error":type=="error",
                "y-button y-button-primary":type=="primary"
            },
            //mini
            mini?"y-button-mini":"",
            //disabled
            disabled?"y-button-disabled":"",
        ];
    },
  },
  watch: {
   
  },
}
</script>
<style lang="less" scoped>
.y-button{
    width:100%;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #000;
    line-height: 42px;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
}
.y-button-mini{
    line-height: 28px;
    font-size: 14px;
    border-radius: 5px;
}
.y-button-dashed{
    color: rgba(0, 0, 0, 0.6);
    background-color: #DEDEDE;
}
.y-button-info{
    color: #fff;
    background-color: #2db7f5;
    border-color: #2db7f5;
}
.y-button-success{
    color: #fff;
    background-color: #19be6b;
    border-color: #19be6b;
}
.y-button-warning{
    color: #fff;
    background-color: #f90;
    border-color: #f90;
}
.y-button-error{
    color: #fff;
    background-color: #ed4014;
    border-color: #ed4014;
}
.y-button-primary{
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
}
</style>