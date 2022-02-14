import {reqGoodsInfo, reqAddCart} from '@/api'
import {getUUID} from '@/utils/uuid'
const state = {
  goodInfo: {},
  //游客的临时身份
  uuid_token:getUUID()
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
  },
  //添加至购物车||更新数量
  async addShopCart({commit}, {skuId, skuNum}) {
    let res = await reqAddCart(skuId, skuNum);
    console.log(res);
    if (res.code == 200) {
      return 'OK'
    } else {
      //加入购物车失败
      return Promise.reject(new Error('faile'))
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