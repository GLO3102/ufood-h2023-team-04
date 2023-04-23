<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field v-model="email" label="email" :rules="rules"></v-text-field>
      <v-text-field
        type="password"
        v-model="password"
        label="password"
        :rules="rules"
      ></v-text-field>

      <v-btn type="submit" @click="connection" block class="mt-2">
        submit
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { inject } from "vue";
import { logIn } from "@/composable/UseRestaurant";

const email = ref(null);
const password = ref(null);
let response = ref(null);
const token = ref(null);
const Vue3GoogleOauth = ref(null);
Vue3GoogleOauth.value = inject("Vue3GoogleOauth");
const user = ref(null);
const connection = async () => {
  debugger;
  response.value = await logIn(email.value, password.value);
  if (response.value === true) {
    window.location.href = "http://localhost:8080/";
  }
};
</script>

<style scoped></style>
