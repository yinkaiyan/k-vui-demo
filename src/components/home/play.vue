<template>
  <div>
    <div v-transfer-dom>
      <popup v-model="show1" height="100%">
        <div class="popup1">
          <group>
            <x-switch title="Another XSwitcher" v-model="show1"></x-switch>
          </group>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup, Group, XSwitch } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    XSwitch,
  },
  data () {
    return {
      show1: true,
    }
  },
  methods: {
    log (str) {
      console.log(str)
    }
  },
  watch: {
    show10 (val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.popup1 {
  width:100%;
}
</style>