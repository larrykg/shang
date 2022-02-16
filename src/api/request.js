import axios from "axios";
//进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css';

import store from '@/store';

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})
//请求拦截器
requests.interceptors.request.use((config) => {
  // config 有header很重要
  nprogress.start();
  if (store.state.detail.uuid_token) {
    //请求头添加字段 约定好
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //将token传给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  return config
});

//响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done();
  return res.data
}, (err) => {
  return Promise.reject(new Error('faile'))
})
export default requests