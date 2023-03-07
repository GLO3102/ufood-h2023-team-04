<template>
  <body class="bg-white">
    <div
      class="flex items-center flex-col justify-between bg-neutral-800 rounded p-3 m-10 mt-3 shadow-2xl"
    >
      <label
        for="Restaurant"
        class="flex items-center max-w-md mx-auto font-bold text-lg text-center text-neutral-100"
        >Looking for a restaurant?</label
      >
      <div class="grid sm:flex w-100px bg-white rounded mt-10">
        <input
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border placeholder-neutral-800 bg-neutral-800pl-7 pr-12 focus:border-green-500 focus:ring-blue-400 sm:text-sm placeholder:text-left"
          placeholder="Restaurant's name"
          v-model="filterText"
        />

        <label for="categorie" class="srOnly"></label>
        <select
          v-model="selectGenre"
          id="categorie"
          name="categorie"
          class="h-full rounded-md border bg-transparent py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          <option value="Any Type" selected>Any type</option>
          <option v-for="genre in AllGenres" :key="genre">
            {{ genre }}
          </option>
        </select>
        <select
          v-model="selectPrice"
          name="price"
          id="price"
          class="h-full rounded-md border py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          <option value="Any Price">Any price</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <!-- <button
          id="search"
          type="submit"
          class="h-full rounded py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          Search
        </button> -->
      </div>
    </div>
    <div class="container w-full ms:w-60">
      <div
        class="flex justify-center text-left mt-1 rounded-md shadow-sm bg-neutral-800"
      >
        <!-- <p>{{ restaurantsNames }}</p> -->
        <ul class="w-80 space-y-1 text-neutral-100 m-3">
          <li
            class="flex flex-col justify-center text-center border border-neutral-700 rounded bg-neutral-700"
            v-for="restaurant in filteredRestaurants"
            :key="restaurant"
          >
            {{ restaurant.name }}
            <div class="flex items-left flex-col bg-neutral-600">
              <span>Price {{ "$".repeat(restaurant.price) }} </span>
              <span>Ratings {{ restaurant.rating.toFixed(1) }}</span>
              <span>Type {{ restaurant.genres.join(", ") }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
import { getRestaurants } from "@/api/restaurantsAPI.js";
import { ref, computed, watch } from "vue";

export default {
  name: "Home",
  setup() {
    const AllRestaurants = ref([]);
    const AllGenres = ref([]);
    const filterText = ref("");
    const selectGenre = ref("Any Type");
    const selectPrice = ref("Any Price");

    watch(selectGenre, (newValue, oldValue) => {
      console.log(`Selected option changed to ${newValue}`);
    });

    watch(selectPrice, (newValue, oldValue) => {
      console.log(`Selected option changed to ${newValue}`);
    });

    const extractRestos = async () => {
      AllRestaurants.value = await getRestaurants();
      const allGenres = AllRestaurants.value.flatMap(
        (restaurant) => restaurant.genres
      );
      AllGenres.value = [...new Set(allGenres)];
      console.log(AllGenres.value);
    };

    const filteredRestaurants = computed(() => {
      let filtered = AllRestaurants.value;
      if (filterText.value) {
        filtered = filtered.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(filterText.value.toLowerCase())
        );
      }
      if (selectGenre.value !== "Any Type") {
        filtered = filtered.filter((restaurant) =>
          restaurant.genres.includes(selectGenre.value)
        );
      }
      if (selectPrice.value !== "Any Price") {
        filtered = filtered.filter((restaurant) =>
          restaurant.price.includes(selectPrice.value)
        );
      }
      return filtered;
    });

    extractRestos();

    return {
      AllRestaurants,
      AllGenres,
      filteredRestaurants,
      filterText,
      selectGenre,
      selectPrice,
    };
  },
};
</script>

<style></style>
