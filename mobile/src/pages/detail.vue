<template>
  <div class="container">
    <div class="header">
      <h1 class="title">{{title}}</h1>
      <div class="meta">
        <span class="time">{{publish_time | timeStampToCNTimeFormat}}</span>
        <span class="author">{{author}}</span>
        <span class="comment_count icon-comments">{{commentCount}}</span>
      </div>
    </div>
    <div class="content">
      <div class="headimg" v-bind:style="headimgStyle"></div>
      <p>
        {{content}}
      </p>
    </div>
    <div class="share">
      <label>分享到：</label>
      <div class="share-btn-group">
        <span class="share-btn share-qzone icon-twitter-sign"></span>
        <span class="share-btn share-weibo icon-facebook-sign"></span>
        <span class="share-btn share-wx icon-google-plus-sign"></span>
      </div>
    </div>
    <comment :comments="comments"></comment>
  </div>
</template>

<script type="text/ecmascript-6">
  import ajax from '../api/index'
  import comment from '../components/comment'
  export default {
    components:{
      comment
    },
    data:function(){
      return {
        id:1,
        title:'',
        author:'',
        publish_time:1469774953238,
        headimg:'',
        content:'',
        commentCount:0,
        comments:[]
      }
    },
    computed:{
      headimgStyle(){
        return {
          backgroundImage: 'url(' + this.headimg + ')'
        }
      }
    },
    created(){
      this.loadData()
    },
    methods:{
      loadData(){
        ajax.getArticleDetail({id:this.id}).then((res) => {
          console.log(res.msg)
        },(res)=>{
            this.title=res.title
            this.author=res.author
            this.publish_time=res.publish_time
            this.headimg=res.headimg
            this.content=res.content
            this.commentCount=res.comments.total_count
            this.comments = res.comments
        })
      }
    },
    route:{
      data({to}){
        this.id = to.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/variables.scss";
  @import "../assets/style/mixin.scss";
  @import "../assets/style/font-awesome.css";

  .header{
    padding: .5rem;
    .title{
      line-height: 26px;
    }
    .meta{
      padding: 10px 0;
      color:$grey;
      .comment_count{
        float: right;
      }
    }
  }
  .content{
    border-bottom: 1px solid $lightGrey;
    .headimg{
      @include fixBannerSize;
    }
    p{
      padding: 10px;
      line-height: 150%;
      text-indent: 2em;
    }
  }
  .share{
    padding: 10px;
    label{
      display: inline-block;
      line-height: 22px;
      vertical-align: top;
    }
    .share-btn-group{
      display: inline-block;
      .share-btn{
        width: 22px;
        height: 22px;
        display: inline-block;
        font-size: 22px;
        margin-right: 5px;
      }
      .icon-twitter-sign{
        color: $blue;
      }
      .icon-fackbook-sign{
        color: $deepBlue;
      }
      .icon-google-plus-sign{
        color:$red;
      }
    }
  }

</style>
