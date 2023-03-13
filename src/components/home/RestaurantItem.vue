<script setup>
import { useRouter } from "vue-router";
import Modal from "./Modal.vue";
import { ref } from "vue";

const router = useRouter();
defineProps({
  name: String,
  tel: String,
  price_range: Number,
  rating: Number,
  genres: Array,
  address: String,
  id: String,
});
const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const goToRestaurantPage = function (id) {
  router.push(`/restaurant/${id}`);
};
const formateRating = function (rating) {
  return `Rating: ${rating.toFixed(1)}/5`;
};

const formatePriceRange = function (price_range) {
  return `Price Range: ${price_range.toFixed(1)}`;
};

const formateGenres = function (genres) {
  const formattedGenres = genres.map((genre) => genre.trim()).join(", ");
  return `Genre: ${formattedGenres}`;
};

const formateTel = function (tel) {
  return `Phone number: ${tel}`;
};

const formateAddress = function (address) {
  return `Address: ${address}`;
};
</script>

<template>
  <div
    class="flex flex-col justify-center text-center border border-neutral-700 rounded bg-neutral-700"
  >
    <Modal @close="toggleModal" :modalActive="modalActive" />
    <v-card :title="name">
      <v-card-item>
        <div>{{ formateRating(rating) }}</div>
        <div>{{ formatePriceRange(price_range) }}</div>
        <div>{{ formateTel(tel) }}</div>
        <div>{{ formateGenres(genres) }}</div>
        <div>{{ formateAddress(address) }}</div>
        <div
          class="text-white bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <v-btn class="mr-2" @click="goToRestaurantPage(id)">Go to page</v-btn>
          <v-btn @click="toggleModal"> Give a review </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>
