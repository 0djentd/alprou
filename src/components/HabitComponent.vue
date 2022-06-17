<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  props: {
    url: String,
  },
  data() {
    return {
      data: NaN,
      loaded: false,
    };
  },
  methods: {
    done() {
      axios({
        url: this.url,
        method: "patch",
        data: {},
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(this.fetchData());
    },
    remove() {
      axios({
        url: this.url,
        method: "delete",
      })
        .then((res) => {
          console.log(res);
          this.loaded = false;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(this.fetchData());
    },
    fetchData() {
      const authorization = "Token " + localStorage.getItem("token");
      axios({
        url: this.url,
        method: "get",
        headers: {
          Authorization: authorization,
        },
      })
        .then((res) => {
          this.data = res.data;
          this.loaded = true;
        })
        .catch((error) => {
          console.error(error);
          this.loaded = false;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<template>
  <div v-if="this.loaded" class="habit-component card rounded shadow">
    <h3>{{ data.name }}</h3>
    <p>{{ data.description }}</p>
    <button class="btn" @click="done">Ok</button>
    <button class="btn" @click="remove">x</button>
  </div>
</template>

<style scoped>
.habit-component {
  padding: 5px;
}
</style>
