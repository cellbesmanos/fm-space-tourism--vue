<template>
  <transition name="slide">
    <div v-if="props.show" class="underlined-control-list navbar-mobile">
      <button
        @click="$emit('closeModal')"
        aria-label="close mobile nagivation"
        type="button"
        class="navbar-mobile__close"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
        >
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </button>

      <ul class="navbar__link-list navbar__link-list--mobile">
        <li>
          <router-link to="/"
            ><span aria-hidden="true">00</span>Home</router-link
          >
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
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>

<style>
.navbar-mobile {
  position: absolute;
  top: 0;
  right: 0;
  width: 25.4rem;
  height: 100vh;

  background-color: var(--clr-black);
  z-index: 999;
}

@supports (backdrop-filter: blur) {
  .navbar-mobile {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
}

.navbar-mobile__close {
  position: absolute;
  top: 3.4rem;
  right: 2.4rem;

  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease-in-out;
}

.navbar-mobile__close:hover,
.navbar-mobile__close:focus {
  border-color: white;
}

.navbar__link-list--mobile {
  align-self: flex-start;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.2rem;
  margin-block-start: 6.5rem;
  padding-inline: 3.2rem;
}

.navbar__link-list--mobile li a::after {
  position: absolute;
  left: -1.6rem;
  top: 0;
  transform: scaleY(0);
  transform-origin: center;
  content: "";
  width: 0.3rem;
  height: 100%;

  background-color: var(--clr-white);
  opacity: 0.5;
  transition: transform 0.2s ease-in-out;
}

.navbar__link-list--mobile li a.router-link-active::after {
  opacity: 1;
  transform: scaleY(1);
}

.navbar__link-list--mobile li a:hover::after,
.navbar__link-list--mobile li a:focus::after {
  transform: scaleY(1);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
