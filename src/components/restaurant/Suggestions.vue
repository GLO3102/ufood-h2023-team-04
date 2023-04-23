<script setup>
import SuggestionItem from "@/components/restaurant/SuggestionItem.vue";

const props = defineProps({
  filteredResto: Object,
  genre: String,
  price_range: String,
});
console.log(props.filteredResto);
</script>
<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    Restaurants similaires
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <SuggestionItem
        v-for="(resto, index) in filteredResto"
        :key="index"
        :name="resto.name"
        :id="resto.id"
      ></SuggestionItem>
    </v-slide-group>
  </v-sheet>
</template>
