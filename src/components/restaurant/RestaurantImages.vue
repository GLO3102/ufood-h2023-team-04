<script setup>
defineProps({ pictures: Array });
</script>

<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="picture in pictures"
        :key="picture"
        :src="picture"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
