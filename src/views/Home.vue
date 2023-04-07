<template>
  <div v-if="isloaded">
    <FilterRestaurants
      @filtering="restaurantsFiltered"
      v-if="isloaded"
      :restaurants="json"
      class="mt-10"
    />
    <div style="display: flex; justify-content: center; align-items: center">
      <button
        class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated bg-white-accent-1 m-10"
        @click="showMap = !showMap"
      >
        <span class="v-btn__overlay"></span>
        <span class="v-btn__underlay"></span>
        <span class="v-btn__content">Toggle Map</span>
      </button>
    </div>
    <div>
      <HomeGoogleMap :locations="locations" v-if="!showMap" />
    </div>
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
/* eslint-disable */
import Restaurants from "@/components/home/Restaurants.vue";
import {
  getRestaurant,
  getRestaurants,
  getVisitedRestaurentsByUser,
} from "@/composables/UseRestaurant";
import { ref, computed, watch } from "vue";
import FilterRestaurants from "@/components/home/FilterRestaurants.vue";
import Pagination from "@/components/home/Pagination.vue";
import HomeGoogleMap from "../components/home/HomeGoogleMap.vue";

const showMap = ref(true);
const json = ref(null);
const isloaded = ref(false);
const resoFiltered = ref(null);
const itemsPerPage = 10;
const currentPage = ref(1);
const numPages = ref(1);
let idsOfVisitedResto = ref(null);
let visitedRestoFormate = ref(null);
const locations = ref([]);

const fetchData = async () => {
  const data = await getRestaurants();
  json.value = data.items;
  for (let i = 0; i < json.value.length; i++) {
    const restaurant = json.value[i];
    const names = restaurant.name;
    const addresses = restaurant.address;
    const coordinates = restaurant.location.coordinates;
    const photos = restaurant.pictures;
    locations.value.push([coordinates, names, addresses, photos]);
  }
  console.log(locations);
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

/* const markingMap = (locations) => {
  locations.forEach((location, i) => {
    const marker = new google.maps.Marker({
      position: { lat: location[0][1], lng: location[0][0] },
      title: `${i + 1}. ${location[1]}`,
      map: map,
    });
    markers.value.push(marker);

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `<div class="infowindow-content"><div class="infowindow-img"><img src=${location[3][0]}></div><div class="infowindow-text"><h2>${location[1]}</h2><p>${location[2]}</p></div></div>`,
      });
      infoWindow.open(map, marker);
    });
  });
  console.log(markers);
  return markers;
}; */

fetchData();
</script>

<style></style>
