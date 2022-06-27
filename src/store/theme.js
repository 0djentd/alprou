import { default_theme } from "@/config";
export default {
  state: {
    theme: default_theme,
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
};
