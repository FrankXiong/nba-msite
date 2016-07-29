<template lang="html">
  <mt-swipe :auto="4000" :show-indicators="true">
    <mt-swipe-item class="slide-item" v-for="item in imgs">
      <img src="{{item.url}}" alt="" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script type="text/ecmascript-6">
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data: function () {
    return {
      imgs:[
        {url:"http://inews.gtimg.com/newsapp_ls/0/447540273_640330/0"},
        {url:"http://inews.gtimg.com/newsapp_ls/0/447540273_640330/0"},
        {url:"http://inews.gtimg.com/newsapp_ls/0/447540273_640330/0"}
      ]
    }
  },
  computed: {},
  attached: function () {},
  methods: {},
  components: {
    'mt-swipe':Swipe,
    'mt-swipe-item':SwipeItem
  }
}
</script>

<style lang="scss">
    .swipe {
      height: 200px;
      color: #fff;
      font-size: 20px;
      position: relative;
      .swipe-items-wrap{
        overflow: hidden;
        position: relative;
        height: 100%;
      }
      .swipe-item {
        line-height: 200px;
        width: 100%;
        position: absolute;
        height: 100%;
        img{
          width: 100%;
        }
      }
      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }
      .slide2 {
        background-color: #ffd705;
        color: #000;
      }
      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
    }
    .swipe-indicators {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
    .swipe-indicator {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: #000;
      opacity: .2;
      margin: 0 3px;
      &.active{
        background: white;
      }
    }
</style>
