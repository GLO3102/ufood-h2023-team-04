<template>
  <div>
    <FilterRestaurants
      @filtering="restaurantsFiltered"
      v-if="isloaded"
      :restaurants="json"
    />
    <Pagination
      v-if="isloaded"
      :items="visitedRestoFormate"
      :num-pages="numPages"
      :current-page="currentPage"
      :on-update-current-page="(page) => (currentPage = page)"
    />
    <Restaurants :restaurants="displayedRestaurants"></Restaurants>
  </div>
</template>

<script setup>
import Restaurants from "@/components/home/Restaurants.vue";
import {
  getRestaurant,
  getRestaurants,
  getVisitedRestaurentsByUser,
} from "@/composable/UseRestaurant";
import { ref, computed, watch, defineEmits } from "vue";
import FilterRestaurants from "@/components/home/FilterRestaurants.vue";
import Pagination from "@/components/home/Pagination.vue";

const json = ref(null);
const isloaded = ref(false);
const resoFiltered = ref(null);
const itemsPerPage = 10;
const currentPage = ref(1);
const numPages = ref(1);
let idsOfVisitedResto = ref(null);
let visitedRestoFormate = ref(null);
const getData = async () => {
  const info = await getVisitedRestaurentsByUser();
  idsOfVisitedResto.value = info.items;
  isloaded.value = true;
  numPages.value = Math.ceil(idsOfVisitedResto.value.length / itemsPerPage);
};
const formatRestaurents = async function (visitedResto) {
  const listeDeRestoFormate = [];
  for (const element of visitedResto) {
    listeDeRestoFormate.push(await getRestaurant(element["restaurant_id"]));
  }
  return listeDeRestoFormate;
};

const emits = defineEmits(["update:currentPage"]);

const restaurantsFiltered = (filteredRestaurants) => {
  resoFiltered.value = filteredRestaurants;
  currentPage.value = 1;
};

const displayedRestaurants = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return visitedRestoFormate.value.slice(start, end);
});

watch(idsOfVisitedResto, async () => {
  visitedRestoFormate.value = await formatRestaurents(idsOfVisitedResto.value);
  numPages.value = Math.ceil(visitedRestoFormate.value.length / itemsPerPage);
  currentPage.value = 1;
});

getData();
</script>

<style></style>
