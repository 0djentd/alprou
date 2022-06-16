import axios from "axios";
import { defineStore } from "pinia";

export const useProfileDataStore = defineStore("profile_data", {
  state: () => {
    return {
      username: NaN,
      profile_image: NaN,
      background_image: NaN,
    };
  },
});
