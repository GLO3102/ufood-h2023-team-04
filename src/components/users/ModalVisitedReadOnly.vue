<template>
  <div class="text-right">
    <v-btn icon="mdi-open-in-new" color="primary" @click="dialog = true">
    </v-btn>

    <v-dialog persistent v-model="dialog" width="auto">
      <v-card>
        <v-card-item>{{ id.name }}</v-card-item>
        <v-card-item>Date: {{ id.date }}</v-card-item>
        <v-card-item>Comment: {{ id.comment }}</v-card-item>
        <v-card-item>Rating: {{ id.rating }} stars</v-card-item>
        <v-card-item></v-card-item>
        <v-card-item></v-card-item>
        <v-card-item></v-card-item>

        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getVisitInformation } from "../../api/users";

const props = defineProps({
  id: Object,
});

const dialog = ref(false);
const visitInfo = ref([]);

const getVisitInfo = async () => {
  visitInfo.value = await getVisitInformation(props.id);
};
</script>
