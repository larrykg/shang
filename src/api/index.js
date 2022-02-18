import requests from "./request";
import mockRequests from "./mockAjax";

//三级联动的接口
//api/product/getBaseCategoryList  GET 无参数
export const reqCategoryList = () => {
  return requests({
    url: 'product/getBaseCategoryList',
    method: 'get'
  })
}
export const reqGetBannerList = () => {
  return mockRequests({
    url: '/banner'
  })
}
export const reqFloorList = () => {
  return mockRequests({
    url: '/floor'
  })
}
//搜索模块的数据 /api/list POST params至少是一个空对象
export const reqGetSearchInfo = (params) => {
  return requests({
    url: '/list',
    method: 'post',
    data: params
  })
}

//商品信息
export const reqGoodsInfo = (skuId) => {
  return requests({
        url: `/item/${skuId}`,
        method: 'get'
      }
  )
}

//添加到购物车的\\更新数量
export const reqAddCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}

//获取购物车列表数据  /api/cart/cartList
export const reqCarList = () => {
  return requests({
    url: '/cart/cartList',
    method: 'get'
  })
}

//删除购物车
///api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })
}

//修改商品的选中状态
export const reqChangeCartStatus = (skuId, isChecked) => {
  return requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
  })
}

//获取验证码  /api/user/passport/sendCode/{phone}
export const reqPhoneCode = (phone) => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
}

//用户注册 /api/user/passport/register
export const reqUserRegister = (data) => {
  return requests({
    url: `/user/passport/register`,
    data,
    method: 'post'
  })
}

// 登录 /api/user/passport/login
export const reqLogin = (data) => {
  return requests({
    url: '/user/passport/login',
    data,
    method: 'post'
  })
}

//获取用户信息 ：利用token api/user/passport/auth/getUserInfo
export const reqTokenLogin = () => {
  return requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
  })
}

//退出登录 /api/user/passport/logout
export const reqLogout = () => {
  return requests({
    url: '/user/passport/logout',
    method: 'get'
  })
}

//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => {
  return requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
  })
}

//获取结算商品清单 /api/order/auth/trade
export const reqOrderInfo = () => {
  return requests({
    url: '/order/auth/trade',
    method: 'get'
  })
}

//提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => {
  return requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post'
  })
}

//订单支付信息 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => {
  return requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
  })
}

//获取支付订单状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => {
  return requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
  })
}

//获取个人中心（我的订单）数据 /api/order/auth/{page}/{limit}
export const reqMyOrderList = (page, limit) => {
  return requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
  })
}