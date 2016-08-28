import ajax from '../api'
import * as types from './type'

export const changeParams = ({ dispatch },params) => {
  dispatch(types.CHANGE_PARAMS, { params: params })
}

export const getArticleList = ({dispatch},params,isAdd) => {
  dispatch(types.REQUEST_ARTICLE_LIST)
  ajax.getArticleList(params).then(res => {
    if(!res.ok){
      return dispatch(types.GET_ARTICLE_LIST_FAILURE)
    }
    const data = res.data
    const isMore = (data.datas.length > params.pageSize)
    console.log(data)
    isAdd
    ?dispatch(types.ADD_ARTICLE_LIST,{
      articleList:data.datas,
      isMore:isMore
    }):dispatch(types.ARTICLE_LIST,{
      articleList:data.datas,
      isMore:isMore
    })
  },res => {
    dispatch(types.GET_ARTICLE_LIST_FAILURE)
  })
}

export const getArticleDetail = ({dispatch},params) => {
  ajax.getArticleDetail(params).then(res => {
    if(res.ok){
      let data = res.data
      dispatch(types.ARTICLE_DETAIL,{
        articleDetail:{...data}
      })
    }
  },res => {
    console.log('Fail to getArticleDetail');
  })
}
