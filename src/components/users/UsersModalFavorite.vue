<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4">
      <div class="bg-white rounded-lg shadow-lg px-6 py-4">
        <h2 class="text-lg font-medium mb-2">Add a new restaurant</h2>
        <div class="mt-4">
          <label
            for="restaurant-id"
            class="block text-gray-700 font-medium mb-2"
            >Restaurant Name</label
          >
          <select
            v-model="restaurantID"
            id="restaurant-id"
            name="restaurant-id"
            class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option v-for="val of restaurantList" :key="val.id" :value="val.id">
              {{ val.name }}
            </option>
          </select>
        </div>
        <div class="mt-6">
          <button
            @click="submitNewRestaurant"
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Restaurant
          </button>
          <button
            @click="closeModal"
            type="button"
            class="ml-3 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllRestaurants } from "../../api/restaurantsAPI";
export default {
  data() {
    return {
      restaurantID: "",
      restaurantList: [],
    };
  },
  methods: {
    submitNewRestaurant() {
      this.$emit("addedRestaurent", this.restaurantID);
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
  async created() {
    this.restaurantList = await getAllRestaurants();
    // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    this.restaurantList.sort((a, b) => a.name.localeCompare(b.name));
  },
};
</script>
