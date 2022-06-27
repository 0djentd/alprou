import { default_theme } from "@/config";
export default {
  state: {
    theme: default_theme,
  },
  mutations: {
    loadTheme(state) {
      const theme = JSON.parse(
        localStorage.getItem("settings-theme", default_theme)
      );
      state.theme = theme;
    },
    saveTheme(state) {
      const theme = JSON.stringify(state.theme);
      console.log(theme);
      localStorage.setItem("settings-theme", theme);
    },
    resetTheme(state) {
      const theme = JSON.stringify(default_theme);
      state.theme = theme;
      localStorage.setItem("settings-theme", theme);
    },
  },
};
