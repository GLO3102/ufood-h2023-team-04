<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  name: String,
  id: String,
});

const router = useRouter();
console.log(router.getRoutes());
function GoToPage(id) {
  router.push(`/restaurant/${id}`);
  location.href = `http://localhost:8080/restaurant/${id}`;
}
</script>

<template>
  <v-slide-group-item v-slot="{ isSelected, selectedClass }">
    <v-card
      color="grey-lighten-1"
      :class="['ma-4', selectedClass]"
      height="200"
      width="100"
      @click="GoToPage(id)"
    >
      {{ name }}
      <div class="d-flex fill-height align-center justify-center">
        <v-scale-transition>
          <v-icon
            v-if="isSelected"
            color="white"
            size="48"
            icon="mdi-close-circle-outline"
          ></v-icon>
        </v-scale-transition>
      </div>
    </v-card>
  </v-slide-group-item>
</template>
