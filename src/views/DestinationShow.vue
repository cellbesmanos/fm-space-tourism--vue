<template>
  <article class="destination-show">
    <h1><span aria-hidden="true">01</span>Pick your destination</h1>

    <Destination />
  </article>
</template>

<script setup>
import Destination from "@/components/Destination.vue";
</script>

<style>
.destination-show {
  --margin-bottom: 3.2rem;
}

.destination-show h1 {
  margin-block-end: var(--margin-bottom);
  text-align: center;
}
</style>
