<template>
  <h1>{{title}}</h1>
</template>

<script type="text/ecmascript-6">
  import ajax from '../api/index'
  export default {
    data:{
      id:1,
      title:'',
      author:'',
      publish_time:'2016-07-21',
      headimg:'',
      content:'',
      comments_count:0,
      comments_list:[]
    },
    methods:{
      loadData(){
        ajax.getArticleInfo({id:this.id}).then((res)=>{
            this.title=res.data.title;
            this.author=res.data.author;
            this.publish_time=res.data.publish_time;
            this.headimg=res.data.headimg;
            this.content=res.data.content;
            this.comments_count=res.data.comments_count;
        })
      }
    },
    route:{
      data({to}){
        this.id = to.params.id
      }
    }
  };
</script>

<style language="sass">

</style>
