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
    this.$store.commit("load");
  },
};
</script>

<template>
  <v-app id="app">
    <AppBar v-if="!this.$store.state.theme.hide_appbar" />
    <v-main app>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
