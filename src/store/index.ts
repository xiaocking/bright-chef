// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     hasMessage: true,
//     hasAlarm: false
//   },
//   mutations: {},
//   actions: {},
//   modules: {}
// });

// 这是我导出 store的代码
import Vue from "vue";
import Vuex from "vuex";
import myStore from "./mySotre";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    myStore
  }
});
