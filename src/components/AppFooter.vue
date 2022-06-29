<script>
import { api_links, router_links } from "@/config";
import AppLanguageSwitcher from "@/components/AppLanguageSwitcher.vue";

export default {
  data() {
    return {
      year: 2022,
      router_links: router_links,
      api_links: api_links,
    };
  },
  computed: {
    user() {
      return this.$store.state.authorization.user;
    },
    profile() {
      return this.$store.state.authorization.profile;
    },
  },
  components: {
    AppLanguageSwitcher,
  },
};
</script>

<template>
  <v-footer class="py-2 my-2">
    <footer class="mx-auto">
      <ul class="nav justify-content-center">
        <li class="nav-item" :key="link.url" v-for="link in router_links">
          <router-link :to="link.url" class="nav-link px-2 text-muted">
            {{ link.name }}
          </router-link>
        </li>
        <!-- Profile login/logout/registration -->
        <li v-if="user">
          <router-link to="/logout/" class="nav-link px-2 text-muted">
            Logout
          </router-link>
        </li>
        <li v-if="!user">
          <router-link to="/login/" class="nav-link px-2 text-muted">
            Login
          </router-link>
        </li>
        <li v-if="!user">
          <router-link to="/registration/" class="nav-link px-2 text-muted">
            Registration
          </router-link>
        </li>
        <li class="nav-item">
          <AppLanguageSwitcher />
        </li>
      </ul>
      <div>
        <v-divider v-if="!this.$store.state.theme.theme.hide_api_links" />
        <ul
          class="nav justify-content-center"
          v-if="!this.$store.state.theme.theme.hide_api_links"
        >
          <li class="nav-item" :key="link.url" v-for="link in api_links">
            <a :href="link.url" class="nav-link px-2 text-muted">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <v-divider />
      <p class="text-center text-muted">&copy; {{ year }} 0djentd</p>
    </footer>
  </v-footer>
</template>

<style lang="scss" scoped>
.v-footer,
footer {
  padding: 0;
  margin: 0;
}
.v-divider {
  margin: 2px 50px;
}
</style>
