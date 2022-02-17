import Home from '@/views/home/Home'
import Search from '@/views/search/Search'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'
import Detail from "@/views/detail/Detail";
import AddCartSuccess from "@/views/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/views/ShopCart/ShopCart";
import Trade from "@/views/Trade/Trade";
import Pay from "@/views/Pay/Pay";
import PaySuccess from '@/views/PaySuccess/PaySuccess';
import Center from "@/views/Center/Center";
//引入二级路由
import MyOrder from "@/views/Center/myOrder/MyOrder";
import GroupOrder from "@/views/Center/groupOrder/GroupOrder";

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home'
  },
  {
    path: '/center',
    name: 'center',
    component: Center,
    meta: {show: true},
    //二级路由
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path:'/center',
        redirect:'/center/myorder'
      }
    ]
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    component: PaySuccess,
    meta: {show: true}
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: {show: true}
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
    meta: {show: true}
  },
  {
    path: '/trade',
    name: 'trade',
    component: Trade,
    meta: {show: true}
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: {show: true}
  },
  {
    path: '/home',
    component: Home,
    meta: {show: true}
  },
  {
    path: '/detail/:skuId',
    component: Detail,
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