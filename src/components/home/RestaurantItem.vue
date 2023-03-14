<template>
  <div
    class="flex flex-col justify-center text-center border border-neutral-700 rounded bg-neutral-700"
  >
    <Modal @close="toggleModal" :modalActive="modalActive" />
    <v-card class="text-white">
      <v-card-title class="bg-neutral-700">{{ name }}</v-card-title>
      <v-card-item class="bg-neutral-500">
        <div>{{ formateRating(rating) }}</div>
        <div>{{ formatePriceRange(price_range) }}</div>
        <div>{{ formateTel(tel) }}</div>
        <div>{{ formateGenres(genres) }}</div>
        <div>{{ formateAddress(address) }}</div>
        <div
          class="text-white mx-auto bg-neutral-700 focus:outline-none focus:ring-4 focus:neutral-700 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-gray-700 dark:border-gray-700 sm:w-3/5 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <v-btn class="mr-2" @click="goToRestaurantPage(id)">Go to page</v-btn>
          <v-btn @click="toggleModal">Give a review</v-btn>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Modal from "@/components/home/Modal.vue";
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
