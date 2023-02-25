<template>
  <body>
    <div class="d-flex justify-space-around">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Change User </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(user, i) in users" :key="i">
            <v-list-item-title v-for="user in users" :key="user.id">{{
              user.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </body>
</template>

<script>
import { getAllUsersInfo } from "../../api/users";

export default {
  props: {
    users: getAllUsersInfo(),
  },
  methods: {
    setAsCurrent: function () {
      const { name } = this.user;
      this.$emit("setCurrentUser", name);
    },
  },
  setup() {
    const currentUserName = ref(null);
    const { users } = useUsers();

    const setCurrentUser = (user) => {
      currentUserName = user;
    };

    return {
      currentUserName,
      setCurrentUser,
    };
  },
};
</script>
