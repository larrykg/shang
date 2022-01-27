import {reqGoodsInfo} from '@/api'

const state = {
  goodInfo: {}
}
const mutations = {
  GETDETAILONFI(state, payload) {
    state.goodInfo = payload
  }
}
const actions = {
  async getGoodInfo({commit}, skuId) {
    let res = await reqGoodsInfo(skuId);
    if (res.code == 200) {
      commit('GETDETAILONFI', res.data)
    }
  }
}
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList() {
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}