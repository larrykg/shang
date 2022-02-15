import {reqCarList, reqDeleteCartById, reqChangeCartStatus} from '@/api';

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
  },
  //修改购物车选中状态
  async reqChangeCartStatus({commit}, {skuId, isChecked}) {
    let result = await reqChangeCartStatus(skuId, isChecked);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
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