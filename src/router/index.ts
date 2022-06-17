import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProfileView from "@/views/ProfileView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile/",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/login/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout/",
      name: "logout",
      component: LogoutView,
    },
    {
      path: "/about/",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
