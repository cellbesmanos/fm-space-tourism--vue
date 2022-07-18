<template>
  <TheNagivation />

  <main>
    <router-view :key="route.path"></router-view>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import TheNagivation from "./components/TheNagivation.vue";

const route = useRoute();
</script>
