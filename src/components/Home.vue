<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <body class="bg-white">
    <div class="flex items-center flex-col justify-between bg-neutral-800 rounded p-3 m-10 mt-3 shadow-2xl">
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
        <button
          id="search"
          type="submit"
          class="h-full rounded py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
        >
          Search
        </button>
      </div>
    </div>
    <div class="flex justify-center text-left mt-1 rounded-md shadow-sm bg-neutral-800 mx-10 p-3 mb-10">
      <ul
        class="max-w-md space-y-1 text-neutral-100"
      >
        <li class="flex flex-col justify-center text-center border border-neutral-700 rounded bg-neutral-700" v-for="restaurant in restaurant" :key="restaurant.name">
          {{ restaurant.name }}
          <div class="flex items-left flex-col bg-neutral-600">
            <span>Price {{ restaurant.price }} </span>
            <span>Ratings {{ restaurant.rating }}</span>
            <span>Type {{ restaurant.type }}</span>
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
