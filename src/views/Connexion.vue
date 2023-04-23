<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field
        v-model="email"
        label="email"
        :rules="rules"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
        :rules="rules"
        type="password"
      ></v-text-field>

      <v-btn type="submit" @click="connection" block class="mt-2">
        submit
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@/router";
import { logIn } from "@/composables/UseRestaurant";
import Cookies from "js.cookie";

const email = ref(null);
const password = ref(null);
const response = ref(null);
const token = ref(null);

const connection = async () => {
  console.log(email.value);
  console.log(password.value);
  response.value = await logIn(email.value, password.value);
  const user_id = Cookies.get("connectionToken").id;
  if (response.value) {
    router.push({ name: "User", params: { currentUserID: user_id } });
  }
};
</script>

<style scoped></style>
