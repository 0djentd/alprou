<script>
import AppFooter from "./components/AppFooter.vue";
import AppBar from "./components/AppBar.vue";
export default {
  data() {
    return {};
  },
  components: { AppFooter, AppBar },
  beforeCreate() {
    this.$store.commit("fetchData");
  },
};
</script>

<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
