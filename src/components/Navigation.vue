<template>
  <v-container class="mt-5">
    <div class="hidden-md-and-down">
      <v-toolbar :elevation="0" color="white">
        <v-toolbar-title>RestoCheker</v-toolbar-title>
        <v-toolbar-items class="hidden-xs-only"
          ><v-btn>
            <router-link :to="'/'">Home</router-link>
          </v-btn>
          <v-btn @click="loggedIn = true" v-if="loggedIn === false"
            >Sign in</v-btn
          >
          <v-btn @click="loggedIn = false" v-if="loggedIn === true"
            ><router-link :to="'/'">log out </router-link>
          </v-btn>
          <v-btn v-if="loggedIn">
            <router-link
              :to="{
                name: 'User',
                params: { currentUserID: '604cc220ef6fa10004dc0179' },
              }"
            >
              User Profile
            </router-link>
          </v-btn>
          <v-btn v-if="!loggedIn">Register</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <div class="hidden-lg-and-up">
      <v-toolbar :elevation="0" color="white">
        <v-toolbar-title>RestoCheker</v-toolbar-title>
        <v-menu color="white">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props"> Menu </v-btn>
          </template>
          <v-list class="reponsiveMenu">
            <v-list-item>
              <v-list-item-title>
                <v-layout>
                  <router-link :to="'/'">Home</router-link>
                </v-layout></v-list-item-title
              >
              <v-list-item-title>
                <v-layout @click="loggedIn = true" v-if="loggedIn === false"
                  >Sign in</v-layout
                ></v-list-item-title
              >
              <v-list-item-title>
                <v-layout>
                  <router-link
                    v-if="loggedIn"
                    :to="{
                      name: 'User',
                      params: { currentUserID: '604cc220ef6fa10004dc0179' },
                    }"
                  >
                    User Profile
                  </router-link>
                </v-layout></v-list-item-title
              >
              <v-list-item-title>
                <v-layout @click="loggedIn = false" v-if="loggedIn === true">
                  <router-link :to="'/'">log out </router-link>
                </v-layout></v-list-item-title
              >
              <v-list-item-title>
                <v-layout v-if="loggedIn === false"
                  >Register</v-layout
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </div>
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
v-menu {
  background-color: white;
}

v-text-field {
  display: flex;
  justify-self: center;
}
</style>
