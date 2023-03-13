<template>
  <div class="pagination" v-if="numPages > 1">
    <v-pagination
      :model-value="currentPageCopy"
      :length="numPages"
      @update:model-value="changePage"
    />
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const itemsPerPage = 10;

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  onUpdateCurrentPage: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);

const currentPageCopy = computed({
  get: () => props.currentPage,
  set: (value) => {
    props.onUpdateCurrentPage(value);
    emit("update:currentPage", value);
  },
});

const displayedItems = computed(() => {
  const start = (currentPageCopy.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.items.slice(start, end);
});

const numPages = computed(() => {
  return Math.ceil(props.items.length / itemsPerPage);
});

const changePage = (page) => {
  props.onUpdateCurrentPage(page);
  emit("update:currentPage", page);
};

const nextPage = () => {
  if (currentPageCopy.value < numPages.value) {
    currentPageCopy.value = currentPageCopy.value + 1;
    emit("update:currentPage", currentPageCopy.value);
  }
};

const previousPage = () => {
  if (currentPageCopy.value > 1) {
    currentPageCopy.value = currentPageCopy.value - 1;
    emit("update:currentPage", currentPageCopy.value);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.previous,
.next {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
