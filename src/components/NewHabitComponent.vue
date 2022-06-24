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
      editing: false,
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
          this.reset();
          this.editing = false;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data;
        });
    },
    reset() {
      this.habit = {
        name: "",
        description: "",
        active: true,
        negative: false,
        public: false,
        tags: "",
      };
      this.errors = null;
      this.editing = false;
    },
  },
};
</script>

<template>
  <div>
    <v-card v-if="editing" elevation="4" rounded class="m-4 p-2">
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
      <v-card-actions>
        <v-btn rounded outlined @click="put()">Create</v-btn>
        <v-btn rounded outlined @click="reset()">Back</v-btn>
      </v-card-actions>
    </v-card>
    <v-sheet v-else class="rounded-pill m-1" elevation="2" outlined>
      <v-btn @click="editing = true" rounded text
        ><span class="material-symbols-outlined"> add </span></v-btn
      >
      <v-btn v-if="editing" rounded text>EDIT</v-btn>
    </v-sheet>
  </div>
</template>
