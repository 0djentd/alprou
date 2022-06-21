<script>
import { get_authorization_or_redirect } from "@/config";
import axios from "axios";
export default {
  props: {
    url: String,
  },
  data() {
    return { profile: {}, editing: false };
  },
  methods: {
    fetchData() {
      axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((res) => {
          this.profile = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    console.log(1);
    this.fetchData();
    console.log(3);
  },
};
</script>

<template>
  <v-card>
    <v-card-title>User profile</v-card-title>
    <v-card-subtitle>{{ profile.user.username }}</v-card-subtitle>
    <div v-if="!editing">
      <v-card-text> </v-card-text>
      <v-card-actions>
        <v-btn v-if="$store.profile.id == profile.id">Edit</v-btn>
      </v-card-actions>
    </div>
    <div v-else>
      <v-form>
        <v-card-actions>
          <v-btn @click="editig = false">Edit</v-btn>
        </v-card-actions>
      </v-form>
    </div>
  </v-card>
</template>
