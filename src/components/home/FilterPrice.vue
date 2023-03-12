<template>
  <v-container>
    <v-btn @click="isExpanded = !isExpanded">
      {{ isExpanded ? "CLOSE" : "FILTER PRICE" }}
    </v-btn>
    <div v-if="isExpanded">
      <v-slider
        v-model="value"
        :min="0"
        :max="maxPrice"
        :step="1"
        @click="emit('filterPriceValue', value)"
        thumb-label
      ></v-slider>
      <div class="flex flex-row justify-space-between">
        <div>$0</div>
        <div>{{ value }}</div>
        <div>${{ maxPrice }}</div>
      </div>
      <v-btn @click="clearSelection" v-if="value !== 0">
        CLEAR SELECTION
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  maxPrice: Number,
});

const emit = defineEmits(["filterPriceValue"]);

let value = ref(0);
const isExpanded = ref(false);

const clearSelection = function () {
  value.value = 0;
  emit("filterPriceValue", value.value);
};
</script>

<style scoped></style>
