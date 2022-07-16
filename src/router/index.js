import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home.vue");
const DestinationShow = () => import("@/views/DestinationShow.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: DestinationShow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
