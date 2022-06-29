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
      <v-card-title>{{ $t("pages.login.text.title") }}</v-card-title>
      <v-card-subtitle
        >{{ $t("pages.login.text.subtitle.1") }}
        <router-link to="/registration">{{
          $t("pages.login.text.subtitle.2")
        }}</router-link></v-card-subtitle
      >
      <v-card-text>
        <form action="submit" @submit.prevent="login">
          <v-text-field
            id="username"
            :placeholder="$t('pages.login.text.form.username')"
            v-model="username"
          />
          <v-text-field
            type="password"
            id="password"
            :placeholder="$t('pages.login.text.form.password')"
            v-model="password"
          />
          <v-btn rounded outlined text action="" method="" @click="login">
            {{ $t("pages.login.text.form.button") }}
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
