import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Restaurant from "@/views/Restaurant.vue";
import User from "@/views/User";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/restaurant/:id",
    name: "Restaurant",
    component: Restaurant,
  },
  {
    path: "/user/:currentUserID",
    name: "User",
    component: User,
    props: (route) => {
      return { currentUserID: route.params.currentUserID };
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
