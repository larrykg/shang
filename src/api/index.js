import requests from "./request";

//三级联动的接口
//api/product/getBaseCategoryList  GET 无参数
export const reqCategoryList = ()=>{
  return  requests({
    url:'product/getBaseCategoryList',
    method:'get'
  })
}