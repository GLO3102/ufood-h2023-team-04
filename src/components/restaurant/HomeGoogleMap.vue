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
import { getRestaurants } from "../../composables/UseRestaurant";

onMounted(async () => {
  const quebec = { lat: 46.8130816, lng: -71.2074596 };
  const locations = [];
  const userLocation = ref(null);

  const fetchRestaurants = async () => {
    const data = await getRestaurants();
    for (let i = 0; i < data.items.length; i++) {
      const restaurant = data.items[i];
      const names = restaurant.name;
      const addresses = restaurant.address;
      const coordinates = restaurant.location.coordinates;
      const photos = restaurant.pictures;
      locations.push([coordinates, names, addresses, photos]);
    }
    console.log(locations);
  };

  await fetchRestaurants();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      userLocation.value = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: userLocation.value,
      });
      console.log(userLocation); // This will log the user's current latitude and longitude

      const markers = [];

      locations.forEach((location, i) => {
        const marker = new google.maps.Marker({
          position: { lat: location[0][1], lng: location[0][0] },
          title: `${i + 1}. ${location[1]}`,
          map: map,
        });
        markers.push(marker);

        marker.addListener("click", () => {
          const infoWindow = new google.maps.InfoWindow({
            content: `<div class="infowindow-content"><div class="infowindow-img"><img src=${location[3][0]}></div><div class="infowindow-text"><h2>${location[1]}</h2><p>${location[2]}</p></div></div>`,
          });
          infoWindow.open(map, marker);
        });
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
