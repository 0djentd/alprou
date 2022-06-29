<script>
import AppFooter from "./components/AppFooter.vue";
import AppDrawer from "./components/AppDrawer.vue";
import AppLogo from "./components/AppLogo.vue";
export default {
  data() {
    return {};
  },
  components: { AppFooter, AppDrawer, AppLogo },
  computed: {
    loading() {
      return this.$store.state.authorization.loading;
    },
  },
  async beforeCreate() {
    this.$store.dispatch("relogin");
    this.$store.commit("loadTheme");
    this.$vuetify.theme.dark = this.$store.state.theme.theme.dark;
  },
};
</script>

<template>
  <v-app id="app">
    <AppDrawer />
    <AppLogo />
    <v-main app>
      <router-view v-if="!loading" />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
