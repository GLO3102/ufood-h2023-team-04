<template>
  <v-container class="flex flex-col items-center justify-between">
    <div class="w-full flex justify-between items-center">
      <div></div>
      <div>Filters</div>
      <v-btn @click="toggleExpand" class="ml-2">
        <img
          v-if="!expanded"
          src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
          alt=""
          class="w-2"
        />
        <img
          v-if="expanded"
          src="https://cdn-icons-png.flaticon.com/512/57/57055.png"
          alt=""
          class="w-2"
        />
      </v-btn>
    </div>
    <div v-show="expanded">
      <div
        class="flex flex-col sm:flex-row mt-5 w-3/4 justify-space-evenly items-end sm:items-center"
      >
        <v-text-field
          type="text"
          placeholder="Restaurant's name"
          v-model="searchValue"
          class="w-full sm:w-1/2 sm:mb-0 sm:mr-5"
        />
        <v-select
          label="Choosen genre"
          v-model="genreValue"
          :items="getAllGenres(restaurants)"
          class="text-black"
          variant="solo"
        ></v-select>
      </div>
      <div class="w-3/4 mt-4">
        <label class="text-white">Price</label>
        <v-slider
          v-model="priceValue"
          :min="0"
          :max="getMaxPrice(restaurants)"
          :step="1"
          :ticks="ticksLabels"
          show-ticks="always"
          tick-size="5"
          thumb-label
          class="h-6"
          elevation="0"
          color="black"
          track-fill-color="yellow"
        >
          ></v-slider
        >
        <div class="flex items-center justify-between mt-2"></div>
      </div>
      <div class="flex justify-between w-72 mt-4">
        <v-btn
          @click="emit('filtering', filter(restaurants))"
          class="bg-blue-500 hover:bg-blue-600 text-black rounded-md py-2 px-4 text-sm"
        >
          search!
        </v-btn>
        <v-btn
          @click="clearSelection"
          class="bg-neutral-700 hover:bg-neutral-600 text-neutral-100 rounded-md py-2 px-4 text-sm"
        >
          clear!
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const expanded = ref(false);

const toggleExpand = () => {
  expanded.value = !expanded.value;
};

const props = defineProps({
  restaurants: Object,
});
const ticksLabels = {
  0: "0$",
  1: "1$",
  2: "2$",
  3: "3$",
  4: "4$",
  5: "5$",
};

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

<style scoped>
.v-container {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  border: 3px solid #000;
  box-shadow: 10px 15px 0px black;
}
.v-btn {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  border: 3px solid #000;
  box-shadow: 5px 10px 0px black;
}

input {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  border: 3px solid #000;
}
</style>
