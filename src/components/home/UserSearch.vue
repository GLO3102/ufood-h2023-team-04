<template>
  <v-container>
    <v-text-field
      type="text"
      placeholder="Users's name"
      v-model="searchValue"
    />

    <v-btn @click="filter(searchValue)"> search! </v-btn>
    <v-btn class="m-2" @click="clear"> clear! </v-btn>
    <ResultOfUserSearch
      v-if="searchMode === true"
      :listeOfAllUsers="filteredList"
    ></ResultOfUserSearch>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { getUsers } from "@/composable/UseRestaurant";
import ResultOfUserSearch from "@/components/home/ResultOfUserSearch.vue";
const listeOfAllUsers = ref(null);
const searchValue = ref(null);
const filteredList = ref(null);
const searchMode = ref(false);
async function fetch() {
  listeOfAllUsers.value = (await getUsers()).items;
}

function clear() {
  searchMode.value = false;
}

function filter(input) {
  debugger;
  if (input) {
    searchMode.value = true;
  }
  filteredList.value = listeOfAllUsers.value.filter((user) => {
    return user.name.includes(input);
  });
}
fetch();
</script>
