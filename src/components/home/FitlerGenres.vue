<template>
  <div>
    <div>
      <v-btn @click="isExpanded = !isExpanded">
        {{ isExpanded ? "CLOSE" : "FILTER GENRES" }}
      </v-btn>
    </div>
    <div v-if="isExpanded">
      <v-list v-for="genre in allGenres" :key="genre">
        <label>
          <input
            type="checkbox"
            :value="genre"
            v-model="selectedGenres"
            @change="emit('filterGenresValue', selectedGenres)"
          />
          {{ genre }}
        </label>
      </v-list>
      <v-btn v-if="selectedGenres.length" @click="clearSelection"
        >Clear Selection</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ allGenres: Array });
const emit = defineEmits(["filterGenresValue"]);

const selectedGenres = ref([]);
const isExpanded = ref(false);

const clearSelection = () => {
  selectedGenres.value = [];
  emit("filterGenresValue", selectedGenres.value);
};
</script>

<style scoped></style>
