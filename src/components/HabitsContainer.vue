<script>
import axios from "axios";
import { api_url, get_authorization_or_redirect } from "@/config";
import HabitComponent from "./HabitComponent.vue";
export default {
  name: "HabitsContainer",
  components: { HabitComponent },
  data() {
    return {
      habits: [],
      loaded: false,
    };
  },
  mounted() {
    axios({
      url: api_url + "habits/",
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
      />
    </div>
    <div v-else>
      <div class="spinner-border"></div>
    </div>
  </div>
</template>
