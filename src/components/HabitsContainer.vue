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
  <div v-if="loaded" class="habits-container card">
    <HabitComponent v-for="habit in habits" :key="habit.id" :habit="habit" />
  </div>
</template>

<style scoped>
.habits-container {
  min-height: 300px;
  min-width: 500px;
  margin: 0 50px;
}
</style>
