<script setup>
defineProps({
  name: String, //ok
  tel: String, //ok
  price_range: Number, //ok
  rating: Number, //ok
  genres: Array, //ok
  address: String, //ok
});
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
      </v-card-item>
    </v-card>
  </div>
</template>
