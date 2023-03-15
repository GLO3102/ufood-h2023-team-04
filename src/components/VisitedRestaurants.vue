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
      @update:currentPage="changePage"
    />
    <Restaurants :restaurants="visitedRestoFormate"></Restaurants>
    <Pagination
      v-if="isloaded"
      :items="visitedRestoFormate"
      :num-pages="numPages"
      :current-page="currentPage"
      :on-update-current-page="(page) => (currentPage = page)"
      @update:currentPage="changePage"
    />
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
  visitedRestoFormate.value = await formatRestaurents(idsOfVisitedResto.value);
  numPages.value = Math.ceil(visitedRestoFormate.value.length / itemsPerPage);
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

watch(visitedRestoFormate, () => {
  currentPage.value = 1;
});
const changePage = (page) => {
  currentPage.value = page;
};

getData();
</script>

<style></style>
