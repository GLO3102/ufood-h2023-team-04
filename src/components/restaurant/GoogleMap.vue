<script setup>
defineProps({
  address: String,
});
</script>

<template>
  <div>
    <div>This is the GoogleMap component!</div>
    <div>{{ address }}</div>
  </div>
</template>
