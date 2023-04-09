<template>
  <div>
    <v-container class="bg-surface-variant">
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

import RestaurantUserInformations from "./RestaurantUserInformations.vue";
import { getUserVisits } from "../../api/users";
import { getRestaurantsNameByID } from "../../api/restaurantsAPI";

const visits = ref([]);

const props = defineProps({ id: Object, currentUserID: String });

const getVisits = async (currentUserID) => {
  const data = await getUserVisits(currentUserID);
  visits.value = data;
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
};

getVisits(props.currentUserID);
</script>
