<template lang="html">
  <div class="container">
    <gallery></gallery>
    <ul class="content-list">
      <item class="" v-for="item in articleList"
        :item="item"
      ></item>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Item from '../components/item.vue'
import Gallery from '../components/scrollimg.vue'
import ajax from '../api/index'
export default {
  data: function () {
    return {
      articleList:[]
    }
  },
  created() {
    this.loadData()
  },
  methods: {
      loadData(){
        ajax.getArticleList().then((res) => {
          this.articleList = res.datas
        },(res) => {
          this.articleList = res.datas
        }).finally(() => {
          console.log('load ended');
        })
      }
  },
  components: {
    Gallery,Item
  }
}
</script>

<style lang="scss">
  @import "../assets/style/reset.scss";
</style>
