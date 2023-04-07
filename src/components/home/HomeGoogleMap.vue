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
import { onMounted, ref, defineProps, withCtx, watchEffect } from "vue";
const map = ref(null);
defineProps({
  locations: Object,
});
const markers = ref([]);
const props = withCtx(() => ({ locations: props.locations }));
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
    });
  }
});

watchEffect(() => {
  if (props.locations) {
    props.locations.forEach((location, i) => {
      const marker = new google.maps.Marker({
        position: { lat: location[0][1], lng: location[0][0] },
        title: `${i + 1}. ${location[1]}`,
        map: map,
      });
      markers.value.push(marker);

      marker.addListener("click", () => {
        const infoWindow = new google.maps.InfoWindow({
          content: `<div class="infowindow-content"><div class="infowindow-img"><img src=${location[3][0]}></div><div class="infowindow-text"><h2>${location[1]}</h2><p>${location[2]}</p></div></div>`,
        });
        infoWindow.open(map, marker);
      });
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
