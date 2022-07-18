<template>
  <article>
    <section class="carousell">
      <ul class="underlined-control-list carousell__controls">
        <li v-for="{ name } in destinations" :key="name">
          <button
            @click="toggleActiveDestination(name)"
            class="carousell__control-btn"
            :class="{
              'carousell__control-btn--active': name === activeDestination,
            }"
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
.carousell__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 20.8rem;
}

.carousell__control-btn {
  position: relative;
  padding-block-end: 1.2rem;

  color: inherit;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}

.carousell__control-btn::after {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
  width: 100%;
  height: 0.3rem;
  background-color: var(--clr-white);
  opacity: 0.5;
  content: "";

  transition: transform 0.2s ease-in-out;
  transform-origin: center;
}

.carousell__control-btn:hover::after,
.carousell__control-btn:focus::after {
  transform: scaleX(1);
}

.carousell__control-btn--active::after {
  opacity: 1;
}
</style>
