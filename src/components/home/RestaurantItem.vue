<template>
  <v-container class="justify-center text-center">
    <Modal
      @close="toggleModal"
      :modalActive="modalActive"
      :id="id"
      :name="name"
    />
    <v-card elevation="0">
      <v-card-title>{{ name }}</v-card-title>
      <v-card-item>
        <div>{{ formateRating(rating) }}</div>
        <div>{{ formatePriceRange(price_range) }}</div>
        <div>{{ formateTel(tel) }}</div>
        <div>{{ formateGenres(genres) }}</div>
        <div>{{ formateAddress(address) }}</div>
        <div class="flex p-5 justify-center">
          <v-btn class="mr-5 bg-amber-accent-1" @click="goToRestaurantPage(id)"
            >Go to page</v-btn
          >
          <v-btn @click="toggleModal">Give a review</v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-container>
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

<style scoped>
.v-container {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  border: 3px solid #000;
  box-shadow: 10px 15px 0px black;
}
.v-btn {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  border: 3px solid #000;
  box-shadow: 5px 10px 0px black;
}
</style>
