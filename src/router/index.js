import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Createquiz from "../components/Createquiz.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Createquiz",
    component: Createquiz,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
