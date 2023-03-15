<template>
  <v-toolbar :elevation="5">
    <v-toolbar-title>RestoCheker</v-toolbar-title>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn>
        <router-link :to="'/'">Home</router-link>
      </v-btn>
      <v-btn>
        <router-link :to="'/restaurantVisits'">visited</router-link>
      </v-btn>
      <v-btn @click="loggedIn = true" v-if="loggedIn === false">Sign In</v-btn>
      <v-btn v-if="loggedIn === true">
        <router-link :to="'/user/1'">User</router-link>
      </v-btn>
      <v-btn @click="loggedIn = false" v-if="loggedIn === true">
        <router-link :to="'/'">log out</router-link></v-btn
      >
      <v-btn v-if="!loggedIn">Register</v-btn>
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
</template>
<script setup>
import { ref } from "vue";

let loggedIn = ref(false);
let searchIsOpen = ref(false);
</script>
