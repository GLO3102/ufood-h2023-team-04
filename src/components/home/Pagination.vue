<template>
  <v-pagination
    v-model="currentPageProxy"
    :length="numPages"
    @input="changePage"
  />
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const itemsPerPage = 10;

const displayedItems = computed(() => {
  const start = (props.currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.items.slice(start, end);
});

const numPages = computed(() => {
  return Math.ceil(props.items.length / itemsPerPage);
});

const changePage = (page) => {
  emits("page-changed", page);
  emits("update:currentPage", page);
};

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["page-changed", "update:currentPage"]);

const currentPageProxy = computed({
  get() {
    return props.currentPage;
  },
  set(value) {
    emits("update:currentPage", value);
  },
});
</script>

<style scoped>
/* Add any custom styles you need here */
</style>
