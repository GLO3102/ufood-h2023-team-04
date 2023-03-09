<template>
  <iframe
    :src="link"
    width="600"
    height="450"
    frameborder="0"
    style="border: 0"
    allowfullscreen
  ></iframe>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";

const props = defineProps({
  address: String,
});

const currentLocation = ref(null);
const destinationAddress = ref(props.address);
const link = ref(
  `https://www.google.com/maps/embed/v1/place?key=AIzaSyDPwE29SL2uITilVyupqhmj3u1-STknoPU&q=${destinationAddress.value}`
);

const directionLink = computed(() => {
  if (currentLocation.value) {
    return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDPwE29SL2uITilVyupqhmj3u1-STknoPU&origin=${currentLocation.value}&destination=${destinationAddress.value}`;
  } else {
    return link.value;
  }
});

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      currentLocation.value = `${position.coords.latitude},${position.coords.longitude}`;
    });
  }
};

onMounted(getCurrentLocation);

watch(currentLocation, (newLocation) => {
  if (newLocation) {
    link.value = directionLink.value;
  } else {
    link.value = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDPwE29SL2uITilVyupqhmj3u1-STknoPU&q=${destinationAddress.value}`;
  }
});

watch(props, (newProps) => {
  destinationAddress.value = newProps.address;
});
</script>
