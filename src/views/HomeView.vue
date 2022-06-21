<script>
import HabitsContainer from "../components/HabitsContainer.vue";
import NewHabitComponent from "../components/NewHabitComponent.vue";
export default {
  components: {
    HabitsContainer,
    NewHabitComponent,
  },
};
</script>

<template>
  <v-container>
    <v-sheet>
      <HabitsContainer />
      <NewHabitComponent />
    </v-sheet>
  </v-container>
</template>
