import Vue from "vue";
import VueRouter from "vue-router";

import routerLayout from "../lib/routerLayout.js";
// import Entrance from "../views/Entrance.vue";
import Home from "../views/Home.vue";

import dataHome from "../views/pages/Data/dataHome.vue";
import gisHome from "../views/pages/Gis/gisHome.vue";

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
    component: Home,
    redirect: "/dataHome",
    children: [
      {
        path: "/dataHome",
        name: "dataHome",
        component: dataHome,
        children: routerLayout.dataRouterArr,
      },
      {
        path: "/gisHome",
        name: "gisHome",
        component: gisHome,
        children: routerLayout.gisRouterArr,
      },
    ],
  },
];

const router = new VueRouter({
  // mode: "history",
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
