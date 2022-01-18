import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Search from '@/views/search/Search'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home,
    meta: {show: true}
  },
  {
    path: '/search/:keyword',
    component: Search,
    meta: {show: true},
    name:'search'
  },
  {
    path: '/login',
    component: Login,
    meta: {show: false}
  },
  {
    path: '/register',
    component: Register,
    meta: {show: false}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
