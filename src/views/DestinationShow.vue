<template>
  <article class="destination-show">
    <h1 class="heading--5">
      <span aria-hidden="true">01</span>Pick your destination
    </h1>

    <Destination />
  </article>
</template>

<script setup>
import Destination from "@/components/Destination.vue";
</script>

<style>
.destination-show {
  --margin-bottom: 3.2rem;
  --font-size: 1.6rem;
}

.destination-show h1 {
  margin-block-end: var(--margin-bottom);
  text-align: center;

  letter-spacing: 4.725px;
  color: var(--clr-white);
  text-transform: uppercase;
  font-size: var(--font-size);
  font-weight: 400;
}

.destination-show h1 span {
  display: inline-block;
  margin-inline-end: 1.8rem;
  font-weight: 700;
  opacity: 0.25;
}

@media screen and (min-width: 40em) {
  .destination-show {
    --margin-bottom: 6rem;
    --font-size: 2rem;
  }

  .destination-show h1 {
    text-align: left;
    padding-inline-start: 3.9rem;
  }
}

@media screen and (min-width: 75em) {
  .destination-show {
    --margin-bottom: 6.4rem;
  }

  .destination-show h1 {
    padding-inline-start: 16.5rem;
    font-size: 2.8rem;
  }

  .destination__img {
    margin-block-end: 5.3rem;
    max-width: 44.5rem;
  }
}
</style>
