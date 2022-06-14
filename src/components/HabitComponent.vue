<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  props: {
    id: Number,
  },
  data() {
    return {
      name: NaN, // type: string | undefined
      description: NaN, // type: string | undefined
      negative: NaN, // type: bool | undefined
      active: NaN, // type: bool | undefined
      user: NaN, // type: number | undefined
    };
  },
  methods: {
    done() {
      this.fetchData();
    },
    fetchData() {
      const url = "http://localhost:8000/api/v1/habits/" + this.id;
      axios({
        url: url,
        method: "get",
      })
        .then((res) => {
          this.active = res.data.active;
          this.description = res.data.description;
          this.name = res.data.name;
          this.negative = res.data.negative;
          this.user = res.data.user;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
  updated() {
    this.fetchData();
  },
});
</script>

<template>
  <div class="habit-component card rounded shadow">
    <h3>{{ name }}</h3>
    <button class="btn" @click="done">Ok</button>
  </div>
</template>

<style scoped>
.habit-component {
  padding: 5px;
}
</style>
