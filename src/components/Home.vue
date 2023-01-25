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
  <body>
    <div class= "flex items-center flex-col justify-between bg-green-50 mx-auto">
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
    <div></div>
    </div>
  </body>
  <footer>
    <div class="bg-gray-100">
      <nav
        class="container py-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-800 md:text-2xl">
            RestoChecker
          </h3>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-gray-800 hover:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Home</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/restaurant">Restaurant</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/user">User Profile</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Register</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Sign in</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Deconnexion</router-link>
          </li>
        </ul>
      </nav>
      
    </div>
    <div class="bg-gray-100">
      <nav
        class="container py-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-800 md:text-2xl">
            RestoChecker
          </h3>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-gray-800 hover:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
          <p>Copyright © 2023 RestauCheker</p>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Home</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/restaurant">Restaurant</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/user">User Profile</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Register</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Sign in</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/">Deconnexion</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row justify-end pb-2">
        <input
          class="border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
          type="search"
        />
        <button
          type="submit"
          class="border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none bg-blue-400 hover:bg-blue-800"
        >
          search
        </button>
      </div>
        <p>Copyright © 2023 RestauCheker</p>
    </div>



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
