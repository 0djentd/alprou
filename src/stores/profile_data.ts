import axios from "axios";
import { defineStore } from "pinia";
import { api_url } from "@/config";

export const useProfileDataStore = defineStore("profile_data", {
  state: () => {
    return {
      user: null,
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
    async fetchData() {
      const authorization = "Token " + this.get_token;
      console.log("Trying to fetch profile data");
      let profile_id = null;
      await axios({
        url: api_url + "profiles/get_user_profile_id/",
        method: "GET",
        headers: {
          Authorization: authorization,
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
