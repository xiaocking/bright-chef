// 这是我store的代码
import { Commit } from "vuex";

interface Iparams {
  [propName: string]: any;
}

const state: Iparams = {
  menulist: [],
  hasMessage: true,
  hasAlarm: false,
  dataOrMap: false
};

const mutations: Iparams = {
  saveMenuList(state: Iparams, params: object) {
    state.menulist = params;
  },
  changeMode(state: Iparams, num: number) {
    state.dataOrMap = num === 1 ? false : true;
  }
};

const actions: Iparams = {
  saveMenuListFN(context: { commit: Commit }, params: object) {
    context.commit("saveMenuList", params);
  }
};

export default {
  namespaced: false, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state,
  mutations,
  actions
};
