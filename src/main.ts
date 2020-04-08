import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import globelComponents from "./lib/globalComponents.js"; // 全局注册公共组件
Vue.use(globelComponents);

import Element from "element-ui";
import "./lib/css/element-variables.scss";

Vue.use(Element, { size: "small" });




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
