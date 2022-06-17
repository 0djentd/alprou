import axios from "axios";
import { defineStore } from "pinia";
import { api_url } from "@/config";

export const useProfileDataStore = defineStore("profile_data", {
  state: () => {
    return {
      loggedIn: false, //type: bool
      profile: null,
      token: null, //type: string | undefined
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
        url: api_url + "authtoken/",
        method: "POST",
        data: {
          username: username,
          password: password,
        },
      })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.token = token;
          this.fetchData();
          console.log("Logged in");
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
      const authorization = "Token " + this.token;
      axios({
        // FIXME
        url: api_url + "profiles/2/",
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
