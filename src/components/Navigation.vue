<template>
  <div>
    <div class="bg-neutral-900">
      <nav
        class="container py-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-neutral-100 md:text-2xl">
            RestoChecker
          </h3>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-neutral-100 hover:text-gray-400">
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
          <li class="text-sm font-bold text-neutral-100 hover:text-blue-400">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="text-sm font-bold text-neutral-100 hover:text-blue-400">
            <router-link :to="{ name: 'Restaurant' }">Restaurant</router-link>
          </li>
          <li
            :class="{ hidden: !loggedIn }"
            class="text-sm font-bold text-neutral-100 hover:text-blue-400"
          >
            <router-link :to="{ name: 'User', params: { currentUserID: '1' } }"
              >User Profile</router-link
            >
          </li>
          <li
            :class="{ hidden: loggedIn }"
            @click="logIn"
            class="text-sm font-bold text-neutral-100 hover:text-blue-400"
          >
            <router-link :to="{ name: 'Home' }">Register</router-link>
          </li>
          <li
            :class="{ hidden: loggedIn }"
            @click="logIn"
            class="text-sm font-bold text-neutral-100 hover:text-blue-400"
          >
            <router-link :to="{ name: 'Home' }">Sign in</router-link>
          </li>
          <li
            :class="{ hidden: !loggedIn }"
            @click="logOut"
            class="text-sm font-bold text-neutral-100 hover:text-blue-400"
          >
            <router-link :to="{ name: 'Home' }">Logout</router-link>
          </li>
        </ul>
      </nav>
      <div
        class="container pb-2 mx-auto md:flex md:justify-end md:items-center h-8"
      >
        <input
          class="bg-neutral-200 text-neutral-800 h-7 px-2 rounded-lg text-sm focus:outline-none"
          type="search"
        />
        <button
          type="submit"
          class="bg-neutral-600 h-7 px-2 rounded-lg text-sm focus:outline-none text-neutral-100 hover:bg-blue-400 ml-1"
        >
          search
        </button>
      </div>
      <div
        class="container pb-2 mx-auto md:flex md:justify-start md:items-center h-8 text-neutral-100"
      >
        <h6 :class="{ hidden: !loggedIn }">
          Hi Shrek Potvin <ScaleButton></ScaleButton>
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
import ScaleButton from "./button/ScaleButton.vue";
export default {
  data() {
    return {
      showMenu: false,
      loggedIn: false,
    };
  },
  methods: {
    logIn() {
      this.loggedIn = true;
    },
    logOut() {
      this.loggedIn = false;
    },
  },
  components: {
    ScaleButton: ScaleButton,
  },
};
</script>

<style></style>
