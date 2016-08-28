<template lang="html">
  <header>
      <h1 class="logo">
        <a v-link="{name:'home'}"><img src="../assets/img/logo.png" alt="logo"/></a>
        <span class="gochannels"></span>
      </h1>
  </header>
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

<style language="sass" scoped>
  header{
    background:url('../assets/img/headerbg.png') 139px top no-repeat;
    background-size: 141px 44px;
  }
  .logo{
    padding: .5rem;
    margin: 0;
  }
  img{
    display: inline-block;
    width: 120px;
    height: 30px;
  }

</style>
