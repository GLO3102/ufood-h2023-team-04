<template>
  <transition>
    <div>
      <p>Email <input id="email" /></p>
      <p>Password <input id="password" /></p>
      <v-btn @click="connection">connect</v-btn>
    </div>
  </transition>
</template>
<script setup>
import { ref } from "vue";
import { logIn } from "@/composable/UseRestaurant";

const email = ref(null);
const password = ref(null);
const response = ref(null);
const token = ref(null);

const getEmailAndPassword = () => {
  email.value = document.getElementById("email").value;
  password.value = document.getElementById("password").value;
};

const connection = async () => {
  getEmailAndPassword();
  response.value = await logIn(email.value, password.value);
};
</script>

<style>
p {
  background-color: black;
}
input {
  color: black;
  display: flex;
  justify-self: center;
}
</style>
