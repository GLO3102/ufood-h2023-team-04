<template>
  <v-container class="mt-5">
    <div class="hidden-md-and-down">
      <v-toolbar :elevation="0" color="white">
        <v-toolbar-title>RestoCheker</v-toolbar-title>
        <v-toolbar-items class="hidden-xs-only"
          ><v-btn @click="goHome"> home </v-btn>
          <v-btn @click="goToSignIn()" v-if="loggedIn === false"
            ><router-link :to="'/register'">Sign In</router-link></v-btn
          >
          <v-btn @click="logOut()" v-if="loggedIn === true"
            ><router-link :to="'/connexion'">log out </router-link>
          </v-btn>
          <v-btn v-if="loggedIn === true">
            <router-link
              :to="{
                name: 'User',
                params: { currentUserID: '604cc220ef6fa10004dc0179' },
              }"
            >
              User Profile
            </router-link>
          </v-btn>
          <v-btn v-if="loggedIn === false"
            ><router-link :to="'/connexion'">log In</router-link></v-btn
          >
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
                <v-layout v-if="loggedIn === false"
                  ><router-link :to="'/connexion'"
                    >Sign In</router-link
                  ></v-layout
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
                <v-layout @click="logOut" v-if="loggedIn === true">
                  <router-link :to="'/'">log out </router-link>
                </v-layout></v-list-item-title
              >
              <v-list-item-title>
                <v-layout v-if="loggedIn === false"
                  ><router-link :to="'/connexion'"
                    >Log In</router-link
                  ></v-layout
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
import Cookies from "js.cookie";
import { el } from "vuetify/locale";
import { useRouter } from "vue-router";

const router = useRouter();

let loggedIn = ref(false);
let searchIsOpen = ref(false);
const fetch = () => {
  let token;
  try {
    token = Cookies.get("connectionToken");
  } catch (e) {
    loggedIn.value = false;
  }
  if (token !== null) {
    loggedIn.value = true;
  } else {
    loggedIn.value = false;
  }
};
function goToSignIn() {
  router.push("/register");
}
const logOut = async () => {
  try {
    Cookies.remove("connectionToken", { path: "/" });
    const res = await fetch("https://ufoodapi.herokuapp.com/logout", {
      method: "POST",
    });
    loggedIn.value = false;
    await router.push("/connexion");
  } catch (e) {
    console.log(e.message);
  }
};

function goHome() {
  router.push("/");
}
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
