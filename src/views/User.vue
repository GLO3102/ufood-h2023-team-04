<template>
  <body class="bg-gradient-to-r from-teal-600 to-teal-300 antialiased">
    <div class="h-screen">
      <div>
        <div
          class="bg-white relative shadow rounded-lg w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto top-24"
        >
          <div class="flex justify-center">
            <img
              src="https://avatarfiles.alphacoders.com/231/231277.jpg"
              alt=""
              class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div class="mt-16">
            <h1 class="font-bold text-center text-3xl text-gray-900"></h1>
            <p class="text-center">
              <span> {{ user.name }} </span>
            </p>

            <div class="flex justify-between items-center my-5 px-6">
              <a
                class="text-gray-500 bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Score: {{ score }}</a
              >
            </div>
          </div>
          <UsersVisitedRestaurants></UsersVisitedRestaurants>
          <UsersFavorite :currentUserID="currentUserID"></UsersFavorite>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import UsersVisitedRestaurants from "../components/users/UsersVisitedRestaurants.vue";
import UsersFavorite from "../components/users/UsersFavorite.vue";
import { getUserInfo, getVisitedRestaurant } from "../api/users.js";

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

<style></style>
