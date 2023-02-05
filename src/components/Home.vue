<template>
  <body class="bg-white">
    <div class="flex flex-col space-y-4 pt-3 mx-3 items-center">
      <div class="container w-full ms:w-60">
        <div
          class="flex items-center flex-col justify-between bg-neutral-800 rounded shadow-2xl"
        >
          <label
            for="Restaurant"
            class="flex items-center max-w-md mx-auto font-bold text-lg text-center text-neutral-100 mt-3"
            >Looking for a restaurant?</label
          >
          <div class="grid sm:flex w-100px bg-white rounded m-3">
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
            <select
              name="ratings"
              id="ratings"
              class="h-full rounded-md border py-0 pl-2 pr-7 text-neutral-800 focus:border-blue-400 focus:ring-blue-400 sm:text-sm"
            >
              <option value="any">Any rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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
      </div>
      <div class="container w-full ms:w-60">
        <div
          class="flex justify-center text-left mt-1 rounded-md shadow-sm bg-neutral-800"
        >
          <ul class="w-80 space-y-1 text-neutral-100 m-3">
            <li
              class="flex flex-col justify-center text-center border border-neutral-700 rounded bg-neutral-700"
              v-for="restaurant in restaurant"
              :key="restaurant.name"
            >
              {{ restaurant.name }}
              <div class="flex items-left flex-col bg-neutral-600">
                <span>Price {{ restaurant.price }} </span>
                <span>Ratings {{ restaurant.rating }}</span>
                <span>Type {{ restaurant.type }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
