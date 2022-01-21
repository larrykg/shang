// home模块自有仓
import {reqCategoryList, reqGetBannerList, reqFloorList} from '@/api'

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList.splice(0, 16)
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList
  }
};
const actions = {
  async categoryList({commit}) {
    //向服务器发请求获取数据
    let res = await reqCategoryList()
    if (res.code == 200) {
      commit('CATEGORYLIST', res.data)
    }
  },
  async getBannerList({commit}) {
    let res = await reqGetBannerList();
    if (res.code == 200) {
      commit('BANNERLIST', res.data)
    }
    console.log(res);
  },
  async getFloorList({commit}) {
    let res = await reqFloorList();
    if (res.code == 200) {
      commit('FLOORLIST', res.data)
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