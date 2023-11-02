import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MapView from "../views/MapView.vue";
import MedsosDesa from "../views/MedsosDesa.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/map",
      name: "Map",
      component: MapView,
    },
    {
      path: "/medsos",
      name: "Medsos",
      component: MedsosDesa,
    },
  ],
});

export default router;
