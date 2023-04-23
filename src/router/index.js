import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Restaurant from "@/views/Restaurant.vue";
import User from "@/views/User";
import Register from "@/views/Register.vue";
import Connexion from "@/views/Connexion.vue";

const routes = [
  {
    path: "/login/google",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
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
