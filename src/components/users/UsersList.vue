<template>
  <div>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <UserCard></UserCard>
          <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
        </v-col>
        <v-col>
          <UserCard></UserCard>
          <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
        </v-col>

        <v-responsive width="100%"></v-responsive>

        <v-col>
          <UserCard></UserCard>
          <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
        </v-col>

        <v-col>
          <UserCard></UserCard>
          <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import UserCard from "./UserCard";
///https://vuetifyjs.com/en/components/grids/
</script>
