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
  mounted() {
    if (this.$store.getters.authenticated) {
      this.$router.push("/");
    }
  },
};
</script>

<template>
  <v-container>
    <v-card max-width="500px" rounded class="mx-auto">
      <v-card-title>{{ $t("pages.registration.title") }}</v-card-title>
      <v-card-subtitle
        >{{ $t("pages.registration.or.text")
        }}<router-link to="/registration">{{
          $t("pages.registration.or.link")
        }}</router-link></v-card-subtitle
      >
      <v-card-text>
        <form action="">
          <v-text-field
            id="username"
            :placeholder="$t('pages.registration.form.username')"
            v-model="username"
            dense
          />
          <v-text-field
            id="email"
            :placeholder="$t('pages.registration.form.email')"
            v-model="email"
            dense
          />
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
              :placeholder="$t('pages.registration.form.password_1')"
              v-model="password"
              dense
              outlined
            />
            <v-text-field
              type="password"
              id="password"
              :placeholder="$t('pages.registration.form.password_2')"
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
              {{ $t("pages.registration.form.button") }}
            </v-btn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
