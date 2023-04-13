<template>
  <div>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col v-for="id in userInfos" :key="id">
          <v-sheet class="pa-4 ma-6"><UserCard :id="id"></UserCard></v-sheet>
        </v-col>

        <v-responsive width="100%"></v-responsive>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import UserCard from "./UserCard";

import { ref } from "vue";

import { getAllUsersInfo } from "../../composables/useUser";
import Cookies from "js.cookie";

const userInfos = ref([]);
const token = Cookies.get("connectionToken");

const getUserInfo = async () => {
  userInfos.value = await getAllUsersInfo(token.token);
};

getUserInfo();
</script>
