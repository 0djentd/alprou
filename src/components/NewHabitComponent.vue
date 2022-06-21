<script>
import axios from "axios";
import { api_url, get_authorization_or_redirect } from "@/config";
export default {
  name: "NewHabitComponent",
  data() {
    return {
      habit: {
        name: "",
        description: "",
        active: true,
        negative: false,
        public: false,
        tags: "",
      },
      errors: null,
    };
  },
  methods: {
    async put() {
      const data = this.habit;
      await axios({
        url: api_url + "habits/",
        method: "POST",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
        data: data,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data;
        });
    },
  },
};
</script>

<template>
  <v-card elevation="8" shaped class="m-4 p-2">
    <v-alert v-if="errors">{{ errors }}</v-alert>
    <v-text-field
      v-model="habit.name"
      :counter="200"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="habit.description"
      :counter="2000"
      label="description"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="habit.tags"
      :counter="2000"
      label="tags"
      outlined
    ></v-text-field>
    <v-checkbox v-model="habit.active" label="Active" />
    <v-checkbox v-model="habit.negative" label="Negative" />
    <v-checkbox v-model="habit.public" label="Public" />
    <v-btn @click="put()">Create</v-btn>
  </v-card>
</template>
