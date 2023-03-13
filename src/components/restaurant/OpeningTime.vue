<script setup>
defineProps({ opening_hours: Object });

const formateDay = function (day) {
  return `${day.toUpperCase()}`;
};
const formateHours = function (hours) {
  if (!hours) {
    hours = "CLOSED";
  }
  return hours;
};
</script>

<template>
  <v-container>
    <div class="text-center font-bold">WEEKLY SCHEDULE</div>
    <v-row no-gutters class="justify-center">
      <v-col
        v-for="(hours, day) in opening_hours"
        :key="day"
        cols="7"
        class="border-md m-1"
      >
        <v-sheet class="ma-1 pa-1 text-center">
          <div>{{ formateDay(day) }}</div>
          <div>{{ formateHours(hours) }}</div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
