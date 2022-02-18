import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter);

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function (location, resolve, reject) {
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
        () => {
        },
        () => {
        }
    );
  }
};
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
        this,
        location,
        () => {
        },
        () => {
        }
    );
  }
};

let router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    return {y: 0}
  }
});

//全局守卫
router.beforeEach(async (to, from, next) => {
  next();
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    //用户已经登录
    if (to.path == '/login') {
      next('/home')
    } else {
      if (name) {
        next()
      } else {
        //全局派发获取用户信息的action
        try {
          await store.dispatch('getUserInfo');
          next()
        } catch (e) {
          //清除token
          await store.dispatch('userLogout');
          next('/login')
        }
      }
    }
  } else {
    //未登录不能去交易相关，支付相关pay|paysuccess,center   应该跳转至登陆页   search home shopcart
    let toPath = to.path;
    if (toPath == '/trade' || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      next('/login?redirect=' + toPath)
    } else {
      next()
    }

  }
})
export default router





























