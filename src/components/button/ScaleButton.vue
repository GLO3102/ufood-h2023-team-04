<template>
  <body>
    <div class="d-flex justify-space-around">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Change User </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(user, i) in users" :key="i">
            <v-list-item-title>{{ user.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </body>
</template>

<script>
import { getAllUsersInfo } from "../../api/users.js";

export default {
  name: "ScaleButton",
  data: () => {
    return { users: [] };
  },
  async created() {
    this.users = await getAllUsersInfo();
  },
};
</script>
