<script>
import HabitsContainer from "../components/HabitsContainer.vue";
import { api_url } from "@/config";

export default {
  components: {
    HabitsContainer,
  },
  computed: {
    url() {
      const user = this.$store.state.authorization.user;
      if (user) {
        const url = api_url + "habits/?user=" + user.id + "&active=true";
        return url;
      } else {
        return null;
      }
    },
  },
};
</script>

<template>
  <v-container>
    <HabitsContainer v-if="url" :url="url" />
  </v-container>
</template>
