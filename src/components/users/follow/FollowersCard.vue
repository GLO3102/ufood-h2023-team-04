<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400" color="blue-lighten-1">
        <v-toolbar color="blue-darken-2">
          <template v-slot:prepend>
            <v-btn icon="$menu"></v-btn>
          </template>

          <v-toolbar-title class="text-h6" v-for="id in userInfos" :key="id">
            {{ id.name + " - " + id.email }}
          </v-toolbar-title>

          <template v-slot:append
            ><v-btn class="ma-2" color="black"></v-btn>
          </template>
        </v-toolbar>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Recent Visits</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              size="x-small"
              v-for="userInfo in userInfos"
              :key="userInfo"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong> visit.name </strong>
                </div>
                <div>visit.comment</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

import { getUserInfoFollowers } from "../../../composables/useUser";
import { getUserVisits } from "../../../api/users";

const userInfos = ref([]);
const visits = ref([]);

const props = defineProps({ id: Object, currentUserID: String });

const getInfos = async (currentUserID) => {
  const data = await getUserInfoFollowers(currentUserID);
  userInfos.value = data;
  userInfos.value.forEach(async (userInfo) => {
    const followerVisitsInfo = await getUserVisits(userInfo.id);
    userInfo["test32"] = followerVisitsInfo.slice(0, 3);
  });
};
getInfos(props.currentUserID);

/* const getVisits = async (id) => {
  const response = await getUserVisits(id);
  visits.value = response.slice(0, 3);
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
};
getVisits(props.id.id); */
</script>
