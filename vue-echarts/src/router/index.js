import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: resolve => require(['../page/Home'], resolve)
    },
    {
      path: "/monitor-screen",
      name: "MonitorScreen",
      component: resolve => require(['../page/MonitorScreen'], resolve)
    }
  ]
});
