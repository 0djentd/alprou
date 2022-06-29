<script>
export default {
  async mounted() {
    const authenticated = this.$store.getters.authenticated;
    if (authenticated) {
      this.$router.push("/habits/");
    } else {
      this.$router.push("/welcome/");
    }
  },
};
</script>

<template>
  <div></div>
</template>
