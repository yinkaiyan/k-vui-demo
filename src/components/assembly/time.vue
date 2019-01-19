
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="time-page">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'timepage',
  props:{
    time:Number,
    callback:Function,
  },
  data () {
    return {
      value:"00小时:00分钟:00秒",
      timer:0,
    }
  },
  methods:{
    countDown :function(times){
        var self=this;
        this.timer=setInterval(function(){
            var day=0,
            hour=0,
            minute=0,
            second=0;
            if(times > 0){
                day = Math.floor(times / (60 * 60 * 24));
                hour = Math.floor(times / (60 * 60)) - (day * 24);
                minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            self.value=hour+"小时:"+minute+"分钟:"+second+"秒";
            times--;
            if(times<0){
                self.callback(true);
                clearInterval(self.timer);
            }else{
                self.callback(false);
            };
        },1000);
    },
  },
  mounted(){
    this.countDown(this.time);
  },
}
</script>


