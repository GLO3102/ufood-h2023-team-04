<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
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
          id="categorie"
          name="categorie"
          class="h-full rounded-md border bg-transparent py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          <option value="any">Any type</option>
          <option value="ame">American</option>
          <option value="ita">Italian</option>
          <option value="sea">Seafood</option>
          <option value="jap">Japanese</option>
        </select>
        <select
          name="price"
          id="price"
          class="h-full rounded-md border py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          <option value="billGates">Any price</option>
          <option value="poor">$</option>
          <option value="lessPoor">$$</option>
          <option value="notPoor">$$$</option>
          <option value="rich">$$$$</option>
        </select>
        <select
          name="rating"
          id="rating"
          class="h-full rounded-md border border-black py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="any">Any rating</option>
          <option value="1">*</option>
          <option value="2">**</option>
          <option value="3">***</option>
          <option value="4">****</option>
          <option value="5">*****</option>
        </select>
        <button
          id="search"
          type="submit"
          class="h-full rounded py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          Search
        </button>
      </div>
    </div>
    <div
      class="flex justify-center text-left mt-1 rounded-md shadow-sm bg-neutral-800 mx-10 p-3 mb-10"
    >
      <ul class="max-w-md space-y-1 text-neutral-100">
        <li
          class="flex flex-col justify-center text-center border border-neutral-700 rounded bg-neutral-700 w-48 sm:w-96"
          v-for="(restaurant, index) in filteredRestaurants"
          :key="index"
        >
          {{ restaurant.name }}
          <div class="flex items-left flex-col bg-neutral-600">
           <span>Price : {{ restaurant.price }} </span>
            <span>Rating : {{ restaurant.rating.toFixed(1) }}</span>
            <span>Type : {{ restaurant.genres.join(", ") }}</span>
          </div>
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
import { getRestoNames } from "@/api/restaurantsAPI.js";

export default {
  name: "Home",
  data() {
    return {
      restaurants: [],
      filterText: "",
    };
  },
  async created() {
    this.restaurants = await getRestoNames();
  },
  computed: {
    filteredRestaurants() {
      if (!this.filterText) {
        return this.restaurants;
      } else {
        return this.restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.filterText.toLowerCase())
        );
      }
    },
  },
};
</script>

<style></style>
