<script>
import axios from "axios";
import { get_authorization_or_redirect } from "@/config";
import HabitComponent from "./HabitComponent.vue";
import NewHabitComponent from "../components/NewHabitComponent.vue";
export default {
  name: "HabitsContainer",
  components: { HabitComponent, NewHabitComponent },
  props: {
    url: { type: String, required: true },
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
    console.log(this.url);
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
        console.log(error);
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
    <div v-else>
      <div class="spinner-border"></div>
    </div>
    <v-switch label="Compact view" v-model="compact"></v-switch>
    <v-switch v-if="compact" label="Edit" v-model="editing"></v-switch>
  </v-container>
</template>
