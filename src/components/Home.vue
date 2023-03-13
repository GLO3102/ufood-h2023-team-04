<template>
  <div>
    <FilterRestaurants
      @filtering="restaurantsFiltered"
      v-if="isloaded"
      :restaurants="json"
    />
    <Restaurants :restaurants="displayedRestaurants" v-if="isloaded" />
    <Pagination
      v-if="isloaded"
      :items="resoFiltered"
      v-model="currentPageProxy"
      :num-pages="numPages"
      @page-changed="changePage"
    />
  </div>
</template>

<script setup>
import Restaurants from "@/components/home/Restaurants.vue";
import { getRestaurants } from "@/composable/UseRestaurant";
import { ref, computed, watch, defineEmits } from "vue";
import FilterRestaurants from "@/components/home/FilterRestaurants.vue";
import Pagination from "@/components/home/Pagination.vue";

const json = ref(null);
const isloaded = ref(false);
const resoFiltered = ref(null);
const itemsPerPage = 10;
const currentPage = ref(1);
const numPages = ref(1);

const fetchData = async () => {
  const data = await getRestaurants();
  json.value = data.items;
  isloaded.value = true;
  resoFiltered.value = json.value;
  numPages.value = Math.ceil(json.value.length / itemsPerPage);
};

const restaurantsFiltered = (filteredRestaurants) => {
  resoFiltered.value = filteredRestaurants;
  currentPage.value = 1;
};

const emits = defineEmits(["page-changed", "update:currentPage"]);

const changePage = (page) => {
  currentPage.value = page;
  emits("page-changed", currentPage.value);
  emits("update:currentPage", currentPage.value);
};

const displayedRestaurants = computed(() => {
  const start = (currentPageProxy.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return resoFiltered.value.slice(start, end);
});

watch(resoFiltered, () => {
  currentPage.value = 1;
});

const currentPageProxy = computed({
  get() {
    return currentPage.value;
  },
  set(value) {
    currentPage.value = value;
  },
});

fetchData();
</script>

<style></style>
