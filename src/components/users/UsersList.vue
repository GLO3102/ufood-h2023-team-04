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

import {
  getAllUsersInfo,
  getUserInfoFollowing,
} from "../../composables/useUser";
import Cookies from "js.cookie";

const userInfos = ref([]);
const token = Cookies.get("connectionToken");

const getUserInfo = async () => {
  userInfos.value = await getAllUsersInfo(token.token);
};

/* const getUserInfo = async () => {
  const allUserInfos = await getAllUsersInfo(token.token);
  const followingUserIds = getUserInfoFollowing(token.token, token.id).then(
    (result) => result.map((user) => user.id)
  );
  if (!Array.isArray(followingUserIds)) {
    throw new Error("getUserInfoFollowing did not return an array");
  }
  console.log(followingUserIds);
  const filteredUserInfos = allUserInfos.filter(
    (userInfo) => !followingUserIds.includes(userInfo.id)
  );
  userInfos.value = filteredUserInfos;
}; */

getUserInfo();
</script>
