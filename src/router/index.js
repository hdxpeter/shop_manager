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
router.beforeEach((to,from,next)=>{
  //t将要访问的路径
  //from代表从那个路径跳转而来
  //next 是一个函数，表示放行
  if(to.path==='/login'){
    return next()
  }
 const tokenStr=window.sessionStorage.getItem('token')
  if(tokenStr){
    return next()
  }else{
    return next('/login')
  }
})
export default router
