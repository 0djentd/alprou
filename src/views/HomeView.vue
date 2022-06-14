<script setup lang="ts"></script>
<script>
import HabitsContainer from "../components/HabitsContainer.vue";
export default {
  data() {
    return {
      habits: 123,
    };
  },
  components: {
    HabitsContainer,
  },
};
</script>

<template>
  <main>
    <HabitsContainer />
  </main>
</template>
