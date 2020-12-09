import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialsList.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/Tutorial.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: () => import("@/components/Profile.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/components/BoardAdmin.vue"),
  },
  {
    path: "/mod",
    name: "moderator",
    component: () => import("@/components/BoardModerator.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/components/BoardUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
