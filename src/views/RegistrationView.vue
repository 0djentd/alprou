<script>
import axios from "axios";
import { getCookieValue } from "@/store/authorization";
import { api_url } from "@/config";
export default {
  data() {
    return {
      username: "",
      password: "",
      password_2: "",
      email: "",
      errors: null,
    };
  },
  methods: {
    registration() {
      let error = null;
      let data = {
        username: this.username,
        password: this.password,
        email: this.email,
      };
      axios({
        url: api_url + "register/",
        method: "POST",
        data: data,
        headers: { "X-CSRFToken": getCookieValue("csrftoken") },
      })
        .then((response) => response.data)
        .catch((err) => {
          error = err;
        });
      if (error) {
        this.errors = error.response.data;
        console.error(error);
      } else {
        window.location.href = "/";
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
        <v-alert v-if="errors">{{ errors }}</v-alert>
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
