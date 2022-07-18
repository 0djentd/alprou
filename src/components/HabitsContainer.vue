<script>
import axios from "axios";
import HabitComponent from "./HabitComponent.vue";
import NewHabitComponent from "../components/NewHabitComponent.vue";

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
    };
  },
  async mounted() {
    axios({
      url: this.url,
      method: "GET",
      headers: {
        Authorization: this.$store.getters.token_str,
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
    <!-- <div>
      <p>
        API url: <a :href="this.url">{{ this.url }}</a>
      </p>
    </div> -->
    <div v-if="loaded" class="d-flex flex-wrap">
      <HabitComponent
        v-for="habit in habits.filter((obj) => !obj.completed_today)"
        :key="habit.id"
        :url="habit.url"
      />
      <HabitComponent
        v-for="habit in habits.filter((obj) => obj.completed_today)"
        :key="habit.id"
        :url="habit.url"
      />
      <NewHabitComponent />
    </div>
    <div v-else class="d-flex flex-wrap">
      <v-skeleton-loader></v-skeleton-loader>
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
