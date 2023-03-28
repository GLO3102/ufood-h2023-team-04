<template>
  <v-card>
    <v-toolbar color="red">
      <v-toolbar-title
        >User Profile
        <v-card-item class="text-center"> {{ user.name }} </v-card-item>
        <v-card-item class="text-center"> Score: {{ score }} </v-card-item>
      </v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="red">
        <v-tab value="option-1">
          <v-icon start> mdi-star</v-icon>
          Favorites
        </v-tab>
        <v-tab value="option-2">
          <v-icon start>mdi-account-star </v-icon>

          Followers
        </v-tab>
        <v-tab value="option-3">
          <v-icon start>mdi-account-plus-outline </v-icon>

          Following
        </v-tab>
        <v-tab value="option-4">
          <v-icon start> mdi-history </v-icon>
          Recent visits
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text>
              <p>
                <UsersFavorite :currentUserID="currentUserID"> </UsersFavorite>
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              <p><Followers></Followers></p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <p><UsersVisitedRestaurants></UsersVisitedRestaurants></p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import UsersVisitedRestaurants from "../components/users/UsersVisitedRestaurants.vue";
import UsersFavorite from "../components/users/UsersFavorite.vue";
import Followers from "../components/users/follow/Followers.vue";
import { getUserInfo, getVisitedRestaurant } from "../api/users.js";

export default {
  components: {
    UsersVisitedRestaurants,
    UsersFavorite,
    Followers,
  },
  props: {
    currentUserID: {
      type: String,
    },
  },
  setup(props) {
    const state = reactive({
      user: {},
      score: "0",
    });
    const tab = ref("option-1");
    const options = [
      {
        value: "option-1",
        label: "Option 1",
        icon: "mdi-star",
      },
      {
        value: "option-2",
        label: "Option 2",
        icon: "mdi-account-star",
      },
      {
        value: "option-3",
        label: "Option 3",
        icon: "mdi-account-plus-outline",
      },
      {
        value: "option-4",
        label: "Option 4",
        icon: "mdi-history",
      },
    ];

    onMounted(async () => {
      state.user = await getUserInfo(props.currentUserID);
      state.score = (await getVisitedRestaurant(props.currentUserID)).total;
    });

    return {
      ...toRefs(state),
      tab,
      options,
    };
  },
};
</script>

<!-- <style scoped>
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
</style> -->
