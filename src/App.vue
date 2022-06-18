<script lang="ts">
import AppFooter from "./components/AppFooter.vue";
import { useProfileDataStore } from "./stores/profile_data";
export default {
  data() {
    return {
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
  <AppFooter />
</template>

<style>
@import "@/assets/style.scss";
</style>
