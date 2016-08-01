import Resource from './resource'

const BASE_URL = '/src/data/'

export default {
  getArticleList:()=>{
    return Resource.get(BASE_URL+'articles.json')
  },
  getArticleDetail:(params) => {
    return Resource.get(BASE_URL+'article.json')
  },
  getNavList:(params)=>{
    return Resource.get(BASE_URL+'navs.json')
  },
  getScrollImgList:(params)=>{
    return Resource.get(BASE_URL+'scrollimg.json')
  }
}
