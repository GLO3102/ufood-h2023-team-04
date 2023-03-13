<template>
  <div
    class="flex justify-center text-left mt-1 rounded-md shadow-sm bg-neutral-800"
  >
    <v-container class="w-80 space-y-1 text-neutral-100 m-3">
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
  </div>
</template>

<script setup>
import RestaurantItem from "@/components/home/RestaurantItem.vue";

defineProps({ restaurants: Object });
</script>

<style scoped></style>
