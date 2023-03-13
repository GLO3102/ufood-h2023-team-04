<script setup>
import Restaurants from "@/components/home/Restaurants.vue";
import { getRestaurants } from "@/composable/UseRestaurant";
import { ref } from "vue";
import FilterRestaurants from "@/components/home/FilterRestaurants.vue";

const json = ref(null);
const isloaded = ref(false);
let resoFiltered = ref(null);

const fetchData = async () => {
  const data = await getRestaurants();
  json.value = data.items;
  isloaded.value = true;
  resoFiltered.value = json.value;
};

const restaurantsFiltered = function (filteredRestaurants) {
  resoFiltered.value = filteredRestaurants;
};

fetchData();
</script>

<template>
  <div>
    <FilterRestaurants
      @filtering="restaurantsFiltered"
      v-if="isloaded"
      :restaurants="json"
    ></FilterRestaurants>
    <Restaurants :restaurants="resoFiltered" v-if="isloaded"></Restaurants>
  </div>
</template>

<style></style>
