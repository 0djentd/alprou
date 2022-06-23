<script>
import axios from "axios";
import { get_authorization_or_redirect } from "@/config";
export default {
  name: "HabitComponent",
  props: {
    url: {
      type: String,
      required: true,
    },
    editing: {
      type: Boolean,
      required: false,
    },
    compact: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      habit: {
        user: "",
        name: "",
        description: "",
        completed_today: false,
      },
      expanded: false,
      removed: false,
      loading: true,
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
      this.removed = true;
      await axios({
        url: this.habit.url,
        method: "DELETE",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => {
        console.log(res);
      });
    },
    async patch() {
      const data = this.habit;
      await axios({
        url: this.habit.url,
        method: "PATCH",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
        data: data,
      }).then((res) => {
        console.log(res);
      });
      this.expanded = false;
      await this.fetchData();
    },
    async fetchData() {
      this.loading = true;
      await axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => {
        this.habit = res.data;
      });
      this.loading = false;
      if (this.habit.tags == "") {
        this.habit.tags = "[]";
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <div v-if="!removed">
    <v-card
      elevation="4"
      rounded
      :loading="loading"
      v-if="!expanded && !compact"
      class="m-4 p-2"
    >
      <div v-if="!loading">
        <div v-if="!expanded">
          <v-card-title>{{ habit.name }}</v-card-title>
          <v-card-subtitle>{{ habit.user.username }}</v-card-subtitle>
          <v-card-text>{{ habit.description }}</v-card-text>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              @click.prevent="done()"
              :disabled="habit.completed_today"
              >Done</v-btn
            >
            <v-btn outlined rounded @click="expanded = true">More</v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-sheet
      v-if="!expanded && compact"
      class="rounded-pill m-1"
      elevation="2"
      outlined
    >
      <div v-if="!editing">
        <v-btn @click="done()" :disabled="habit.completed_today" rounded text>{{
          habit.name
        }}</v-btn>
      </div>
      <div v-else>
        <v-btn @click="expanded = true" rounded text>{{ habit.name }}</v-btn>
      </div>
    </v-sheet>
    <div v-if="expanded">
      <v-form>
        <v-text-field
          v-model="habit.name"
          :counter="200"
          label="Name"
          autofocus
          required
        ></v-text-field>
        <v-textarea
          v-model="habit.description"
          :counter="2000"
          label="Description"
          outlined
        ></v-textarea>
        <v-text-field
          v-model="habit.tags"
          :counter="2000"
          label="Tags"
          dense
          outlined
        ></v-text-field>
        <v-checkbox v-model="habit.active" label="Active" />
        <v-checkbox v-model="habit.negative" label="Negative" />
        <v-checkbox v-model="habit.private" label="Private" />
        <v-btn rounded outlined @click="patch()">Save</v-btn>
        <v-btn rounded outlined @click="remove()">Remove</v-btn>
        <v-btn rounded outlined @click="expanded = false">Back</v-btn>
      </v-form>
    </div>
  </div>
</template>
