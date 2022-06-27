<script>
export default {
  async mounted() {
    const user = this.$store.state.authorization.user;
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
