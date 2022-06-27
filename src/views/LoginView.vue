<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    async login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
  mounted() {
    if (this.$store.getters.authenticated) {
      this.$router.push("/");
    }
  },
};
</script>

<template>
  <v-container>
    <v-card max-width="300px" rounded class="mx-auto">
      <v-card-title>Login</v-card-title>
      <v-card-subtitle
        >or register
        <router-link to="/registration"
          >new profile</router-link
        ></v-card-subtitle
      >
      <v-card-text>
        <v-text-field id="username" placeholder="Username" v-model="username" />
        <v-text-field
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />
        <v-card-actions>
          <v-btn
            rounded
            outlined
            text
            action=""
            method=""
            @click.prevent="login"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>
