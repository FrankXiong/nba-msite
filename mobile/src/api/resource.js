import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.interceptors.push({
  request(req){
    // deal with request...
    return req
  },
  response(res){
    const data = res.data
    // do something...
    return data;
  }
})

export default Vue.http;
