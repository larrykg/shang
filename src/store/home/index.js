// home模块自有仓
import {reqCategoryList,reqGetBannerList} from '@/api'

const state = {
  categoryList: [],
  bannerList:[]
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList.splice(0, 16)
  },
  BANNERLIST(state,bannerList){
    state.bannerList = bannerList
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
  async getBannerList({commit}){
    let res= await reqGetBannerList();
    if(res.code==200){
      commit('BANNERLIST',res.data)
    }
    console.log(res);
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}