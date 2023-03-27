<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field v-model="name" label="name" :rules="rules"></v-text-field>
      <v-text-field v-model="email" label="email" :rules="rules"></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
        :rules="rules"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const name = ref(null);
const email = ref(null);
const password = ref(null);
</script>

<style scoped></style>
