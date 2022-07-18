<template>
  <article class="home">
    <section class="home__content">
      <h1 class="heading--1">
        <span class="heading--5">So, you want to travel to</span> space
      </h1>

      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </section>

    <router-link class="explore-btn" to="/destination"
      ><span>Explore</span></router-link
    >
  </article>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const body = document.querySelector("body");

  body.classList.add("home-view");
});
</script>

<style>
.home {
  padding-inline: 2.4rem;
  text-align: center;
}

.home__content {
  margin-block-end: 8rem;
  margin-inline: auto;
  max-width: 45rem;
}

.home h1 {
  font-size: 8rem;
  font-weight: 400;
  line-height: 1;
  margin-block-end: 1.6rem;
}

.home h1 span {
  display: block;
  font-size: 1.6rem;
  margin-block-end: 1.6rem;
}

@media screen and (min-width: 40em) {
  .home__content {
    margin-block-start: 10.6rem;
    margin-block-end: 15.6rem;
  }

  .home h1 {
    font-size: 15rem;
    font-weight: 400;
    line-height: 1;
    margin-block-end: 2.4rem;
  }

  .home h1 span {
    font-size: 2rem;
    margin-block-end: 2.4rem;
  }
}

@media screen and (min-width: 75em) {
  .home {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-block-start: 25rem;
    padding-inline: 16.5rem;
    padding-block-end: 13rem;
  }

  .home__content {
    align-self: flex-end;
    text-align: left;
    margin: unset;
  }

  .home h1 {
    font-weight: 400;
    margin-block-end: 2.4rem;
  }

  .home h1 span {
    display: block;
    margin-block-end: 2.4rem;
  }
}

.explore-btn {
  --size: 15rem;
  --font-size: 2rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  margin-inline: auto;

  font-family: var(--fm-serif);
  font-size: var(--font-size);
  letter-spacing: 2px;
  text-transform: uppercase;

  background-color: var(--clr-white);
  border-radius: 50%;

  aspect-ratio: 1 /1;
  outline: none;
}

.explore-btn span {
  color: hsl(230, 35%, 7%);
}

.explore-btn::after {
  position: absolute;

  display: block;
  width: 100%;
  height: 100%;

  background-color: var(--clr-white);
  border-radius: 50%;

  opacity: 0.1;
  content: "";
  transition: transform 0.2s ease-in-out;
}

.explore-btn:hover::after,
.explore-btn:focus::after {
  transform: scale(1.6);
}

@media screen and (min-width: 40em) {
  .explore-btn {
    --size: 24.2rem;
    --font-size: 3.2rem;
  }
}

@media screen and (min-width: 75em) {
  .explore-btn {
    --size: 27.4rem;
    --font-size: 3.2rem;

    margin-inline: unset;
  }
}
</style>
