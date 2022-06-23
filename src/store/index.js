import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
  api_url,
  default_theme,
  get_authorization_or_redirect,
} from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      user: null,
      profile: null,
      token: null,
      theme: default_theme,
    };
  },
  getters: {
    async profile() {
      const profile_id = await axios({
        url: api_url + "profiles/get_user_profile_id/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => res.data.pk);
      const profile = await axios({
        url: api_url + "profiles/" + profile_id + "/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => res.data);
      return profile;
    },
    async user() {
      // TODO
      const profile_id = await axios({
        url: api_url + "profiles/get_user_profile_id/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => res.data.pk);
      const profile = await axios({
        url: api_url + "profiles/" + profile_id + "/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => res.data);
      const user_url = profile.user;
      const user = await axios({
        url: user_url,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      }).then((res) => res.data);
      return user;
    },
  },
  mutations: {
    async fetchData(state) {
      const profile_id = await axios({
        url: api_url + "profiles/get_user_profile_id/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((response) => response.data.pk)
        .catch((error) => console.error(error));
      const profile = await axios({
        url: api_url + "profiles/" + profile_id + "/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((response) => response.data)
        .catch((error) => {
          console.error(error);
        });
      state.profile = profile;
      const user = await axios({
        url: profile.user,
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((response) => response.data)
        .catch((error) => {
          console.error(error);
        });
      state.user = await user;
    },
    async login(state, data) {
      console.log("Trying to login as " + data.username);
      await axios({
        url: api_url + "authtoken/",
        method: "POST",
        data: data,
      })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          state.token = token;
          state.fetchData();
          console.log("Logged in");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    load(state) {
      const theme = JSON.parse(
        localStorage.getItem("settings-theme", default_theme)
      );
      state.theme = theme;
    },
    save(state) {
      const theme = JSON.stringify(state.theme);
      console.log(theme);
      localStorage.setItem("settings-theme", theme);
    },
    reset(state) {
      const theme = JSON.stringify(default_theme);
      state.theme = theme;
      localStorage.setItem("settings-theme", theme);
    },
  },
});
