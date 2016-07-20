import App from './pages/app.vue'
import MainPage from './pages/main.vue'
import DetailPage from './pages/detail.vue'

export default function (router) {
  router.map({
    '/':{
      component:App
    },
    '/:id':{
      component:DetailPage
    },
    '*':{
      component:App
    }
  })
}
