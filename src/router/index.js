import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index' // 项目首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
