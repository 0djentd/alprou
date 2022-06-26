<script>
export default {
  async mounted() {
    const user = await this.$store.getters.user;
    if (user) {
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
