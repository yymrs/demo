import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "about" */ './views/mine.vue')
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: () => import(/* webpackChunkName: "about" */ './views/fenlei.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import(/* webpackChunkName: "about" */ './views/shopping.vue')
    },
    {
      path: '/yougou',
      name: 'yougou',
      component: () => import(/* webpackChunkName: "about" */ './views/yougou.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue')
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: () => import(/* webpackChunkName: "about" */ './views/loginuser.vue')
    },
  ]
})
