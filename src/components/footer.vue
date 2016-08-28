<template lang="html">
  <footer>
    <div class="footernav">
      <ul>
        <li class="link-item" v-for="item in links">
          <a href="#">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      Copyright © 1998 - 2016 Tencent. 腾讯科技（北京）有限公司 All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      links:[
        {name:'首页',url:'#'},
        {name:'新闻',url:'#'},
        {name:'首页',url:'#'},
        {name:'新闻',url:'#'},
        {name:'首页',url:'#'},
        {name:'新闻',url:'#'},
        {name:'首页',url:'#'},
        {name:'新闻',url:'#'},
        {name:'首页',url:'#'},
        {name:'新闻',url:'#'}
      ]
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
  @import "../assets/style/reset.scss";
  @import "../assets/style/variables.scss";
  footer{
    background: $lightBlack;
    .footernav{
      ul{
        background: $deepGrey;
        width: 100%;
        padding: 1rem;
        overflow: hidden;
        .link-item{
          float: left;
          width: 20%;
          height: 28px;
          line-height: 28px;
          a{
            color:$grey;
          }
        }
      }
    }
    .copyright{
      font-size: .5em;
      color:$grey;
      padding: .5rem 1rem;
      line-height: 1.5em;
    }
  }
</style>
