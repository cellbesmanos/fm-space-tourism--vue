<template>
  <section class="destination">
    <picture class="destination__img">
      <source :srcset="destination.images.webp" type="image/webp" />
      <img :src="destination.images.png" :alt="destination.name" />
    </picture>

    <div class="destination__right">
      <ul class="underlined-control-list destination__controls">
        <li v-for="{ name } in destinations" :key="name">
          <button
            @click="toggleActiveDestination(name)"
            class="destination__control-btn"
            :class="{
              'destination__control-btn--active': name === activeDestination,
            }"
            type="button"
          >
            {{ name }}
          </button>
        </li>
      </ul>

      <div class="destination__content">
        <div class="destination__description">
          <h2 class="heading--2">{{ destination.name }}</h2>
          <p>{{ destination.description }}</p>
        </div>

        <div class="destination__more-info">
          <p class="sub-heading--1">
            <span class="sub-heading--2">Avg. distance</span>
            {{ destination.distance }}
          </p>

          <p class="sub-heading--1">
            <span class="sub-heading--2">Est. Travel time</span>
            {{ destination.travel }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { fetchDestinations } from "@/fetch-data";

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
.destination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  padding-inline: 2.4rem;
  padding-block-end: 5.8rem;
  font-size: 1.4rem;
  line-height: 25px;
}

.destination__img {
  display: inline-block;
  margin-block-end: 2.6rem;
  max-width: 17rem;
}

@media screen and (min-width: 40em) {
  .destination {
    padding-block-end: 6.2rem;

    line-height: 25px;
  }

  .destination__img {
    margin-block-end: 5.3rem;
    max-width: 30rem;
  }
}

@media screen and (min-width: 75em) {
  .destination {
    gap: 15.7rem;
    flex-direction: row;
    text-align: left;
  }

  .destination__img {
    margin-block-end: unset;
    max-width: 44.5rem;
  }
}

.destination__img > img {
  object-fit: contain;
}

.destination__right {
  display: flex;
  flex-direction: column;
}

.destination__controls {
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.7rem;
  margin-block-end: 2rem;
  color: var(--clr-primary);
}

@media screen and (min-width: 75em) {
  .destination__controls {
    align-self: flex-start;
  }
}

.destination__control-btn {
  position: relative;
  padding-block-end: 1.2rem;

  color: inherit;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  line-height: inherit;
  letter-spacing: inherit;

  transition: color 0.2s ease-in-out;
}

.destination__control-btn::after {
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

.destination__control-btn:hover::after,
.destination__control-btn:focus::after {
  transform: scaleX(1);
}

.destination__control-btn--active {
  color: var(--clr-white);
}

.destination__control-btn--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.destination__content {
  max-width: 57.3rem;
}

.destination__description {
  padding-block-end: 3.2rem;
  border-bottom: 1px solid hsl(231, 15%, 26%);
}

.destination__description h2 {
  font-size: 5.6rem;
}

.destination__description p {
  font-size: 1.5rem;
}

.destination__more-info {
  display: flex;
  align-items: center;
  gap: 3.2rem;
  flex-direction: column;
  flex-wrap: wrap;
  margin-block-start: 3.2rem;
}

.destination__more-info p span {
  display: block;
  margin-block-end: 1.2rem;
}

@media screen and (min-width: 40em) {
  .destination__description {
    padding-block-end: 4.9rem;
  }

  .destination__description h2 {
    font-size: 8rem;
  }

  .destination__description p {
    font-size: 1.6rem;
  }

  .destination__more-info {
    gap: 10rem;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-block-start: 2.9rem;
  }
}

@media screen and (min-width: 75em) {
  .destination__content {
    max-width: 47.2rem;
  }

  .destination__description h2 {
    font-size: 10rem;
  }

  .destination__description p {
    font-size: 1.8rem;
  }

  .destination__more-info {
    gap: 7rem;
    justify-content: flex-start;
    margin-block-start: 2.9rem;
  }
}
</style>
