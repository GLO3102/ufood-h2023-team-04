<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="option-1">
          <v-icon start> mdi-account </v-icon>
          Option 1
        </v-tab>
        <v-tab value="option-2">
          <v-icon start> mdi-lock </v-icon>
          Option 2
        </v-tab>
        <v-tab value="option-3">
          <v-icon start> mdi-access-point </v-icon>
          Option 3
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text>
              <p>Option 1</p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              <p>Option 2</p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <p>Option 3</p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tab = ref("option-1");
    const options = [
      {
        value: "option-1",
        label: "Option 1",
        icon: "mdi-account",
      },
      {
        value: "option-2",
        label: "Option 2",
        icon: "mdi-lock",
      },
      {
        value: "option-3",
        label: "Option 3",
        icon: "mdi-access-point",
      },
    ];

    return {
      tab,
      options,
    };
  },
};
</script>
