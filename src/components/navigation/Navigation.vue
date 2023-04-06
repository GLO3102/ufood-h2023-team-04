<template>
  <v-container class="mt-5">
    <div class="hidden-md-and-down">
      <v-toolbar :elevation="0" color="white">
        <v-toolbar-title>RestoCheker</v-toolbar-title>
        <v-toolbar-items class="hidden-xs-only"
          ><v-btn>
            <router-link :to="'/'">Home</router-link>
          </v-btn>
          <v-btn v-if="loggedIn === false"
            ><router-link :to="'/register'">Sign In</router-link></v-btn
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
const fetch = () => {
  let token;
  try {
    token = Cookies.get("connectionToken");
  } catch (e) {
    loggedIn.value = false;
  }
  console.log(token);
  if (token !== null) {
    loggedIn.value = true;
  } else {
    loggedIn.value = false;
  }
};

const logOut = () => {
  Cookies.remove("connectionToken", { path: "/" });
  loggedIn.value = false;
};
fetch();
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
