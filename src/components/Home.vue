<script setup>
import Restaurants from "@/components/home/Restaurants.vue";
import { getRestaurants } from "@/composable/UseRestaurant";
import { ref } from "vue";
import FitlerGenres from "@/components/home/FitlerGenres.vue";
import FilterPrice from "@/components/home/FilterPrice.vue";

const json = ref(null);
const isloaded = ref(false);

let filterPriceValue = 0;
let filterGenreValue = [];

const getAllGenres = function (restaurants) {
  let genres = [];
  restaurants.forEach((restaurant) => {
    restaurant.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });

  return genres;
};
const fetchData = async () => {
  const data = await getRestaurants();
  json.value = data.items;
  isloaded.value = true;
};

const getMaxPrice = function (restaurants) {
  let maxPrice = 0;
  restaurants.forEach((restaurant) => {
    if (restaurant.price_range > maxPrice) {
      maxPrice = restaurant.price_range;
    }
  });

  return maxPrice;
};

const filterGenre = function (restaurants, genres) {
  let resto = [];
  if (genres.length === 0) {
    return restaurants;
  }
  restaurants.forEach((restaurant) => {
    //filter par genres
    let hasCommonGenres = false;
    restaurant.genres.forEach((genre) => {
      if (genres.includes(genre)) {
        hasCommonGenres = true;
      }
    });
    if (hasCommonGenres) {
      if (!resto.includes(restaurant)) {
        resto.push(restaurant);
      }
    }
  });
  return resto;
};

const filterPrice = function (restaurants, price) {
  let resto = [];
  if (price === 0) {
    return restaurants;
  }
  restaurants.forEach((restaurant) => {
    if (price <= restaurant.price_range) {
      resto.push(restaurant);
    }
  });
  return resto;
};

const filterResto = function (resto) {
  let restofilter = [];
  restofilter = filterGenre(resto, filterGenreValue);
  restofilter = filterPrice(restofilter, filterPriceValue);

  return restofilter;
};

fetchData();
</script>

<template>
  <div>
    <FilterPrice v-if="isloaded" :maxPrice="getMaxPrice(json)"></FilterPrice>
    <FitlerGenres
      v-if="isloaded"
      :allGenres="getAllGenres(json)"
    ></FitlerGenres>
    <Restaurants :restaurants="filterResto(json)" v-if="isloaded"></Restaurants>
  </div>
</template>

<style></style>
