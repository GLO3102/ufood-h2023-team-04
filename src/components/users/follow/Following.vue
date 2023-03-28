<template>
  <div>
    <div class="w-full">
      <div
        class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
      >
        <a
          href="#"
          class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
          v-for="id in userInfos"
          :key="id"
          >Coucou {{ id.name + " - " + id.email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { getUserInfoFollowing } from "../../../composables/useUser";

const userInfos = ref([]);

defineProps({ id: Object });

const getInfos = async () => {
  userInfos.value = await getUserInfoFollowing();
  userInfos.value;
};
getInfos();
</script>
