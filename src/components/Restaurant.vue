<script setup>
import OpeningTime from "@/components/restaurant/OpeningTime.vue";
import RestaurantInformations from "@/components/restaurant/RestaurantInformations.vue";
import RestaurantImages from "@/components/restaurant/RestaurantImages.vue";
import GoogleMap from "@/components/restaurant/GoogleMap.vue";
import { getRestaurant } from "@/composable/UseRestaurant";
import { ref } from "vue";

const opening_hours = ref(null);
const pictures = ref(null);
const name = ref(null);
const tel = ref(null);
const address = ref(null);
const price_range = ref(null);
const rating = ref(null);
const fetchData = async () => {
  const data = await getRestaurant("5f31fc6155d7790550c08afe");
  opening_hours.value = data.opening_hours;
  pictures.value = data.pictures;
  name.value = data.name;
  tel.value = data.tel;
  address.value = data.address;
  price_range.value = data.price_range;
  rating.value = data.rating;
};

fetchData();
</script>

<template>
  <div>
    <RestaurantInformations
      :name="name"
      :tel="tel"
      :price_range="price_range"
      :rating="rating"
    />
    <OpeningTime :opening_hours="opening_hours" />
    <RestaurantImages :prictures="pictures" />
    <GoogleMap :address="address" />
  </div>
</template>
