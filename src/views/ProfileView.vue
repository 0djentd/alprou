<script>
import ProfileComponent from "../components/ProfileComponent.vue";
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
  <ProfileComponent v-if="profile_url != null" :url="profile_url" />
</template>
