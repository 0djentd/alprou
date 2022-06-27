<script>
import axios from "axios";
export default {
  data() {
    return {
      profile: null,
      user: null,
      loading: true,
      errors: [],
    };
  },
  methods: {
    async fetchData() {
      this.profile = await this.$store.getters.profile;
      this.user = await this.$store.getters.user;
      this.loading = false;
    },
    async save() {
      await axios({
        url: this.user.url,
        method: "PATCH",
        headers: {
          Authorization: this.$store.getters.token_str,
        },
        data: this.user,
      });
      await axios({
        url: this.profile.url,
        method: "PATCH",
        headers: {
          Authorization: this.$store.getters.token_str,
        },
        data: this.profile,
      });
      this.fetchData();
    },
  },
  beforeMount() {
    this.fetchData();
  },
};
</script>

<template>
  <div>
    <v-card-title>Profile</v-card-title>
    <v-card-subtitle>Change profile settings</v-card-subtitle>
    <v-card-text>
      <div v-if="!loading">
        <v-text-field
          v-model="user.username"
          label="Username"
          clearable
        ></v-text-field>
        <v-text-field
          :value="profile.url"
          label="Profile url"
          clearable
          disabled
        ></v-text-field>
        <v-text-field
          v-model="profile.public_username"
          label="Public username"
          clearable
        ></v-text-field>
        <v-checkbox v-model="profile.private" label="Private profile" />
        <v-card-actions>
          <v-btn @click="save()" rounded outlined text>Save</v-btn>
        </v-card-actions>
      </div>
      <v-skeleton-loader v-else type="card" />
    </v-card-text>
  </div>
</template>
