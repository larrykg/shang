import {reqCarList, reqDeleteCartById} from '@/api';

const state = {
  cartList: []
};
const mutations = {
  GERCARTLIST(state, cartList) {
    state.cartList = cartList
  }
};
const actions = {
  //获取购物车列表数据
  async getCartList({commit}) {
    let result = await reqCarList();
    console.log(result);
    if (result.code == 200) {
      commit('GERCARTLIST', result.data)
    }
  },
  //删除购物车
  async deleteCartListBySkuId({commit}, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return 'ok'
    } else {
      return 'error'
    }
  }
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
};
export default {
  state,
  mutations,
  actions,
  getters
}