<!-- eslint-disable prettier/prettier -->
<template>
  <v-container>
    <v-card class="" elevation="0">
      <v-card-item>
        <div id="map" style="height: 600px"></div>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
const map = ref(null);
onMounted(async () => {
  const userLocation = ref(null);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      userLocation.value = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      map.value = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: userLocation.value,
      });
      console.log(userLocation);
    });
  }
});
</script>

<style>
.infowindow-content {
  display: flex;
  align-items: center;
  max-width: 300px;
}

.infowindow-img {
  margin-right: 10px;
}

.infowindow-img img {
  max-width: 100%;
  height: auto;
}

.infowindow-text {
  width: 90%;
  flex-grow: 1;
}

.infowindow-text h2 {
  margin: 0;
  font-weight: bold;
}

.infowindow-text p {
  margin: 0;
}
</style>
