<script>
import AppFooter from "./components/AppFooter.vue";
import AppDrawer from "./components/AppDrawer.vue";
import AppLogo from "./components/AppLogo.vue";
export default {
  data() {
    return {};
  },
  components: { AppFooter, AppDrawer, AppLogo },
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
    <AppLogo />
    <v-main app>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
