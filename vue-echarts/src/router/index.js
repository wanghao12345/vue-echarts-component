import Vue from "vue";
import Router from "vue-router";
import Home from "../page/Home";
import MonitorScreen from "../page/MonitorScreen";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/monitor-screen",
      name: "MonitorScreen",
      component: MonitorScreen
    }
  ]
});
