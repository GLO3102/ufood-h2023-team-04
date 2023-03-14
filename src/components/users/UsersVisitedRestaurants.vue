<!--
  <div
              v-if="
                Object.keys(users[$route.params.currentUserID].visits).length >
                0
              "
            >
              <div class="w-full">
                <h3 class="font-medium text-gray-900 text-left px-6">
                  Recent visits
                </h3>
                <div
                  class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
                >
                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
                    v-for="val in users[$route.params.currentUserID].visits"
                    :key="val.name"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt="Profile picture"
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    {{ val.name + " - " + val.amount + " visits" }}
                  </a>
                </div>
                <h3
                  class="font-medium text-gray-900 text-left px-6 py-6 border-t"
                >
                  Favorite restaurants
                </h3>
                <UsersFavorite
                  userID="{{$route.params.currentUserID}}"
                ></UsersFavorite>
              </div>
            </div>
            <div
              class="grid justify-items-center"
              v-if="
                Object.keys(users[$route.params.currentUserID].visits)
                  .length === 0
              "
            >
              <router-link :to="{ name: 'Home' }">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Home
                </button></router-link
              >
            </div>
-->
<template>
  <body>
    <div class="w-full">
      <h3 class="font-medium text-gray-900 text-left px-6">Recent visits</h3>
      <div
        class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
      >
        <a
          href="#"
          class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
          v-for="visit in visits"
          :key="visit"
          ><a>{{ restoName }}</a>
          {{ visit.restaurant_id + " - " + visit.rating + " visits" }}
        </a>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";

import { getUserVisits } from "../../api/users";
import { getRestaurantsNameByID } from "../../api/restaurantsAPI";

const visits = ref([]);
const restoName = ref(null);
const temp = "5f31fc6155d7790550c08afe";

const getRestoName = async () => {
  restoName.value = await getRestaurantsNameByID();
};

const getVisits = async () => {
  visits.value = await getUserVisits();
};

//getRestoName();
getVisits();
console.log(visits);
console.log(restoName);
</script>
