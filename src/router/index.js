import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Search from '@/views/search/Search'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'

Vue.use(VueRouter);

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
        this,
        location,
        () => {},
        () => {}
    );
  }
};
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
        this,
        location,
        () => {},
        () => {}
    );
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/home'
  },

  {
    path: '/home',
    component: Home,
    meta: {show: true}
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: {show: true},
    name: 'search',
    // 可不可以传递props数据 1  布尔值写法
    // props:true
    //2对象写法 额外传递
    // props:{a:2,b:3}
    //  3 函数写法
    // props: ($route) => {
    //   return {keyword: $route.params.keyword, k: $route.query.k}
    // }
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
