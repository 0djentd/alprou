<script lang="ts">
import AppFooter from "./components/AppFooter.vue";
import { useProfileDataStore } from "./stores/profile_data";
export default {
  data() {
    return {
      year: 2022,
      links: [
        { url: "/", name: "Home" },
        { url: "/profile/", name: "Profile" },
        { url: "/login/", name: "Login" },
        { url: "/logout/", name: "Logout" },
        { url: "/about/", name: "About" },
      ],
      profile_data: useProfileDataStore(),
    };
  },
  components: { AppFooter },
  mounted() {
    this.profile_data.fetchData();
  },
};
</script>

<template>
  <RouterView />
  <AppFooter :links="links" :year="year" />
</template>

<style>
@import "@/assets/style.scss";
</style>
