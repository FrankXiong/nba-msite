<template lang="html">
  <div>
    <li class="content-item" v-if="item.type === 'full'" @click="goToDetailPage(item.id)">
      <div class="content-item-{{item.type}}">
        <div class="thumb">
          <img src="{{item.thumb}}" alt="" />
        </div>
        <h2>{{item.title}}</h2>
        <p>{{item.desc}}</p>
      </div>
    </li>
    <li class="content-item" v-if="item.type === 'photo'" @click="goToDetailPage(item.id)">
      <div class="content-item-{{item.type}}">
        <h2>{{item.title}}</h2>
        <div class="thumb" v-bind:style="imgStyle"></div>
        <p>{{item.desc}}<span class="count icon-comments">
          333
        </span></p>
      </div>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data: function () {
    return {
    }
  },
  computed: {
    imgStyle(){
      return {
        backgroundImage:'url('+this.item.thumb+')'
      }
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    goToDetailPage(id){
      this.$route.router.go({
        name:'detail',
        params:{
          id:id
        }
      })
    }
  },
  components: {},
  props:{
    item:Object
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";
@import "../assets/style/mixin.scss";
@import "../assets/style/font-awesome.css";
.content-item{
  padding:10px;
  border-bottom: 1px solid $lightGrey;
  .content-item-photo{
    h2{
      height: 35px;
      line-height: 35px;
      font-size: .9375em;
      @include textOverflow;
    }
    .thumb{
      @include fixBannerSize;
    }
    p{
      padding: 5px 0 0;
      line-height: 17px;
      font-size: .8125em;
      color: #878c92;
    }
    .count{
      height: 17px;
      line-height: 17px;
      text-align: right;
      float: right;
      font-size: .6875em;
      color: #878c92;
      i{

      }
    }
  }
  .content-item-full{
    .thumb{
      width: 75px;
      height: 55px;
      line-height: 51px;
      padding: 1px;
      background: #e9f1f4;
      border: 1px solid #e0e0e0;
      float: left;
      text-align: center;
      img{
        display: inline-block;
        max-height: 100%;
      }
    }
    h2{
      height: 22px;
      line-height: 22px;
      font-size: .9375em;
      padding-left: 5px;
      margin-bottom: 4px;
      @include textOverflow;
    }
    p{
      padding-left: 5px;
      line-height: 17px;
      font-size: .8125em;
      max-height: 34px;
      color: #878c92;
      overflow: hidden;
    }
  }
}
</style>
