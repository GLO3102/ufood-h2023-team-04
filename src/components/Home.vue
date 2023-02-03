<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <head>
    <h1>Home</h1>
    <div>Restaurant Directory</div>
  </head>
  <body class="bg-gray-500 h-screen">
    <div class="flex items-center flex-col justify-between bg-gray-500 mx-auto">
      <label
        for="Restaurant"
        class="flex items-center max-w-md mx-auto text-2xl text-black py-10 font-bold"
        >Looking for a restaurant?</label
      >
      <div class="grid sm:flex w-100px font-bold rounded-md">
        <input
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border border-black pl-7 pr-12 focus:border-green-500 focus:ring-indigo-500 sm:text-sm placeholder:text-left"
          placeholder="Restaurant's name"
        />

        <label for="categorie" class="srOnly"></label>
        <select
          id="categorie"
          name="categorie"
          class="h-full rounded-md border border-black bg-white py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          class="h-full rounded-md border border-black py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          class="bg-white h-full rounded-md border border-black py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          Search
        </button>
      </div>
    </div>
    <div
      class="flex justify-center mt-1 rounded-md bg-black-500 font-bold pt-10"
    >
      <ul class="rounded-lg w-96 text-gray-900">
        <li
          v-for="restaurant in restaurant"
          :key="restaurant.name"
          class="px-6 py-2 border-b border-black w-full rounded-lg bg-red-600 text-white"
        >
          {{ restaurant.name }}
          <div class="flex items-left flex-col">
            <span>Type: {{ restaurant.type }}</span>
            <span>Price: {{ restaurant.price }} </span>
            <span>Rating: {{ restaurant.rating }}</span>
          </div>
        </li>
      </ul>
    </div>
  </body>
</template>

<script>
import MY_JSON from "@/data/restaurant.json";

export default {
  data() {
    return {
      restaurant: MY_JSON,
    };
  },
};
</script>

<style></style>
