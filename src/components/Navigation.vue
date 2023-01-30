<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Restaurant'}">Restaurant</router-link>
      </li>
      <li>
        <router-link :to="{name:'User', params: {currentUserID: '1'}}">User Profile</router-link>
      </li>
    </ul>
  </nav>
</template>

<style></style>
