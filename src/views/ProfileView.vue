<script>
import useProfileDataStore from "../stores/profile_data";
export default {
  data() {
    return {
      profile_data: useProfileDataStore(),
    };
  },
};
</script>

<template>
  <main>
    <h1>Username: {{ profile_data.username }}</h1>
  </main>
</template>
