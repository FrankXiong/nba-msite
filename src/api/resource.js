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
    if(data.code == 200){
      console.log(data.msg);
      return data.data;
    }else{
      return {
        "ok":false,
        "msg":"error"
      }
    }
  }
})

export default Vue.http;
