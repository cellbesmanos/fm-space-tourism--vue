<template>
  <nav class="navbar">
    <svg
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

    <ul class="navbar__link-list">
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
  </nav>
</template>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-block-start: 4rem;
  padding-inline-start: 5.5rem;
}

.navbar__link-list {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 4.8rem;
  max-width: 83rem;
  min-height: 9.6rem;
  padding-inline: 12.3rem 16.5rem;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
}

.navbar__link-list li {
  display: flex;
  align-items: stretch;
  padding-block-start: var(--padding-top, 3.8rem);
}

.navbar__link-list li a {
  position: relative;
  outline: none;
}

.navbar__link-list li a::after {
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

.navbar__link-list li a.router-link-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.navbar__link-list li a:hover::after,
.navbar__link-list li a:focus::after {
  transform: scaleX(1);
}

.navbar__link-list li a span {
  font-weight: 700;
  letter-spacing: 2.7px;
  margin-inline-end: 1.2rem;
}
</style>
