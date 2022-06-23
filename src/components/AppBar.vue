<script>
export default {
  data() {
    return {
      router_links: [
        { url: "/", name: "Home" },
        { url: "/login/", name: "Login" },
        { url: "/logout/", name: "Logout" },
        { url: "/settings/", name: "Settings" },
        { url: "/welcome/", name: "New user" },
        { url: "/about/", name: "About" },
      ],
    };
  },
};
</script>

<template>
  <v-app-bar app elevate-on-scroll>
    <v-app-bar-title class="ml-2"><h1>Alprou</h1></v-app-bar-title>
    <v-spacer></v-spacer>
    <router-link
      v-for="link in router_links"
      :key="link.id"
      :to="link.url"
      class="px-2 text-muted"
    >
      {{ link.name }}
    </router-link>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar-links {
  margin: 0 20px 0 auto;
}
</style>
