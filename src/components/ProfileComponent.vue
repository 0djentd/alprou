<script>
import { get_authorization_or_redirect } from "@/config";
import HabitComponent from "@/components/HabitComponent.vue";
import axios from "axios";
export default {
  props: {
    url: String,
  },
  data() {
    return { profile: null, user: null, editing: false, loading: false };
  },
  components: {
    HabitComponent,
  },
  methods: {
    async fetchData() {
      console.log("Started fetch");
      this.loading = true;
      await axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((res) => {
          console.log(res);
          this.profile = res.data;
        })
        .catch((err) => console.error(err));
      await axios({
        url: this.profile.user,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((res) => {
          console.log(res);
          this.user = res.data;
        })
        .catch((err) => console.error(err));
      this.loading = false;
      console.log("Finished fetch");
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <v-card v-if="profile">
    <v-card-title>User profile</v-card-title>
    <v-card-subtitle>Username: {{ profile.username }}</v-card-subtitle>
    <div v-if="editing">
      <v-form>
        <v-card-actions>
          <v-btn @click="editing = false">Edit</v-btn>
        </v-card-actions>
      </v-form>
    </div>
    <div v-else>
      <v-card-text>
        <h3>Habits:</h3>
        <HabitComponent
          v-for="habit in user.habits"
          :key="habit"
          :url="habit"
        />
        <p>Username: {{ user.username }}</p>
        <p v-if="profile.public_username">
          Public username: {{ profile.public_username }}
        </p>
        <p v-if="profile.profile_image">
          Profile image: {{ profile.profile_image }}
        </p>
        <p v-if="profile.background_image">
          Background image: {{ profile.background_image }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="editing = true">Edit</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
