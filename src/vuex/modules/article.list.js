import {
  REQUEST_ARTICLE_LIST,
  ARTICLE_LIST,
  GET_ARTICLE_LIST_FAILURE,
  ADD_ARTICLE_LIST
} from '../type'

const state = {
  isFetching: false,
  isMore: true,
  items: []
}

const mutations = {
  [REQUEST_ARTICLE_LIST](state){
    state.isFetching = true
  },
  [ARTICLE_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.articleList
  },
  [GET_ARTICLE_LIST_FAILURE](state){
    state.isFetching = false
  },
  [ADD_ARTICLE_LIST](state,action){
    state.isFetching = false
    state.isMore = action.isMore
    // ...扩展运算符，将数组展开为用逗号隔开的值
    state.items = [...state.items, ...action.articleList]
  }
}

export default {
  state,
  mutations
}
