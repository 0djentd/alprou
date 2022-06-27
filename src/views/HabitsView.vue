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
  mounted() {
    const user = this.$store.state.authorization.user;
    if (!user) {
      this.$router.push("/welcome/");
    }
    this.url = api_url + "habits/?user=" + user.id + "&active=true";
  },
};
</script>

<template>
  <v-container>
    <HabitsContainer v-if="url" :url="url" />
  </v-container>
</template>
