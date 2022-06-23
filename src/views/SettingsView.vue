<script>
export default {
  methods: {
    reset() {
      this.$store.commit("reset");
      this.reload_required();
    },
    save() {
      this.$store.commit("save");
      this.reload_required();
    },
    load() {
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
  <v-container>
    <v-sheet>
      <v-checkbox label="Dark" v-model="$store.state.theme.dark" />
      <v-checkbox label="Compact" v-model="$store.state.theme.compact" />
      <v-checkbox
        label="Hide appbar"
        v-model="$store.state.theme.hide_appbar"
      />
      <v-checkbox
        label="Hide API links"
        v-model="$store.state.theme.hide_api_links"
      />
      <v-btn @click="save()" rounded outlined>Save</v-btn>
      <v-btn @click="reset()" rounded outlined>Reset</v-btn>
    </v-sheet>
  </v-container>
</template>
