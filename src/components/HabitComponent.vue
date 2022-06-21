<script>
import axios from "axios";
import { get_authorization_or_redirect } from "@/config";
export default {
  name: "HabitComponent",
  props: {
    url: String,
  },
  data() {
    return {
      habit: null,
      expanded: false,
      removed: false,
    };
  },
  methods: {
    async done() {
      if (this.habit.completed_today == true) {
        return;
      }
      await axios({
        url: this.habit.url + "done/",
        method: "PATCH",
        data: {},
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((res) => {
          console.log(res);
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async remove() {
      await axios({
        url: this.habit.url,
        method: "DELETE",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => {
        console.log(res);
        this.removed = true;
      });
    },
    async fetchData() {
      await axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => {
        console.log(res);
        this.habit = res.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <v-card
    elevation="8"
    shaped
    :loading="this.habit == null"
    v-if="!this.removed"
    class="m-4 p-2"
  >
    <v-card-title>{{ habit.name }}</v-card-title>
    <v-card-subtitle>{{ habit.user.username }}</v-card-subtitle>
    <v-card-text>{{ habit.text }}</v-card-text>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        @click.prevent="done()"
        :disabled="this.habit.completed_today"
        >Done</v-btn
      >
      <v-btn
        outlined
        rounded
        @click="
          () => {
            this.expanded = !this.expanded;
          }
        "
        >Edit</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
