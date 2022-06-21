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
    <v-row>
      <v-col cols="2">
        <v-sheet><NewHabitComponent /></v-sheet>
      </v-col>
      <v-col>
        <v-sheet min-height="400px">
          <HabitsContainer />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
