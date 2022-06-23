<script>
import ProfileEditor from "@/components/ProfileEditor.vue";
import ThemeEditor from "@/components/ThemeEditor.vue";

export default {
  components: { ThemeEditor, ProfileEditor },
};
</script>

<template>
  <v-container>
    <v-sheet>
      <v-card>
        <ThemeEditor />
      </v-card>
      <v-card>
        <ProfileEditor />
      </v-card>
    </v-sheet>
  </v-container>
</template>
