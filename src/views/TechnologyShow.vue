<template>
  <article>
    <section class="carousel-numbered">
      <ul class="carousel-numbered__controls">
        <li v-for="(technology, index) in technologies" :key="technology.name">
          <button
            @click="toggleActiveTechnology(technology.name)"
            class="carousel-numbered__control"
            :class="{
              'carousel-numbered__control--active':
                technology.name === activeTechnology,
            }"
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
.carousel-numbered__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
}

.carousel-numbered__control {
  --size: 8rem;
  width: var(--size);
  height: var(--size);

  font-family: var(--fm-serif);
  font-size: 3.2rem;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid hsla(255, 100%, 100%, 0.25);

  aspect-ratio: 1 / 1;
  transition: all 0.2s ease-in-out;
}

.carousel-numbered__control:hover,
.carousel-numbered__control:focus {
  border-color: var(--clr-white);
}

.carousel-numbered__control--active {
  color: var(--clr-black);
  background-color: var(--clr-white);
}
</style>
