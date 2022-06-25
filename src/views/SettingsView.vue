<script>
import ProfileEditor from "@/components/ProfileEditor.vue";
import ThemeEditor from "@/components/ThemeEditor.vue";

export default {
  components: { ThemeEditor, ProfileEditor },
};
</script>

<template>
  <v-container>
    <v-card>
      <ProfileEditor />
    </v-card>
    <v-card>
      <ThemeEditor />
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  .v-card {
    margin: 20px auto;
    border-radius: 20px;
  }
}
</style>
