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
  <body class="bg-green-50">
    <div class="flex items-center flex-col justify-between bg-green-50 mx-auto">
      <label
        for="Restaurant"
        class="flex items-center max-w-md mx-auto text-sm font-medium text-gray-700"
        >Looking for a restaurant?</label
      >
      <div class="grid sm:flex w-100px bg-white">
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
          class="h-full rounded-md border border-black bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          class="h-full rounded-md border border-black bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          class="h-full rounded-md border border-black bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          class="h-full rounded-md border border-black bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          Search
        </button>
      </div>
    </div>
    <div class="flex justify-center mt-1 rounded-md shadow-sm bg-green-50">
      <ul
        class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li v-for="restaurant in restaurant" :key="restaurant.name">
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
