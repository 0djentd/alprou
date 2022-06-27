import axios from "axios";
import { api_url } from "@/config";

export function get_token_str(token) {
  if (token == null) {
    // window.location.href = "/login/";
  }
  const authorization = "Token " + token;
  // console.log('Authorization: "' + authorization + '"');
  return authorization;
}

export default {
  state: {
    token: null,
    user: null,
    profile: null,
  },
  mutations: {
    saveToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    saveUser(state, user) {
      state.user = user;
    },
    saveProfile(state, profile) {
      state.profile = profile;
    },
  },
  getters: {
    authenticated(state) {
      const result = Boolean(state.token && state.user && state.profile);
      console.log("Checking authentication, result: " + result);
      return result;
    },
    token_str(state) {
      return get_token_str(state.token);
    },
  },
  actions: {
    async login({ dispatch, commit }, data) {
      console.log("Trying to login as " + data.username);
      const token = await axios({
        url: api_url + "authtoken/",
        method: "POST",
        data: data,
      })
        .then((response) => response.data.token)
        .catch((error) => {
          console.error(error);
          return null;
        });
      if (token == null) {
        console.error("Login failed");
        commit("saveToken", null);
        return;
      }
      dispatch("fetchData", token);
    },
    async relogin({ dispatch }) {
      const token = localStorage.getItem("token");
      if (token != "null") {
        dispatch("fetchData", token);
      }
    },
    async logout({ commit }) {
      commit("saveToken", null);
      commit("saveUser", null);
      commit("saveProfile", null);
      localStorage.setItem("token", null);
      window.location.href = "/";
    },
    async fetchData({ commit }, token) {
      commit("saveToken", token);

      const profile_id = await axios({
        url: api_url + "profiles/get_user_profile_id/",
        method: "GET",
        headers: {
          Authorization: get_token_str(token),
        },
      })
        .then((response) => response.data.pk)
        .catch((error) => console.error(error));

      const profile = await axios({
        url: api_url + "profiles/" + profile_id + "/",
        method: "GET",
        headers: {
          Authorization: get_token_str(token),
        },
      })
        .then((response) => response.data)
        .catch((error) => {
          console.error(error);
        });
      commit("saveProfile", profile);

      const user = await axios({
        url: profile.user,
        method: "GET",
        headers: {
          Authorization: get_token_str(token),
        },
      })
        .then((response) => response.data)
        .catch((error) => {
          console.error(error);
        });
      commit("saveUser", user);
    },
  },
};
