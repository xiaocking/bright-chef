import Vue from "vue";
import VueRouter from "vue-router";
// import Entrance from "../views/Entrance.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Entrance",
  //   component: Entrance
  // },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
