<template>
  <v-container class="mt-10 mb-5">
    <v-card elevation="0">
      <v-card-item class="text-center"> {{ user.name }} </v-card-item>
      <v-card-item class="text-center"> Score: {{ score }} </v-card-item>
      <v-card-item>
        <UsersFavorite :currentUserID="currentUserID"> </UsersFavorite>
      </v-card-item>
      <v-card-item>
        <UsersVisitedRestaurants></UsersVisitedRestaurants>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script>
import UsersVisitedRestaurants from "../components/users/UsersVisitedRestaurants.vue";
import UsersFavorite from "../components/users/UsersFavorite.vue";
import { getUserInfo, getVisitedRestaurant } from "../composables/useUser.js";

export default {
  data() {
    return {
      user: {},
      score: "0",
    };
  },
  props: {
    currentUserID: {
      type: String,
    },
  },
  components: {
    UsersVisitedRestaurants: UsersVisitedRestaurants,
    UsersFavorite: UsersFavorite,
  },
  async created() {
    this.user = await getUserInfo(this.currentUserID);
    this.score = (await getVisitedRestaurant(this.currentUserID)).total;
  },
};
</script>

<style scoped>
.v-container {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  border: 3px solid #000;
  box-shadow: 10px 15px 0 black;
}
.v-btn {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  border: 3px solid #000;
  box-shadow: 5px 10px 0 black;
}

@media (max-width: 800px) {
  .v-card-item {
    font-size: 15px;
  }

  .v-card-title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
