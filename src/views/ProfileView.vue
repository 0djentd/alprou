<script lang="ts">
import { useProfileDataStore } from "../stores/profile_data";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      profile_data: useProfileDataStore(),
    };
  },
});
</script>

<template>
  <main>
    <h1>Username: {{ profile_data.username }}</h1>
  </main>
</template>
