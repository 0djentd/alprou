import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import SettingsView from "@/views/SettingsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/registration/",
    name: "registration",
    component: RegistrationView,
  },
  {
    path: "/settings/",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/about/",
    name: "about",
    component: AboutView,
  },
  {
    path: "/welcome/",
    name: "welcome",
    component: WelcomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
