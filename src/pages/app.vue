<template lang="html">
  <div>
    <head-bar></head-bar>
    <router-view
      transition
      transition-mode="out-in"
      keep-alive="true"
    ></router-view>
    <foot></foot>
  </div>
</template>

<script type="text/ecmascript-6">
import HeadBar from '../components/header.vue'
import Foot from '../components/footer.vue'
import ajax from '../api/index'
export default {
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
  },
  components: {
    HeadBar,Foot
  }
}
</script>

<style lang="scss">
  @import "../assets/style/reset.scss";
  @import "../assets/style/common.scss";
</style>
