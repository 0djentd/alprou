<script>
import AppFooter from "./components/AppFooter.vue";
import AppBar from "./components/AppBar.vue";
import AppDrawer from "./components/AppDrawer.vue";

export default {
  data() {
    return {};
  },
  components: { AppFooter, AppBar, AppDrawer },
  beforeCreate() {
    this.$store.commit("load");
    this.$store.commit("fetchData");
    this.$vuetify.theme.dark = this.$store.state.theme.dark;
  },
};
</script>

<template>
  <v-app id="app">
    <AppBar v-if="!this.$store.state.theme.hide_appbar" />
    <AppDrawer />
    <v-main app>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
