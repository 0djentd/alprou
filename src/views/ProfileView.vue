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
  async mounted() {
    const profile = await this.$store.getters.profile;
    this.profile_url = profile.url;
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
