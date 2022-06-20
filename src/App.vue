<script>
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {};
  },
  components: { AppFooter },
  mounted() {
    this.$store.commit("fetchData");
  },
};
</script>

<template>
  <div id="app">
    <router-view />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
