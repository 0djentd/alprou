<script>
export default {
  props: ["url"],
  data() {
    return {
      title: "title",
    };
  },
  methods: {
    done() {
      return;
    },
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
