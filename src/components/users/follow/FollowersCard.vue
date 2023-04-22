<template>
  <div>
    <div class="w-full">
      <div
        class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
      >
        <a
          href="#"
          class="w-full text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
          v-for="id in userInfos"
          :key="id"
          >{{ id.name + " - " + id.email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Cookies from "js.cookie";

import { getUserInfoFollowers } from "../../../composables/useUser";

const userInfos = ref([]);
const token = Cookies.get("connectionToken");

defineProps({ id: Object });

const getInfos = async () => {
  userInfos.value = await getUserInfoFollowers(token.token, token.id);
};
getInfos();
</script>
