import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login'
import home from '../pages/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
