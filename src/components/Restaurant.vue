<script setup>
import OpeningTime from "@/components/restaurant/OpeningTime.vue";
import RestaurantInformations from "@/components/restaurant/RestaurantInformations.vue";
import RestaurantImages from "@/components/restaurant/RestaurantImages.vue";
import GoogleMap from "@/components/restaurant/GoogleMap.vue";
import { getRestaurant } from "@/composable/UseRestaurant";
import { ref } from "vue";

const opening_hours = ref(null);
const pictures = ref();
const name = ref(null);
const tel = ref(null);
const address = ref(null);
const price_range = ref(null);
const rating = ref(null);
const genres = ref(null);
let isLoaded = ref(false);

const fetchData = async () => {
  const data = await getRestaurant("5f31fc6155d7790550c08afe");
  opening_hours.value = data.opening_hours;
  pictures.value = data.pictures;
  name.value = data.name;
  tel.value = data.tel;
  address.value = data.address;
  price_range.value = data.price_range;
  rating.value = data.rating;
  genres.value = data.genres;
  isLoaded.value = true;
};

fetchData();
</script>

<template>
  <div>
    <RestaurantInformations
      v-if="isLoaded"
      :name="name"
      :tel="tel"
      :price_range="price_range"
      :rating="rating"
      :address="address"
      :genres="genres"
    />
    <OpeningTime v-if="isLoaded" :opening_hours="opening_hours" />
    <RestaurantImages v-if="isLoaded" :pictures="pictures" />
    <GoogleMap v-if="isLoaded" :address="address" />
  </div>
</template>
