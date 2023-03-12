<script setup>
import Restaurants from "@/components/home/Restaurants.vue";
import { getRestaurants } from "@/composable/UseRestaurant";
import { ref, watch, watchEffect } from "vue";
import FitlerGenres from "@/components/home/FitlerGenres.vue";
import FilterPrice from "@/components/home/FilterPrice.vue";

const json = ref(null);
const isloaded = ref(false);

let filterPriceValue = ref(0);
let filterGenreValue = ref([]);

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
  restoFiltered.value = json.value;
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
    if (price >= restaurant.price_range) {
      resto.push(restaurant);
    }
  });
  return resto;
};

const filterResto = function (resto) {
  let restofilter = [];
  restofilter = filterGenre(resto, filterGenreValue.value);
  restofilter = filterPrice(restofilter, filterPriceValue.value);

  restoFiltered.value = restofilter;
};

const updatefilterGenreValue = function (updatedSelectedGenre) {
  filterGenreValue.value = updatedSelectedGenre;
};

const updatefilterPriceValue = function (updatedSelectedPrice) {
  filterPriceValue.value = updatedSelectedPrice;
};

watch([filterGenreValue, filterPriceValue], () => {
  filterResto(json.value);
});

let restoFiltered = ref([]);

fetchData();
</script>

<template>
  <div>
    <FilterPrice
      v-if="isloaded"
      :maxPrice="getMaxPrice(json)"
      @filterPriceValue="updatefilterPriceValue"
    ></FilterPrice>
    <FitlerGenres
      v-if="isloaded"
      :allGenres="getAllGenres(json)"
      @filterGenresValue="updatefilterGenreValue"
    ></FitlerGenres>
    <Restaurants :restaurants="restoFiltered" v-if="isloaded"></Restaurants>
  </div>
</template>

<style></style>
