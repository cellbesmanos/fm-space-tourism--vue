import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home.vue");
const DestinationShow = () => import("@/views/DestinationShow.vue");
const CrewShow = () => import("@/views/CrewShow.vue");
const TechnologyShow = () => import("@/views/TechnologyShow.vue");

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
  {
    path: "/crew",
    name: "Crew",
    component: CrewShow,
  },
  {
    path: "/technology",
    name: "Technology",
    component: TechnologyShow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
