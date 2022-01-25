import {reqGetSearchInfo} from "@/api";
// search 模块自有仓
const state = {
  searchInfo: {}
};
const mutations = {
  GETSEARCHINFO(state, payload) {
    state.searchInfo = payload
  }
};
const actions = {
  async getSearchInfo({commit}, params={}) {
    console.log(params);
    let res = await reqGetSearchInfo(params);
    console.log(res);
    if (res.code == 200) {
      commit('GETSEARCHINFO', res.data)
    }
  }
};
//getters的主要作用是 简化仓库中的数据
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList || []
  },
  tradeMarkList(state) {
    return state.searchInfo.trademarkList || []
  },
  attrsList(state) {
    return state.searchInfo.attrsList || []
  }
};
export default {
  state,
  mutations,
  actions,
  getters
}