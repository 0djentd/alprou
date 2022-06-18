<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  props: {
    url: String,
  },
  data() {
    return {
      habit: {},
      removed: false,
    };
  },
  methods: {
    async done() {
      if (this.habit.completed_today == true) {
        return;
      }
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
          this.fetchData();
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
    async fetchData() {
      const authorization = "Token " + localStorage.getItem("token");
      await axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      }).then((res) => {
        console.log(res);
        this.habit = res.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<template>
  <div
    v-if="!this.removed"
    @click.prevent="done()"
    :id="'#habit-' + this.habit.id"
    :class="
      this.habit.completed_today
        ? 'btn m-2 rounded-pill shadow disabled'
        : 'btn btn-outline-dark m-2 rounded-pill shadow'
    "
  >
    <h3 class="d-inline">
      {{ habit.name }}
      <!--       <span :if="this.habit" class="badge bg-secondary">3</span> -->
    </h3>
  </div>
</template>
