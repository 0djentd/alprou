<script>
import HabitComponent from "./HabitComponent.vue";
export default {
  components: { HabitComponent },
  data() {
    return {
      //TODO
      habits: [{ id: 1 }],
    };
  },
};
</script>

<template>
  <div class="habits-container card">
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
