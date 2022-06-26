<script>
import ProfileEditor from "@/components/ProfileEditor.vue";
import ThemeEditor from "@/components/ThemeEditor.vue";

export default {
  components: { ThemeEditor, ProfileEditor },
};
</script>

<template>
  <v-container>
    <div class="settings">
      <v-card class="settings-profile">
        <ProfileEditor />
      </v-card>
      <v-card class="settings-theme">
        <ThemeEditor />
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .settings-profile {
    min-width: 300px;
    max-width: 500px;
  }
  .settings-theme {
    max-width: 600px;
  }
}
.v-card {
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
