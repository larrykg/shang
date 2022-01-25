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