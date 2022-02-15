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

