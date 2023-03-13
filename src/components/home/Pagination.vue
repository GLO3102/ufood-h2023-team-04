<template>
  <div class="pagination">
    <button
      class="previous"
      :disabled="currentPageProxy === 1"
      @click="currentPageProxy--"
    >
      Previous
    </button>
    <v-pagination
      v-if="numPages > 1"
      v-model="currentPageProxy"
      :length="numPages"
      @input="changePage"
    />
    <button
      class="next"
      :disabled="currentPageProxy === numPages"
      @click="currentPageProxy++"
    >
      Next
    </button>
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
  "onUpdate:currentPage": {
    type: Function,
    required: true,
  },
});

const emits = defineEmits(["page-changed", "update:currentPage"]);

const currentPageProxy = computed({
  get() {
    return props.currentPage;
  },
  set(value) {
    props["onUpdate:currentPage"](value);
  },
});

const displayedItems = computed(() => {
  const start = (currentPageProxy.value - 1) * itemsPerPage;
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

const nextPage = () => {
  if (currentPage.value < numPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
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

.previous: disabled, .next;
</style>
