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
      compact: this.$store.state.theme.compact,
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
  <v-container>
    <div v-if="loaded" class="d-flex flex-wrap">
      <HabitComponent
        v-for="habit in habits"
        :key="habit.id"
        :url="habit.url"
        :compact="compact"
        :editing="editing"
      />
      <NewHabitComponent />
    </div>
    <div v-else class="d-flex flex-wrap">
      <v-skeleton-loader></v-skeleton-loader>
    </div>
    <v-container class="habits-container-controls d-flex">
      <h4 v-if="editing">Editing habits</h4>
      <h4 v-else>{{ label }}</h4>
      <v-spacer> </v-spacer>
      <v-switch label="Compact view" v-model="compact"></v-switch>
      <v-switch v-if="compact" label="Edit" v-model="editing"></v-switch>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
.habits-container-controls {
  * {
    margin: 0 8px;
  }
}
</style>
