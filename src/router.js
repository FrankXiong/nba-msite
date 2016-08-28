import App from './pages/app.vue'
import MainPage from './pages/main.vue'
import DetailPage from './pages/detail.vue'
import NoFoundPage from './pages/nofound.vue'

export default function (router) {
  router.map({
    '/':{
      name:'home',
      component:MainPage
    },
    '/article/:id':{
      name:'detail',
      component:DetailPage
    },
    '*':{
      component:NoFoundPage
    }
  })
}
