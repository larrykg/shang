import {reqAddressInfo, reqOrderInfo} from '@/api'

const state = {
  addressInfo: [],
  orderInfo: []
};
const mutations = {
  GETUSERADDRESS(state, data) {
    state.addressInfo = data
  },
  GETORDERINFO(state, data) {
    state.orderInfo = data
  }
};
const actions = {
  //获取用户地址信息
  async getUserAddress({commit}) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit('GETUSERADDRESS', result.data)
    }
  },
  //获取结算商品清单
  async getOrderInfo({commit}) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit('GETORDERINFO', result.data)
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