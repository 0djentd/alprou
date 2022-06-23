<script>
export default {
  methods: {
    save() {
      this.$store.commit("save");
    },
    load() {
      this.$store.commit("load");
    },
  },
};
</script>
<template>
  <v-container>
    <v-sheet>
      <v-checkbox label="Dark" v-model="$vuetify.theme.dark" />
      <v-checkbox label="Compact" v-model="$store.state.theme.compact" />
      <v-checkbox
        label="Hide appbar"
        v-model="$store.state.theme.hide_appbar"
      />
      <v-checkbox
        label="Hide API links"
        v-model="$store.state.theme.hide_api_links"
      />
      <v-btn @click="load()" rounded outlined>Load</v-btn>
      <v-btn @click="save()" rounded outlined>Save</v-btn>
    </v-sheet>
  </v-container>
</template>
