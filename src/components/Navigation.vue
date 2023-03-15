<template>
  <v-container class="mt-5">
    <v-toolbar :elevation="0" color="white">
      <v-toolbar-title>RestoCheker</v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-responsive class="mx-auto" min-width="200px">
          <v-text-field
            v-if="searchIsOpen"
            hide-details
            prepend-icon="mdi-magnify"
            single-line
            min-width="100px"
          ></v-text-field>
        </v-responsive>
        <v-btn icon @click="searchIsOpen = !searchIsOpen">
          <font-awesome-icon icon="fa-solid fa-user" />
        </v-btn>
        <v-btn>
          <router-link :to="'/'">Home</router-link>
        </v-btn>
        <v-btn @click="loggedIn = true" v-if="loggedIn === false"
          >Register</v-btn
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
            <router-link
              :to="{
                name: 'User',
                params: { currentUserID: '636d37d5a4823385784320a2' },
              }"
            >
              User Profile
            </router-link>
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
        <v-btn>
          <router-link :to="'/user/1'">user</router-link>
        </v-btn>
        <v-btn v-if="!loggedIn">Sign in</v-btn>
      </v-toolbar-items>

      <div class="hidden-sm-and-up">
        <v-menu :location="location">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark v-bind="props"> Dropdown </v-btn>
          </template>

          <v-list class="reponsiveMenu">
            <v-list-item>
              <v-list-item-title>
                <router-link :to="'/'">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link :to="'/restaurant'"
                  >Restaurant</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

let loggedIn = ref(false);
let searchIsOpen = ref(false);
</script>

<style scoped>
.v-container {
  background: white;
  color: #fff;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  border: 3px solid #000;
  box-shadow: 10px 15px 0px black;
}
</style>
