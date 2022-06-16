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
      url: NaN, // type: string | undefined
      visible: false, // type: bool
    };
  },
  methods: {
    get_url() {
      const url = "http://localhost:8000/api/habits/" + this.id + "/";
      return url;
    },
    done() {
      axios({
        url: this.get_url(),
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
        url: this.get_url(),
        method: "delete",
      })
        .then((res) => {
          console.log(res);
          this.visible = false;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(this.fetchData());
    },
    fetchData() {
      const authorization = "Token " + localStorage.getItem("token");
      axios({
        url: this.get_url(),
        method: "get",
        headers: {
          Authorization: authorization,
        },
      })
        .then((res) => {
          this.active = res.data.active;
          this.name = res.data.name;
          this.negative = res.data.negative;
          this.user = res.data.user;
          this.url = res.data.url;
          this.visible = true;
        })
        .catch((error) => {
          console.error(error);
          this.visible = false;
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
  <div v-if="visible" class="habit-component card rounded shadow">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <button class="btn" @click="done">Ok</button>
    <button class="btn" @click="remove">x</button>
  </div>
</template>

<style scoped>
.habit-component {
  padding: 5px;
}
</style>
