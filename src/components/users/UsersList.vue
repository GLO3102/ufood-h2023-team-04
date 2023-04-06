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
///https://vuetifyjs.com/en/components/grids/

import { ref } from "vue";

import { getAllUsersInfo } from "../../api/users";

const userInfos = ref([]);

const getUserInfo = async () => {
  userInfos.value = await getAllUsersInfo();
};

getUserInfo();
</script>
