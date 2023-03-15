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
  <v-container>
    <v-card :title="name" class="text-sm" elevation="0">
      <v-card-item>
        <div class="text-xs sm:text-base">{{ formateRating(rating) }}</div>
        <div class="text-xs sm:text-base">
          {{ formatePriceRange(price_range) }}
        </div>
        <div class="text-xs sm:text-base">{{ formateTel(tel) }}</div>
        <div class="text-xs sm:text-base">{{ formateGenres(genres) }}</div>
        <div class="text-xs sm:text-base">{{ formateAddress(address) }}</div>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-container {
  background: white;
  color: #fff;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  border: 3px solid #000;
  box-shadow: 10px 15px 0px black;
}
</style>
