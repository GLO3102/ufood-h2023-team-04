<script setup>
import OpeningTime from "@/components/restaurant/OpeningTime.vue";
import RestaurantInformations from "@/components/restaurant/RestaurantInformations.vue";
import RestaurantImages from "@/components/restaurant/RestaurantImages.vue";
import GoogleMap from "@/components/restaurant/GoogleMap.vue";
import { getRestaurant } from "@/composables/UseRestaurant";
import { ref } from "vue";
import { useRoute } from "vue-router";
import AddToFavorite from "@/components/restaurant/AddToFavorite.vue";
import Suggestions from "@/components/restaurant/Suggestions.vue";
import { getAllRestaurants } from "@/composables/useRestaurantsForUser";
import { getRestaurants } from "@/composable/UseRestaurant";

const opening_hours = ref(null);
const pictures = ref();
const name = ref(null);
const tel = ref(null);
const address = ref(null);
const price_range = ref(null);
const rating = ref(null);
const genres = ref(null);
let isLoaded = ref(false);
const restoId = ref(null);

const route = useRoute();
const listeAllRestos = ref(null);
const listeRestoFiltered = ref(null);

const fetchData = async () => {
  const data = await getRestaurant(route.params.id);
  opening_hours.value = data.opening_hours;
  pictures.value = data.pictures;
  name.value = data.name;
  tel.value = data.tel;
  address.value = data.address;
  price_range.value = data.price_range;
  rating.value = data.rating;
  genres.value = data.genres;
  isLoaded.value = true;
  const allRestos = (await getRestaurants()).items;
  listeRestoFiltered.value = filter(allRestos);
};

const filter = function (restaurants) {
  let filtered;
  if (genres.value !== "any") {
    filtered = restaurants.filter((restaurant) =>
      restaurant.genres.includes(genres.value)
    );
  }
  if (price_range.value !== 0) {
    filtered = restaurants.filter(
      (restaurant) => restaurant.price_range === price_range.value
    );
  }
  return filtered;
};

fetchData();
</script>

<template>
  <v-container class="justify-center mt-2">
    <v-row>
      <v-col>
        <RestaurantInformations
          v-if="isLoaded"
          :name="name"
          :tel="tel"
          :price_range="price_range"
          :rating="rating"
          :address="address"
          :genres="genres"
        />
        <RestaurantImages v-if="isLoaded" :pictures="pictures" class="mt-10" />
        <OpeningTime
          v-if="isLoaded"
          :opening_hours="opening_hours"
          class="mt-10"
        />
        <GoogleMap v-if="isLoaded" :address="address" class="mt-10" />
        <AddToFavorite v-if="isLoaded" class="mt-10 mb-5"></AddToFavorite>
        <Suggestions :filtered-resto="listeRestoFiltered"></Suggestions>
      </v-col>
    </v-row>
  </v-container>
</template>
