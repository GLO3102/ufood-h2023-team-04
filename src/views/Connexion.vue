<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field v-model="email" label="email" :rules="rules"></v-text-field>
      <v-text-field
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

import { logIn } from "@/composable/UseRestaurant";

const email = ref(null);
const password = ref(null);
let response = ref(null);
const token = ref(null);

const connection = async () => {
  response.value = await logIn(email.value, password.value);
  if (response.value === true) {
    window.location.href = "http://localhost:8081/";
  }
};
</script>

<style scoped></style>
