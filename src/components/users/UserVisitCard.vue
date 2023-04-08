<template>
  <v-card
    class="mx-auto"
    color="grey"
    theme="dark"
    min-width="300"
    max-width="400"
    title="Review"
    >{{ id.name }}
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2"> " {{ id.comment }} " </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend> </template>

        <v-list-item-title> Date: {{ id.date }}</v-list-item-title>

        <v-list-item-subtitle></v-list-item-subtitle>

        <template v-slot:append>
          <div>
            <v-icon class="me-1"></v-icon>
            <span class="me-1">Rating: {{ id.rating }} stars</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { getVisitInformation } from "../../api/users";

const props = defineProps({
  id: Object,
});

const visitInfo = ref([]);

const getVisitInfo = async () => {
  visitInfo.value = await getVisitInformation(props.id);
};
</script>
