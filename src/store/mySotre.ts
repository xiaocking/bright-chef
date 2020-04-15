// 这是我store的代码
import { Commit } from "vuex";

const state = {
  menulist: [],
  hasMessage: true,
  hasAlarm: false,
  dataOrMap: false,
  actGisNavIndex: 1,
  mapCoverInfo: undefined,
  mapClickInfo: undefined,
  coverClickInfo: undefined,
  detailsId: 0
};

const mutations = {
  saveMenuList(state: { menulist: object }, params: object) {
    state.menulist = params;
  },
  changeMode(
    state: { dataOrMap: boolean; actGisNavIndex: number },
    num: number
  ) {
    state.dataOrMap = num === 1 ? false : true;
    state.actGisNavIndex = 1;
  },
  changeGisNav(state, num: number) {
    state.mapCoverInfo = undefined;
    state.mapClickInfo = undefined;
    state.coverClickInfo = undefined;
    state.actGisNavIndex = num;
  },
  clearGisCoverInfo(state) {
    state.mapCoverInfo = undefined;
    state.mapClickInfo = undefined;
    state.coverClickInfo = undefined;
  },
  changeMapClickInfo(state, obj) {
    state.mapClickInfo = obj;
  },
  changeCoverClickInfo(state, obj) {
    state.coverClickInfo = obj;
  },
  setMapCoverInfo(state) {
    state.mapCoverInfo = new Date().getTime();
  },
  setDetailsId(state, num) {
    if (num) {
      state.detailsId = num;
    } else {
      state.detailsId = 0;
    }
  }
};

const actions = {
  saveMenuListFN(context: { commit: Commit }, params: object) {
    context.commit("saveMenuList", params);
  }
};

const getters = {
  mapClickInfo(state) {
    return state.mapClickInfo;
  }
};

export default {
  namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state,
  mutations,
  actions,
  getters
};
