<template lang="html">
  <div class="comment">
    <h2>热门评论</h2>
    <ul class="comment-list">
      <li class="comment-item" v-for="item in CommentList">
        <div class="meta">
          <span class="from">{{item.from}}</h3>
            <span class="time">{{item.time | timeStampToSecondFormat}}</span>
          </div>
          <p class="content">{{item.content}}</p>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data: function () {
    return {
      // total_count:this.comments.total_count
    }
  },
  computed: {
    CommentList(){
      return this.comments.comments_list
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {},
  props:{
    comments:Object
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/variables.scss";
  .comment{
    border-top: 2px solid $blue;
    h2{
      color: $blueTextColor;
      line-height: 150%;
      padding: 10px;
    }
    .comment-item{
      border-top: 1px solid $lightGrey;
      padding: 10px;
      .meta{
        color:$grey;
        padding-bottom: 8px;
        .time{
          float: right;
        }
      }
    }
  }
</style>
