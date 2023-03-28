<template>
  <div class="instagram-feed">
    <div v-for="media in mediaList" :key="media.id">
      <img :src="media.media_url" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mediaList = ref([]);

onMounted(async () => {
  const restaurantData = await getRestaurant(route.params.id);
  const instagramUsername = restaurantData.instagram_handle;

  const response = await fetch(
    `https://www.instagram.com/${instagramUsername}/?__a=1`
  );
  const data = await response.json();
  mediaList.value = data.graphql.user.edge_owner_to_timeline_media.edges.map(
    (edge) => edge.node
  );
});
</script>

<style scoped>
.instagram-feed {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.instagram-feed img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>
