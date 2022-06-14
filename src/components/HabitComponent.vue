<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      title: NaN,
    };
  },
  methods: {
    done() {
      this.fetchData();
    },
    fetchData() {
      const url = "http://localhost:8000/api/v1/habits/" + this.id;
      console.log("Updating HabitComponent for " + url);
      axios
        .get(url)
        .then((res) => {
          this.title = res.name;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(console.log(123));
    },
  },
  mounted() {
    this.fetchData();
  },
  updated() {
    this.fetchData();
  },
};
</script>
<template>
  <div class="habit-component shadow">
    <h3>{{ title }}</h3>
    <button class="btn" @click="done">Ok</button>
  </div>
</template>
<style scoped>
.habit-component {
  min-width: 150px;
  min-height: 50px;
}
</style>
