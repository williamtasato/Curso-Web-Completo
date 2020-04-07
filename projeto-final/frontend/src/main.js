import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store  from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IldpbGxpYW0gRy4gVGFzYXRvIiwiZW1haWwiOiJ3aWxsaWFtQGNpc2lzdGVtYXMuY29tLmJyIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4NjEzNzQ0OSwiZXhwIjoxNTg2Mzk2NjQ5fQ.yW_zp_fpNS9Bi11dnDwQZUO5Ixp7HQ6zJIofe_lVmiM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')