import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Admin from "../views/AdminView.vue";

import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.isAuth == true) {
        next("/admin");
      } else {
        next();
      }
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (store.state.isAuth == false || store.state.isAuth == null) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
