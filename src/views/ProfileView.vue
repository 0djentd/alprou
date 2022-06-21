<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  data() {
    return {
      profile_url: null,
    };
  },
  components: {
    ProfileComponent,
  },
  updated() {
    this.$store.commit("fetchData");
    this.profile_url = this.$store.state.profile.url;
  },
};
</script>

<template>
  <main>
    <ProfileComponent :url="profile_url" />
  </main>
</template>

<style lang="scss" scoped>
form {
  padding: 4px;
  div {
    label {
      margin-right: 10px;
    }
  }
}
</style>
