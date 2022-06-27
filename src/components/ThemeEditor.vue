<script>
export default {
  methods: {
    reset_theme() {
      this.$store.commit("reset");
      this.reload_required();
    },
    save_theme() {
      this.$store.commit("save");
      this.reload_required();
    },
    load_theme() {
      this.$store.commit("load");
      this.reload_required();
    },
    reload_required() {
      window.location.href = "/";
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
        <v-checkbox label="Dark" v-model="$store.state.theme.dark" />
        <v-checkbox
          label="Hide appbar"
          v-model="$store.state.theme.hide_appbar"
        />
        <v-checkbox
          label="Hide API links"
          v-model="$store.state.theme.hide_api_links"
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
