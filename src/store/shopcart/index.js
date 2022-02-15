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
  },
  //删除全部勾选产品
  deleteAllCheckedCart({dispatch, getters}) {
    //action的第一个参数是context上下文 {}的写法是解构出对应的对象、
    //获取购物车中全部产品
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
      PromiseAll.push(promise)
    });
    //如果全部都成功 但会结果即为成功 如果有一个失败 返回结果即为失败
    return Promise.all(PromiseAll);
  },

  //修改全部产品的选中
  updateAllCartIsChecked({dispatch, state}, isChecked) {
    let PromiseAll = [];
    state.cartList[0].cartInfoList.forEach(item => {
     let promis =  dispatch('reqChangeCartStatus', {skuId: item.skuId, isChecked: isChecked});
     PromiseAll.push(promis)
    });
    return Promise.all(PromiseAll)
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