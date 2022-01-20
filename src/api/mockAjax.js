import axios from "axios";
//进度条
import  nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'

const mockRequests = axios.create({
  baseURL:'/mock',
  timeout:5000
})
//请求拦截器
mockRequests.interceptors.request.use((config)=>{
  // config 有header很重要
  nprogress.start()
  return config
});

//响应拦截器
mockRequests.interceptors.response.use((res)=>{
  nprogress.done();
  return res.data
},(err)=>{
  return Promise.reject(new Error('faile'))
})
export default mockRequests