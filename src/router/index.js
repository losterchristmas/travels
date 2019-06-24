import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
