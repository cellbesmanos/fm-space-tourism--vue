<template>
  <article>
    <section>
      <ul>
        <li v-for="(technology, index) in technologies" :key="technology.name">
          <button
            @click="toggleActiveTechnology(technology.name)"
            :class="{ active: technology.name === activeTechnology }"
            type="button"
            :aria-label="technology.name"
          >
            <span aria-hidden="true">{{ index + 1 }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section>
      <h1>{{ technology.name }}</h1>
      <p>{{ technology.description }}</p>
    </section>
  </article>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { fetchTechnology } from "../fetch-data";

const technologies = reactive(fetchTechnology());
const firstElement = technologies[0].name;
const activeTechnology = ref(firstElement);
const technology = computed(() =>
  technologies.find(
    (technology) =>
      technology.name.toLowerCase() === activeTechnology.value.toLowerCase()
  )
);

function toggleActiveTechnology(name) {
  if (!name) {
    throw new Error("Empty technology name for button.");
  }

  activeTechnology.value = name;
}
</script>

<style>
.active {
  background-color: red;
}
</style>
