<template>
  <v-container>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in listeOfAllUsers" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.rating }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
<script setup>
import UserItem from "@/components/home/UserItem.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  listeOfAllUsers: Object,
});
</script>
