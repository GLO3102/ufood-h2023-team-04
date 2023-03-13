<template>
  <div>
    <input type="text" placeholder="Restaurant's name" v-model="searchValue" />
    <div>
      <v-slider
        v-model="priceValue"
        :min="0"
        :max="getMaxPrice(restaurants)"
        :step="1"
        thumb-label
      ></v-slider>
      <div class="flex flex-row justify-space-between">
        <div>$0</div>
        <div>{{ priceValue }}</div>
        <div>${{ getMaxPrice(restaurants) }}</div>
      </div>
    </div>
    <v-select
      label="Select"
      v-model="genreValue"
      :items="getAllGenres(restaurants)"
      variant="underlined"
    ></v-select>
    <v-btn @click="emit('filtering', filter(restaurants))">search!</v-btn>
    <v-btn @click="clearSelection">clear!</v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  restaurants: Object,
});

const emit = defineEmits(["filtering"]);
const clearSelection = () => {
  priceValue.value = 0;
  genreValue.value = "any";
  searchValue.value = "";
  emit("filtering", filter(props.restaurants));
};

let priceValue = ref(0);
let genreValue = ref("any");
let searchValue = ref("");

const getAllGenres = function (restaurants) {
  let genres = [];
  genres.push("any");
  restaurants.forEach((restaurant) => {
    restaurant.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });
  return genres;
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

const filter = function (restaurants) {
  let filtered = restaurants;
  if (searchValue.value) {
    filtered = filtered.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchValue.value.toLowerCase())
    );
  }
  if (genreValue.value !== "any") {
    filtered = filtered.filter((restaurant) =>
      restaurant.genres.includes(genreValue.value)
    );
  }
  if (priceValue.value !== 0) {
    filtered = filtered.filter(
      (restaurant) => restaurant.price_range <= priceValue.value
    );
  }
  return filtered;
};
</script>

<style scoped></style>
