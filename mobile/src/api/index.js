import Resource from './resource'

const BASE_URL = 'http://localhost:8080/src/data/'

export default {
  getArticleList:(params)=>{
    return Resource.get(BASE_URL+'articles.json')
  },
  getNavList:(params)=>{
    return Resource.get(BASE_URL+'navs.json')
  },
  getScrollImgList:(params)=>{
    return Resource.get(BASE_URL+'scrollimg.json')
  },
  getArticleInfo:(params)=>{
    return Resource.get(BASE_URL+'article.json')
  }
}
