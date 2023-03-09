<script setup>
defineProps({ pictures: Array });
</script>

<template>
  <div>
    <div>This is the RestaurantImages component!</div>
    <div v-for="picture in pictures" :key="picture">{{ picture }}</div>
  </div>
</template>
