<template>
  <div>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style></style>
