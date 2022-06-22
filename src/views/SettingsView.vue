<template>
  <v-container>
    <v-sheet>
      <v-checkbox label="Dark" v-model="$vuetify.theme.dark" />
      <v-checkbox label="Compact" v-model="$store.state.theme.compact" />
    </v-sheet>
  </v-container>
</template>
