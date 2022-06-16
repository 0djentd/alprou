<script>
import axios from 'axios';
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
      url: "http://localhost:8000/api/habits/",
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
    <HabitComponent v-for="habit in habits" :key="habit.id" :id="habit.id" />
  </div>
</template>

<style scoped>
.habits-container {
  min-height: 300px;
  min-width: 500px;
  margin: 0 50px;
}
</style>
