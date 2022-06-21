<script>
import HabitsContainer from "../components/HabitsContainer.vue";
import { api_url } from "@/config";
export default {
  components: {
    HabitsContainer,
  },
  data() {
    return {
      url: null,
    };
  },
  async mounted() {
    const user = await this.$store.getters.user;
    this.url = api_url + "habits/?user=" + user.id;
  },
};
</script>

<template>
  <v-container fluid>
    <v-sheet>
      <HabitsContainer v-if="url" :url="url" />
    </v-sheet>
  </v-container>
</template>
