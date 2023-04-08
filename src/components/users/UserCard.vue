<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="300" color="blue-lighten-1">
        <v-toolbar color="blue-darken-2">
          <template v-slot:prepend>
            <v-btn icon="$menu"></v-btn>
          </template>

          <v-toolbar-title class="text-h6">
            {{ id.name }}
          </v-toolbar-title>

          <template v-slot:append
            ><v-btn
              class="ma-2"
              color="black"
              icon="mdi-account-plus-outline"
              @click="handleFollowUser(id.id)"
            ></v-btn>
          </template>
        </v-toolbar>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Recent Visits</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              size="x-small"
              v-for="visit in visits"
              :key="visit"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong> {{ visit.name }} </strong>
                </div>
                <div>{{ visit.comment }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
//https://vuetifyjs.com/en/components/cards/
import { ref } from "vue";
import { getUserInfo } from "../../composables/useUser";

import { getUserVisits } from "../../api/users";
import { getRestaurantsNameByID } from "../../api/restaurantsAPI";
import { followUser } from "../../composables/useUser";

const props = defineProps({
  id: Object,
});

//const info = ref([]);
const visits = ref([]);

//const getInfo = async () => {
//  info.value = await getUserInfo(props.id);
//};

const handleFollowUser = async (id) => {
  await followUser(id);
  console.log(id);
  //Doit vérifier cette ligne
  //userInfos.value = userInfos.value.filter((userInfo) => userInfo.id !== id);
};

const getVisits = async (id) => {
  const response = await getUserVisits(id);
  visits.value = response.slice(0, 3);
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
};
getVisits(props.id.id);
</script>
