<script>
import axios from "axios";
import { api_url } from "@/config";
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
          Authorization: this.$store.getters.token_str,
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
    <div v-if="editing">
      <v-navigation-drawer
        right
        permanent
        absolute
        class="habit-component-expanded"
      >
        <v-card>
          <v-card-title>Create new</v-card-title>
          <v-card-text>
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
          </v-card-text>
          <v-card-actions>
            <v-btn rounded outlined @click="put()">Create</v-btn>
            <v-btn rounded outlined @click="reset()">Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
      <v-overlay
        @click="editing = false"
        v-if="editing"
        value="editing"
        z-index="1"
      ></v-overlay>
    </div>
    <v-sheet class="rounded-pill m-1" elevation="2" outlined>
      <v-btn @click="editing = true" rounded text
        ><span class="material-symbols-outlined"> add </span></v-btn
      >
    </v-sheet>
  </div>
</template>
