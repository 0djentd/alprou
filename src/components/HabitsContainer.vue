<script>
import axios from "axios";
import { api_url } from "@/config";
import HabitComponent from "./HabitComponent.vue";
export default {
  components: { HabitComponent },
  data() {
    return {
      habits: [],
      loaded: false,
    };
  },
  mounted() {
    const authorization = "Token " + localStorage.getItem("token");
    axios({
      url: api_url + "habits/",
      method: "GET",
      headers: {
        Authorization: authorization,
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
  </div>
</template>
