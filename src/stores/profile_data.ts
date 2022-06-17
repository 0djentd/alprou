import axios from "axios";
import { defineStore } from "pinia";
import { api_url } from "@/config";

export const useProfileDataStore = defineStore("profile_data", {
  state: () => {
    return {
      loggedIn: false, //type: bool
      profile: NaN,
      token: NaN, //type: string | undefined
    };
  },
  getters: {
    get_token() {
      const token = localStorage.getItem("token");
      return token;
    },
  },
  actions: {
    login(username: string, password: string) {
      console.log("Trying to login as " + username);
      axios({
        // FIXME
        url: api_url + "authtoken/",
        method: "GET",
        data: {
          username: username,
          password: password,
        },
      })
        .then((response) => {
          console.log("Logged in");
          localStorage.setItem("token", response.data.token);
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchData() {
      console.log("Trying to fetch profile data");
      if (!this.loggedIn) {
        window.location.href = "/login/";
      };
      this.token = localStorage.getItem("token");
      const authorization = "Token " + localStorage.getItem("token");
      axios({
        // FIXME
        url: api_url + "profiles/2",
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      })
        .then((response) => {
          this.profile = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
