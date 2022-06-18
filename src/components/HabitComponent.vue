<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  props: {
    habit: null,
  },
  data() {
    return {
      removed: false,
    };
  },
  methods: {
    async done() {
      const authorization = "Token " + localStorage.getItem("token");
      await axios({
        url: this.habit.url + "done/",
        method: "PATCH",
        data: {},
        headers: {
          Authorization: authorization,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async remove() {
      const authorization = "Token " + localStorage.getItem("token");
      await axios({
        url: this.habit.url,
        method: "DELETE",
        headers: {
          Authorization: authorization,
        },
      }).then((res) => {
        console.log(res);
        this.removed = true;
      });
    },
  },
});
</script>

<template>
  <div
    v-if="!this.removed"
    @click.prevent="done()"
    class="habit-component card rounded shadow"
  >
    <h3>{{ habit.name }}</h3>
    <p>{{ habit.description }}</p>
    <button class="btn" @click="remove">x</button>
  </div>
</template>

<style scoped>
.habit-component {
  padding: 5px;
}
</style>
