<script setup>
defineProps({ opening_hours: Object });

const formateDate = function (day, value) {
  return `${day.toUpperCase()} : ${value}`;
};
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col v-for="(value, day) in opening_hours" :key="day" cols="7">
        <v-sheet class="ma-2 pa-2">{{ formateDate(day, value) }}</v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
