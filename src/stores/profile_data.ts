import axios from "axios";
import { defineStore } from "pinia";
import { api_url } from "@/config";

export const useProfileDataStore = defineStore("profile_data", {
  state: () => {
    return {
      loggedIn: false, //type: bool
      profile: NaN,
      token: NaN, //type: string
    };
  },
  actions: {
    getToken(username: string, password: string) {
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
      }
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
