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
    this.url =
      api_url +
      "habits/?user=" +
      this.$store.state.authorization.user.id +
      "&active=true";
  },
};
</script>

<template>
  <v-container>
    <HabitsContainer v-if="url" :url="url" />
  </v-container>
</template>
