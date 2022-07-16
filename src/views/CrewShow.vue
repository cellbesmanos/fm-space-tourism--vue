<template>
  <article>
    <section>
      <ul>
        <li v-for="{ name } in crews" :key="name">
          <button
            @click="toggleActiveCrew(name)"
            :class="{ active: name === activeCrew }"
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
.active {
  background-color: red;
}
</style>
