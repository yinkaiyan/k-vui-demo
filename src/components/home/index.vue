
<style scoped lang="less">
@import "../../assets/style.less";
</style>
<template>
  <div class="dt-index">
    <time-page
      :time="100"
      :callback="callbackFun"
    ></time-page>
    <div class="test-paper">
      <div class="test-paper-title">
        试卷标题
      </div>
      <div class="test-paper-content">
        <div class="test-paper-list">
          <k-radiogroup 
            :value="2"
            :callBack="callbackFun"
            :max="2"
            title="回家看韩剧看dh觉得很简单俄计划范儿和巨额花费金额恩和人家饿的空间俄将获得健康"
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
              :v-img="img03"
            >
            </k-radio>
            <k-radio
              label="test002"
              :v-img="img02"
            >
            </k-radio>
            <k-radio
              label="test002"
            >
            </k-radio>
          </k-radiogroup>
        </div>
        <div class="test-paper-list">
          <k-radiogroup 
            :value="2"
            :callBack="callbackFun"
            :max="2"
            title="回家看韩剧看dh觉得很简单俄计划范儿和巨额花费金额恩和人家饿的空间俄将获得健康"
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
              label="test002"
            >
            </k-radio>
            <k-radio
              label="test002"
            >
            </k-radio>
            <k-radio
              label="test002"
            >
            </k-radio>
          </k-radiogroup>
        </div>
      </div>
      
    </div>


    <div v-transfer-dom>
      <confirm v-model="show"
      title="考试时间结束,请确认交卷"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">考试时间结束,请确认交卷</p>
      </confirm>
    </div>
  </div>
</template>
<script>
import timePage from '../assembly/time';
import KRadio from "../assembly/radio/radio.vue"
import KRadiogroup from "../assembly/radio/radioGroup.vue"

import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components:{
    timePage,
    KRadio,
    KRadiogroup,
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  name: 'index',
  data () {
    return {
      img01:"https://cdn.3vshow.com/upload/image/site/web/blackLogo.png",
      img02:"https://cdn.3vshow.com/upload/image/site/web/al-1.png",
      img03:"https://cdn.3vshow.com/upload/resources/13800000000/image/002.png",
      show:false,
    }
  },
  methods:{
    callbackFun(val){
      console.log(val);
      if(val==true){
        this.show=true;
      }
    },
    onCancel(val){
      console.log(val);
    },
    onConfirm(val){
      console.log(val);
    },
    onShow(val){
      console.log(val);
    },
    onHide(val){
      console.log(val);
    },
  },
  mounted(){
    this.callbackFun();
  },
}
</script>


