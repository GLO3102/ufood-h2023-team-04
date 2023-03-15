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
        <v-btn @click="loggedIn = false" v-if="loggedIn === true"
          >log out</v-btn
        >
        <v-btn>
          <router-link
            :to="{
              name: 'User',
              params: { currentUserID: '604cc220ef6fa10004dc0179' },
            }"
          >
            User Profile
          </router-link>
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
