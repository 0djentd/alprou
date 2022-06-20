import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { api_url, get_authorization_or_redirect } from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      user: null,
      profile: null,
      token: null,
    };
  },
  getters: {
    get_token() {
      const token = localStorage.getItem("token");
      return token;
    },
  },
  mutations: {
    async fetchData(state) {
      console.log("Trying to fetch profile data");
      let profile_id = null;
      await axios({
        url: api_url + "profiles/get_user_profile_id/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((response) => {
          profile_id = response.data.pk;
          console.log(profile_id);
        })
        .catch((error) => console.error(error));
      await axios({
        url: api_url + "profiles/" + profile_id + "/",
        method: "GET",
        headers: {
          Authorization: get_authorization_or_redirect(),
        },
      })
        .then((response) => {
          state.profile = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
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
  },
});
