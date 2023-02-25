<template>
  <body>
    <div class="d-flex justify-space-around">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Scale Transition </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </body>
</template>

<script>
import { getAllUsersInfo } from "../../api/users";

export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
