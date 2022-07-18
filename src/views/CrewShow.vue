<template>
  <article>
    <section class="carousell-ellipsis">
      <ul class="carousell-ellipsis__controls">
        <li v-for="{ name } in crews" :key="name">
          <button
            class="carousell-ellipsis__control"
            @click="toggleActiveCrew(name)"
            :class="{
              'carousell-ellipsis__control--active': name === activeCrew,
            }"
            type="button"
            :aria-label="name"
          ></button>
        </li>
      </ul>
    </section>

    <section>
      <h1>{{ crew.name }}</h1>
      <p>{{ crew.bio }}</p>
    </section>
  </article>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { fetchCrew } from "../fetch-data";

const crews = reactive(fetchCrew());
const firstElement = crews[0].name;
const activeCrew = ref(firstElement);
const crew = computed(() =>
  crews.find(
    (crew) => crew.name.toLowerCase() === activeCrew.value.toLowerCase()
  )
);

function toggleActiveCrew(name) {
  if (!name) {
    throw new Error("Empty crew name for button.");
  }

  activeCrew.value = name;
}
</script>

<style>
.carousell-ellipsis__controls {
  display: flex;
  align-items: center;
  gap: 2.4rem;
}

.carousell-ellipsis__control {
  --size: 1.5rem;

  width: var(--size);
  height: var(--size);
  background-color: var(--clr-white);
  border-radius: 50%;

  opacity: 0.17;
  content: "";
  transition: opacity 0.2s ease-in-out;
}

.carousell-ellipsis__control:hover,
.carousell-ellipsis__control:focus {
  opacity: 0.5;
}

.carousell-ellipsis__control.carousell-ellipsis__control--active {
  opacity: 1;
}
</style>
