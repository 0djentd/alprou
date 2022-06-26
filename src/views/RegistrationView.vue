<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password_2: "",
      email: "",

      errors: {
        password: [],
      },
    };
  },
  methods: {
    registration() {
      if (this.password != this.password_2) {
        this.errors.password = ["Passwords do not match."];
        return;
      }
    },
  },
};
</script>

<template>
  <v-container>
    <v-card max-width="500px" rounded class="mx-auto">
      <v-card-title>Registration</v-card-title>
      <v-card-subtitle
        >Already have an account?
        <router-link to="/registration">Login</router-link></v-card-subtitle
      >
      <v-card-text>
        <form action="">
          <v-text-field
            id="username"
            placeholder="Username"
            v-model="username"
            dense
          />
          <v-text-field id="email" placeholder="Email" v-model="email" dense />
          <v-alert
            v-for="error in errors.password"
            :key="error"
            dismissible
            type="error"
          >
            {{ error }}
          </v-alert>
          <div class="settings-row d-flex">
            <v-text-field
              type="password"
              id="password"
              placeholder="Password"
              v-model="password"
              dense
              outlined
            />
            <v-text-field
              type="password"
              id="password"
              placeholder="Repeat password"
              v-model="password_2"
              dense
              outlined
            />
          </div>
          <v-card-actions>
            <v-btn
              rounded
              outlined
              text
              action=""
              method=""
              @click.prevent="registration()"
            >
              Create an account
            </v-btn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
