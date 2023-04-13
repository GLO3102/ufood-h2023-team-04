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
        <router-link
          v-if="(response = true)"
          :to="{
            name: 'User',
            params: { currentUserID: '604cc220ef6fa10004dc0179' },
          }"
        >
          submit
        </router-link>
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

import { logIn } from "@/composable/UseRestaurant";

const email = ref(null);
const password = ref(null);
const response = ref(null);
const token = ref(null);

const connection = async () => {
  response.value = await logIn(email.value, password.value);
  console.log(response.value);
};
</script>

<style scoped></style>
