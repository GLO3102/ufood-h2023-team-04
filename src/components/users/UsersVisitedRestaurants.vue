<template>
  <div>
    <div class="w-full">
      <div
        class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"
      >
        <a
          href="#"
          class="w-full text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150"
          v-for="visit in visits"
          :key="visit"
        >
          {{ visit.name + " - " + visit.rating + " Stars"
          }}<ModalVisitedReadOnly :id="visit" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ModalVisitedReadOnly from "../users/ModalVisitedReadOnly.vue";

import { getUserVisits } from "../../api/users";
import { getRestaurantsNameByID } from "../../api/restaurantsAPI";

const visits = ref([]);

defineProps({ id: Object });

const getVisits = async () => {
  visits.value = await getUserVisits();
  visits.value.forEach(async (visit) => {
    const name = await getRestaurantsNameByID(visit.restaurant_id);
    visit["name"] = name;
  });
};

getVisits();
</script>
