<script setup>
defineProps({
  name: String,
  tel: String,
  price_range: Number,
  rating: Number,
});
</script>

<template>
  <div>
    <div>Name</div>
    <div>This is the RestaurantInformations component!</div>
    <div>{{ name }}</div>
    <div>{{ tel }}</div>
    <div>{{ price_range }}</div>
    <div>{{ rating }}</div>
  </div>
</template>
