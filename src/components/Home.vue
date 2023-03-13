<script setup>
import Restaurants from "@/components/home/Restaurants.vue";
import { getRestaurants } from "@/composable/UseRestaurant";
import { ref, computed } from "vue";
import FilterRestaurants from "@/components/home/FilterRestaurants.vue";
import Pagination from "@/components/home/Pagination.vue";

const json = ref(null);
const isloaded = ref(false);
const resoFiltered = ref(null);
const itemsPerPage = 10;
let numPages = 0;
let currentPage = 1;

const fetchData = async () => {
  const data = await getRestaurants();
  json.value = data.items;
  isloaded.value = true;
  resoFiltered.value = json.value;
  numPages = Math.ceil(json.value.length / itemsPerPage);
};

const restaurantsFiltered = (filteredRestaurants) => {
  resoFiltered.value = filteredRestaurants;
  numPages = Math.ceil(resoFiltered.value.length / itemsPerPage);
  currentPage = 1;
};

const changePage = (page) => {
  currentPage = page;
};

const displayedRestaurants = computed(() => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return resoFiltered.value.slice(start, end);
});

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
    <Pagination
      v-if="isloaded"
      :items="resoFiltered"
      :current-page-proxy="currentPageProxy"
      :num-pages="numPages"
      @page-changed="currentPageProxy = $event"
    ></Pagination>
  </div>
</template>

<style></style>
