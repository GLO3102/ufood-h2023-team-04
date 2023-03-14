<script setup>
defineProps({ pictures: Array });
</script>

<template>
  <v-container>
    <v-card class="" elevation="24">
      <v-card-item>
        <v-carousel class="rounded border-lg" hide-delimiters>
          <v-carousel-item
            v-for="picture in pictures"
            :key="picture"
            :src="picture"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-card-item>
    </v-card>
  </v-container>
</template>
