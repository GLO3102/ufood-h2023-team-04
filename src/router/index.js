import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Restaurant from "../views/Restaurant";
import User from "@/views/User";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: Restaurant,
  },
  {
    path: "/user/:currentUserID",
    name: "User",
    component: User,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
