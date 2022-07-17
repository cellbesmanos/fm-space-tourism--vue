<template>
  <nav class="navbar">
    <svg
      class="navbar__logo"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      aria-label="space tourism"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>

    <ul class="navbar__link-list navbar__link-list--desktop">
      <li>
        <router-link to="/"><span aria-hidden="true">00</span>Home</router-link>
      </li>
      <li>
        <router-link to="/destination"
          ><span aria-hidden="true">01</span>Destination</router-link
        >
      </li>
      <li>
        <router-link to="/crew"
          ><span aria-hidden="true">02</span>Crew</router-link
        >
      </li>
      <li>
        <router-link to="/technology"
          ><span aria-hidden="true">03</span>Technology</router-link
        >
      </li>
    </ul>

    <button
      @click="handleOpenModal"
      class="navbar__burger"
      aria-label="open mobile navigation"
      type="button"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
      >
        <g fill="#D0D6F9" fill-rule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </button>

    <Teleport to="body">
      <TheMobileNavigation
        @close-modal="handleCloseModal"
        :show="showMobileNav"
      />
    </Teleport>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import TheMobileNavigation from "./TheMobileNavigation.vue";

const showMobileNav = ref(false);

function handleCloseModal() {
  showMobileNav.value = false;
}

function handleOpenModal() {
  showMobileNav.value = true;
}
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
}

.navbar__logo {
  transform: scale(0.83);
}

.navbar__burger {
  transition: transform 0.2s ease-in-out;
}

.navbar__burger:hover,
.navbar__burger:focus {
  transform: scale(0.8) rotate(45deg);
}

@media screen and (min-width: 40.625em) {
  .navbar {
    --margin-top: 0;
    --padding-left: 3.9rem;
    --font-size: 1.4rem;
    --letter-spacing: 2.7px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: var(--font-size);
    letter-spacing: var(--letter-spacing);

    margin-block-start: var(--margin-top);
    padding: 0;
    padding-inline-start: var(--padding-left);
  }

  .navbar__logo {
    transform: scale(1);
  }

  .navbar__burger {
    display: none;
  }
}

@media screen and (min-width: 62.5em) {
  .navbar {
    --margin-top: 4rem;
    --padding-left: 5.5rem;
    --font-size: 1.6rem;
    --letter-spacing: 2.3625px;
  }
}

.navbar__link-list--desktop {
  display: none;
}

@media screen and (min-width: 40.625em) {
  .navbar__link-list--desktop {
    --width: 45rem;
    --padding-left: 4.8rem;
    --padding-right: 4.6rem;

    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: var(--width);
    min-height: 9.6rem;
    padding-inline: var(--padding-left) var(--padding-right);
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }

  .navbar__link-list--desktop li {
    display: flex;
    align-items: stretch;
    padding-block-start: 3.8rem;
  }

  .navbar__link-list--desktop li a {
    position: relative;
    outline: none;
  }

  .navbar__link-list--desktop li a::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.3rem;
    transform: scaleX(0);
    background-color: var(--clr-white);
    opacity: 0.5;

    content: "";
    transition: transform 0.2s ease-in-out;
    transform-origin: center;
  }

  .navbar__link-list--desktop li a.router-link-active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  .navbar__link-list--desktop li a:hover::after,
  .navbar__link-list--desktop li a:focus::after {
    transform: scaleX(1);
  }

  .navbar__link-list--desktop li a span {
    display: none;
  }
}

@media screen and (min-width: 62.5em) {
  .navbar__link-list--desktop {
    --width: 83rem;
    --padding-left: 12.3rem;
    --padding-right: 16.5rem;
    --gap: 4.8rem;
  }
}

@media screen and (min-width: 62.5em) {
  .navbar__link-list--desktop li a span {
    display: inline;
  }
}
</style>
