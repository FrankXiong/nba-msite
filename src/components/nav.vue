<template lang="html">
  <nav class="navbar">
    <div class="nav-item">
        NBA
    </div>
    <div class="nav-item">
       赛程
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";
  .navbar{
    background: $blue;
    display: flex;
    .nav-item{
      width: 3rem;
      padding:1rem;
      background: $deepBlue;
      display: inline-block;
    }
  }
</style>
