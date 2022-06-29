<script>
import axios from "axios";
import { api_url } from "@/config";
export default {
  name: "NewHabitComponent",
  data() {
    return {
      habit: {
        name: "",
        description: "",
        active: true,
        negative: false,
        public: false,
        tags: "",
      },
      errors: null,
      editing: false,
    };
  },
  methods: {
    async put() {
      const data = this.habit;
      await axios({
        url: api_url + "habits/",
        method: "POST",
        headers: {
          Authorization: this.$store.getters.token_str,
        },
        data: data,
      })
        .then((res) => {
          this.reset();
          this.editing = false;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data;
        });
    },
    reset() {
      this.habit = {
        name: "",
        description: "",
        active: true,
        negative: false,
        public: false,
        tags: "",
      };
      this.errors = null;
      this.editing = false;
    },
  },
};
</script>

<template>
  <div>
    <div v-if="editing">
      <v-navigation-drawer
        right
        permanent
        absolute
        class="habit-component-expanded"
      >
        <v-card>
          <v-card-title>{{ $t("editor.new") }}</v-card-title>
          <v-card-text>
            <v-alert v-if="errors">{{ errors }}</v-alert>
            <v-text-field
              v-model="habit.name"
              :counter="200"
              :label="$t('editor.name')"
              autofocus
              required
            ></v-text-field>
            <v-textarea
              v-model="habit.description"
              :counter="2000"
              :label="$t('editor.description')"
              outlined
            ></v-textarea>
            <v-text-field
              v-model="habit.tags"
              :counter="2000"
              :label="$t('editor.tags')"
              dense
              outlined
            ></v-text-field>
            <div class="settings-row">
              <v-checkbox v-model="habit.active" :label="$t('editor.active')" />
              <v-checkbox
                v-model="habit.negative"
                :label="$t('editor.negative')"
              />
              <v-checkbox
                v-model="habit.private"
                :label="$t('editor.private')"
              />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn rounded outlined @click="put()">
              {{ $t("editor.create") }}</v-btn
            >
            <v-btn rounded outlined @click="reset()">{{
              $t("editor.back")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
      <v-overlay
        @click="editing = false"
        v-if="editing"
        value="editing"
        z-index="1"
      ></v-overlay>
    </div>
    <v-sheet class="rounded-pill m-1" elevation="2" outlined>
      <v-btn @click="editing = true" rounded text
        ><span class="material-symbols-outlined"> add </span></v-btn
      >
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.habit-component-expanded {
  z-index: 2;
  position: fixed;
  height: 100%;
  min-width: 400px;
  .v-card {
    padding: 20px;
  }
}
</style>
