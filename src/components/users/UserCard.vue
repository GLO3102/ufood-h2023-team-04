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
            ></v-btn>
          </template>
        </v-toolbar>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Recent Visits</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item>
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong> message.from </strong> @ message.time
                </div>
                <div>message.message</div>
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

const props = defineProps({
  id: Object,
});

const info = ref([]);
const visits = ref([]);

const getInfo = async () => {
  info.value = await getUserInfo(props.id);
};

const getVisits = async () => {
  visits.value = await getUserVisits();
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
};
</script>
