<template>
  <v-app id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "app",
  components: {
    "nav-menu": Navigation,
  },
};
</script>

<style></style>
