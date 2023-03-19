<template>
  <div>
    <div class="w-full">
      <h3 class="font-medium text-gray-900 text-left px-6">Recent visits</h3>
      <div
        class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
      >
        <a
          href="#"
          class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
          v-for="visit in visits"
          :key="visit"
        >
          {{ visit.name + " - " + visit.rating + " visits" }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { getUserVisits } from "../../composables/useUser";
import { getRestaurantsNameByID } from "../../composables/useRestaurantsForUser";

const visits = ref([]);

const getVisits = async () => {
  visits.value = await getUserVisits();
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
};

getVisits();
</script>
