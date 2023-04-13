<template>
  <v-card>
    <v-toolbar color="red">
      <v-toolbar-title class="d-flex flex-row">
        <v-card-item> {{ user.name }} </v-card-item>
        <v-card-item> Score: {{ score }} </v-card-item>
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
        <v-tab value="option-5">
          <v-icon start> mdi-account-box-multiple-outline </v-icon>
          Users List
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text>
              <p>
                <UsersFavorite :currentUserID="currentUserID"></UsersFavorite>
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              <p>
                <FollowersCard :currentUserID="currentUserID"></FollowersCard>
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <p>
                <FollowingCard :currentUserID="currentUserID"></FollowingCard>
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-4">
          <v-card flat>
            <v-card-text>
              <p>
                <UsersVisitedRestaurants
                  :currentUserID="currentUserID"
                ></UsersVisitedRestaurants>
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-5">
          <v-card flat>
            <v-card-text>
              <p><UsersList :currentUserID="currentUserID"></UsersList></p>
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
import UsersList from "../components/users/UsersList.vue";
import FollowersCard from "../components/users/follow/FollowersCard.vue";
import FollowingCard from "../components/users/follow/FollowingCard.vue";
import { getUserInfo, getVisitedRestaurant } from "../api/users.js";
import Cookies from "js.cookie";

export default {
  components: {
    UsersVisitedRestaurants,
    UsersFavorite,
    FollowersCard,
    FollowingCard,
    UsersList,
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
      {
        value: "option-5",
        label: "Option 5",
        icon: "mdi-account-box-multiple-outline",
      },
    ];

    /*  onMounted(async () => {
      state.user = await getUserInfo(props.currentUserID);
      state.score = (await getVisitedRestaurant(props.currentUserID)).total;
    }); */

    return {
      ...toRefs(state),
      tab,
      options,
    };
  },
  async created() {
    const token = Cookies.get("connectionToken");
    console.log(token.value);
    this.user = await getUserInfo(token.id);

    //Valide si visitedRestaurantData est undefined
    const visitedRestaurantData = await getVisitedRestaurant(token.id);
    console.log(visitedRestaurantData);
    if (visitedRestaurantData && visitedRestaurantData.total) {
      state.score = visitedRestaurantData.total;
    }
    /* this.score = await getVisitedRestaurant(token.id);
    console.log(this.score); */
  },

  //state.user = await getUserInfo(props.currentUserID);
  //state.score = (await getVisitedRestaurant(props.currentUserID)).total;
};
</script>
