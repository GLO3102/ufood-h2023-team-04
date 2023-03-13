<template>
  <div
    class="flex flex-col items-center justify-between bg-neutral-800 rounded p-3 m-10 mt-3 shadow-2xl"
  >
    <input
      type="text"
      placeholder="Restaurant's name"
      v-model="searchValue"
      class="w-56 py-1 px-2 rounded-md bg-neutral-700 text-neutral-100 focus:outline-none focus:ring focus:border-blue-300"
    />
    <div class="w-56 mt-2">
      <label class="text-white">Price</label>
      <v-slider
        v-model="priceValue"
        :min="0"
        :max="getMaxPrice(restaurants)"
        :step="1"
        thumb-label
        class="w-full h-4"
      ></v-slider>
      <div class="flex items-center justify-between mt-1">
        <div class="text-neutral-300 text-xs">$0</div>
        <div class="text-neutral-100">{{ priceValue }}</div>
        <div class="text-neutral-300 text-xs">
          ${{ getMaxPrice(restaurants) }}
        </div>
      </div>
    </div>
    <v-select
      label="Select"
      v-model="genreValue"
      :items="getAllGenres(restaurants)"
      variant="underlined"
      class="w-56 mt-2 text-white"
    ></v-select>
    <div class="flex justify-between w-56 mt-2">
      <v-btn
        @click="emit('filtering', filter(restaurants))"
        class="bg-blue-500 hover:bg-blue-600 text-black rounded-md py-1 px-3 text-sm"
      >
        search!
      </v-btn>
      <v-btn
        @click="clearSelection"
        class="bg-neutral-700 hover:bg-neutral-600 text-neutral-100 rounded-md py-1 px-3 text-sm"
      >
        clear!
      </v-btn>
    </div>
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
