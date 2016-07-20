<template lang="html">
  <div class="container">
    <Head></Head>
    <Gallery></Gallery>
    <ul class="content-list">
      <Item class="" v-for="item in articleList"
        :item="item"
      ></Item>
    </ul>
    <Foot></Foot>
  </div>
</template>

<script type="text/ecmascript-6">
import store from '../vuex/store'
import Head from '../components/header.vue'
import Foot from '../components/footer.vue'
import Item from '../components/item.vue'
import Gallery from '../components/scrollimg.vue'
export default {
  store,
  data: function () {
    return {
      articleList:[
        {id:1,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'photo',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_lsa/0/424743640_685160/0',title:'谁是勇士冠军拼图？十大候选人曝光',desc:'勇士引援十大候选人 大卫李携手前山东旧将上榜'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'},
        {id:2,type:'full',url:'http://xw.qq.com/nba/20160720005542/NBA2016072000554203',thumb:'http://inews.gtimg.com/newsapp_ls/0/424643446_150120/0',title:'姚明忆菜鸟赛季：弗老大教会我侵略性 春节收到1美元红包',desc:'每年的休赛期都有一批新面孔要进入联盟，他们需要尽快适应职业体育，尽快适应NBA。'}

      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    Gallery,Head,Foot,Item
  }
}
</script>

<style lang="scss">
  @import "../assets/style/reset.scss";
</style>
