// 这是我store的代码
import { Commit } from "vuex";

const state = {
  menulist: [],
  hasMessage: true,
  hasAlarm: false,
  dataOrMap: false,
  actGisNavIndex: 1,
};

const mutations = {
  saveMenuList(state: { menulist: object }, params: object) {
    state.menulist = params;
  },
  changeMode(state: { dataOrMap: boolean }, num: number) {
    state.dataOrMap = num === 1 ? false : true;
  },
  changeGisNav(state: { actGisNavIndex: number }, num: number) {
    state.actGisNavIndex = num;
  },
};

const actions = {
  saveMenuListFN(context: { commit: Commit }, params: object) {
    context.commit("saveMenuList", params);
  },
};

export default {
  namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state,
  mutations,
  actions,
};
