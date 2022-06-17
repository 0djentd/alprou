<script lang="ts">
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {
      year: 2022,
      links: [
        { url: "/", name: "Home" },
        { url: "/profile", name: "Profile" },
        { url: "/new_habit", name: "New Habit" },
        { url: "/about/", name: "About" },
      ],
    };
  },
  components: { AppFooter },
};
</script>

<template>
  <RouterView />
  <AppFooter :links="links" :year="year" />
</template>

<style>
@import "@/assets/style.scss";
</style>
