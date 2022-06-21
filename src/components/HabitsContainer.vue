<script>
import axios from "axios";
import { get_authorization_or_redirect } from "@/config";
import HabitComponent from "./HabitComponent.vue";
import NewHabitComponent from "../components/NewHabitComponent.vue";
export default {
  name: "HabitsContainer",
  components: { HabitComponent, NewHabitComponent },
  props: {
    url: String,
  },
  data() {
    return {
      habits: [],
      loaded: false,
      compact: false,
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
  <div class="container">
    <div v-if="loaded" class="d-flex flex-wrap">
      <HabitComponent
        v-for="habit in habits"
        :key="habit.id"
        :url="habit.url"
        :compact="compact"
      />
      <NewHabitComponent />
    </div>
    <div v-else>
      <div class="spinner-border"></div>
    </div>
  </div>
</template>
