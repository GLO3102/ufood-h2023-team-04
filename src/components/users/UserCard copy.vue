<template>
  <v-card color="#26c6da" theme="dark" max-width="450">
    <v-card-title>{{ id.name }}</v-card-title>
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      "Turns out semicolon-less style is easier and safer in TS because most
      gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <v-btn
              class="mx-5"
              icon="mdi-account-remove-outline"
              size="small"
              @click="handleDeleteFollower(userInfo.id)"
            ></v-btn>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { getUserInfo } from "../../composables/useUser";

const props = defineProps({
  id: Object,
});

const info = ref([]);

const getInfo = async () => {
  info.value = await getUserInfo(props.id);
};
</script>
