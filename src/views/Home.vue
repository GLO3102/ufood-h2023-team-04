<template>
  <div>
    <FilterRestaurants
      @filtering="restaurantsFiltered"
      v-if="isloaded"
      :restaurants="json"
      class="mt-10"
    />
    <Restaurants
      :restaurants="displayedRestaurants"
      :VisitedRestaurant="visitedRestoFormate"
      v-if="isloaded"
    />
    <Pagination
      v-if="isloaded"
      :items="resoFiltered"
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
} from "@/composables/UseRestaurant";
import { ref, computed, watch } from "vue";
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
const fetchData = async () => {
  const data = await getRestaurants();
  json.value = data.items;
  isloaded.value = true;
  resoFiltered.value = json.value;
  numPages.value = Math.ceil(json.value.length / itemsPerPage);

  const info = await getVisitedRestaurentsByUser();
  idsOfVisitedResto.value = info.items;
  visitedRestoFormate.value = await formatRestaurents(idsOfVisitedResto.value);
  checkVisitedResto(resoFiltered.value);
};

const emits = defineEmits(["update:currentPage"]);

const restaurantsFiltered = (filteredRestaurants) => {
  resoFiltered.value = filteredRestaurants;
  currentPage.value = 1;
};

watch(resoFiltered, () => {
  currentPage.value = 1;
});

const displayedRestaurants = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return resoFiltered.value.slice(start, end);
});

const changePage = (page) => {
  currentPage.value = page;
};

const checkVisitedResto = function (AllRestos) {
  for (const restaurant of AllRestos) {
    for (const element of visitedRestoFormate.value) {
      if (element.name === restaurant.name) {
        restaurant["visited"] = true;
      }
    }
  }
};

const nextPage = () => {
  if (currentPage.value < numPages.value) {
    currentPage.value = currentPage.value + 1;
  }
};

const formatRestaurents = async function (visitedResto) {
  const listeDeRestoFormate = [];
  for (const element of visitedResto) {
    listeDeRestoFormate.push(await getRestaurant(element["restaurant_id"]));
  }
  return listeDeRestoFormate;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
  }
};

fetchData();
</script>

<style></style>
