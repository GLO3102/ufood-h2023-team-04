<template>
  <v-container>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title>RestoAnalyser3000</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <router-link :to="'/'">Home</router-link>
          </v-list-item>
          <v-list-item v-if="loggedIn === true">
            <router-link
              :to="{
                name: 'User',
                params: { currentUserID: '634b0183dae040956403888c' },
              }"
            >
              User profile
            </router-link>
          </v-list-item>
          <v-list-item v-if="loggedIn === false">
            <router-link :to="'/'" @click="loggedIn = true"
              >Register</router-link
            >
          </v-list-item>
          <v-list-item v-if="loggedIn === false">
            <router-link :to="'/'" @click="loggedIn = true"
              >Sign in</router-link
            >
          </v-list-item>
          <v-list-item v-if="loggedIn === true">
            <router-link :to="'/'" @click="loggedIn = false"
              >Log out
            </router-link>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

let loggedIn = ref(false);
let searchIsOpen = ref(false);
const drawer = ref(false);
const group = ref(null);
</script>

<style scoped>
.container {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.nav-icon {
  color: #fff;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.nav-link {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
