<script>
export default {
  methods: {
    reset_theme() {
      this.$store.commit("resetTheme");
      this.reload_required();
    },
    save_theme() {
      this.$store.commit("saveTheme");
      this.reload_required();
    },
    load_theme() {
      this.$store.commit("loadTheme");
      this.reload_required();
    },
    reload_required() {
      this.$vuetify.theme.dark = this.$store.state.theme.theme.dark;
    },
  },
};
</script>

<template>
  <div>
    <v-card-title>Theme</v-card-title>
    <v-card-subtitle>Change UI settings</v-card-subtitle>
    <v-card-text>
      <div>
        <v-checkbox label="Dark" v-model="$store.state.theme.theme.dark" />
        <v-checkbox
          disabled
          label="Hide appbar"
          v-model="$store.state.theme.theme.hide_appbar"
        />
        <v-checkbox
          label="Hide API links"
          v-model="$store.state.theme.theme.hide_api_links"
        />
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="save_theme()" rounded text outlined>Save</v-btn>
      <v-btn @click="reset_theme()" rounded text outlined>Reset</v-btn>
    </v-card-actions>
  </div>
</template>

<style lang="scss" scoped>
.v-card__text {
  padding-bottom: 0;
  div {
    margin: 0;
    display: flex;
    * {
      margin-right: 20px;
    }
  }
}
</style>
