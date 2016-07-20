import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import configRouter from './router'
import App from './pages/app.vue'
import './assets/style/reset.scss'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)

router.start(Vue.extend(App), '#app')
window.router = router
