import requests from "./request";
import mockRequests from "./mockAjax";

//三级联动的接口
//api/product/getBaseCategoryList  GET 无参数
export const reqCategoryList = ()=>{
  return  requests({
    url:'product/getBaseCategoryList',
    method:'get'
  })
}
export const reqGetBannerList = ()=>{
  return mockRequests({
    url:'/banner'
  })
}
export const reqFloorList = ()=>{
  return mockRequests({
    url:'/floor'
  })
}