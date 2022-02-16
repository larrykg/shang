import {reqPhoneCode, reqUserRegister} from '@/api'
import {reqLogin} from "../../api";

const state = {
  code: '',
  token: ''
};
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  }
};
const actions = {
  //获取验证码
  async getCode({commit}, phone) {
    let result = await reqPhoneCode(phone);
    console.log(result);
    if (result.code == 200) {
      commit('GETCODE', result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //用户注册
  async userRegister({commit}, user) {
    let result = await reqUserRegister(user);
    console.log(result);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  //登录
  async userLogin({commit}, data) {
    let result = await reqLogin(data);
    if (result.code == 200) {
      //token是用户唯一标识符 后续网站使用经常需要使用
      commit('USERLOGIN', result.data.token);
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }

};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}