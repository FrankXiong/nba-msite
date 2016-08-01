import Article from '../model/article'

exports default {
  getArticleList:(req,res) => {
    let queryStr = res.query
    Article.findByPage(query,(results,err) => {
      if(err){
        console.log(err)
      }else{
        res.json(results)
      }
    })
  }
}
