import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home";
import Restaurant from "@/views/Restaurant.vue";
import User from "@/views/User";
import VisitedRestaurants from "@/components/VisitedRestaurants.vue";

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
  {
    path: "/restaurantVisits",
    name: "VisitedRestaurant",
    component: VisitedRestaurants,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
