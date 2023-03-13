<script setup>
import { useRouter } from "vue-router";

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
  <div class="d-flex align-center flex-column">
    <v-card :title="name">
      <v-card-item>
        <div>{{ formateRating(rating) }}</div>
        <div>{{ formatePriceRange(price_range) }}</div>
        <div>{{ formateTel(tel) }}</div>
        <div>{{ formateGenres(genres) }}</div>
        <div>{{ formateAddress(address) }}</div>
        <v-btn @click="goToRestaurantPage(id)">Go to page</v-btn>
      </v-card-item>
    </v-card>
  </div>
</template>
