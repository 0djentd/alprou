<script>
import axios from "axios";
import HabitComponent from "./HabitComponent.vue";
import NewHabitComponent from "../components/NewHabitComponent.vue";
import { get_authorization_or_redirect } from "@/config";

export default {
  name: "HabitsContainer",
  components: { HabitComponent, NewHabitComponent },
  props: {
    url: { type: String, required: true },
    label: { type: String, required: false },
  },
  data() {
    return {
      habits: [],
      loaded: false,
      editing: false,
    };
  },
  async mounted() {
    axios({
      url: this.url,
      method: "GET",
      headers: {
        Authorization: get_authorization_or_redirect(),
      },
    })
      .then((res) => {
        this.habits = res.data.results;
        this.loaded = true;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<template>
  <div class="habits-container">
    <div v-if="loaded" class="d-flex flex-wrap">
      <HabitComponent
        v-for="habit in habits"
        :key="habit.id"
        :url="habit.url"
        :editing="editing"
      />
      <NewHabitComponent />
    </div>
    <div v-else class="d-flex flex-wrap">
      <v-skeleton-loader></v-skeleton-loader>
    </div>
    <div class="habits-container-settings d-flex">
      <v-spacer></v-spacer>
      <h4 v-if="editing">Editing habits</h4>
      <h4 v-else>{{ label }}</h4>
      <v-spacer> </v-spacer>
      <v-switch label="Edit" v-model="editing"></v-switch>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.habits-container-settings {
  margin-top: 20px;
  * {
    margin: 0 8px;
  }
  .v-switch {
    color: grey;
  }
}
</style>
