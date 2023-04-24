<template>
  <div>
    <Loading :is-loading="!isLoaded" />
    <p v-if="visits.length === 0 && isLoaded">No recent visits</p>
    <v-container class="bg-surface-variant" v-if="isLoaded">
      <v-row no-gutters>
        <v-col v-for="visit in visits" :key="visit">
          <v-sheet class="pa-4 ma-6"
            ><RestaurantUserInformations
              :name="visit.name"
              :comment="visit.comment"
              :rating="visit.rating"
              :date="visit.date" />
            <ModalVisitedReadOnly :id="visit"></ModalVisitedReadOnly
          ></v-sheet>
        </v-col>

        <v-responsive width="100%"></v-responsive>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalVisitedReadOnly from "../users/ModalVisitedReadOnly.vue";
import Loading from "../navigation/Loading.vue";
import RestaurantUserInformations from "./RestaurantUserInformations.vue";
import { getUserVisits } from "../../composables/useUser";
import { getRestaurantsNameByID } from "../../composables/UseRestaurant";
import Cookies from "js.cookie";

const visits = ref([]);
const token = Cookies.get("connectionToken");
const isLoaded = ref(false);

//const props = defineProps({ id: Object, currentUserID: String });

const getVisits = async (token, userID) => {
  const data = await getUserVisits(token, userID);
  visits.value = data;
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
  isLoaded.value = true;
};

getVisits(token.token, token.id);
</script>

<!-- const getVisits = async (userInfos) => {
  userInfos.value.forEach(async (userInfos) => {
    const followerVisitsInfo = await getUserVisits(userInfos.id);
    visits.value = followerVisitsInfo.slice(0, 3);
    console.log(visits.value);
  });
}; -->

<!-- const getInfos = async () => {
  userInfos.value = await getUserInfoFollowers();
  userInfos.value.forEach(async (userInfo) => {
    const data = await getUserVisits(userInfo.id);
    visits.value = data;
    console.log(visits.value);
  });
  console.log(userInfos.value);
  console.log(visits.value);
};
getInfos(userInfos); -->

<!-- const getInfos = async (userInfos) => {
  userInfos.value = await getUserInfoFollowers();
  userInfos.value.forEach(async (userInfo) => {
    const followerVisitsInfo = await getUserVisits(userInfo.id);
    console.log(followerVisitsInfo);
    userInfo["followerVisitsInfo"] = followerVisitsInfo.slice(0, 3);
  });
  console.log(userInfos.value);
};
getInfos(userInfos); -->
