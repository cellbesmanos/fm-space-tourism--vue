<template>
  <article>
    <section>
      <h1>So you want to go to space?</h1>
    </section>

    <section>
      <router-link class="explore-btn" to="/destination"
        ><span>Explore</span></router-link
      >
    </section>
  </article>
</template>

<style>
.explore-btn {
  --size: 27.4rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);

  font-family: var(--fm-serif);
  font-size: 3.2rem;
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
</style>
