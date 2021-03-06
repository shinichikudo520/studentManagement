import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import uploadInfo from '@/components/uploadInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
        path: '/uploadInfo',
        name: 'uploadInfo',
        component: uploadInfo
      }
  ]
})
