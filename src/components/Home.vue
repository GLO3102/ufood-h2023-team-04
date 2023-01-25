<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <head>
    <h1>Home</h1>
    <div>Restaurant Directory</div>
  </head>
  <body>
    <label
      for="Restaurant"
      class="flex items-center max-w-md mx-auto text-sm font-medium text-gray-700"
      >Looking for a restaurant?</label
    >
    <div class="flex items-center max-w-md mx-auto mt-1 rounded-md shadow-sm">
      <input
        type="text"
        name="name"
        id="name"
        class="block w-full rounded-md border-red-300 pl-7 pr-12 focus:border-green-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter the name of a restaurant"
      />
      <div class="flex items-center max-w-md mx-auto inset-y-0 right-0">
        <label for="categorie" class="srOnly"></label>
        <select
          id="categorie"
          name="categorie"
          class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>American</option>
          <option>Italian</option>
          <option>Seafood</option>
          <option>Japanese</option>
        </select>
      </div>
    </div>
    <div class="flex items-center max-w-md mx-auto mt-1 rounded-md shadow-sm">
      <ul
        class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li v-for="restaurant in restaurant" :key="restaurant.name">
          {{ restaurant.name }}
        </li>
      </ul>
    </div>
  </body>
  <footer>
    <p>Copyright © 2023 Restaurant Directory</p>
  </footer>
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
