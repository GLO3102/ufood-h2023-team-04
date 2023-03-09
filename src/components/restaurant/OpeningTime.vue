<script setup>
defineProps({ opening_hours: Object });
</script>

<template>
  <div>
    <div>This is the OpeningTime component!</div>
    <div>{{ opening_hours }}</div>
  </div>
</template>
