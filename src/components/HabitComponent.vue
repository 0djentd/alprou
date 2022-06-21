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
    :loading="habit == null"
    v-if="!removed"
    class="m-4 p-2"
  >
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
    <div v-else>
      <v-form>
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
        <v-checkbox v-model="habit.active" label="Active" />
        <v-checkbox v-model="habit.negative" label="Negative" />
        <v-checkbox v-model="habit.public" label="Public" />
        <v-btn>Save</v-btn>
        <v-btn @click="expanded = false">Back</v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.v-card__actions {
  .v-btn {
    margin: 4px;
  }
}
</style>
