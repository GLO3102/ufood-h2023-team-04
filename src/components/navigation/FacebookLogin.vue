<script setup>
import { onMounted, defineComponent } from "vue";

onMounted(() => {
  window.fbAsyncInit = function () {
    FB.init({
      appId: "615464276711662",
      cookie: true,
      xfbml: true,
      version: "v11.0",
    });

    FB.AppEvents.logPageView();
  };
});

const checkLoginState = () => {
  FB.getLoginStatus(function (response) {
    if (response.status === "connected") {
      console.log("Logged in.");
    } else if (response.status === "not_authorized") {
      console.log("Not authorized.");
    } else {
      FB.login(
        function (response) {
          if (response.authResponse) {
            console.log("Logged in.");
          } else {
            console.log("Login cancelled.");
          }
        },
        { scope: "public_profile,email" }
      );
    }
  });
};

const props = defineProps({
  checkLoginState: Boolean,
});
</script>

<template>
  <div>
    <fb:login-button
      scope="public_profile,email"
      @click="checkLoginState()"
    ></fb:login-button>
  </div>
</template>
