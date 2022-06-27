import { default_theme } from "@/config";
import Vue from "vue";
import Vuex from "vuex";
import authorization from "./authorization";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      theme: default_theme,
    };
  },
  mutations: {
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
  modules: { authorization },
});
