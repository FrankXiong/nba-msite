import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './router'
import {timeStampToCNTimeFormat,timeStampToSecondFormat} from './filter'
import App from './pages/app.vue'
import './assets/style/reset.scss'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('timeStampToCNTimeFormat', timeStampToCNTimeFormat);
Vue.filter('timeStampToSecondFormat', timeStampToSecondFormat);


const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)

router.start(Vue.extend(App), '#app')
window.router = router
