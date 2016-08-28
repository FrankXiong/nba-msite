import Vue from 'vue'
import Vuex from 'vuex'
import articleList from './modules/article.list'
import articleDetail from './modules/article.detail'
import params from './modules/params'
// import commentList from './modules/comment.list'

Vue.use(Vuex)
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    articleList,
    articleDetail,
    params
  }
})
