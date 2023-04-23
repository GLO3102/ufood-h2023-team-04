<template>
  <v-sheet width="300" class="mx-auto mt-5">
    <h2 class="text-center mb-4">SignUp</h2>
    <v-form validate-on="submit" @submit.prevent="submit">
      <!-- Add v-alert component -->
      <v-alert v-if="alert.show" :type="alert.type" class="mb-4">
        {{ alert.message }}
      </v-alert>
      <v-text-field
        v-model="name"
        label="Name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        :rules="emailRules"
        required
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        :rules="passwordRules"
        required
        type="password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref, reactive } from "vue";
import { signUp } from "@/composables/useUserSession";

const name = ref(null);
const email = ref(null);
const password = ref(null);

// Add alert state
const alert = reactive({
  show: false,
  message: "",
  type: "",
});

const nameRules = [
  (value) => !!value || "This field is required.",
  (value) =>
    (value && value.length >= 3) || "Name must be at least 3 characters long.",
];

const emailRules = [
  (value) => !!value || "This field is required.",
  (value) => {
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return (
      (value && emailRegex.test(value)) ||
      "Email must be in the format a.b@c.d or a@b.c"
    );
  },
];

const passwordRules = [
  (value) => !!value || "This field is required.",
  (value) =>
    (value && value.length >= 10) ||
    "Password must be at least 10 characters long.",
  (value) =>
    (value && /[A-Z]/.test(value)) ||
    "Password must contain at least one uppercase letter.",
  (value) =>
    (value && /\d/.test(value)) || "Password must contain at least one number.",
];

const submit = async () => {
  if (name.value && email.value && password.value) {
    try {
      const response = await signUp(name.value, email.value, password.value);
      alert.show = true;
      alert.type = "success";
      alert.message = "Successfully signed up!";
      console.log(response);
    } catch (error) {
      alert.show = true;
      alert.type = "error";
      alert.message =
        error.message || "An error occurred during the signUp process.";
    }
  }
};
</script>
