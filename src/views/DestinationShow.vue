<template>
  <article>
    <section>
      <ul>
        <li v-for="{ name } in destinations" :key="name">
          <button
            @click="toggleActiveDestination(name)"
            :class="{ active: name === activeDestination }"
            type="button"
          >
            {{ name }}
          </button>
        </li>
      </ul>
    </section>

    <section>
      <h1>{{ destination.name }}</h1>
      <p>{{ destination.description }}</p>
    </section>
  </article>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { fetchDestinations } from "../fetch-data";

const destinations = reactive(fetchDestinations());
const firstElement = destinations[0].name;
const activeDestination = ref(firstElement);
const destination = computed(() =>
  destinations.find(
    (destination) =>
      destination.name.toLowerCase() === activeDestination.value.toLowerCase()
  )
);

function toggleActiveDestination(name) {
  if (!name) {
    throw new Error("Empty destination name for button.");
  }

  activeDestination.value = name;
}
</script>

<style>
.active {
  border: 1px solid red;
}
</style>
