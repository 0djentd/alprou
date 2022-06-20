<script>
import axios from "axios";
import { get_authorization_or_redirect } from "@/config";
export default {
  name: "HabitComponent",
  props: {
    url: String,
  },
  data() {
    return {
      habit: null,
      removed: false,
    };
  },
  methods: {
    async done() {
      if (this.habit.completed_today == true) {
        return;
      }
      await axios({
        url: this.habit.url + "done/",
        method: "PATCH",
        data: {},
        headers: {
          Authorization: get_authorization_or_redirect(),
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
      await axios({
        url: this.habit.url,
        method: "DELETE",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => {
        console.log(res);
        this.removed = true;
      });
    },
    async fetchData() {
      await axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
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
};
</script>

<template>
  <div v-if="this.habit != null">
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
  </div>
  <div v-else>
    <div class="btn m-2 rounded-pill shadow disabled">
      <div class="spinner-border mx-4"></div>
    </div>
  </div>
</template>
