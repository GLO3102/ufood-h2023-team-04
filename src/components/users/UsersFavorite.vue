<template>
  <body>
    <div class="w-full">
      <span>{{ userID }}</span>
    </div>
  </body>
</template>

<script>
/* eslint-disable */
import { ref } from "vue";
import { getUserFavoriteLists } from "../../api/users";

export default {
  data: () => ({
    data: false,
    isDisabled: true,
  }),
  props: () => ({
    userID: String,
  }),
};
</script>
