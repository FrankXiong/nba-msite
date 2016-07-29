import {
	ARTICLE_DETAIL
} from '../type'

const state = {
  item:{}
}

const mutations = {
  [ARTICLE_DETAIL](state,action){
    state.item = {...state.item, ...action.articleDetail }
  }
}

export default {
  state,
  mutations
}
