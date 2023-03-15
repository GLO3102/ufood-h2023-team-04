<template>
  <v-container>
    <v-card v-if="isLoaded" elevation="0">
      <v-card-item>
        <v-select
          label="Favorite"
          v-model="favortieList"
          :items="getFavoritesNames(favorites)"
          class="text-black"
          variant="solo"
        ></v-select>
      </v-card-item>
      <v-card-item>
        <v-btn @click="addFavoriteToList(favortieList)">
          AddToMyFavorites
        </v-btn>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { addToFavorites, getUserFavorites } from "@/composable/UseRestaurant";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const favorites = ref(null);
let favortieList = ref(null);
let isLoaded = ref(false);
const restoId = route.params.id;
const fetch = async () => {
  favorites.value = (await getUserFavorites("604cc220ef6fa10004dc0179")).items;
  favortieList.value = favorites.value[0].name;
  isLoaded.value = true;
};

const getFavoritesNames = function (array) {
  let favList = [];
  array.forEach(function (item) {
    favList.push(item.name);
  });
  return favList;
};

const getIdByName = function (array, name) {
  let id = null;
  array.forEach(function (item) {
    if (item.name === name) {
      id = item.id;
    }
  });
  console.log(id);
  return id;
};

const addFavoriteToList = async (listName) => {
  await addToFavorites(getIdByName(favorites.value, listName), restoId);
};

fetch();
</script>

<style scoped>
.v-container {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
  border: 3px solid #000;
  box-shadow: 10px 15px 0px black;
}
.v-btn {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  border: 3px solid #000;
  box-shadow: 5px 10px 0px black;
}

input {
  background: white;
  font-family: "Helvetica Neue", Arial, sans-serif;
  border: 3px solid #000;
}
</style>
