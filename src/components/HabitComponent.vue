<script>
import axios from "axios";
export default {
  name: "HabitComponent",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      habit: {
        user: "",
        name: "",
        description: "",
        completed_today: false,
      },
      expanded: false,
      removed: false,
      loading: true,
      message: {
        show: false,
        text: "",
      },
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
          Authorization: this.$store.getters.token_str,
        },
      })
        .then((res) => {
          console.log(res);
          this.fetchData();
          this.message = {
            show: true,
            text: "Completed",
          };
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async remove() {
      this.removed = true;
      await axios({
        url: this.habit.url,
        method: "DELETE",
        headers: {
          Authorization: this.$store.getters.token_str,
        },
      }).then((res) => {
        console.log(res);
        this.message = {
          show: true,
          text: "Removed",
        };
      });
    },
    async patch() {
      const data = this.habit;
      await axios({
        url: this.habit.url,
        method: "PATCH",
        headers: {
          Authorization: this.$store.getters.token_str,
        },
        data: data,
      }).then((res) => {
        console.log(res);
        this.message = {
          show: true,
          text: "Saved",
        };
      });
      this.expanded = false;
      await this.fetchData();
    },
    async fetchData() {
      this.loading = true;
      await axios({
        url: this.url,
        method: "GET",
        headers: {
          Authorization: this.$store.getters.token_str,
        },
      }).then((res) => {
        this.habit = res.data;
      });
      this.loading = false;
      if (this.habit.tags == "") {
        this.habit.tags = "[]";
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <div>
    <div v-if="!removed">
      <v-sheet class="rounded-pill m-1" elevation="2" outlined>
        <div>
          <v-btn
            @click="done()"
            :disabled="habit.completed_today"
            rounded
            text
            >{{ habit.name }}</v-btn
          >
          <v-btn @click="expanded = true" rounded>
            <div class="material-symbols-outlined">more_horiz</div>
          </v-btn>
        </div>
      </v-sheet>
      <div v-if="expanded">
        <v-navigation-drawer
          right
          permanent
          absolute
          class="habit-component-expanded"
        >
          <v-card>
            <v-card-title>Editing '{{ habit.name }}'</v-card-title>
            <v-card-subtitle
              >API url:
              <a :href="habit.url">{{ habit.url }}</a></v-card-subtitle
            >
            <v-form>
              <v-card-text>
                <v-text-field
                  v-model="habit.name"
                  :counter="200"
                  label="Name"
                  autofocus
                  required
                ></v-text-field>
                <v-textarea
                  v-model="habit.description"
                  :counter="2000"
                  label="Description"
                  outlined
                ></v-textarea>
                <v-text-field
                  v-model="habit.tags"
                  :counter="2000"
                  label="Tags"
                  dense
                  outlined
                ></v-text-field>
                <div class="settings-row">
                  <v-checkbox v-model="habit.active" label="Active" />
                  <v-checkbox v-model="habit.negative" label="Negative" />
                  <v-checkbox v-model="habit.private" label="Private" />
                </div>
                <p>Created: {{ habit.created }}</p>
                <p>Modified: {{ habit.modified }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn rounded outlined @click="patch()">Save</v-btn>
                <v-btn rounded outlined @click="remove()">Remove</v-btn>
                <v-btn rounded outlined @click="expanded = false">Back</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-navigation-drawer>
        <v-overlay
          @click="expanded = false"
          v-if="expanded"
          value="expanded"
          z-index="1"
        ></v-overlay>
      </div>
    </div>
    <v-snackbar timeout="1500" v-model="message.show">
      {{ message.text }} {{ habit.name }}
    </v-snackbar>
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
