<template>
  <v-container class="flex flex-col justify-center">
    <RestaurantItem
      v-for="(restaurant, index) in restaurants"
      :address="restaurant.address"
      :genres="restaurant.genres"
      :key="index"
      :name="restaurant.name"
      :price_range="restaurant.price_range"
      :rating="restaurant.rating"
      :tel="restaurant.tel"
      :visited="restaurant.visited"
      :id="restaurant.id"
      class="mt-10"
    ></RestaurantItem>
  </v-container>
</template>

<script setup>
import RestaurantItem from "@/components/home/RestaurantItem.vue";
import VisitedRestaurants from "@/components/VisitedRestaurants.vue";
import {
  getRestaurant,
  getRestaurants,
  getVisitedRestaurentsByUser,
} from "@/composable/UseRestaurant";
import { ref } from "vue";

defineProps({
  restaurants: Object,
});
</script>

<style scoped></style>
