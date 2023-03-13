<template>
  <v-container>
    <RestaurantItem
      v-for="(restaurant, index) in restaurants"
      :address="restaurant.address"
      :genres="restaurant.genres"
      :key="index"
      :name="restaurant.name"
      :price_range="restaurant.price_range"
      :rating="restaurant.rating"
      :tel="restaurant.tel"
      :id="restaurant.id"
    ></RestaurantItem>
  </v-container>
</template>

<script setup>
import RestaurantItem from "@/components/home/RestaurantItem.vue";

defineProps({ restaurants: Object });
</script>

<style scoped></style>
