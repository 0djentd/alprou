<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <form action="" class="card w-50">
      <div>
        <label for="profile_public_username">public username</label>
        <input
          v-model="this.$store.state.profile.public_username"
          id="profile_public_username"
        />
      </div>
      <div>
        <label for="profile_public">public profile</label>
        <input
          v-model="this.$store.state.profile.public"
          type="checkbox"
          id="profile_public"
        />
      </div>
      <input v-model="this.$store.state.profile.profile_image" type="image" />
      <button @click.prevent>Save</button>
    </form>
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
